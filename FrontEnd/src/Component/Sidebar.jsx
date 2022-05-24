
import { useState } from "react"
import { Allhome } from "./Allhome"
import "./Sidebar.css"
import { Station } from "./Station"


export const Sidebar =()=>{

    const [toggle , setToggle] = useState(false)

    return <div id="side" >

        <div id="sidebar">

            <h3 onClick={()=> setToggle(false)} >    <i className="fa fa-home" aria-hidden="true"></i>    Home                        </h3>

            <h3 onClick={()=> setToggle(true)} >  <i className="fa fa-search" aria-hidden="true"></i> Search </h3>

            <h3>   <i  className="fa fa-heart" aria-hidden="true"></i>  Liked                    </h3>

        </div>

        { toggle ?   <Station/> :  <Allhome/>   }

    

        

    </div>
    

}