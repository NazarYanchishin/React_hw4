import React from "react";
import "./Style_Contact_Book.css"
import Contracts from './index.js'

function ContactBook(pros) {
    return (
        <div>
            <div className={'wrapper'}>
                <div className={'name'}>Імя</div>
                <div className={'sureName'}>Прізвище</div>
                <div className={'number'}>Номер</div>
            </div>
            <div>
                <Contracts/>
            </div>

        </div>
    );
}

export default ContactBook;