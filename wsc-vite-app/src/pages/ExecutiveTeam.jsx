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
                    src="placeholder-person.png"
                    className="w-[220px] h-[220px] object-cover"
                    style={{ border: "2px solid #ffffff", boxShadow: "0 4px 6px #7f42a9" }}
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    Hudson Bates
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    President, Co-Founder
                </h5>
                </div>
                {/* Executive 2 */}
                <div className="flex flex-col items-center">
                <img
                    src="placeholder-person.png"
                    className="w-[220px] h-[220px] object-cover"
                    style={{ border: "2px solid #ffffff", boxShadow: "0 4px 6px #7f42a9" }}
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    Connor Hinton
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    VP Communications, Co-Founder
                </h5>
                </div>
                {/* Executive 3 */}
                <div className="flex flex-col items-center">
                <img
                    src="placeholder-person.png"
                    className="w-[220px] h-[220px] object-cover"
                    style={{ border: "2px solid #ffffff", boxShadow: "0 4px 6px #7f42a9" }}
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    Owen Gerrard
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    VP Events, Co-Founder
                </h5>
                </div>
                {/* Executive 4 */}
                <div className="flex flex-col items-center">
                <img
                    src="placeholder-person.png"
                    className="w-[220px] h-[220px] object-cover"
                    style={{ border: "2px solid #ffffff", boxShadow: "0 4px 6px #7f42a9" }}
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    Arda Deniz
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    VP External Outreach, Co-Founder
                </h5>
                </div>
                {/* Executive 5 */}
                <div className="flex flex-col items-center">
                <img
                    src="placeholder-person.png"
                    className="w-[220px] h-[220px] object-cover"
                    style={{ border: "2px solid #ffffff", boxShadow: "0 4px 6px #7f42a9" }}
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    Jeevan Sahota
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    VP Finance
                </h5>
                </div>
                {/* Executive 6 */}
                <div className="flex flex-col items-center">
                <img
                    src="placeholder-person.png"
                    className="w-[220px] h-[220px] object-cover"
                    style={{ border: "2px solid #ffffff", boxShadow: "0 4px 6px #7f42a9" }}
                    alt="President Headshot"
                />
                <h4 className="text-center mt-4 mb-0 text-gold font-serif text-xl font-semibold">
                    TBD
                </h4>
                <h5 className="text-center mt-[-4px] font-sans text-base">
                    VP Marketing
                </h5>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default ExecutiveTeam;
