import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GiftIcon } from '@heroicons/react/24/outline'
import Image from "next/image";


const Donateus = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div >
      

        <div className="text-center space-y-4 text-my-green bg-light-pink px-2 py-4 md:py-10  md:flex justify-evenly md:space-y-0 md:text-start ">
           <div><h1 className=" text-3xl border-b-4 border-my-green py-2 md:py-0 md:w-fit  "> JoyMakers foundation </h1></div>
           <div className="md:max-w-lg "><p >  Joy Makers foundation came into being when a group of like minded
            intellectuals joined hands and became a team,thought to bring</p></div>

        </div>
        <div className=" flex flex-col-reverse md:grid grid-cols-3 my-8">
        <div className="col-span-2">
          <div className="my-12 space-y-4">
          <h1 className=" text-my-green  font-semibold text-2xl    md:font-bold md:text-6xl mt-6  ">
            We need your help
          </h1>
          <p className=" md:text-lg font-light max-w-3xl    ">
            Joy Makers foundation came into being when a group of like minded
            intellectuals joined hands and became a team,thought to bring
            happiness and joy in life of people who suffer due to multiple
            hardships of life.
          </p>
          <p className="md:text-lg font-light">
            100% of your dontions will spen on little kid and families
          </p>
          </div>
          <div className="flex justify-center">
            <GiftIcon className="w-10"/>
            <h1 className="text-center text-my-green font-bold text-5xl">Your Gift</h1>
          </div>
          <p className="text-my-green text-2xl font-bold my-8">Amount**</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center md:text-xl">
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>
          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">Rs 100</button>

          <button className="w-fit px-6 py-2 bg-light-pink border border-my-green rounded-sm text-my-green font-bold">
            <input type="number" placeholder="Rs 0.00" className="" />
          </button>
 
          </div>
          
        </div>
        <div className=" my-auto">
        <Image src="/home/birthday.webp" objectFit="cover" alt="bday-pic" width={700} height={700}/>


        </div>

        </div>
        <div className="justify-center">
            <button className="bg-my-green px-6 py-2 rounded-md text-white ">Donate Now</button>
        </div>
      <Footer />
    </div>
    </div>
  );
};

export default Donateus;
