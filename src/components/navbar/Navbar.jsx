
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FaBars } from 'react-icons/fa'
import {HiXMark} from 'react-icons/hi2'
import {BsBellSlash} from 'react-icons/bs'
import {UserButton, useAuth} from '@clerk/nextjs'
import { useRouter } from 'next/router'
import Image from 'next/image'

const navigation = [
  { name: 'Market', href: '/market', current: false },
  { name: 'Trade', href: '/trade/BTC_USDT', current: false },
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Deposit', href: '/deposit', current: false },
  { name: 'Withdraw', href: '/withdraw', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-20">
      {({ open }) => (
        <>
          <div className=" sticky mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className=" relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                  onClick={() => router.push("/")}
                    className="h-8 w-auto hover:cursor-pointer"
                    src="/images/unilogo2.png"
                    alt="Your Company"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block hover:cursor-pointer">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                       <div
                       key={item.name}
                  
                      onClick={() => router.push(item.href)}
                         className={classNames(
                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                           'block rounded-md px-3 py-2 text-base font-medium'
                         )}
                         aria-current={item.current ? 'page' : undefined}
                       >
                         {item.name}
                         </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BsBellSlash className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                   <UserButton/>
                  </div>
                  {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition> */}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden hover:cursor-pointer">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                // <Disclosure.Button
                //   key={item.name}
                //   as="a"
                //   href={item.href}
                //   className={classNames(
                //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                //     'block rounded-md px-3 py-2 text-base font-medium'
                //   )}
                //   aria-current={item.current ? 'page' : undefined}
                // >
                //   {item.name}
                // </Disclosure.Button>
                <div
                key={item.name}
           
               onClick={() => router.push(item.href)}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                  </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
