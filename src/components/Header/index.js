import React, {PropTypes} from "react"
import {Link} from "phenomic"
import Svg from "react-svg-inline"

import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

const Header = (props, {metadata: {
        pkg
    }}) => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.navPart1}>
                <Link className={styles.link} to={"/"}>
                    {"Home"}
                </Link>
                <Link className={styles.link} to={"/posts"}>
                    {"Posts"}
                </Link>
                <Link className={styles.link} to={"/lab"}>
                    {"Lab"}
                </Link>
                <Link className={styles.link} to={"/about"}>
                    {"About"}
                </Link>
            </div>

            <div className={styles.navPart2}>
                {pkg.repository && <a href={pkg.repository} className={styles.link}>
                    <Svg svg={gitHubSvg} cleanup/> {"GitHub"}
                </a>
}
            </div>
        </nav>
    </header>
)

Header.contextTypes = {
    metadata: PropTypes.object.isRequired
}

export default Header
