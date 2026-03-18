import React,{useContext} from 'react';
import Fade from '../../../utils/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, icon}) {

    const { theme } = useContext(ThemeContext);
    const getAccessibleColor = (hexColor) => {
        const normalized = hexColor?.replace('#', '');
        if (!normalized || normalized.length !== 6) {
            return '#111111';
        }

        const r = parseInt(normalized.slice(0, 2), 16);
        const g = parseInt(normalized.slice(2, 4), 16);
        const b = parseInt(normalized.slice(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        return luminance > 0.6 ? '#111111' : '#f5f5f5';
    };

    const readableTextColor = getAccessibleColor(theme.primary400);
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
