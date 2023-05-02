import React from 'react'
import style from "../../styles/Home.module.css"
const footerHeight = 200

const Footer = () => {

    //Här kommer logik, t.ex. hämtar data, definerar "state" och variabler o.s.v...

    return (
        <>

            <div style={{ height: footerHeight }} />

            <footer style={{ height: footerHeight }} className={style.footer}>
                <div className={style.icons}>
                    <img className={style.icon} src="insta.png" alt="" />
                    <img className={style.icon} src="facebook.png" alt="" />
                    <img className={style.icon} src="yt.png" alt="" />
                </div>
                Copyright &copy; {new Date().getFullYear()} Alexander
            </footer>
        </>
    )

}


export default Footer