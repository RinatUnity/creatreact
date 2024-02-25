// import Card from "./components/CardBlok";

//  const App = () => {
//    return <Card/>   
//  }

//2/////////////////////////////////////////////////////////////
import TextBloks from"./components/TestBloks/TestBloks";
import ModalBlock from "./components/Modal/Modal";
// import CardBlock from "./components/CardBlok/CardBlok"
import { useState } from "react";

const App = () => {
    const [openModal,setOpenModal] = useState(false);
       return <>
       <header>
        {/* <i className="fa fa-user-circle-o" 
        style={{fontSize:30, color:"blue",cursor:"pointer"}}
        onClick={(e)=>{setOpenModal(true)}}></i> */}
        <button onClick={(e)=>{setOpenModal(true)}}>Попробывать бесплатно</button>
       </header>
       <TextBloks/>
       { openModal && <ModalBlock setOpenModal={setOpenModal}/>}
       </>
         
    }
export default App;