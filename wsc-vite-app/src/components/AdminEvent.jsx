export default function AdminEvent( { title, date, location } ) {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-lg ml-64">
            <div className="flex-top mb-12">
                <h2 className="text-2xl font-bold text-gray-800 text-left font-inter">{ title }</h2>
            </div>
            <div className="flex-bottom text-left">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-bold text-black flex-bottom font-inter">{ date }</p>
                        <span className="flex-bottom text-black font-inter"> { location }</span>
                    </div>
                    <button className="bg-[#eee] hover:bg-[#f5f5f5] text-black font-bold py-3 px-6 mr-4 rounded-lg transition duration-300 focus:outline-none">Edit</button>
                </div>
            </div>
        </div>
    );
}

