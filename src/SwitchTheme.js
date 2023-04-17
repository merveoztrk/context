import { useContext } from "react"
import {useSite} from './context'

export default function SwitchTheme(){

    const {theme, dispatch} = useSite()

    const switchTheme = () =>{
        dispatch ({
            type:'TOGGLE_THEME'
        })
    }
    

    return(
        <>
        mevcut tema = {theme} <pre></pre>
        <button onClick={switchTheme}>Temayı değiştir</button>
        </>
    )
}