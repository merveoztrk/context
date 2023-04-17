import React from "react";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

export default function Footer (){
    return(
        <footer>
            <br/> FOOTER<br/>
            <SwitchTheme/>
            <SwitchLanguage />
        </footer>
    )
}