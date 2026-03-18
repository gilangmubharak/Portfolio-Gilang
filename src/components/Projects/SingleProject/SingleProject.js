import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from '../../../utils/Fade';
import { getReadableTextColor } from '../../../utils/colorContrast';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const projectCardTextColor = getReadableTextColor(theme.primary400);

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${projectCardTextColor}`,
            color: projectCardTextColor,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h3
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: projectCardTextColor }}
                    >
                        {name}
                    </h3>
                    <img
                        src={image ? image : placeholder}
                        alt={name}
                        width='260'
                        height='180'
                        loading='lazy'
                        decoding='async'
                    />
                    <div className='project--showcaseBtn'>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-label={`View demo of ${name}`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label='Demo'
                            />
                        </a>
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-label={`View source code of ${name}`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label='Code'
                            />
                        </a>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
