import React from 'react'

export const VideoCover = (props) => (
	<div style={{backgroundImage: `url(${props.cover})`}} className='video-cover'>
        <div className='overlay'>
            <div>
                <h1>{props.title}</h1>
                <h3>{props.caption}</h3>
            </div>
            <div className='icon-container'>
                <i onClick={() => props.click()} className="far fa-play-circle"></i>
            </div>
        </div>
    </div>
)