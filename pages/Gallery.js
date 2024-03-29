import Footer from "./Footer"
import Navbar from "./Navbar"
import images from "../Constant/images.json"
import Image from "next/image"

import Pictures from "../Components/Pictures"
import { useState } from "react"

const Gallery = () => {
    const [items,setItems]=useState(images);
    const filterItem = (categItem)=>{
        if(categItem=="All"){
            setItems(images)

        }
        else{
        const updatedItems = images.filter((curElem)=>{
            return curElem.category === categItem
        });
        setItems(updatedItems)
    }
    }
  return (
    <div>
        <Navbar/>
        <h1 className="text-center text-5xl py-4 font-semibold text-my-blue  ">Our Projects Gallery</h1>
        <ul className="   my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14  gap-y-4   px-4 sm:px-6 container mx-auto">
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1  " onClick={()=>{filterItem("All")}}>All</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("15Aug")}}>15 August</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Anganbadi")}}>Anganbadi</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("FoodItem")}}>Eatables</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Clothe")}}>Clothes</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Color")}}>Colors</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Fruit")}}>Fruits</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("AnimalFeed")}}>Animal Feed</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Education")}}>Education</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("GaneshChaturthi")}}>Ganesh Chaturthi</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Hygiene")}}>Hygiene</li>
            <li className="hover:cursor-pointer hover:text-my-green   bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Plantation")}}>Plantation</li>
            <li className="hover:cursor-pointer hover:text-my-green  bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("RepublicDay")}}>Republic Day</li>
            <li className="hover:cursor-pointer hover:text-my-green  bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Sawan")}}>Saawan </li>
            <li className="hover:cursor-pointer hover:text-my-green  bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("SummerCamp")}}>Summer Camp</li>
            <li className="hover:cursor-pointer hover:text-my-green  bg-my-green border border-white rounded-md hover:bg-white hover:border-my-green text-white text-center  py-1 " onClick={()=>{filterItem("Undee")}}>Undees</li>

        </ul>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3  justify-center container mx-auto  ">
            {items.map((data)=>{
                
                return  <Pictures src={data.src} key={data.id}/>
            })}
        </div>

        <Footer/>
    </div>
  )
}

export default Gallery