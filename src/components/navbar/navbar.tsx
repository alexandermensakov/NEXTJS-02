import React from 'react'
import Link from 'next/link'
import style from "../../styles/Home.module.css"
const Navbar = () => {
    return (
        <ul className={style.navbar}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/Article">About us</Link>
            </li>

            <li>
                <Link href="/Footer">Contact us</Link>
            </li>
        </ul>
    )
}

export default Navbar