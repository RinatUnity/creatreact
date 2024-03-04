// import Card from "./components/CardBlok";

//  const App = () => {
//    return <Card/>   
//  }

//2/////////////////////////////////////////////////////////////
// import TextBloks from"./components/TestBloks/TestBloks";
// import ModalBlock from "./components/Modal/Modal";
// // import CardBlock from "./components/CardBlok/CardBlok"
// import { useState } from "react";

// const App = () => {
//     const [openModal,setOpenModal] = useState(false);
//        return <>
//        <header>
//         {/* <i className="fa fa-user-circle-o" 
//         style={{fontSize:30, color:"blue",cursor:"pointer"}}
//         onClick={(e)=>{setOpenModal(true)}}></i> */}
//         <button onClick={(e)=>{setOpenModal(true)}}>Попробывать бесплатно</button>
//        </header>
//        <TextBloks/>
//        { openModal && <ModalBlock setOpenModal={setOpenModal}/>}
//        </>
         
//     }
//3///////////////////////////////////////////////////////////
// import Lout from "./components/Lout/Lout.jsx";
import Menu from "./components/Menu/Menu";
import {BrowserRouter,Route,Routes} from"react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import About from "./pages/About";
import { createContext } from "react";

export const Glob = createContext("ZXC");

const App =()=>{ 
     
    return <BrowserRouter>
    <Menu name="Меню" page="Страница слова"></Menu>
        <Glob.Provider value="Glob">
        <Routes>
            <Route path="/" element={<Home/>}></Route>           
            <Route path="/page/:name" element={<Page/>}></Route>
            <Route path="/about/:name" element={<About/>}></Route>
        </Routes>
        </Glob.Provider>
    </BrowserRouter> 
}

export default App;