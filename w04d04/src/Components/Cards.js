import React, { useState , useEffect } from "react";
import { useHistory } from "react-router-dom";

const Cards = () => {
  const [pekemon, setPekemon] = useState([]);
  const history = useHistory();


  useEffect(() => {
    getPekemon();
  }, [])


  const getPekemon = async () => {

    const response = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=15")
    const body = await response.json(); // convert response to json
    setPekemon(body.data);

    console.log(body.data);
  }

// const Cards = () => {
//   const [cards] = useState([
//     {
//       id: 0,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
//       isFav: false,
//     },
//     {
//       id: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
//       isFav: false,
//     },
//     {
//       id: 2,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
//       isFav: false,
//     },
//   ]);

//   const favorite = (id) => {
//     let arrFav = [];
//     arrFav = cards.map((item) => {
//       if (item.id === id) {
//         return { ...item, isFav: !item.isFav };
//       } else {
//         return item;
//       }
//     });

    
//   };

//   return (
//     <div>
//       <div className="cards">
//         {cards.map((item, id) => {
//           return (
//             <div className="card">
//               <img src={item.img} alt="skyPhotos" />
//               <h2>{item.name}</h2>
//               <button className="favBtn" onClick={() => favorite((item, id))}>
//                 Add to Favorite
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       ))
//       {/* } */}
//     </div>
//   );
// };

const changePath = (id) => {
  history.push(`/card/${id}`)
}
return (

  
  <div>
    {pekemon.length ? (
  <ul className="cardsL">
    {pekemon.map((item,i) => (
     <div className="cards">
      <div className="card" key={i} >
        <div onClick={() => changePath(item.id)} >
        <li>{item.name}</li>
        <li>{item.types}</li>
        <img src= {item.images.small} alt='pokemon' /> 
        </div>
        </div>
        </div>
    ))}
    </ul>
    ) : (
      <h1> Loading...</h1>
    )}
    </div>
);
    }

export default Cards;