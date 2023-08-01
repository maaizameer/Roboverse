import React from "react";

const Card = ({name, id, email}) => {
    return(
        <div className="bg-light-blue dib br4 pas3 ma2 grow bw2 shadow">
            <img src={`https://robohash.org/${id}`}/>
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;