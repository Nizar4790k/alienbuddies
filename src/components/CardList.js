import React from 'react';
import Card from './Card'

const CardList = ({aliens}) => {

    

    return   (
    <div>
        {aliens.map((user,i)=>{
        return (<Card 
        key={i} 
        id={aliens[i].id} 
        name={aliens[i].name} 
        email={aliens[i].email} />
        );
    })}
    </div>
    )
}

export default CardList;