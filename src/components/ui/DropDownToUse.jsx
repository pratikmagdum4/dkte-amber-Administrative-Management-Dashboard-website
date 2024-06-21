import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./DropDown";

function DropDownOptions({ options, course }) {

    function handleOnClick(option )
    {
        
    }


    
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>{course}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {options.map((item) => (
                        <DropdownMenuItem onClick={handleOnClick(item)}  key={item}>{item}</DropdownMenuItem>

                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default DropDownOptions;
