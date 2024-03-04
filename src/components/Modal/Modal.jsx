import { useState } from "react";
import "./modalStyle.css";

const ModalBlock = ({setOpenModal})=>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("14");

    const clousHandler =()=>{
        setOpenModal(false);
    }
        const handler = (e)=>{
        const data = {
            name:name,
            age:age
        }
        console.log(data);
        clousHandler();
    }

    return <div className="modal_wrapper">
        <div className="modal">
            <div className="modal_close">
                <i className="fa fa-times-circle-o" onClick={clousHandler}></i>
            </div>
            <div className="modal_content">
                <label>
                    <span>Имя</span>
                    <input type="text" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Возраст</span>
                    <input type="number"
                     max={99} 
                     min={14}
                     value={age}
                     onChange={(e)=>setAge(e.target.value)}
                     />
                </label>
                <button onClick={handler}>Отправить</button>
            </div>
        </div>
    </div>
    
}
export default ModalBlock;