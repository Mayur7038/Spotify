import { useEffect, useState , } from "react";
import axios from "axios";

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import "./Allhome.css"


export const Allhome =()=>{
  
  
  const [lists , setLists] = useState([]);
  
  useEffect(()=>{
    axios.get("https://apg-saavn-api.herokuapp.com/playlist/?q=https://www.jiosaavn.com/featured/romantic-hits-2020---hindi/ABiMGqjovSFuOxiEGmm6lQ").then(({data})=>{
      
      setLists(data.songs)
      console.log(data.songs);
    })
  },[])
  
  const [plaerer , setplayerer] = useState(false);

      const [src , setSrc ] = useState("https://aac.saavncdn.com/937/98dfd33cd388084fd76fadf65165a10e_320.mp4");

      const handleClick =(link)=>{

        setSrc(link); 
        setplayerer(true);
      }



    return <div id="homme">

        <div id="alllists">

            {

                lists.map((e)=>{


                    return <div onClick={()=>  handleClick(e.media_url,)}>

                        <img src={e.image} />
                        <h6> {e.lyrics_snippet} </h6>
                    </div>



                })



            }

        <div id="boott">
         <ThemeProvider>
                  <AudioPlayer
                    elevation={1}
                    width="100%"
                    variation="default"
                    spacing={3}
                    order="standart"
                    autoplay={plaerer}
                    preload="auto"
                    src={src}
                  />
            </ThemeProvider>;
        </div>    
        </div>




    </div>



}