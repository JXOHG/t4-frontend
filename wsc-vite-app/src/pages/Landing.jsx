import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

function Landing({ events, loading, error }) {
    const previewEvents = events?.slice(0, 3) || [];
    const formRef = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm('service_qwpe0fl', 'template_lt8anmn', formRef.current, publicKey)
        .then((result) => {
            alert("Message sent successfully!");
            e.target.reset();
        }, (error) => {
            alert("Failed to send message. Please try again.");
            console.error(error);
        });
    };

    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="w-full left-0">

                {/** HERO */}
                <div className="relative flex flex-col w-full h-[80vh] items-center">
                    <div className="contents relative z-10">
                        <Nav/>
                    </div>
                    <div
                        className="absolute inset-0 bg-[url(/TORONTO.jpeg)] bg-cover bg-top opacity-50"
                        style={{ backgroundPositionY: `${scrollY * 0.4}px` }}
                    ></div>
                    <div className="relative z-10 flex-grow flex items-center">
                        <div>
                            <h3 className="text-xl md:text-2xl text-white">Welcome to</h3>
                            <h1 className="text-3xl md:text-5xl text-white font-bold">Western's Sales Community</h1>
                        </div>
                    </div>
                </div>

                {/* ABOUT US */}
                <section id="about" className="section-padding bg-western-dark px-12 py-16">
                <div className="container-custom">
                    <div className="text-center py-8">
                    <h2 className="text-3xl md:text-4xl font-bold">About Our Club</h2>
                    <div className="w-20 h-1 bg-western-gold mx-auto"></div>
                    </div>

                    <hr className="mx-auto w-2/3 pb-12 border-1 border-[#F9C726]" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        <h3 className="text-2xl font-bold">Who We Are</h3>
                        <p className="text-lg text-gray-300">
                        Western Sales Club is at the frontier of sales education at Western University.
                        We're not just teaching sales, we're building effective communicators and personable leaders –
                        giving you the confidence to succeed in any field.
                        </p>
                        <h3 className="text-2xl font-bold pt-4">Our Mission</h3>
                        <p className="text-lg  text-gray-300 pb-4">
                            Western Sales Club envisions a future where sales education and representation 
                            is fully integrated into post-secondary learning, equipping students with practical 
                            communication skills, confidence, industry connections, and a supportive community to 
                            make a positive impact on personal/social lives and drive career success in any field.
                        </p>
                        
                        <div className="pb-4">
                        <a href="/executive-team" style={{ all: 'unset' }}>
                        <button className="px-4 py-2  tracking-wider font-georgia bg-[#4f2683] text-white rounded-lg hover:bg-[#9252b9] transition-all duration-300">
                            Meet our Team
                        </button>
                        </a>
                        </div>
                        

                    </div>
                    <div className="order-1 md:order-2 bg-white rounded-lg shadow-lg p-8">
                        <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-4 border-b-2 border-gold">
                            <h4 className="text-4xl font-bold text-[#4f2683]">50+</h4>
                            <p className="text-gray-600">Active Members</p>
                        </div>
                        <div className="text-center p-4 border-b-2 border-gold">
                            <h4 className="text-4xl font-bold text-[#4f2683]">3+</h4>
                            <p className="text-gray-600">Esteemed Partners</p>
                        </div>
                        <div className="text-center p-4 border-b-2 border-gold">
                            <h4 className="text-4xl font-bold text-[#4f2683]">8+</h4>
                            <p className="text-gray-600">Annual Events</p>
                        </div>
                        <div className="text-center p-4 border-b-2 border-gold">
                            <h4 className="text-4xl font-bold text-[#4f2683]">10</h4>
                            <p className="text-gray-600">Committed Executives</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* LANDSCAPE IMAGE */}
                <div className="relative flex flex-col w-full h-[50vh] items-center">
                    <div
                        className="absolute inset-0 bg-[url(/VANCOUVER.jpg)] bg-cover bg-top opacity-40"
                        style={{ backgroundPositionY: `${scrollY * 0.22}px` }}
                    ></div>

                    <div className="relative z-10 flex-grow flex items-center text-gray-200">
                        <div>
                            <h1 className="text-2xl md:text-4xl text-white px-4 font-bold italic">"Empowering Sales Excellence"</h1>
                        </div>
                    </div>
                </div>

                {/* WHAT WE DO */}
                <div id="team" className="w-full pb-12 sm:pb-24 py-8 sm:py-16 flex flex-col items-center px-12">
                <h2 className="text-3xl sm:text-4xl font-georgia font-bold pt-4 mb-4">What We Do</h2>
                <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-8 sm:gap-16 mb-12 max-w-5xl">
                    <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-purple flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_30px_#7f42a9]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 sm:w-16 sm:h-16 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                    </div>
                    </div>
                    <div className="text-lg sm:text-xl font-georgia text-white sm:text-left">
                    <h3 className="font-bold text-2xl mb-4">Guest Speaker Panels</h3>
                    <p className="text-lg text-gray-300">
                        Gain direct exposure to accomplished professionals across a variety of industries through our engaging speaker panels. 
                        Learn about their journeys, challenges, and the sales and communication skills that helped them succeed—offering you both 
                        inspiration and actionable advice.
                    </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start sm:justify-center gap-8 sm:gap-16 mb-12 max-w-5xl">
                    <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-purple flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_30px_#7f42a9]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 sm:w-16 sm:h-16 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                    </div>
                    <div className="text-lg sm:text-xl font-georgia text-white sm:text-right">
                    <h3 className="font-bold text-2xl mb-4">Sales Competitions</h3>
                    <p className="text-lg text-gray-300">
                        Our sales competitions are a fun, energizing way to learn by doing. 
                        Whether you’re brand new or experienced, you’ll enjoy role-playing real-world scenarios, 
                        refining your pitch, and receiving feedback from judges—all while building confidence and making new connections.
                    </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-8 sm:gap-16 max-w-5xl">
                    <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-purple flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_30px_#7f42a9]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 sm:w-16 sm:h-16 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                    </div>
                    </div>
                    <div className="text-lg sm:text-xl font-georgia text-white sm:text-left">
                    <h3 className="font-bold text-2xl mb-4">Strategy Enhancement</h3>
                    <p className="text-lg text-gray-300">
                        Western Sales Club partners with actual organizations and businesses to offer students the opportunity 
                        to apply sales strategies in meaningful, real-world projects. These experiences help develop your 
                        problem-solving, communication, and strategic thinking in a professional context.
                    </p>
                    </div>
                </div>
                </div>

                <hr className="mx-auto w-2/3 py-14 border-1 border-[#F9C726]" />

                {/* EVENTS PREVIEW */}
                <section id="events" className="section-padding pb-32 px-12">
                <div className="container-custom">
                    <div className="text-center mb-12">
                    <h2 className="text-4xl font-georgia font-bold mb-4">Our Events</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                        Join us for our upcoming events designed to help you develop your skills and expand your network.
                    </p>
                    </div>

                    <div className="text-center">
                        <div className="pb-12">
                        <a href="/events" className="btn-secondary" style={{ all: 'unset' }}>
                        <button className="px-8 py-4 tracking-wider text-lg font-georgia bg-[#4f2683] text-white rounded-lg hover:bg-[#9252b9] transition-all duration-300">
                            View Full Events
                        </button>
                        </a>
                        </div>
                    
                        <div className="space-y-8">
                        {loading ? (
                        <div className="items-center space-y-8">
                            {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto animate-pulse"
                            >
                                {/* DATE BLOCK */}
                                <div className="bg-[#4f2683] text-white px-6 py-6 md:w-1/4 flex flex-col items-center justify-center">
                                <div className="h-5 w-20 bg-purple-300 rounded mb-2"></div>
                                <div className="h-8 w-16 bg-purple-300 rounded mb-2"></div>
                                <div className="h-4 w-24 bg-purple-300 rounded"></div>
                                </div>

                                {/* CONTENT BLOCK */}
                                <div className="px-6 py-4 md:w-3/4 text-left flex flex-col justify-center">
                                <div className="h-6 w-1/2 bg-gray-300 rounded mb-3"></div>
                                <div className="h-4 w-1/3 bg-gray-300 rounded mb-2"></div>
                                <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
                                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                            ))}
                        </div>

                        ) : error ? (
                            <p className="text-center text-gray-700">No events to show right now.</p>

                        ) : previewEvents.length > 0 ? (
                            previewEvents.map((event) => {
                            const dateObj = new Date(event.event_date);
                            const month = dateObj.toLocaleString('default', { month: 'long' });
                            const day = dateObj.getDate();
                            const year = dateObj.getFullYear();
                            const rawTime = event.event_date.split(' ')[4]; // "19:00:00"
                            const [hour, minute] = rawTime.split(':').map(Number);
                            const hour12 = hour % 12 || 12;
                            const ampm = hour < 12 ? 'AM' : 'PM';
                            const time = `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;

                            return (
                                <div
                                key={event.event_id}
                                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto"
                                >

                                {/* DATE BLOCK */}
                                <div className="bg-[#4f2683] text-white px-6 py-6 md:w-1/4 flex flex-col items-center justify-center">
                                    <div className="text-lg">{month} {day}</div>
                                    <div className="text-3xl font-bold">{year}</div>
                                    <div className="text-sm mt-2">{time}</div>
                                </div>

                                {/* CONTENT BLOCK */}
                                <div className="px-6 py-4 md:w-3/4 text-left flex flex-col justify-center">
                                    <h3 className="py-1">{event.title}</h3>
                                    <p className="text-gray-600 text-sm flex items-center mb-2">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A4 4 0 109.586 16.657L13.83 20.9a.5.5 0 00.707 0l3.12-3.12a.5.5 0 000-.707z" />
                                    </svg>
                                    {event.location}
                                    </p>
                                    <p className="text-gray-700 mb-4">{event.description}</p>
                                </div>
                                </div>
                            );
                            })
                        ) : (
                            <p className="text-center text-gray-700">No events to show right now.</p>
                        )}
                        </div>
                    </div>
                </div>
                </section>

                {/* SPONSORS CAROUSEL */}
                <h2 className="text-4xl font-georgia font-bold mb-16">Our Esteemed Sponsors</h2>
                <div className="relative w-full bg-[#1F1F1F] py-4 mb-8 overflow-hidden">
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

                    {[...Array(5)].map((_, index) => (
                        <div
                        key={index}
                        className="flex flex-col md:flex-row items-center"
                        >
                            <div className="flex gap-x-16">
                            <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                                <img src="/TSI.png" alt="Sponsor 1" className="max-w-full max-h-full object-contain" />
                            </div>
                            <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center">
                                <img src="/OGPW.png" alt="Sponsor 2" className="max-w-full max-h-full object-contain" />
                            </div>
                            <div className="w-64 h-48 pr-12 flex-shrink-0 flex items-center justify-center">
                                <img src="/DRT.png" alt="Sponsor 3" className="max-w-full max-h-full object-contain" />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>

                <div className="py-8"></div>

                {/* CONTACT US */}
                <section id="contact" className="px-12 pb-24 section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-western-purple mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-lg">
                        Interested in joining our club or partnering with us? We'd love to hear from you!
                    </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="bg-[#4f2683] text-white p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-12">Connect With Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                            <a
                                href="https://www.linkedin.com/company/western-sales-club/"
                                className="hover:text-western-gold transition-colors"
                                aria-label="LinkedIn"
                            >
                                <img
                                src="/Linkedin.svg"
                                className="w-10 h-10 hover:opacity-75 transition duration-200 ease-in-out"
                                alt="LinkedIn"
                                />
                            </a>
                            <span className="text-md">Western Sales Club</span>
                            </div>

                            <div className="flex items-center space-x-4">
                            <a
                                href="https://www.instagram.com/westernsalesclub/"
                                className="hover:text-western-gold transition-colors"
                                aria-label="Instagram"
                            >
                                <img
                                src="/Instagram.svg"
                                className="w-10 h-10 hover:opacity-75 transition duration-200 ease-in-out"
                                alt="Instagram"
                                />
                            </a>
                            <span className="text-md">@westernsalesclub</span>
                            </div>
                        </div>
                        </div>

                        <div className="p-8">
                        <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
                        <form className="space-y-4" onSubmit={sendEmail} ref={formRef}>
                            <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-western-purple"
                                placeholder="John Doe"
                                required
                            />
                            </div>
                            <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-western-purple"
                                placeholder="johndoe@example.com"
                                required
                            />
                            </div>
                            <div>
                            <label htmlFor="organization_type" className="block text-sm font-medium text-gray-700 mb-1">
                                Organization Type (optional)
                            </label>
                            <input
                                type="text"
                                id="organization_type"
                                name="organization_type"
                                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-western-purple"
                                placeholder="Who are you representing?"
                            />
                            </div>
                            <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject*
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-western-purple"
                                placeholder="How can we help you?"
                                required
                            />
                            </div>
                            <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-western-purple"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                            </div>
                            <button
                            type="submit"
                            className="btn-primary w-full bg-[#4f2683]"
                            >
                            Send Message
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* JOIN */}
                <div className="relative w-full h-[60vh] py-8 flex flex-col items-center">
                    <div
                        className="absolute inset-0 bg-[url(/CHICAGO.jpg)] bg-cover bg-center opacity-40"
                        style={{ backgroundPositionY: `${scrollY * 0.13}px` }}
                    ></div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-georgia font-bold text-white mb-8 px-12">Begin your journey with us today.</h2>
                        <a href="https://westernusc.store/product/western-sales-club/" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 text-m tracking-wider font-georgia bg-[#4f2683] text-white rounded-lg hover:bg-[#9252b9] transition-all duration-300">Register with WSC</button>
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Landing;
