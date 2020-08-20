import React from 'react';

import { SkillCard } from './skillcard/skillcard';

import './skills.css';
const skills = {
    techSkills: [
        "JavaScript",
        "NodeJS",
        "ReactJS",
        "Redux",
        "Java",
        "HTML",
        "CSS",
        "Bootstrap",
        "Git",
        "GitHub",
        "MongoDB",
    ],
    industryKnowledge: [
        "Software",
        "Marketing",
        "Publicity",
        "Blogging",
        "Content Writing",
        "Creative Writing",
        "Web Content",
        "Frontend",
        "Software",
        "Backend",
        "Design",
        "Web",
        "Android"
    ],
    interpersonalSkills: [
        "Communication",
        "Teaching",
        "Time Management",
        "Leadership",
        "Management"
    ]
};
const Skills = () => {
    return (
        <div className="skills-container">
            <h3>Industry Knowledge</h3>
            <div className="industry-skill-container">
                {
                    skills.industryKnowledge.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            <h3>Tech Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.techSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            <h3>Interpersonal Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.interpersonalSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            
        </div>
    )
}

export default Skills;