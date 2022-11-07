import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/Work' },
    { name: 'Gallery', href: '/Gallery' },
    { name: 'Founders', href: '/Founders' },
    {name:'Contact Us',href:'/ContactUs'},
]

export default function Navbar() {
    return (
        <div>

            <div className="relative  py-6 md:py-8">

                <Popover>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                                <div className="flex w-full items-center justify-between md:w-auto">
                                    <a href="#">
                                        <span className="sr-only">Your Company</span>
                                        <Image
                                            className=""
                                            src="/home/logo.png"
                                            alt="logo"
                                            objectFit='contain'
                                            width={100}
                                            height={100}
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-my-pink hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:my-pink">
                                            <span className="sr-only">Open main menu</span>
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex md:space-x-10">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="font-medium text-my-pink hover:text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                                <span className="inline-flex rounded-md shadow">
                                    <Link
                                        href="Donateus"
                                    >
                                    <button className="inline-flex items-center rounded-md border border-transparent bg-my-pink px-4 py-2 text-base font-medium text-white hover:bg-white hover:text-my-pink">  Donate Now</button>
                                      
                                    </Link>
                                </span>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                        >
                            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                                <div className="flex items-center justify-between px-5 pt-4">
                                    <div>
                                    <Image
                                            className=""
                                            src="/home/logo.png"
                                            alt="logo"
                                            objectFit='contain'
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-my-pink hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:my-pink">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <Link 
                                        
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                        
                                            >{item.name}
                                        
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/Donateus"
                                    className="block w-full bg-my-pink px-5 py-3 text-center font-medium text-white hover:bg-white hover:text-my-pink"
                                >
                                    Donate Now
                                </Link>
                            </div>
                        </Popover.Panel>
                    </Transition>

                </Popover>
            </div>
        </div>
    )
}