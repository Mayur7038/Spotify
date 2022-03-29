import logo from "../black.png"
import "./SignUp.css"
import ReCAPTCHA from "react-google-recaptcha";

import { Input } from "../Tags/Input"
const handle = ()=>{
    console.log("")
}

export const SignUp = ()=>{

    return <>

        

       <div id="loger" > <img src={logo} alt="" /> <span> Spotify </span> </div>

        <h1> Sign up for free to start listening. </h1>

        <div id="content" >
                <h5> What's your email? </h5>
                <Input type="text" placeholder="Enter your email." />
                <h5>Confirm your email</h5>
                <Input type="text" placeholder="Enter your email again." />
                <h5>Create password  </h5>
                <Input type="text" placeholder="Create a password." />
                <h5> What should we call you? </h5>
                <Input type="text" placeholder="Enter a profile name." />
                <h5> What's your date of birth? </h5>
                <table>
                    <thead>
                        <tr> 
                            <td> Year </td>
                            <td> Month </td>
                            <td> Day </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td > <input className="birth1" type="text" placeholder="YYYY" /> </td>
                            <td > <input className="birth2" type="text" placeholder="Month" /> </td>
                            <td > <input className="birth3" type="text" placeholder="DD" /> </td>
                        </tr>
                    </tbody>

                </table>

                <h5>  What's your gender?</h5>

                <div id="gender">

                   <div className="ingender" > <input type="radio" />  <p> Male</p> </div>  
                    <div className="ingender" >  <input type="radio" /> <p> Female </p> </div>  
                    <div className="ingender"> <input type="radio" />  <p> Non-binary </p> </div> 
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
                <div id="button"> <button id="signUp" > Sign Up </button> </div>
                
                <div id="have"> <p> Have an account ?  <a href=""> Log in. </a>  </p>  </div> 




        </div>
    
    </>

}