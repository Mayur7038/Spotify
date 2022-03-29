import "./Navbar.css"
import logo from "../spotify-16.png"
import { Link } from "react-router-dom"

export const Navbar = ()=>{

    return   <div id="spot">

            <Link className="flow"  to="/" > 

                    <div id="head">

                        <img id="logo" src={logo} alt="" />

                        <h1 id="title"> Spotify </h1>
                    </div>
            </Link>
            <div id="tags">

                <h4> Premium </h4>
                <h4> Support </h4>
                <h4> Download </h4>
                <h4> | </h4>
              <Link className="flow" to="/signUp"> <h4> Sign up </h4>  </Link>   
              <Link className="flow" to="/login" >   <h4> Log in </h4>    </Link>  

            </div>



        </div>
        

    

}