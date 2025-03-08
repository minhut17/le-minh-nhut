import React from 'react';
// import './Experience.css'; // Assuming you have some CSS for styling

const Experience = () => {
    const experiences = [
        {
            title: "React.js Developer",
            company: "Starbucks",
            date: "March 2020 - April 2021",
            description: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ]
        },
        {
            title: "React Native Developer",
            company: "Tesla",
            date: "Jan 2021 - Feb 2022",
            description: [
                "Developing and maintaining mobile applications using React Native and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility."
            ]
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4">
                        <div className="timeline-content">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <h4 className="text-lg text-gray-700">{exp.company}</h4>
                            <p className="text-gray-500">{exp.date}</p>
                            <ul className="list-disc list-inside">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-gray-800">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
