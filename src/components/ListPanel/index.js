import React, { PropTypes } from "react"
import Panel from "../Panel";
import styles from "./index.css"

const ListPanel = (props) => {
    return (
        <Panel className={styles.wrapper} title={props.title}>
            <ul>
                {props.items.map(i => <li>{i}</li>)}
            </ul>
        </Panel>
    );
}

ListPanel.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,


}

export default ListPanel
