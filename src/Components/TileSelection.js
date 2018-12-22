import React from 'react'

export const TileSelection = (props) => (
	<div className='tiles-select row'>
        <h3>Videos</h3>
        {
            props.tiles.map((t,i) => <div onClick={() => props.click(t)} key={i} style={{backgroundImage: `url(${t.thumbnail})`}} className='c6 tile-img'></div>)
        }
    </div>
)