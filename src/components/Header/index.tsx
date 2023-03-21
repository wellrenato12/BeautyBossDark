import { useState } from "react";
import { Mobile } from "./Mobile";
import { Web } from "./Web";

export function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    function handleMenuIsVisible(isVisible: boolean) {
        setMenuIsVisible(isVisible)
    }

    return (
        <>
            <Mobile menuIsVisible={menuIsVisible} handleMenuIsVisible={handleMenuIsVisible} />
            <Web handleMenuIsVisible={handleMenuIsVisible} />
        </>
    )
}