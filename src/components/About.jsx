import React from 'react';

const About = () => {
    return (
        <>
            <h1 className="text-2xl font-bold my-4">Contact</h1>

            <div className="flex items-center my-4">
                <img
                    src="./src/image/Day3.jpg"
                    alt="day"
                    className="w-24 h-24 rounded-full"
                />
                <div className="mx-5">
                    <h2 className="font-bold text-xl">Tawan Jitroongruangnij (Day)</h2>
                    <p>Computer Engineering and Digital Technology Student</p>
                    <p>Faculty of Engineering, Chulalongkorn University</p>
                    <p className="mt-2">Email: tawanday2006@gmail.com</p>
                    <p>Phone: (+66)95-883-1013</p>
                    <div className="mt-2">
                        <a
                            href="https://www.facebook.com/daeday.jirroongruangnij/"
                            className="bg-blue-500 text-white px-3 py-1 rounded mx-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/daykungza/"
                            className="bg-pink-500 text-white px-3 py-1 rounded mx-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://linktr.ee/DayKungZa"
                            className="bg-gray-800 text-white px-3 py-1 rounded mx-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkTree
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center my-4">
                <div className="mx-5">
                    <h2 className="font-bold text-xl">Education</h2>
                    <p>Computer Engineering and Digital Technology Student</p>
                    <p>Faculty of Engineering, Chulalongkorn University</p>
                    <p className="mt-2">Email: tawanday2006@gmail.com</p>
                    <p>Phone: (+66)95-883-1013</p>
                    <div className="mt-2">
                        <a
                            href="https://www.facebook.com/daeday.jirroongruangnij/"
                            className="bg-blue-500 text-white px-3 py-1 rounded mx-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/daykungza/"
                            className="bg-pink-500 text-white px-3 py-1 rounded mx-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://linktr.ee/DayKungZa"
                            className="bg-gray-800 text-white px-3 py-1 rounded mx-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkTree
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;