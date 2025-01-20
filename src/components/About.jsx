import React, {useState} from 'react';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <h1 className="text-center text-2xl font-bold my-4">About Me</h1>

            <div
                className={`rounded-md border-slate-50 border-2 flex items-center p-5 my-4
                            hover:border-black ${isExpanded ? "hover:bg-white" : "hover:bg-blue-100"}
                            transition-all duration-300 ease-in-out`}
                onClick={()=>setIsExpanded(!isExpanded)}
            >
                <img
                    src="./src/image/Day3.jpg"
                    alt="day"
                    className="w-40 h-40 rounded-full"
                />
                <div className="mx-5 px-3">
                    {!isExpanded && (
                        <div>
                            <h2 className="font-bold text-xl">Tawan Jitroongruangnij (Day)</h2>
                            <p>[click for contact]</p>
                        </div>
                    )}
                    {isExpanded && (
                        <div>
                            <p>Tawan Jitroongruangnij (Day)</p>
                            <p>Email: tawanday2006@gmail.com</p>
                            <p>Phone: (+66)95-883-1013</p>
                            <p>LineID: tawan_day</p>
                            <div className="mt-2">
                                <a
                                    href="https://www.facebook.com/daeday.jirroongruangnij/"
                                    className="bg-blue-500 text-white px-3 py-1 rounded mx-1
                                            hover:bg-opacity-80 transition-all duration-300 ease-in-out"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="https://www.instagram.com/daykungza/"
                                    className="bg-pink-500 text-white px-3 py-1 rounded mx-1
                                            hover:bg-opacity-80 transition-all duration-300 ease-in-out"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tawan-jitroongruangnij-112646330/"
                                    className="bg-gray-800 text-white px-3 py-1 rounded mx-1
                                            hover:bg-opacity-80 transition-all duration-300 ease-in-out"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default About;