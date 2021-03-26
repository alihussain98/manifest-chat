import React, { useContext } from "react";
import { ChatContext } from './ChatContext';
import './Header.css'
import menu from './images/menu.png'
import { Button } from '@material-ui/core'

function Header() {
    const { resetChat } = useContext(ChatContext);
    return (
        <div className="header">
            <div className="header_elements">
                <div className="header_heading">
                    <h1> Manifest </h1>
                </div>

                <div className="header_menu">
                    <Button onClick={resetChat}><img className="header_logo" src={menu} alt="Menu" /></Button>
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Header
