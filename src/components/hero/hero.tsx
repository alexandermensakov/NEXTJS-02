import React from 'react'
import style from "../../styles/Home.module.css"



const Hero = () => {

    //Här kommer logik, t.ex. hämtar data, definerar "state" och variabler o.s.v...

    return (

        <div className={style.hero}>
            <img className={style.img} src="rock.png" alt="" />


        </div>

    )

}


export default Hero