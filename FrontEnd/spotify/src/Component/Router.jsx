import {Route , Routes} from "react-router-dom";
import { Login } from "./Login";
import {SignUp} from "./SignUp"
import { Home } from "./Home";
import { Station } from "./Station";


export const Router  = ()=>{

    return <Routes>
        <Route  path="/login" element={ <Login/> } ></Route>
        <Route path="/signUp" element={ <SignUp/> } >  </Route>
        <Route path="/" element={ <Home/> } > </Route>
        <Route path="/station" element={ <Station/> }  > </Route>
    </Routes>

}