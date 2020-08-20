import React from 'react';

import './skillcard.css';

export const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card">
            {skill}
        </div>
    )
}