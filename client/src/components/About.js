import React, { useEffect } from 'react'
import {NavLink,
     useHistory
    } from 'react-router-dom'
import one from '../images/one.jpg'
const About = () => {

    const history = useHistory();

    const callAboutPage = async () =>{
        try{
            const res = await fetch('/about',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Tyep": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if(!res.status === 200){throw new Error('User not found')}
            
        } catch(err){
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <>
        <form method="GET">
        <div className="aboutpage">

        <div className="aboutpageh1">
            <div className="oneimg">
                <NavLink to=""><img className="oneimg" src={one} alt="one"></img></NavLink>
            </div>
            <p className="ahmedp">Ahmed Khan <br/> Web develper <br/>  <span className="ranking"> Ranking:  1/10 </span></p>
        </div>
            <br/>
            <div>
                
            </div>
        <div>
            <ul className="aboutul">
                <li className="aboutli">Youtube</li>
                <li className="aboutli">Instagram</li>
                <li className="aboutli">Facebook</li>
                <li className="aboutli">Twitter</li>
                <li className="aboutli">Whatsapp</li>
            </ul>
        </div>
        <div>
            <ul className="aboutultwo">
                <li className="aboutli2">User Id</li>
                <li className="aboutli2">Name</li>
                <li className="aboutli2">Email</li>
                <li className="aboutli2">Phone</li>
                <li className="aboutli2">Profession</li>
            </ul>
        </div>
        <div>
            <ul className="aboutulthree">
                <li className="aboutli3">887899212121</li>
                <li className="aboutli3">Ahmed khan</li>
                <li className="aboutli3">Abdullah khan</li>
                <li className="aboutli3">Abdullah</li>
                <li className="aboutli3">332 8724245</li>
            </ul>
        </div>
        <div className="edit">
        <button className="edit">Edit Profile</button>
        </div>

        </div>
        </form>
        </>
    )
}

export default About
