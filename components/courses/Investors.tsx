import React from 'react';

const Investors = () => {
    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <div className="text-[#D4AF37] text-3xl mb-2 flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">Investors and Recognitions</h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="font-bold text-2xl text-gray-800 flex items-center gap-2">
                        <span className="text-blue-500">Google</span> for Startups
                    </div>

                    <div className="text-center">
                        <div className="font-bold text-gray-800 text-sm tracking-wider">WORLD<br />ECONOMIC<br />FORUM</div>
                        <div className="text-[0.6rem] mt-1">2024 Technology Pioneer</div>
                    </div>

                    <div className="font-bold text-gray-800 uppercase tracking-widest text-sm flex items-center gap-2">
                        <span className="text-blue-500 text-2xl">UN</span> OMIDYAR NETWORK INDIA
                    </div>

                    <div className="font-serif italic font-bold text-3xl text-gray-800">
                        verlinvest
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Investors;
