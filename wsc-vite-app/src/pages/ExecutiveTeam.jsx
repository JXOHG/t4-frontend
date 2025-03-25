import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ExecutiveTeam() {
    return (
        <>
            <Nav />
            <div className="flex flex-col justify-center w-[850px] mx-auto">
                <h1 className="text-center">Executive Team</h1>
                <div>
                    <hr className="border-t-2 border-gold my-10" />
                    <div className="my-20 flex items-center gap-8 w-[200px]">
                    <img src="lebron.jpg" className="w-[200px] h-[200px] object-cover" alt="President Headshot" />
                    <p className="text-left my-1">
                            Our mission is to promote the sport of weightlifting in the Washington State area.
                    </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ExecutiveTeam;
