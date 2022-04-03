import logo from "../black.png"
import "./SignUp.css"
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Link } from "react-router-dom";
import { Input } from "../Tags/Input"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const handle = ()=>{
    console.log("")
}


export const SignUp = ()=>{

    

    const [user , setUser ] = useState({
        email : "",
        password : "",
        username : "",
        gender : ""
    })

    const handleChange = (e)=>{

       const  id = e.target.id || e.target.className ; 

        const value = e.target.value;

        setUser({
            ...user,
            [id] : value
        })

    }


    const [text ,setText] = useState("")


    const navigate = useNavigate();

    const handleSubmit = ()=>{



        axios.post("https://spotifymayur.herokuapp.com/user" , user).then(({data})=>{

            if(data === true){

                navigate("/login")
            }
            else{
                setText(data)
                setStatus(false)

            }


        }).catch((e)=>{
            setText("Please Fill All the details ");
            setStatus(false)
        })
    }

    const check=(e)=>{

       
    }


    const [status , setStatus] = useState(true); // if there is a error the false 
    return <div id="mainer">




        {/* div to handle SignUp error */}
        <div id="signUpFailed" style={{  display :  status ? "none"  : "block"      }}   >
            <h3 id="message">  {text} </h3>
                 <hr />
            <h3 id="ok"  onClick={()=> setStatus(true)  }   > OK </h3>

        </div>


       <div id="loger" > <img src={logo} alt="" /> <span> Spotify </span> </div>

        <h1> Sign up for free to start listening. </h1>

        <div id="content" >
                <h5> What's your email? </h5>
                <Input type="text" id="email" onChange={(e)=> handleChange(e)} placeholder="Enter your email." />
                <h5>Confirm your email</h5>
                <Input type="text"  placeholder="Enter your email again." />
                <h5>Create password  </h5>
                <Input type="text" id="password" onChange={(e)=> handleChange(e)} placeholder="Create a password." />
                <h5> What should we call you? </h5>
                <Input type="text" id="username" onChange={(e)=> handleChange(e)} placeholder="Enter a profile name." />
              
                <h5>  What's your gender?</h5>

                <div id="gender">

                   <div className="ingender"   > <input className="gender" type="radio" name="gender" onChange={(e)=> handleChange(e)} value="male" />  <p> Male</p> </div>  
                    <div className="ingender" >  <input className="gender" type="radio" name="gender" onChange={(e)=> handleChange(e)} value="female" /> <p> Female </p> </div>  
                    <div className="ingender"> <input className="gender" type="radio" name="gender" onChange={(e)=> handleChange(e)} value="non-binary" />  <p> Non-binary </p> </div> 
                </div>

                <br />

                <div className="choice" >    <input type="checkbox" />  <p> I would prefer not to recieve marketing messages from Spotify </p> </div>
                <br />
                <div className="choice" >   <input type="checkbox" /> <p> Share my registration data with Spotify's content providers for marketing purposes. </p> </div>

                <div id="captcha">

                    <ReCAPTCHA 
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={ handle }
                    />,


                </div>


                <p className="bottom"> By clicking on sign-up, you agree to Spotify's <a href=""> Terms and Conditions of use. </a> </p>

                <p className="bottom"> To learn more about how Spotify collects, uses , shares and protects your personal data , please see <a href=""> Spotiy's Privacy Policy . </a> </p>
                <div id="button"> <button id="signUp" onClick={()=> handleSubmit()} > Sign Up </button> </div>
                
                <div id="have"> <p> Have an account ?  <Link to="/login" > Log In </Link>  </p>  </div> 




        </div>
    
    </div>

}