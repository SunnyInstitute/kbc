import { useContext } from "react"
import style from "./style.module.css"
import { Content } from "../../App"
import { price } from "../data"
export default function Finish()
{
    var{index}=useContext(Content)
    return(
        <>
            <div className={style.line}>
                <h1 style={{"fontSize":"80px","color":"yellow"}}>GAME OVER</h1>
                <h1 style={{"fontSize":"100px","color":"yellow"}}>Prize Money: {price[index-1]}</h1>
            </div>
        </>
    )
}