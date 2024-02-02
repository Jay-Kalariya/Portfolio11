import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

function Achievement() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Achievements</h1>
                    <h4 style={{color:theme.tertiary}}>{achievementData.bio}</h4>
                </div>
                <div className="achievement-cards">
                    {achievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        date1={achieve.date1}
                        date2={achieve.date2}
                        field={achieve.field}
                        field1={achieve.field1}
                        field2={achieve.field2}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Achievement
