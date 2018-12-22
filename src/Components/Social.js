import React from 'react'
import {soc} from './content'

export const Social = (props) => (
	<div className='social'>
        {
            soc.map((s,i) =>  
            <a  key={i} href={s.link}>
                <i  className={
                    s.platform === 'youtube' ? 'fab fa-youtube' : 
                    s.platform === 'instagram' ? 'fab fa-instagram' : 
                    s.platform === 'facebook' ? 'fab fa-facebook-f' : 'fab fa-twitter'}></i>
            </a>)
        }
    </div>
)