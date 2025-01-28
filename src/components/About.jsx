import React, {useState} from 'react';

import aboutData from "../info/about.json"; // Import JSON file

const About = () => {
    // Track expanded state for each block
    const [expandedBlocks, setExpandedBlocks] = useState({});

    const toggleExpand = (index) => {
        setExpandedBlocks((prev) => ({
            ...prev,
            [index]: !prev[index] // Toggle the state for the specific block
        }));
    };

    return (
        <div>
            <h1 className="text-center text-2xl font-bold my-4">About Me</h1>

            {aboutData.aboutText.map((entry, index) => (
                <div
                    key={index}
                    className={`rounded-md border-slate-50 border-2 flex items-center p-5 my-4
                                cursor-pointer hover:border-black ${
                                    expandedBlocks[index]
                                        ? "hover:bg-white"
                                        : "hover:bg-blue-100"
                                } transition-all duration-300 ease-in-out w-150 h-50`}
                    onClick={() => toggleExpand(index)}
                >
                    <img
                        src={entry.image}
                        alt={`About ${index}`}
                        className="w-40 h-40 rounded-full"
                    />
                    <div className="mx-5 px-3">
                        {!expandedBlocks[index] && (
                            <div>
                                <h2 className="font-bold text-xl">
                                    {entry.closedTexts[0]}
                                </h2>
                                <p>{entry.closedTexts[1]}</p>
                            </div>
                        )}
                        {expandedBlocks[index] && (
                            <div>
                                {entry.expandTexts.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                                {entry.links && (
                                    <div className="mt-2">
                                        {entry.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                className={`${link.color} text-white px-3 py-1 rounded mx-1
                                                            hover:bg-opacity-80 transition-all duration-300 ease-in-out`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.text}
                                            </a>
                                        ))}
                                    </div>
                                )}  
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default About;