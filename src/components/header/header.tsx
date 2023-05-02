import React from 'react'
import style from "../../styles/Home.module.css"
import Logo from '@/components/logo/logo'
import Navbar from '@/components/navbar/navbar'

const Header = () => {

    //Här kommer logik, t.ex. hämtar data, definerar "state" och variabler o.s.v...

    return (

        <div className={style.div}>
            <Logo />
            <Navbar />
        </div>

    )

}


export default Header