import React,{useContext} from 'react';
import Fade from '../../../utils/Fade';
import { getReadableTextColor } from '../../../utils/colorContrast';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, icon}) {

    const { theme } = useContext(ThemeContext);
    const readableTextColor = getReadableTextColor(theme.primary400);
    return (
        <Fade bottom>
            <div key={id} className="single-service" style={{backgroundColor:theme.primary400}}>
                <div className="service-content"  style={{color: readableTextColor}}>
                    <i className="service-icon" style={{color: readableTextColor}}>{icon}</i>
                    <h3 style={{color: readableTextColor}}>{title}</h3>
                </div>         
            </div>
        </Fade>
    )
}

export default SingleService
