import home from "../home.jpg"
import "./Home.css"
import logo from "../spotify-16.png"
import twit from "../twit.png"
import insta from "../instagram.png"
import fac from "../face.png"
import { Link } from "react-router-dom"
export const Home = ()=>{
    return <>

        
        <div id="home">  <Link to="/station" >   <button id="getStarted" > Get Started </button>  </Link> </div>


        <div id="footer">

            <div id="block1">

                <div> 
                    <img id="logoe" src={logo} alt="" />   <h3 className="mario" > Spotify </h3>
                </div>
                <div className="marioo" >

                    <h3> About </h3>
                    <h3> Company </h3>
                    <h3> Jobs </h3>
                    <h3> For the Record </h3>
                    
                </div>
                <div className="marioo">  
                    <h3> COMMUNITIES </h3>
                    <h3> For Artists </h3>
                    <h3> Developers </h3>
                    <h3> Advertising </h3>
                    <h3> Investors  </h3>
                    <h3>Vendors </h3>
                </div>
                <div className="marioo">
                    <h3> USEFUL LINKS </h3>
                    <h3> Support </h3>
                    <h3> Web Player </h3>
                    <h3> Free Mobile App </h3>
                </div>
                <div className="logoes"> 

                    <div className="logoes1">

                        <img src={insta} alt="" />
                        <img src={twit} alt="" />
                        <img src={fac} alt="" />
                    </div>
                </div>

            </div>

        </div>
    
    </>
}