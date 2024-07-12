import React from "react";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "./DropDown";

import Btech from "./RankersTables";
import { useNavigate } from "react-router-dom";
function DropDownOptions({ options, title }) {
    const navigate = useNavigate()
    function handleClick(item) {
        console.log("clickked houdfhauo")
        console.log(item)
        navigate('/rank', {
            state: {
                dept: item
            }
        })
    }



    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>{title}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {options.map((item) => (
                        <DropdownMenuItem onClick={handleClick(item)} key={item}>{item}</DropdownMenuItem>

                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default DropDownOptions;
