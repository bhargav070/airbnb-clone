import React from 'react'
import data from './data'
import Card from './Cards'

let cards = []
for(let i=0; i<data.length; i++) {
  cards.push(
    <Card
        img={data[i].coverImg}
        rating={data[i].stats.rating}
        reviewCount={data[i].stats.reviewCount}
        location={data[i].location}
        title={data[i].title}
        price={data[i].price}
    />
  )
}

function Main() {
  return (
    <div className="main">
      {cards}
    </div>
  )
}

export default Main