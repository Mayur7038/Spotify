import axios from "axios"
import { useState } from "react"
import logo from "../black.png"
import { Input } from "../Tags/Input"
import "./login.css"
import { Link } from "react-router-dom"


export const Login = ()=>{

    const [user , setUser ] = useState({
        email : "",
        password : ""

    })

    const handleChange=(e)=>{

        const {id , value} = e.target;

        setUser({
            ...user ,
            [id]  : value
        })

    }

    const handleSubmit = ()=>{


        axios.post("http://localhost:5000/user/login" , user).then(({data})=>{

            alert( "welcome " + data);

        }).catch(()=>{
            console.log("enter the valid detail")
        })

    }



    
    
    return <div id="mainerer">



        <div id="loger" > <img id="img" src={logo} alt="" /> <span id="titla"> Spotify </span> </div>

        <hr />

        <div id="logFacebook"> <p> CONTINUE WITH FACEBOOK </p> </div>
        <div id="logApple"> <p> CONTINUE WITH APPLE </p> </div>


                  

        <div id="container">
         <p style={{display : "flex" , gap : "5px" }}> <p style={{ backgroundColor : "#E7E4E4" , width : "45%" , height : "2px"}}> </p> <p style={{ marginTop : "auto" , marginBottom : "auto" }} > OR </p>   <p style={{ backgroundColor : "#E7E4E4" , width : "45%" , height : "2px"}}> </p></p>

            <div>

                <h5> Email address or username </h5>
                <Input id="email" onChange={(e)=> handleChange(e)} />
                <h5> Password </h5>

                <Input id="password" onChange={(e)=> handleChange(e) } />
                <br />

                <p> Forgot your password? </p>

                <div id="both">
                    <div id="check" > 

                    <input type="checkbox"  />  <p> Remeber me </p>
                    </div> 
                    <button  onClick={()=> handleSubmit() } >  Log In </button>

                </div>

            </div>

            <br />

            <hr />

            <div id="end">
                <h3> Don't have an account? </h3>

                <Link to="/signUp" > <button id="signup">  SIGN UP FOR SPOTIFY </button>  </Link>
                
            </div>


        </div>

    </div>

}