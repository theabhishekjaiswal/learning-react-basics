function Card({profilePic, name, profession, age, bio}){
    return(
        <>
            <div className="max-w-sm mx-auto bg-white rounded-2x1 shadow-lg overflow-hidden hover: shadow-2x1 transition-shadow duration-300 p-4">
                <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-32 h-2/3 rounded-full mx-auto border-2 border-blue-500 object-cover"
                />
                <div className="text-center mt-4">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <p className="text-blue-600 font-medium">{profession}</p>
                    <p className="text-gray-500 text-sm mt-1">Age: {age}</p>
                    <p classname="text-gray-700 mt-2">{bio}</p>
                </div>
            </div>
        </>

    )
}

export default Card