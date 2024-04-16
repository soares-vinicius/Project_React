import './Footer.css'
import React from "react"

export default function Footer(props) {
    return (
        <footer className="footer">
            <span>
                Desenvolvido com <i className="fa fa-heart text-danger"></i> por
                <strong> Vinicius <span className='text-danger'> Soares</span></strong>
            </span>
        </footer>
    )
}
