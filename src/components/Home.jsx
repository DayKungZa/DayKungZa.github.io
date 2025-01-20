import React from 'react';

const Home = () => {
    return (
        <>
            <div className="w-full py-4 text-center" id="robot-sim">
                <img
                    src="./src/image/Day3.jpg"
                    alt="day"
                    className="w-3/4 max-w-sm rounded-3xl mx-auto"
                />
                <h3 className="font-semibold mt-4 text-lg leading-relaxed">
                    Computer Engineering Student with a Passion to Create educational and entertaining experiences,
                    <br />
                    inspiring future generations through software development.
                </h3>
            </div>

            <div className="w-full flex justify-center py-4">
                <span className="flex items-center gap-4">
                    <a href="https://www.youtube.com/channel/UCPU6-NdIKoM6P9HRQ2YA4qg">
                        <img
                            src="./src/icons/kc1.png"
                            alt="KC Icon"
                            className="h-12 rounded-lg p-1"
                        />
                    </a>
                    <a href="https://www.youtube.com/channel/UCL2dv4e7dBbjLYa6ygq88kg">
                        <img
                            src="./src/icons/youtube.svg"
                            alt="YouTube Icon"
                            className="h-12 rounded-lg p-1"
                        />
                    </a>
                    <a href="https://github.com/DayKungZa">
                        <img
                            src="./src/icons/github.png"
                            alt="GitHub Icon"
                            className="h-12 rounded-lg p-1"
                        />
                    </a>
                </span>
            </div>

            <div className="flex flex-col items-center gap-6 px-8 py-4 w-full max-w-3xl mx-auto">
                <a
                    href="https://daykungza.github.io/RobotSim/"
                    className="w-3/4 text-center bg-black text-white py-2 px-4 text-lg rounded-md transition-colors duration-300 hover:bg-blue-500"
                    target="_blank"
                >
                    Robot Simulation
                </a>
                <a
                    href="https://daykungza.github.io/CEDTReview/"
                    className="w-3/4 text-center bg-black text-white py-2 px-4 text-lg rounded-md transition-colors duration-300 hover:bg-blue-500"
                >
                    CEDT Semester 1/1 Review
                </a>
                <a
                    href="https://daykungza.github.io/reviews/"
                    className="w-3/4 text-center bg-black text-white py-2 px-4 text-lg rounded-md transition-colors duration-300 hover:bg-blue-500"
                >
                    Games and Movies Reviews
                </a>
                <a
                    href="https://github.com/DayKungZa"
                    className="w-3/4 text-center bg-black text-white py-2 px-4 text-lg rounded-md transition-colors duration-300 hover:bg-blue-500"
                    target="_blank"
                >
                    My Github
                </a>
                <a
                    href="https://linktr.ee/DayKungZa"
                    className="w-3/4 text-center bg-black text-white py-2 px-4 text-lg rounded-md transition-colors duration-300 hover:bg-blue-500"
                    target="_blank"
                >
                    My Other Links
                </a>
                <p className="text-center">--this website is made by vite + react--</p>
            </div>
        </>
    );
};

export default Home;
