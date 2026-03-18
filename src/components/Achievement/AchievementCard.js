import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '../../utils/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h3 style={{color: theme.tertiary}}>{title}</h3>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color: theme.primary}}>
                        <p>{date}</p>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <p>{field}</p>
                        </div>   
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" width='150' height='130' loading='lazy' decoding='async' />
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard
