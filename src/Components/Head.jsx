import React, { useEffect } from "react"; 
import styles from "./Header.module.css"

const Head = (props) => {
    useEffect(() => {
        document.title = props.title;
        document.querySelector('meta[name="description"]').setAttribute('content', props.description)
    }, [props])
    return <></>
}

export default Head;