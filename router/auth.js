const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate')
require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
	res.send('hellow world router');
});

router.use(cookieParser())

// using promises

// router.post('/register',(req,res)=>{

//     const { name, email, phone, work, password, cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: 'plz fill the fiels properly'})
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: 'User already exist'})
//         }
//         const user = new User ({ name, email, phone, work, password, cpassword })

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfuly"})
//         }).catch((err)=> res.status(500).json({error: "failed to registered"}))
//     })
//     .catch(err => {console.log(err)})
// })

// using async await
router.post('/register', async (req, res) => {
	const { name, email, phone, work, password, cpassword } = req.body;

	if (!name || !email || !phone || !work || !password || !cpassword) {
		return res.status(422).json({ error: 'plz fill the fiels properly' });
	}
	try {
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			return res.status(422).json({ error: 'Email already exist' });
		} else if (password !== cpassword) {
			return res.status(422).json({ error: 'password are not matching' });
		} else {
			const user = new User({ name, email, phone, work, password, cpassword });
			//yhan pe hash krna he
			await user.save();
			res.status(201).json({ message: 'user registered successfuly' });
		}
	} catch (err) {
		console.log(err);
	}
});

//loging route
router.post('/signin', async (req, res) => {
	try {
		let token;
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: 'plese filled the data' });
		}
		const userLogin = await User.findOne({ email: email });
		// console.log(userLogin);

		if(userLogin){
			const isMatch = await bcrypt.compare(password, userLogin.password);

			token = await userLogin.generateAuthToken();
			console.log(token)
			
			res.cookie("jwtoken", token,{
				expires:new Date(Date.now() + 25892000000),
				httpOnly: true
			});

			if (!isMatch) {
			res.status(400).json({ error: 'invalid pas credientials' });
			} else {
				res.json({ message: 'user Signin successfully' });
			}	
		} else {
			res.status(400).json({ error: 'invalid credientials' });
		}

	} catch (err) {
		console.log(err);
	}
});

//about us ka page
router.get('/about', authenticate, (req,res)=>{
	console.log('hello my about page');
	res.send(req.rootUser);
})

module.exports = router;
