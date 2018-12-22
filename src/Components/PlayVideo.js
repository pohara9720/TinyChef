import React from 'react'

export const PlayVideo = (props) => (
	<div className='iframe-container'>
        <iframe title='active' src={props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
)