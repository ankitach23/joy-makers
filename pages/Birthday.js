import Image from "next/image"
export default function Birthday() {
    return (
        <div className="bg-light-pink container mx-auto    px-4  md:px-10  py-6 rounded-lg md:rounded-3xl mt-10">

            <h1 className="text-2xl text-center text-my-green font-bold  md:text-6xl">Birthday Special</h1>
            <div className=" text-xl text-center text-my-blue mt-5 md:text-3xl">
                Make Your Special Day More Special by celebrating and spreading Joy with us
            </div>
            <div className="md:flex md:justify-between">
                <div className="">
                    <Image  src="/home/birthday.webp" objectFit="contain" alt="bday-pic" width={400} height={400} />
                </div>
                <div className="max-w-lg my-auto  md:mr-32 md:text-lg font-light py-6  md:py-0 ">
                    <p>Toa Payoh MRT station is an underground Mass Rapid Transit (MRT) station on the North South line (NSL) in Toa Payoh, Singapore. The station is underneath the intersection of three roads: Lorong 1 Toa Payoh, Lorong 2 Toa Payoh and Lorong 6 Toa Payoh. Located within the town centre.</p>
                </div>

            </div>
        </div>
            )
}
