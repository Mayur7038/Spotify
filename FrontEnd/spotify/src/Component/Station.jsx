import { useState} from "react";
import "./Station.css";
import axios from "axios";
import {Input} from "../Tags/Input"
import { ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';


export const Station = () => {


  const [search , setSearch] = useState([]);

  let id;

  const handleInput=(e)=>{

    if(id){
      clearTimeout(id);
    }

    id = setTimeout(()=>{

      axios.get(`https://apg-saavn-api.herokuapp.com/result/?q=${e.target.value}`).then(({data})=>{
        
        setSearch(data);

      })

    },500)
  }

  const [src , setSrc ] = useState("https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_320.mp4");
  const [bg , setbg ] = useState("https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg")

  const handleClick =(link,img)=>{

    setSrc(link);
    setbg(img);
    setPlayer(true);
  }

  const [playerer , setPlayer] = useState(false)
 


  return (
    <>
      <div id="main" style={{ backgroundImage : `url(${bg})` } }>


        <div className="container"  >


          <div id="searchBar" >

            <Input id="search" onChange={(e)=> handleInput(e)}  placeholder="Enter the song Name" />

            {

                search.map((e)=>{
                return <div className="searchLists"  onClick={()=> handleClick(e.media_url,e.image) } key={e.id}  >
                        <img src={e.image} alt="not found" />
                        <span> {e.song} </span> 
                </div>
              })

            }


          </div>

        </div>
        <div className="bottom1">
              <ThemeProvider>
                  <AudioPlayer
                    elevation={1}
                    width="100%"
                    variation="default"
                    spacing={3}
                    order="standart"
                    autoplay={playerer}
                    preload="auto"
                    src={src}
                  />
            </ThemeProvider>;
        </div>
      </div>

    </>
  );
};
