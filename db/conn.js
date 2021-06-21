const mongoose = require('mongoose');
const DB = process.env.DATABASE;
// const db = 'mongodb+srv://abdullah:abdullah123@cluster0.1u5gt.mongodb.net/mernstak?retryWrites=true&w=majority';
mongoose.connect(DB,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log(`connectino successful`);
	})
	.catch((err) => console.log(`no connectino ${err}`));
