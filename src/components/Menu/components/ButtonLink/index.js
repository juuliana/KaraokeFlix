import React from 'react';

export default function ButtonLink(props){
    //props => {className: "o valor passado", href: "/"}
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}