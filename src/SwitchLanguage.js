import { useContext } from "react"
import {useSite} from './context'

export default function SwitchLanguage(){

// const data = useContext(SiteContext)
// console.log(data)

const {language, dispatch} = useSite()

const switchLanguage = () => {
    dispatch({
        type:'TOGGLE_LANGUAGE'
    })
}

    return(
        <>
       <br/> mevcut dil = {language} <pre>
        <button onClick={switchLanguage}>Dili değiştir</button></pre>
        </>
    )
}