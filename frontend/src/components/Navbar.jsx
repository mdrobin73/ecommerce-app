import { assets } from "../assets/assets"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={"flex justify-between items-center font-medium py-8 px-4 bg-rose-50"}>
            <img src={assets.logo} className='w-36' alt="logo" />

            <ul className='hidden sm:flex gap-7 text-base text-gray-700'>
                <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
                    <p>HOME</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to={"/collection"} className={"flex flex-col items-center gap-1"}>
                    <p>COLLECTION</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
                    <p>ABOUT</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}>
                    <p>CONTACT</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to={"/orders"} className={"flex flex-col items-center gap-1"}>
                    <p className='italic'>ORDERS</p>
                    <hr className='w-full border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-7'>
                <img src={assets.search_icon} className='w-6 cursor-pointer' alt="" />
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-6 cursor-pointer' alt="" />
                    <div className='absolute right-0 pt-4 group-hover:block hidden'>
                        <div className='flex flex-col gap-2 bg-slate-50 w-36 p-4 text-gray-700 rounded'>
                            <p className='cursor-pointer hover:text-gray-950'>My Profile</p>
                            <p className='cursor-pointer hover:text-gray-950'>Orders</p>
                            <p className='cursor-pointer hover:text-gray-950'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to={"/cart"} className='relative'>
                    <img src={assets.cart_icon} className='w-6' alt="" />
                    <p className='absolute bg-slate-950 text-slate-50 w-6 flex items-center justify-center rounded-full aspect-square text-[12px] right-[-10px] bottom-[-10px]'>00</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;