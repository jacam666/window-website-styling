
'use client';

import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contactUs' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // If not mounted, return null to avoid mismatches
    if (!mounted) {
        return null;
    }

    return (
        <Disclosure as="nav" className="bg-gray-50">
            <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-gray-50">
                <div className="relative flex h-24 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black font-bold hover:bg-sky-400 hover:text-white transition-colors focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-10 w-10 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-8 w-8 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <img
                                    alt="Your Company"
                                    src="/images/logo-4.png"
                                    className=" h-32 md:h-24 w-40 md:w-32"
                                // src='/window-logo mv2.avif'
                                // className="h-24 w-auto filter invert"
                                />
                                {/* filter invert */}
                            </Link>

                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex my-5 space-x-24">
                                {navigation.map((item) => {
                                    // Check if the current path matches the navigation item's href
                                    const isActive = pathname === item.href;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={classNames(
                                                isActive
                                                    ? 'bg-sky-800 text-white font-bold'
                                                    : 'text-gray-900 font-bold hover:bg-sky-400 hover:text-white',
                                                'rounded-md px-4 py-2 text-lg transition-colors duration-300 ease-in-out'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={classNames(
                                    isActive
                                        ? 'bg-sky-800 text-white'
                                        : 'text-gray-900 hover:bg-sky-400 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-bold transition-colors duration-300 ease-in-out'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        );
                    })}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
