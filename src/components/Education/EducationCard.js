import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '../../utils/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);
    const cardTextColor = theme.tertiary;

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" width='40' height='40' loading='lazy' decoding='async' />
                </div>
                <div className="education-details">
                    <p className='education-years' style={{color: cardTextColor}}>{startYear}-{endYear}</p>
                    <h3 style={{color: cardTextColor}}>{course}</h3>
                    <p className='education-institution' style={{color: cardTextColor}}>{institution}</p>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
