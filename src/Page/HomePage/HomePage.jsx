import {  NavLink } from "react-router-dom";
import s from "./HomePage.module.css"
export default function HomePage() {
    

    return <div className={s.section} >
        <h2> Go start </h2>
        <h3>You should take advantage of this unique way of storing your phone book. </h3>
        <NavLink className={s.link} to={'/login'}>Login</NavLink>
        <NavLink className={s.link} to={'/makeaccount'}>Created account</NavLink>
    </div>
}