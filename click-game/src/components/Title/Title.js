import React from "react";
import "./Title.css";

const Title = props => (
    <div className="header">
        <h1 className="title">{props.children}</h1>
        <div className="scores">
            <h4 className="scores">THE OWLS ARE NOT WHAT THEY SEEM</h4>
            SCORE: {props.score} | HIGH SCORE: {props.highscore}
        </div>
    </div>
);

export default Title;
