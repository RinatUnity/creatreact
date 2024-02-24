const text = [
       "неограниченное колличество учеников",
       "производительную видеосвязь",
       "лучшая конфиденциальность и защита",
       "сообщества",
       "любое количество уроков и учеников"
    ];
    const Card = ()=>{
       const st = {
          color:"blue",
          fontSize:"35px",
          fontWeight:"100"
          
       }   
       return <div className="content">
       {text.map((item , index) => <div key={index} className="cart">
          <span>{item}</span>
           <i className="fa fa-check-circle-o fa-fw" style={st}/>
       </div>)}
      </div>
    }
     export default Card;