import React from "react";
import { useState } from "react"
import '../css/KittyCard.css'

const KittyCard = (props) => {
    let [likes,setLikes] = useState(props.likes)
    let [favorite,setFavorite] = useState(false)

    const toggleLikes = () => {
        setLikes(likes + 1)
    }

    const toggleFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <div className="kitty-card">
            <h2> { props.name } </h2>
            <img 
                className="kitty-img" 
                src={props.imgURL} 
                style={favorite ? {borderColor: 'gold'} : {borderColor: 'orangered'}} 
                onClick={toggleFavorite}
            />
            <div className="likes-container">
                <p> { likes } </p>
                <button onClick={ toggleLikes }>Like me!</button>
            </div>
        </div>
    )
}

export default KittyCard