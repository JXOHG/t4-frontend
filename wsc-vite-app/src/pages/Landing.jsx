import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Landing() {
    return (
        <>
            <div className="w-full left-0">

                {/** HERO */}
                <div className="relative flex flex-col w-full h-[80vh] items-center">
                    <div className="contents relative z-10">
                        <Nav/>
                    </div>
                    <div className="absolute inset-0 bg-[url(/Western1.png)] bg-cover bg-top opacity-25"></div>
                        <div className="relative z-10 flex-grow flex items-center mb-20">
                            <div>
                                <h3 className="text-2xl text-white">Welcome to</h3>
                                <h1 className="text-5xl text-white font-bold">Western's Sales Community</h1>
                            </div>
                        </div>
                    </div>

                {/* MISSION STATEMENT */}
                <div className="w-full left-0 h-500 flex justify-center align-middle gap-20 my-20">
                    <div className="w-1/2 flex items-center justify-center gap-12">
                        <div className="w-1/4">
                            <img src="/WSC Logo.JPEG" alt="Community" className="rounded-2xl shadow-lg aspect-square object-cover" />
                        </div>
                        <div className="w-3/4">
                            <h2 className="text-3xl font-georgia font-bold mb-4 text-left">"Empowering Sales Excellence"</h2>
                            <hr className="w-full border-[#F9C726] mb-5" />
                            <p className="font-georgia text-gray-300 leading-relaxed text-left">
                                Western Sales Club envisions a future where sales education and representation is fully integrated into post-secondary learning, equipping students with practical communication skills, confidence, industry connections, and a supportive community to make a positive impact on personal/social lives and drive career success in any field.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <img className="w-full opacity-50" src="/landscape.png" alt="img1" />
                </div>

                {/* WHAT WE DO */}
                <div className="w-full pb-24 py-16 flex flex-col items-center">
                <h2 className="text-4xl font-georgia font-bold pt-4 mb-16">What We Do</h2>
                <div className="flex justify-center gap-32">
                    <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-purple flex items-center justify-center mb-6 transition-shadow duration-300 hover:shadow-[0_0_30px_#7f42a9]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                    </div>
                    <p className="text-xl font-georgia text-center w-48">
                        Guest Speaker Panels
                    </p>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-purple flex items-center justify-center mb-6 transition-shadow duration-300 hover:shadow-[0_0_30px_#7f42a9]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                    <p className="text-xl font-georgia text-center w-48">
                        Sales Competitions
                    </p>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-purple flex items-center justify-center mb-6 transition-shadow duration-300 hover:shadow-[0_0_30px_#7f42a9]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <p className="text-xl font-georgia text-center w-48">
                        Strategy Engagement
                    </p>
                    </div>
                </div>
                </div>

                <hr className="mx-auto w-2/3 py-14 border-1 border-[#F9C726]" />

                {/* SPONSORS CAROUSEL */}
                <h2 className="text-4xl font-georgia font-bold mb-16">Our Esteemed Sponsors</h2>
                <div className="relative w-full bg-[#1F1F1F] py-4 overflow-hidden">
                <style>{`
                    @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                    }
                    .marquee-track {
                    width: 200%;
                    display: flex;
                    animation: marquee 60s linear infinite;
                    }
                `}</style>

                {/* The marquee-track div holds two sets of logos, each set side by side */}
                <div className="marquee-track">

                    <div className="flex gap-x-24 pl-20">
                    <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                        <img src="/tsi-logo.png" alt="Sponsor 1" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                        <img src="/og-pressure-washing.png" alt="Sponsor 2" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-64 h-48 pr-16 flex-shrink-0 flex items-center justify-center">
                        <img src="/DRT-logo.png" alt="Sponsor 3" className="max-w-full max-h-full object-contain" />
                    </div>
                    </div>

                    <div className="flex gap-x-24">
                    <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                        <img src="/tsi-logo.png" alt="Sponsor 1" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                        <img src="/og-pressure-washing.png" alt="Sponsor 2" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-64 h-48 pr-16 flex-shrink-0 flex items-center justify-center">
                        <img src="/DRT-logo.png" alt="Sponsor 3" className="max-w-full max-h-full object-contain" />
                    </div>
                    </div>

                    <div className="flex gap-x-24">
                    <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                        <img src="/tsi-logo.png" alt="Sponsor 1" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                        <img src="/og-pressure-washing.png" alt="Sponsor 2" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-64 h-48 pr-16 flex-shrink-0 flex items-center justify-center">
                        <img src="/DRT-logo.png" alt="Sponsor 3" className="max-w-full max-h-full object-contain" />
                    </div>
                    </div>
                </div>
                </div>

                <div className="py-8"></div>

                {/* JOIN */}
                <div className="relative w-full h-[50vh] pt-8 flex flex-col items-center">
                    <div className="absolute inset-0 bg-[url(/Western3.png)] bg-cover bg-center opacity-25"></div>
                    <div className="relative z-10 h-full flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-georgia font-bold text-white mb-8">Begin your journey with us today.</h2>
                        <a href="https://westernusc.store/product/western-sales-club/" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 text-m tracking-wider font-georgia bg-[#7f42a9] text-white rounded-lg hover:bg-[#9252b9] transition-all duration-300">Register with WSC</button>
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Landing;