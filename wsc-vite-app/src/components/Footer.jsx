import React from "react";


function Footer() {
    return (
        <div className="w-full py-10 bg-[#414141]"> 
            <footer className="text-white flex justify-between items-center">
                <div className="ml-10">
                    <a href="https://uwotsi.com/"><img src='/tsi-logo.png' className="w-12 h-12 hover:opacity-75 delay-100 duration-200 ease-in-out"></img></a>
                </div>
                <div>
                    <p className="text-m">&copy; {new Date().getFullYear()} Western Sales Club. All rights reserved.</p>
                    <div className="flex justify-between py-2 px-14">
                        <a href="https://www.cesoid.com/2048?theme=bkVkd1NxQyU6kED" className="underline text-sm">Terms of Service</a>
                        <a href="https://www.cesoid.com/2048?theme=AFmtBE9JNezgFMt" className="underline text-sm">Privacy Policy</a>
                    </div>
                </div>
                <div className="flex gap-4 mr-10">
                    <a href=""><img src='/instagram-brands.svg' className="w-6 h-6 hover:opacity-75 delay-100 duration-200 ease-in-out"></img></a>
                    <a href=""><img src='/linkedin-brands.svg' className="w-6 h-6 hover:opacity-75 delay-100 duration-200 ease-in-out"></img></a>
                </div>
            </footer>
        </div>
       
    )
}

export default Footer;