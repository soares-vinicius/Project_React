import './Header.css'
import React from "react"

export default function Header(props) {
    return (<header className="header d-none d-sm-flex flex-columm">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}>
                {props.title}
            </i>
        </h1>
        <hr />
        <p className="lead text-muted">{props.subtitle}</p>
    </header>)
}