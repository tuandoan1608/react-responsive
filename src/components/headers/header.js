import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import SidbarLeft from "./sidbarLeft";
import SiderBarRight from "./sidbarRight";
const Header = () => {

    const dropDown = (e) => {
        document.getElementById('myDropdown').classList.toggle('invisible')
    }

    return (
        <div className="bg-gray-800 font-sans mt-12">
            <nav className="bg-gray-800 w-full pb-2 px-1 mt-0 h-auto fixed pt-1 z-20 top-0">
                <div className="flex flex-wrap items-center">
                    <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                        <a href="#">
                            <span class="text-xl pl-2"><i class="em em-grinning">Tuan</i></span>
                        </a>
                    </div>
                    <div className="flex flex-1 md:w-1/3 justify-center md:justify-center">
                        <span className="relative top-1 left-1 w-full">
                            <input type="text" placeholder="Search" className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal" />
                            <div className=" absolute search-icon" style={{ top: '1rem', left: '.8rem' }}>
                                <svg class="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                </svg>
                            </div>
                        </span>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between  md:w-1/3 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="flex-1 md:flex-none md:mr-3">
                                <a className="inline-block py-2 px-4 text-white mr-3" href="">Active</a>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <a className="inline-block py-2 px-4 text-slate-500 hover:text-white" href="">LINk</a>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div className="relative inline-block">
                                    <button onClick={dropDown} className="drop-button inline-block py-2 px-4 text-white">Hi user</button>
                                    <div className="absolute bg-gray-400 right-0 mt-3 p-3 overflow-auto z-30 invisible" id="myDropdown">
                                        <input drop-search p-2 text-gray-600 type="text" />
                                        <a className="text-white block" href="">sdf</a>
                                        <a className="text-white block" href="">sd</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col md:flex-row">
                <SidbarLeft />
                <SiderBarRight />
            </div>
        </div>
    )
}
export default Header;