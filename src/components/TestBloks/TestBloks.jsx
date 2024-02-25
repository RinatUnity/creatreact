import textContent from "../../assets/date/Text.json"
import pic0 from "../../assets/image/Rectangle 45.png"
import pic1 from "../../assets/image/Rectangle 48.png"
import pic2 from "../../assets/image/Rectangle 49.png"
import pic3 from "../../assets/image/Rectangle 51.png"

let arr = [pic0,pic1,pic2,pic3];
const TestB = ({nam, tex, pic})=> {
     return <div className="karta">
      {textContent.map((item, index)=>
      <div key={index} className="kart_block ">
        <h2 className="caption">{nam=item.caption}</h2>
        <img className="block_img" src={pic=arr[index]} alt="" />
        <p className="block_text ">{tex=item.text}</p> 
      </div>)}
     </div>    
} 

export default TestB;
