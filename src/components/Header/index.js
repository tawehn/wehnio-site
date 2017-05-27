import React, { PropTypes } from "react"
import classNames from "classnames"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import linkedinSvg from "../icons/iconmonstr-linkedin-2.svg"
import emailSvg from "../icons/iconmonstr-email-1.svg"

import styles from "./index.css"


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { scrolled: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        if (scrollTop > 10) this.setState({ scrolled: true });
        else this.setState({ scrolled: false });
    }

    render() {
        let headerScrolledOptions = {};
        headerScrolledOptions[styles.headerScrolled] = this.state.scrolled;
        let classes = classNames(styles.header, headerScrolledOptions);
        return <header className={classes}>
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
                    {this.context.metadata.pkg.repository && <a href={this.context.metadata.pkg.repository} className={styles.link} target="github">
                        <Svg svg={gitHubSvg} cleanup /> <span className={styles.NavPart2ItemText}>{"GitHub"}</span>
                    </a>
                    }
                    {this.context.metadata.pkg.linkedin && <a href={this.context.metadata.pkg.linkedin} className={styles.link} target="linkedin">
                        <Svg svg={linkedinSvg} cleanup /> <span className={styles.NavPart2ItemText}>{"LinkedIn"}</span>
                    </a>
                    }
                    {this.context.metadata.pkg.email && <a href={'mailto:' + this.context.metadata.pkg.email} className={styles.link} target="email">
                        <Svg svg={emailSvg} cleanup /> <span className={styles.NavPart2ItemText}>{this.context.metadata.pkg.email}</span>
                    </a>
                    }
                </div>
            </nav>
        </header>
    }
}

Header.contextTypes = {
    metadata: PropTypes.object.isRequired
}



export default Header
