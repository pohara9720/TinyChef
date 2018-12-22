import React from 'react'

export const Intro = (props) => (
	<div className='intro'>
        <div className='main-avatar'></div>
        <h1>{props.title}</h1>
        <h5>{props.info}</h5>
    </div>
)