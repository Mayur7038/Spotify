import logo from "../black.png"
import { Input } from "../Tags/Input"
import "./login.css"


export const Login = ()=>{
    
    return <div >

        <div id="loger" > <img src={logo} alt="" /> <span> Spotify </span> </div>

        <hr />




        <div id="container">



            <div>

                {/* <div>
                    <div> <hr /> </div>
                    <div> OR </div>
                    <div> <hr /> </div>
                </div> */}

                <h5> Email address or username </h5>
                <Input/>
                <h5> Password </h5>

                <Input/>
                <br />

                <p> Forgot your password? </p>

                <div id="both">


                    <div id="check" > 

                    <input type="checkbox" />  <p> Remeber me </p>
                    
                    </div> 

                    <button>  Log In </button>

                </div>

            </div>

            <br />

            <hr />

            <div id="end">
                <h3> Don't have an account? </h3>
                <button id="signup">  SIGN UP FOR SPOTIFY </button>
            </div>


        </div>

    </div>

}