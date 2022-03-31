import { useEffect, useState , Component, useRef } from "react";
import "./Station.css";
import demo from "./Station/1.mp3"
import cover from "./Station/cover1.jpg"
import playing from "./Station/playing.gif"
import axios from "axios";
import {Input} from "../Tags/Input"


function update(){
  console.log("update");
  
}



export const Station = () => {

  const [play , setPlay ] = useState(false);
  const [lists , setLists] = useState([]);

  const [search , setSearch] = useState([]);

  useEffect(()=>{
    axios.get("https://apg-saavn-api.herokuapp.com/playlist/?q=https://www.jiosaavn.com/featured/romantic-hits-2020---hindi/ABiMGqjovSFuOxiEGmm6lQ").then(({data})=>{

      setLists(data.songs)
    })
  },[])

  let id;


  const handleInput=(e)=>{

    if(e.target.value.length < 3){
      return;
    }

    if(id){
      clearTimeout(id);
    }

    id = setTimeout(()=>{

      axios.get(`https://apg-saavn-api.herokuapp.com/result/?q=${e.target.value}`).then(({data})=>{
        
        setSearch(data);

      })

    },1000)

    

  }

 



  return (
    <>
      <div>


        <div className="container">

          <div className="songList">
          <div className="songItemContainer">
            {
              lists.map((e)=>{
                return <div className="songItem" key={e.id} >

                        <img src={e.image} />
                        <span> {e.song} </span> 
                        <span className="songlistPlay"> <span className="timestamp"> {e.duration} <i className="far  fa-play-circle" aria-hidden="true"></i> </span> </span>
                </div>
              })
            } 
          </div>

          </div>

          <div id="searchBar" >

            <Input onChange={(e)=> handleInput(e)} />

            {

                search.map((e)=>{
                return <div className="searchLists" key={e.id} >
                        <img src={e.image} />
                        <span> {e.song} </span> 
                </div>
              })

            }


          </div>

        </div>
        <div className="bottom">
          <input onTimeUpdate={()=> update()} type="range" min="0" max="100" id="myProgressBar" />

          <div className="icons">
          <i className="fa fa-2x fa-step-backward" aria-hidden="true"></i>

          { play===true ?  <i className="fa fa-2x fa-pause"    aria-hidden="true"></i>  : <i className="fa fa-2x fa-play-circle-o"   aria-hidden="true"></i> }
         
          
          <i className="fa  fa-2x fa-step-forward" aria-hidden="true"></i>
          </div>
          <div className="songInfo">
            {/* <img src={playing} alt="" /> Kalank */}
            

          </div>
        </div>
      </div>

    </>
  );
};
