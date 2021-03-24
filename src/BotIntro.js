import React from 'react'
import './BotIntro.css'
import botdp from './images/61.png'

function BotIntro() {
    return (
        <div className="botintro">
            <img className="bot_image" src={botdp} alt="bot_dp" />
            <div className="title">
                <h1> Henry </h1>
            </div>
            <div className="subtitle">
                <p> TRANSFER SPECIALIST </p>
            </div>

        </div>
    )
}

export default BotIntro
