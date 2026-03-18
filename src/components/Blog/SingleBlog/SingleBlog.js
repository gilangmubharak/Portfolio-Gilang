import React from 'react'
import Fade from '../../../utils/Fade';

import placeholder from '../../../assets/png/placeholder.png'
import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <Fade bottom>
            <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.primary400}} aria-label={`Read blog: ${title}`}>
                <div className="singleBlog--image" style={{backgroundColor: theme.secondary}}>
                    <img
                        src={image ? image : placeholder}
                        alt={title}
                        width='320'
                        height='210'
                        loading='lazy'
                        decoding='async'
                    />
                </div>
                <div className="singleBlog--body">
                    <p style={{color: theme.tertiary}}>{date}</p>
                    <h3 style={{color: theme.secondary}}>{title}</h3>
                    <p className='singleBlog--desc' style={{color: theme.secondary}}>{desc}</p>
                </div>
            </a>
        </Fade>
    )
}

export default SingleBlog
