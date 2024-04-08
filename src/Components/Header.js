import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="flex justify-between mt-0 mb-0 bg-[#e5e7eb] ml-0 mr-0" >
            <div className="flex pl-28 ">
                <img className="w-12 h-12 m-3 rounded-full " src="https://res.cloudinary.com/dllmmxxu1/image/upload/v1711558070/5C3A1347_ptubjb.jpg"  />
                <h1 className="font-extrabold text-black p-5 ">Praveen</h1>
            </div>
            <div className="">
                <ul className="flex mt-5 ">
                    <li className="pr-28  font-bold"> <Link to="/">Home</Link> </li>
                    <li className="pr-28 font-bold"> <Link to="/skills">Skills</Link> </li>
                    <li className="pr-28 font-bold"> <Link to="/projects">Projects</Link> </li>
                    <li className="pr-28 font-bold"> <Link to="/about">About</Link> </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header