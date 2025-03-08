import React from 'react';
import * as images from "../assets";

const languae = () => {
    const skills = [
        { name: "PHP", icon: images.nodejs },
        { name: "Laravel", icon: images.docker },
        { name: "MySQL", icon: images.css },
        { name: "JavaScript", icon: images.javascript },
        { name: "React", icon: images.reactjs },
        { name: "AngularJS", icon: images.nodejs },
        { name: "WordPress", icon: images.mongodb },
        { name: "Tailwind CSS", icon: images.tailwind },
        { name: "Git", icon: images.git },
        { name: "html",icon: images.html },
    ];

    return (
        <div className="flex flex-wrap justify-center space-x-4 space-y-4 mt-10 ">
            {skills.map((skill, index) => (
                <div key={index} className="hover:rotate-2 hover:-translate-y-2 transition-transform shadow-lg shadow-white/20 hover:shadow-white/50 hover:scale-105 transition-transform flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-full">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                </div>
            ))}
        </div>
    );
};

export default languae;