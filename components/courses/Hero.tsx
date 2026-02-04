import React from 'react';


const Hero = () => {
    return (
        <section className="bg-black text-white min-h-[80vh] flex items-center justify-center p-6 md:p-12 overflow-hidden relative">
            {/* Background Accent - Gold Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>


            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                {/* Left Content */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        India’s best <br />
                        <span className="text-[#D4AF37]">learning app</span> <br />
                        to get a job
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg">
                        Test-Prep & Job-Oriented courses for your dream career. Start learning today with industry experts.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300">
                            Start Learning
                        </button>
                        <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#D4AF37] hover:text-black transition-colors duration-300">
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Right Content - Mockup */}
                <div className="relative h-[600px] w-full flex items-center justify-center bg-[#111] rounded-[3rem] border border-gray-800 p-8 shadow-2xl">
                    {/* Inner "Phone Screen" representation */}
                    <div className="bg-white w-full h-full rounded-[2rem] overflow-hidden relative flex flex-col p-6 items-center">
                        <div className="text-black font-bold text-2xl mb-6">Learn in Your Language</div>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            {['Malayalam', 'Hindi', 'Telugu', 'Kannada', 'Tamil', 'Urdu', 'Marathi', 'Bengali'].map((lang, i) => (
                                <div key={i} className="bg-gray-100 p-4 rounded-xl flex items-center gap-3 hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer group">
                                    <div className={`w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 group-hover:bg-white`}></div>
                                    <span className="font-medium text-gray-800 group-hover:text-black">{lang}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
