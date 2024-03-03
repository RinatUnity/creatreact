import Lout from "../components/Lout/Lout";
import { Link } from "react-router-dom";
import { useParams } from "react-router"; 
import { useContext } from "react";
import {Glob} from "../App.jsx";

import { Cr } from "./Home";

const Page = () =>{

  const ct = useContext(Cr);
 
  const {name} = useParams();
    const f = name.split("");
    
    return <div>
      <Lout name={name}/>
      {f.map((e,index)=><Link key={index} to={`/about/${e}`}>{e}</Link>)}  
    </div>   
 }
 export default Page;