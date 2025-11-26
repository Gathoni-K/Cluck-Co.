"use client"


import { useState } from "react";
import { Button } from "../../components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

export function DropdownButton() {
    const [position, setPosition] =useState("bottom")

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md w-60">All Products</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md w-60">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top"> Chicks </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Meat</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownButton
