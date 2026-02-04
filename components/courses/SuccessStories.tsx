import React from 'react';

const SuccessStories = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="text-[#D4AF37] text-3xl mb-2">✦</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Success Stories</h2>
                </div>


                <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100 items-center">
                    {/* Left: Content */}
                    <div className="flex-1 space-y-6">
                        <div className="text-6xl text-blue-500 font-serif">“</div>
                        {/* Using a generic quote text as I can't OCR the exact specialized script fully accurately without errors, using English translation/approximation */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                            "I will come, at the same time I will come as a teacher in front of you."
                        </h3>
                        <div className="text-gray-500 italic pb-4 border-b border-gray-200">
                            - Translated text
                        </div>

                        <div>
                            <p className="font-bold text-lg text-black">Sumi</p>
                            <p className="text-sm text-gray-500">Teacher at Don Bosco European Public School, Thrissur</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            <span className="font-semibold text-black">Sumi</span> who was working as a domestic help in the same school she studied in, was asked by the teachers there if she could go to their homes as a domestic help. She said "I will come, at the same time I will come in front of you as a teacher".
                            <br /><br />
                            Sumi is now a KG Teacher Montessori at <span className="font-semibold text-black">Don Bosco European Public School, Thrissur</span> after completing the <span className="font-semibold text-black">Entri Montessori Program</span>.
                        </p>

                        <div className="pt-4">
                            <p className="font-semibold text-gray-800 mb-4">Learn more about our Montessori program</p>
                            <button className="bg-blue-100 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-200 transition-colors w-full md:w-auto">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-md aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Placeholder generic profile image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500">
                                [Student Image]
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    <div className="w-8 h-2 bg-[#D4AF37] rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
