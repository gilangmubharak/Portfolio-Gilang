import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '../../utils/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {

    const { theme } = useContext(ThemeContext);
    const cardTextColor = theme.tertiary;

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" width='36' height='36' loading='lazy' decoding='async' />
                </div>
                <div className="experience-details">
                    <p className='experience-years' style={{color: cardTextColor}}>{startYear}-{endYear}</p>
                    <h3 style={{color: cardTextColor}}>{jobtitle}</h3>
                    <p className='experience-company' style={{color: cardTextColor}}>{company}</p>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
