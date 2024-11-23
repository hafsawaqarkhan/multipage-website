import React from 'react'

const Flowers = () => {
const flowersData =[

{ id : 1 , name:"Rose" ,price: "1000" , description : "Sign of Love" , image:"/image/rose.jpg" },
{ id : 2 , name:"Tulips" ,price: "2000" , description : "Sign of Infactuation" , image:"/image/tulips.jpg" },
{ id : 3 , name:"Sunflower" ,price: "2000" , description : "Sign of Light" , image:"/image/sunflower2.jpg" },
{ id : 4 , name:"Lily" ,price: "3000" , description : "Sign of Peace" , image:"/image/lily1.jpg" },
{ id : 5 , name:"Baby breath" ,price: "1000" , description : "Sign of Enhancement" , image:"/image/babybreaths.jpg" },
{ id : 6 , name:"Chrysanthemum" ,price: "5000" , description : "Sign of Purity" , image:"/image/chrysanthemum.jpg" },
]

return (
    <div>
      <div className='flowers'>
        {flowersData.map((Flowers) => (
<div key={Flowers.id} className='flowers-card'>
<img src = {Flowers.image} alt={Flowers.name}></img>
<h3>{Flowers.name}</h3>
<p>{Flowers.description}</p>
<div className='price'> RS: {Flowers.price}</div>
<button className='button'>Shop Now</button>
</div>

        ))}
      </div>
    </div>
  )
}

export default Flowers
