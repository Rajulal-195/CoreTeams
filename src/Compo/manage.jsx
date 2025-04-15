import React from 'react'

export default function manage() {
    return (
        <div>
            <body class="bg-gray-100 border border-red-500">
                <div class="flex">
                    <!-- Sidebar -->
                    <div class="w-64 bg-white h-screen p-4">
                        <div class="flex items-center mb-8">
                            <img alt="Logo" class="mr-2" src="https://placehold.co/40x40" />
                            <span class="text-2xl font-bold text-blue-600">
                                Jee1
                            </span>
                        </div>
                        <button class="w-full bg-blue-100 text-blue-600 py-2 rounded mb-4">
                            AI Coming Soon
                        </button>
                        <nav>
                            <h2 class="text-gray-500 text-xs mb-2">
                                BUSINESS
                            </h2>
                            <ul class="mb-4">
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Overview
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Order Management
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Distributor/CNF List
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Expiry Returns / Credit Note
                                    </a>
                                </li>
                            </ul>
                            <h2 class="text-gray-500 text-xs mb-2">
                                PRODUCTS
                            </h2>
                            <ul class="mb-4">
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Product Management
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Stock Management
                                    </a>
                                </li>
                            </ul>
                            <h2 class="text-gray-500 text-xs mb-2">
                                ORGANIZATION MANAGEMENT
                            </h2>
                            <ul class="mb-4">
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Employee Management
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Divisions Management
                                    </a>
                                </li>
                            </ul>
                            <h2 class="text-gray-500 text-xs mb-2">
                                FINANCE &amp; REPORTING
                            </h2>
                            <ul class="mb-4">
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Accounting
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Analytics &amp; Reports
                                    </a>
                                </li>
                            </ul>
                            <h2 class="text-gray-500 text-xs mb-2">
                                OTHER
                            </h2>
                            <ul class="mb-4">
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Profile Settings
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="text-gray-700" href="#">
                                        Help!
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div class="mt-auto">
                            <div class="flex items-center mb-4">
                                <img alt="Profile" class="rounded-full mr-2" src="https://placehold.co/40x40" />
                                <div>
                                    <p class="text-gray-700">
                                        Profile
                                    </p>
                                    <button class="text-blue-600">
                                        Update
                                    </button>
                                </div>
                            </div>
                            <button class="w-full bg-gray-200 text-gray-700 py-2 rounded">
                                Get JEE1 App! Coming Soon!
                            </button>
                        </div>
                    </div>
                    <!-- Main Content -->
                    <div class="flex-1 p-6">
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-3xl font-bold">
                                Hello,
                            </h1>
                            <div class="flex items-center">
                                <div class="relative">
                                    <input class="bg-gray-200 rounded-full py-2 px-4 pl-10" placeholder="Search..." type="text" />
                                    <i class="fas fa-search absolute left-3 top-2.5 text-gray-500">
                                    </i>
                                </div>
                                <div class="ml-4">
                                    <i class="fas fa-bell text-gray-500">
                                    </i>
                                </div>
                                <div class="ml-4">
                                    <img alt="User" class="rounded-full" src="https://placehold.co/40x40" />
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-500 mb-6">
                            We have all the stats ready for you!!
                        </p>
                        <div class="grid grid-cols-3 gap-4 mb-6">
                            <div class="bg-yellow-100 p-4 rounded">
                                <p class="text-gray-700">
                                    Orders Received Last 30 Days
                                </p>
                                <p class="text-3xl font-bold">
                                    23
                                </p>
                            </div>
                            <div class="bg-blue-100 p-4 rounded">
                                <p class="text-gray-700">
                                    Total Products In Portfolio
                                </p>
                                <p class="text-3xl font-bold">
                                    101
                                </p>
                            </div>
                            <div class="bg-gray-100 p-4 rounded">
                                <p class="text-gray-700">
                                    Distributor Approved by You
                                </p>
                                <p class="text-3xl font-bold">
                                    39
                                </p>
                            </div>
                        </div>
                        <div class="flex mb-6">
                            <div class="w-2/3 bg-white p-4 rounded mr-4">
                                <div class="flex justify-between items-center mb-4">
                                    <h2 class="text-xl font-bold">
                                        Distributor Requests
                                    </h2>
                                    <div class="flex space-x-2">
                                        <button class="bg-gray-200 py-1 px-3 rounded">
                                            All
                                        </button>
                                        <button class="bg-gray-200 py-1 px-3 rounded">
                                            Pending
                                        </button>
                                        <button class="bg-gray-200 py-1 px-3 rounded">
                                            Approved
                                        </button>
                                        <button class="bg-gray-200 py-1 px-3 rounded">
                                            Rejected
                                        </button>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img alt="Distributor" class="rounded-full mr-4" src="https://placehold.co/40x40" />
                                            <div>
                                                <p class="text-gray-700">
                                                    Aparna Pharmacy
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    License No. 123896
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    36 Sitapura Ind Area Jaipur
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    1 day ago
                                                </p>
                                            </div>
                                        </div>
                                        <div class="text-blue-600">
                                            Pending
                                        </div>
                                        <div class="text-gray-700">
                                            +91 8899228833
                                        </div>
                                        <div class="text-blue-600">
                                            <i class="fas fa-arrow-right">
                                            </i>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img alt="Distributor" class="rounded-full mr-4" src="https://placehold.co/40x40" />
                                            <div>
                                                <p class="text-gray-700">
                                                    Aparna Pharmacy
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    License No. 123896
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    36 Sitapura Ind Area Jaipur
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    1 day ago
                                                </p>
                                            </div>
                                        </div>
                                        <div class="text-blue-600">
                                            Pending
                                        </div>
                                        <div class="text-gray-700">
                                            +91 8899228833
                                        </div>
                                        <div class="text-blue-600">
                                            <i class="fas fa-arrow-right">
                                            </i>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img alt="Distributor" class="rounded-full mr-4" src="https://placehold.co/40x40" />
                                            <div>
                                                <p class="text-gray-700">
                                                    Aparna Pharmacy
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    License No. 123896
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    36 Sitapura Ind Area Jaipur
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    1 day ago
                                                </p>
                                            </div>
                                        </div>
                                        <div class="text-red-600">
                                            Rejected
                                        </div>
                                        <div class="text-gray-700">
                                            +91 8899228833
                                        </div>
                                        <div class="text-blue-600">
                                            <i class="fas fa-arrow-right">
                                            </i>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img alt="Distributor" class="rounded-full mr-4" src="https://placehold.co/40x40" />
                                            <div>
                                                <p class="text-gray-700">
                                                    Aparna Pharmacy
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    License No. 123896
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    36 Sitapura Ind Area Jaipur
                                                </p>
                                                <p class="text-gray-500 text-sm">
                                                    16 days ago
                                                </p>
                                            </div>
                                        </div>
                                        <div class="text-green-600">
                                            Approved
                                        </div>
                                        <div class="text-gray-700">
                                            +91 8899228833
                                        </div>
                                        <div class="text-blue-600">
                                            <i class="fas fa-arrow-right">
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3">
                                <div class="bg-white p-4 rounded mb-4">
                                    <div class="flex justify-between items-center mb-4">
                                        <h2 class="text-xl font-bold">
                                            Top 10 Distributors
                                        </h2>
                                        <div class="flex items-center">
                                            <i class="fas fa-copy text-gray-500 mr-2">
                                            </i>
                                            <i class="fas fa-share-alt text-gray-500">
                                            </i>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Agarwal Pharma
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                15%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Jyoty Pharma
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                35%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <img alt="Distributor" class="rounded-full mr-2" src="https://placehold.co/20x20" />
                                                <p class="text-gray-700">
                                                    Rama Dealers
                                                </p>
                                            </div>
                                            <div class="text-gray-700">
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white p-4 rounded">
                                    <h2 class="text-xl font-bold mb-4">
                                        Stocks Running Low
                                    </h2>
                                    <div class="space-y-2">
                                        <div class="flex justify-between">
                                            <p class="text-gray-700">
                                                Dolo
                                            </p>
                                            <p class="text-red-600">
                                                Low
                                            </p>
                                        </div>
                                        <div class="flex justify-between">
                                            <p class="text-gray-700">
                                                Paracetamol
                                            </p>
                                            <p class="text-red-600">
                                                Low
                                            </p>
                                        </div>
                                        <div class="flex justify-between">
                                            <p class="text-gray-700">
                                                Betadin
                                            </p>
                                            <p class="text-red-600">
                                                Low
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded">
                            <h2 class="text-xl font-bold mb-4">
                                Top Products
                            </h2>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-700">
                                        01 Paracetamol
                                    </p>
                                    <div class="w-1/2 bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%">
                                        </div>
                                    </div>
                                    <p class="text-gray-700">
                                        45%
                                    </p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-700">
                                        02 Aspirin
                                    </p>
                                    <div class="w-1/2 bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-green-600 h-2.5 rounded-full" style="width: 29%">
                                        </div>
                                    </div>
                                    <p class="text-gray-700">
                                        29%
                                    </p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-700">
                                        03 Calpol
                                    </p>
                                    <div class="w-1/2 bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-purple-600 h-2.5 rounded-full" style="width: 18%">
                                        </div>
                                    </div>
                                    <p class="text-gray-700">
                                        18%
                                    </p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <p class="text-gray-700">
                                        04 Caltabs
                                    </p>
                                    <div class="w-1/2 bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-yellow-600 h-2.5 rounded-full" style="width: 25%">
                                        </div>
                                    </div>
                                    <p class="text-gray-700">
                                        25%
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

