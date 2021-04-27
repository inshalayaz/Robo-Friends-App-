import React from 'react'
import Card from './Card'



function CardArray({robots}) {

    const cardArray = robots.map( (user, i )=> {
        return(
          <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={robots[i].id} />
        )
      })
    return (
        <div>
             {cardArray}
        </div>
    )
}

export default CardArray
