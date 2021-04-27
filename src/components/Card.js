import React from 'react'
import 'tachyons'



const Card = ({id,name,email}) => {
        return (
            <div className='bg-light-green dib br3 pd3 ma2 grow ' >
                <img src={`https://robohash.org/${id}` } alt={id}  />
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        )
}

export default Card