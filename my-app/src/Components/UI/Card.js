import "../../Styles/Card.css"
import '../../Styles/ExpensItem.css'
import React from "react"

function Card(props){
    const classes = "card " + props.className ;
    return <div className={classes}>{props.children}</div>;

}
export default Card;