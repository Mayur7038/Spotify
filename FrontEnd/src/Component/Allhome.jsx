import { useEffect, useState , } from "react";
import axios from "axios";
import ReactAudioPlayer from 'react-audio-player';

import "./Allhome.css"


export const Allhome =()=>{
  
  
  
    return <div id="homme">

      <div id="alllists">

        <div id="boott">

          {/*  drop you music player here  */}

          <ReactAudioPlayer
           id="player"
            src="https://aac.saavncdn.com/937/98dfd33cd388084fd76fadf65165a10e_320.mp4"
            
            controls
          />
          

        
        </div>    
        
      </div>




    </div>



}