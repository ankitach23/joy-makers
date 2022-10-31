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
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    className=""
                    src="/home/home1.jpeg"
                    layout='fill'
                    objectFit="cover"
                    
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
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-my-pink shadow-sm hover:bg-pink-50 sm:px-8"
                      >
                        About Us
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white  px-4 py-3 text-base font-medium text-my-pink  hover:bg-pink-50 shadow-sm  sm:px-8"
                      >
                        Work
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        

        </div>
      </main>
    
  
    </div>

    
    
    )
}