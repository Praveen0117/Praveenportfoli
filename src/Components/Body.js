import TypewriterComponent from "./TypeWriter"

const Body = () => {
    return(
        <div className="h-[100vh] w-[100%] flex flex-col justify-center bg-[rgba(191,191,191,0.88)] mt-0">
            <div className="flex justify-center">
                <div className="h-[400px] w-[400px]">
                    <img className="w-[300px] h-[300px] mr-10 border-cyan-400 hover:border-green-500 focus-within:shadow-2xl  border-2 p-1   rounded-full" src="https://res.cloudinary.com/dllmmxxu1/image/upload/v1711558070/5C3A1347_ptubjb.jpg" />
                </div>
                <div className="mt-[60px]">
                    <div>
                        <h1 className="italic font-serif text-2xl ">Hey Hello!</h1>
                        <h1 className="text-4xl">I'm <span className="text-6xl text-blue-500 font-bold ">Praveen Polaki</span> </h1>
                    </div>
                    <TypewriterComponent />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="mr-[250px] bg-clip-border bg-black p-2 rounded-lg  text-cyan-300 focus:border-blue-400 font-bold border-3">Hire Me</button>
                <button className="  border-red-400 bg-black p-2 rounded-lg font-bold text-green-400">View CV</button>
            </div>
            
        </div>
        
    )
}

export default Body