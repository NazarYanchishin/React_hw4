import React from "react";
import "./style.css"

function Post(props) {
    return (
        <div>
            <div className={'userBar'}>
                <img className={'userImg'} src={props.author.photo} alt=""/>
                <div className={'userText'}>
                    <span className={'userName'}>{props.author.name}</span>
                    <span className={'date'}>{props.date}</span>
                    <p>{props.content}</p>
                </div>
            </div>
                <div>
                    <img className={'contentImg'} src={props.image} alt=""/>
                </div>

        </div>
    );
}

export default Post