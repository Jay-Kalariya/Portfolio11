import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({ id, title, details, date,date1, date2, field, field1, field2, image }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
            <div key={id} className={`achievement-card ${classes.achievementCard}`}>
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{ color: theme.primary }}>
                        <h5>{date} {date1} {date2}</h5>
                        {/* <h5>{date1}</h5>
                        <h5>{date2}</h5> */}
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <a href=""
                                target='_blank'
                                rel='noreferrer'
                            >{field}</a>
                            <a href=""
                                target='_blank'
                                rel='noreferrer'
                            >{field1}</a>
                            <a href=""
                                target='_blank'
                                rel='noreferrer'
                            >{field2}</a>
                        </div>
                    </div>
                </div>
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
            </div>
        </Fade>

    )
}

export default AchievementCard
