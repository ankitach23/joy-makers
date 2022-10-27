import {HiAcademicCap } from "react-icons/hi"
import {RiPlantFill} from "react-icons/ri"
import {GiBowlOfRice} from "react-icons/gi"
import {FaDog} from "react-icons/fa"
import{MdCleanHands} from "react-icons/md"
import{FaHandRock,FaHandHoldingMedical} from "react-icons/fa"
export default function Concerns() {
    return (
        <div>
            <div>
                <p className=" my-10 text-6xl text-my-pink text-center font-bold">Our Concerns</p>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-14 md:grid-cols-4 md:gap-8 lg:grid-cols-8 lg:gap-x-36 lg:ml-28 ">
                <div>
                    <HiAcademicCap className=" animate-pulse w-20 h-20" />
                    <p>Education</p>
                </div>
                <div>
                    <RiPlantFill className=" animate-pulse w-20 h-20" />
                    <p>Plantation</p>
                </div>
                <div>
                    <GiBowlOfRice className="animate-pulse w-20 h-20" />
                    <p>Feeding</p>
                </div>
                <div>
                    <FaDog className="animate-pulse w-20 h-20" />
                    <p>Animals</p>
                </div>
                <div>
                    <MdCleanHands className="animate-pulse w-20 h-20" />
                    <p>Cleanliness</p>
                </div>
                <div>
                    <FaHandRock className="animate-pulse w-20 h-20" />
                    <p>Empowerment</p>
                </div>

                <div>
                    <FaHandHoldingMedical className="animate-pulse w-20 h-20" />
                    <p>Care</p>
                </div>


            </div>
        </div>
    )
}