import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ExecutiveTeam() {
    return (
        <>
            <Nav />
            <div className="flex flex-col justify-center w-[850px] mx-auto mb-20">
            <h1 className="text-center text-3xl font-bold mb-4">Executive Team</h1>
            <hr className="border-t-2 border-gold my-10" />

            <div className="grid grid-cols-3 gap-x-8 my-10 gap-y-20">
                {/* Executive 1 */}
                <div className="flex flex-col items-center">
                <img
                    src="lebron.jpg"
                    className="w-[200px] h-[220px] object-cover"
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    LeBron James
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    President
                </h5>
                </div>
                {/* Executive 1 */}
                <div className="flex flex-col items-center">
                <img
                    src="lebron.jpg"
                    className="w-[200px] h-[220px] object-cover"
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    LeBron James
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    President
                </h5>
                </div>
                {/* Executive 1 */}
                <div className="flex flex-col items-center">
                <img
                    src="lebron.jpg"
                    className="w-[200px] h-[220px] object-cover"
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    LeBron James
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    President
                </h5>
                </div>
                {/* Executive 1 */}
                <div className="flex flex-col items-center">
                <img
                    src="lebron.jpg"
                    className="w-[200px] h-[220px] object-cover"
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    LeBron James
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    President
                </h5>
                </div>
                {/* Executive 1 */}
                <div className="flex flex-col items-center">
                <img
                    src="lebron.jpg"
                    className="w-[200px] h-[220px] object-cover"
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    LeBron James
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    President
                </h5>
                </div>
                {/* Executive 1 */}
                <div className="flex flex-col items-center">
                <img
                    src="lebron.jpg"
                    className="w-[200px] h-[220px] object-cover"
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    LeBron James
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    President
                </h5>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default ExecutiveTeam;
