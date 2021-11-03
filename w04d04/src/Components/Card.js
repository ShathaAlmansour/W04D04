import React, { useState , useEffect } from "react";
import { useParams } from "react-router"

// const Card = () => {
//     const cards = [
//         {
//             id: 0,
//             img: "",
//             isFav: false,
//           },
//           {
//             id: 1,
//             img: "",
//             isFav: false,
//           },
//           {
//             id: 2,
//             img: "",
//             isFav: false,
//           },
//         ];

    
const Card = () => {

  const [pekemon, setPekemon] = useState([]);

    useEffect(() => {
      getPekemon();
    }, [])


    const getPekemon = async () => {

      const response = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=5")
      const body = await response.json(); // convert response to json
      setPekemon(body.data);

      console.log(body.data);
    }


    // let id = useParams().id;
    // const myItem = cards.find((item, id) => Number(id) === id ); 

//     return (
//    <div className="cardCoun">
//            <h1> {myItem.name} </h1>
//            <img src = {myItem.img} alt='Countries' />
//    </div>
//    )
// }

const id = useParams().id;
const myItem = pekemon.find((item, id) => Number(id) === id ); 

return (
  <div className="cardCoun">
    
       <h1> {myItem.name} </h1>
       <img src = {myItem.img} alt='' />


  ) : (
    <h1> Loading...</h1>
  
  </div>
);
  }
export default Card;