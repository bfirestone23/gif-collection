import React from 'react';

export default function Gif(props) {
    return (
        <div>
            {props.renderButton()}
            <a rel='noreferrer' target='_blank' href={props.url}>
                <img 
                    onLoad={props.handleLoad} 
                    className='gif rounded img-fluid m-1' 
                    alt={props.title} 
                    src={props.src} 
                />
            </a>
        </div>
    );
}