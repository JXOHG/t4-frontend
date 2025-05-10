import React from "react";


function Footer() {
    return (
        <div className="w-full py-10 bg-[#1F1F1F]"> 
            <footer className="text-white flex justify-between items-center">
                <div className="ml-10">
                    <a href="https://uwotsi.com/" target="_blank" rel="noopener noreferrer"><img src='/tsi-logo.png' className="w-12 h-12 hover:opacity-75 delay-100 duration-200 ease-in-out"></img></a>
                </div>
                <div>
                    <p className="text-m">&copy; {new Date().getFullYear()} Western Sales Club. All rights reserved.</p>
                    <div className="flex justify-between py-2 px-14">
                        <a href="https://www.cesoid.com/2048?theme=bkVkd1NxQyU6kED" target="_blank" rel="noopener noreferrer" className="underline text-sm">Terms of Service</a>
                        <a href="https://www.cesoid.com/2048?theme=AFmtBE9JNezgFMt" target="_blank" rel="noopener noreferrer" className="underline text-sm">Privacy Policy</a>
                    </div>
                </div>
                <div className="flex gap-4 mr-10">
                    <a href="https://www.instagram.com/westernsalesclub/" target="_blank" rel="noopener noreferrer"><img src='/instagram-brands.svg' className="w-6 h-6 hover:opacity-75 delay-100 duration-200 ease-in-out"></img></a>
                    <a href="https://www.linkedin.com/company/western-sales-club/" target="_blank" rel="noopener noreferrer"><img src='/linkedin-brands.svg' className="w-6 h-6 hover:opacity-75 delay-100 duration-200 ease-in-out"></img></a>
                </div>
            </footer>
        </div>
       
    )
}

export default Footer;