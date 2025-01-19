import React from 'react';

const Home = () => {
    return (
        <>
            <div className="image-container" id="robot-sim">
                <img src="./src/image/Day3.jpg" alt="day" className="profile-image" />
                <h3>
                    Computer Engineering Student with a Passion to Create educational and entertaining experiences,
                    <br />
                    inspiring future generations through software development.
                </h3>
            </div>

            <div className="icon-row">
                <span>
                    <a href="https://www.youtube.com/channel/UCPU6-NdIKoM6P9HRQ2YA4qg">
                        <img src="./src/icons/kc1.png" alt="KC Icon" className="logo" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCL2dv4e7dBbjLYa6ygq88kg">
                        <img src="./src/icons/youtube.svg" alt="YouTube Icon" className="logo" />
                    </a>
                    <a href="https://github.com/DayKungZa">
                        <img src="./src/icons/github.png" alt="GitHub Icon" className="logo" />
                    </a>
                </span>
            </div>

            <div className="links-container">
                <a href="https://daykungza.github.io/RobotSim/" className="button" target="_blank">
                    Robot Simulation
                </a>
                <a href="https://daykungza.github.io/CEDTReview/" className="button">
                    CEDT Semester 1/1 Review
                </a>
                <a href="https://daykungza.github.io/reviews/" className="button">
                    Games and Movies Reviews
                </a>
                <a href="https://github.com/DayKungZa" className="button" target="_blank">
                    My Github
                </a>
                <a href="https://linktr.ee/DayKungZa" className="button" target="_blank">
                    My Other Links
                </a>
                <br />
                
                <p>--this website is made by vite + react--</p>
            </div>
        </>
    );
};

export default Home;