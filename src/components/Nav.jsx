import React from "react";
import {HiMailOpen} from "react-icons/hi"
import { Button, ButtonGroup } from '@chakra-ui/react'
import "../style-sheets/Nav.css"

function Nav(){
    return(
        <div className="main-div">
            <div className="logo-div">
            <div className="logo">
                <HiMailOpen size={30} color={"blue"}/>
            </div>
            <div className="logo-text">
                Estatery
            </div>
            </div>
            <div className="NavBar">
                <ul className="list-items">
                    <li className="list-item">Rent</li>
                    <li className="list-item">Buy</li>
                    <li className="list-item">Sell</li>
                    <li className="list-item">Manage Property</li>
                    <li className="list-item">Resource</li>
                </ul>
            </div>
            <div className="userInformation">
                <Button colorScheme='blue' variant='outline' mr={2} ml={4}>Login</Button>
                <Button colorScheme='blue' variant='solid'>SignUp</Button>
                </div>
            </div>


    )
}

export default Nav;