import React from "react";
import Card from './Card';

const CardList = ({ robos }) => {
    
    return(
        <div>
            { robos.map((user, index) => {
                return (
                <Card 
                key={robos[index].id}
                id={robos[index].id} 
                name={robos[index].name} 
                email={robos[index].email}/>
                );
            }
        ) 
    }
        </div>
    );
}

export default CardList;
