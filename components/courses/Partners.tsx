import React from 'react';

// Using simple stylized typography as placeholders for logos if images aren't real
const Partners = () => {
    return (
        <section className="bg-white pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
                    Course <span className="text-[#D4AF37]">Partners</span>
                    <p className="text-base text-gray-500 font-normal mt-2">Our programs are certified by the best in the world</p>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    {/* Partner 1 */}
                    <div className="h-40 bg-gray-50 rounded-2xl flex items-center justify-center p-8 hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="text-center">
                            <div className="text-red-600 font-bold text-xl border-2 border-red-600 p-2 inline-block">ILLINOIS TECH</div>
                            <div className="text-[0.6rem] font-bold mt-1 text-yellow-500 uppercase">Certified</div>
                        </div>
                    </div>

                    {/* Partner 2 */}
                    <div className="h-40 bg-gray-50 rounded-2xl flex items-center justify-center p-8 hover:shadow-lg transition-shadow border border-gray-100">
                        <span className="text-4xl font-serif italic font-bold">pwc</span>
                    </div>

                    {/* Partner 3 */}
                    <div className="h-40 bg-gray-50 rounded-2xl flex items-center justify-center p-8 hover:shadow-lg transition-shadow border border-gray-100 relative">
                        <div className="border-2 border-black p-4 text-xs font-bold uppercase tracking-widest relative">
                            aws
                            <br />
                            <span className="text-lg">partner</span>
                        </div>
                    </div>

                    {/* Partner 4 */}
                    <div className="h-40 bg-gray-50 rounded-2xl flex items-center justify-center p-8 hover:shadow-lg transition-shadow border border-gray-100">
                        <span className="text-blue-800 text-5xl font-bold tracking-tighter">SAP</span>
                    </div>

                    {/* Partner 5 */}
                    <div className="h-40 bg-gray-50 rounded-2xl flex items-center justify-center p-8 hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-gray-800">N.S.D.C</span>
                            <span className="text-[0.6rem] text-gray-500 text-center">National Skill Development Corporation</span>
                        </div>
                    </div>

                    {/* Partner 6 */}
                    <div className="h-40 bg-gray-50 rounded-2xl flex items-center justify-center p-8 hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="text-center font-serif">
                            <span className="text-red-800 text-xl font-bold block">CAMBRIDGE</span>
                            <span className="text-sm text-gray-700">English Educational Partner</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
