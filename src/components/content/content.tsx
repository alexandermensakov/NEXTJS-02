import React from 'react'
import style from "../../styles/Home.module.css"

const Content = () => {
    return (
        <div className={style.rocky}>
            <img className={style.dwayne} src="rocky.jpeg" alt="" />
            <div className={style.therock}>
                <img src="rockyy.png" alt="" />
                <p>Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock,[3] is an American actor, film producer, and former professional wrestler.</p>
            </div>
        </div>
    )
}

export default Content