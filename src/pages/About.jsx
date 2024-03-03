import Lout from "../components/Lout/Lout";
import { useContext } from "react";
import { Cr } from "./Home";
import { useParams } from "react-router"; 


const About = () =>{
  const words = useContext(Cr);
 
  const {name} = useParams();
  const st =  {
       padding:"15px",
       margin:"10px",
       backgroundColor:"orange",
       borderRadius:"10px",
       width:"max-content"
       

  }
  
    
    return <div>
      <Lout name={name}/>
      <div style={st}>Совпадения по первой букве</div>   
      {words.filter((item,index)=>item[0].includes(name)).map((i,index)=><div key={index} style={st}>{i}</div>)}
    </div>   
 }
 export default About;