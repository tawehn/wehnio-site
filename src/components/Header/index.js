import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import linkedinSvg from "../icons/iconmonstr-linkedin-2.svg"
import emailSvg from "../icons/iconmonstr-email-1.svg"

import styles from "./index.css"

const Header = (props, { metadata: {
        pkg
    } }) => (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navPart1}>
                    <Link className={styles.link} to={"/"} activeClassName={styles.activeLink}>
                        {"Home"}
                    </Link>
                    <Link className={styles.link} to={"/posts"} activeClassName={styles.activeLink}>
                        {"Posts"}
                    </Link>

                    <Link className={styles.link} to={"/resume"} activeClassName={styles.activeLink}>
                        {"Resume"}
                    </Link>
                </div>

                <div className={styles.navPart2}>
                    {pkg.repository && <a href={pkg.repository} className={styles.link} target="github">
                        <Svg svg={gitHubSvg} cleanup /> <span className={styles.NavPart2ItemText}>{"GitHub"}</span>
                    </a>
                    }
                    {pkg.linkedin && <a href={pkg.linkedin} className={styles.link} target="linkedin">
                        <Svg svg={linkedinSvg} cleanup /> <span className={styles.NavPart2ItemText}>{"LinkedIn"}</span>
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
