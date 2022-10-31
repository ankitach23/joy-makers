import Image from "next/image"
export default function Birthday(){
    return(
        <div className="">
           <h1 className="text-2xl text-center text-my-pink font-bold mt-10 md:text-6xl">Birthday Special</h1>
            <div className=" text-xl text-center text-blue-900 mt-5 md:text-3xl">
                Make Your Special Day More Special by celebrating and spreading Joy with us
            </div>
            <div className=" flex space-x-10 ml-10 mt-6">
                <Image src="/home/birthday.webp" objectFit="contain" alt="bday-pic" width={700} height={400}/>
                <div className="text-right max-w-lg text-2xl" >CompleComplete suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        interest with our revolutionary AI.
                        Complete suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        interest with our revolutionary AI.Complete suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        interest with our revolutionte suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        inter</div>
            </div>
        </div>
    )
}