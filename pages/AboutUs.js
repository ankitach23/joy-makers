import Image from "next/image";
export default function AboutUs() {


    return (

        <div>
            <div className=" flex md:px-16 mt-16 ">
                <div className="space-y-5 md:space-y-0">
                    <h1 className="text-center text-my-pink sm:text-start font-semibold text-2xl leading-snug   md:font-bold md:text-6xl md:leading-normal ">
                        About Us
                    </h1>

                    <p className="pl-10 md:pl-0  sm:ml-0  text-start mx-auto font-light text-sm lg:leading-relaxed  lg:text-2xl lg:max-w-lg">
                        Complete suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        interest with our revolutionary AI.
                        Complete suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        interest with our revolutionary AI.Complete suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        interest with our revolutionary AI.Complete suite of domains to choose what suits you the best. Find
                        the best educational opportunities for your favorite area of
                        interest with our revolutionary AI.
                    
                    </p>
                    
                </div>
                <div className="hidden md:block mt-28 pl-6">
                <Image src="/home/AboutUs.jpeg" objectFit="cover" height={500} width={800} />
                    
                </div>
            </div>
        </div>

    )
}