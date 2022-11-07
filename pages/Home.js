import Image from "next/image"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Home(){
    return(
    <div>
        
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 " />
            <div className="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    className=""
                    src="/home/home1.jpeg"
                    layout='fill'
                    objectFit="cover"
                    alt="/"
                    
                  />
                  <div className="absolute inset-0 bg-pink-300 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Welcome To</span>
                    <span className="block text-white">JOY MAKERS</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                    Spreading Joy Around
                  </p>
                 
                </div>
              </div>
            </div>
          </div>


        

        </div>
      </main>
    
  
    </div>

    
    
    )
}