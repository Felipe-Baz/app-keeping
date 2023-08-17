"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
    const handleScroll = () => {

    }
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/AppKeeping.png"
                        alt="logo"
                        width={236}
                        height={18}
                        className='object-contain'
                    />
                </Link>

                <CustomButton
                    title="Sign in"
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                    handleClick={handleScroll}
                />
            </nav>
        </header>
    )
}

export default Navbar