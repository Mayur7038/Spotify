import "./Home.css"
import logo from "../Assets/spotify-16.png"
import twit from "../Assets/twit.png"
import insta from "../Assets/instagram.png"
import fac from "../Assets/face.png"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
export const Home = ()=>{
    return <>

         <Navbar/>

        
        <div id="home">  <Link to="/sidebar" >   <button id="getStarted" > Get Started </button>  </Link> </div>


        <div id="footer">

            <div id="block1">

                <div> 
                    <img id="logoe" src={logo} alt="" />   <h3 className="mario" > Spotify </h3>
                </div>
                <div className="marioo" >

                    <h3 className="hover"> About </h3>
                    <h3 className="hover"> Company </h3>
                    <h3 className="hover"> Jobs </h3>
                    <h3 className="hover"> For the Record </h3>
                    
                </div>
                <div className="marioo">  
                    <h3 className="hover"> COMMUNITIES </h3>
                    <h3 className="hover"> For Artists </h3>
                    <h3 className="hover"> Developers </h3>
                    <h3 className="hover"> Advertising </h3>
                    <h3 className="hover"> Investors  </h3>
                    <h3 className="hover">Vendors </h3>
                </div>
                <div className="marioo">
                    <h3 className="hover"> USEFUL LINKS </h3>
                    <h3 className="hover"> Support </h3>
                    <h3 className="hover"> Web Player </h3>
                    <h3 className=""> Free Mobile App </h3>
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