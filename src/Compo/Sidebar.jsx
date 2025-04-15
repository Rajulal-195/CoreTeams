import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div class="w-25 p-2 border-gray-500  bg-blue-100" >
                <div className="w-60 flex items-center bg-blue-600 text-white p-2 mx-auto mb-2 rounded-xl text-xl  ">
                    <img
                        alt="Distributor"
                        className="rounded-full mx-2"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAM1BMVEUwXf////9Kcf+xwv89Z//y9f/l6v9khv/L1v+Xrf9+mf+KpP+kuP/Y4P++zP9Xe/9wj/8K34+9AAAC10lEQVR4nO1a2XLDIAwMGHwn7f9/bX3G2EhYHEbTGfa1U7RZJIHWvF4FBQUFBQUFBf8CTcNMoGp540shJCuBSoiRM/4kgNCKkcAwERAdI4Fa8ErQiwUDG4F6JfDmir8JIARXM2p3AkzNSArBK0F1EPgwhG8+wkCVuyE3rbig7fNFV8P7Gn5G7UMhon2qTkPhFwoDdSdkcN7KEQ3vkwyVqILC21sPUCD8trmCg06QprqNL1oCgXmZwCyQbgp6pGyBmg+R4ENUDjUavqMtuh4iEYXQgxTeA/U3rf+uwwlMFOxGRK2ro4zrPuYqc06Gj3/4hUJUCzcOA2pRA1UUQaE5ViEu0oGpG56MtxcS67IIFDGlb2H4SoCcQj1Q6rIyK4hatxi2Q7FG/tyC6qpvEceG3+YSVIAftNtpJ28PKO1aaN5veGToXLy9sKyEzCUSJ7cQr1MMVMtKSA2uCQ/neOfRO9wY0YWkdlSooveOG+AGxT42wRKE3ohstNhCe63BEjTJjBXMpPrOjUikx02Fo9/x+BfGQcXjX5j3FQ4JjMGZR4LzqZtxatxwEoDDv7heO3L7F/J6a88tQS+uyCyBPbakavw02AIEjsKB+IXmNvLgEgvcPsniITncG+HpIYXg3r2oSe5BaHiCeyMeMxSVPa6jeCAf3VsP7ETaZPANv1JIthPErbcppEmG0PALElAYIsJP0PHpKDvUsrsF3VRzA7bsbkE21SgU/BMhdS+gWMgH4o0RADcW8tPhFwq4hWzg2UP5Nh9TZh6MX1c+xjiCdGDJ8NjWAxSgT2pjzltpY8dP4ojRYSdC3rkAkCD3h91rOWYWwP4ukP2pkTpf0hjeN5wlYHjecJIggS3vD7Mf5reIXqdKZBHAbEYsAhgSaK7nfrsE2ZvQjt2o4XvvqHkF2JsR44PPpRmxPnnt+GpwhWJrQjsqXgGmZsQswMSAm0BBQUFBQUFBQUEc/gBHrhAYYTVXpwAAAABJRU5ErkJggg==" width={30}
                    />
                    <p className="text-white">AI Cooming Soon</p>
                </div>
                <nav>
                    <p class="text-gray-500 text-xs mb-2">
                        BUSINESS
                    </p>
                    <ul class="mb-4 ms-3">
                        <li class="mb-2">
                            <a class="text-gray-700 border p-1 rounded-3 " href="#">
                                <i class="fa-solid fa-wind"></i>  Overview
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                                <i class="fa-regular fa-pen-to-square"></i>    Order Management
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                                <i class="fa-regular fa-file-word"></i>  Distributor/CNF List
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                            <i class="fa-solid fa-right-left"></i>  Expiry Returns / Credit Note
                            </a>
                        </li>
                    </ul>
                    <p class="text-gray-500 text-xs mb-2">
                        PRODUCTS
                    </p>
                    <ul class="mb-4 ms-3">
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                                <i class="fa-brands fa-product-hunt"></i> Product Management
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                            <i class="fa-solid fa-arrow-trend-up"></i>         Stock Management
                            </a>
                        </li>
                    </ul>
                    <p class="text-gray-500 text-xs mb-2">
                        ORGANIZATION MANAGEMENT
                    </p>
                    <ul class="mb-4 ms-3">
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                            <i class="fa-solid fa-users"></i>  Employee Management
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                            <i class="fa-solid fa-list-check"></i>   Divisions Management
                            </a>
                        </li>
                    </ul>
                    <p class="text-gray-500 text-xs mb-2">
                        FINANCE &amp; REPORTING
                    </p>
                    <ul class="mb-4 ms-3">
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                                <i class="fa-solid fa-file-invoice"></i>  Accounting
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                            Analytics Reports
                            </a>
                        </li>
                    </ul>
                    <p class="text-gray-500 text-xs mb-2">
                        OTHER
                    </p>
                    <ul class="mb-4 ms-3">
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                                <i class="fa-regular fa-address-card"></i> Profile Settings
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="text-gray-700" href="#">
                                <i class="fa-regular fa-comment"></i>  Help!
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="mt-auto">
                    <div class="flex items-center mb-4 ms-3">


                        <p class="text-gray-700">
                            <i class="fa-solid fa-cloud"></i>   Profile
                        </p>
                        <button class="text-gray-600 text-right ms-6 px-4 ms-3 border-2 border-gray-400 rounded-2xl">
                            Update
                        </button>

                    </div>
                    <div className="w-full bg-gray-400 rounded-full h-1.5">
                        <div
                            className='h-1.5 rounded-full bg-blue-600 '
                            style={{ width: `${60}%` }}
                        ></div>
                    </div>
                    <p className='text-xs text-gray-500 my-4 '>Compite your profie to enjoy more features !!</p>
                    <hr />
                    <button class="font-bold text-gray-700 py-2 my-2">
                        <i class="fa-solid fa-arrow-down"></i>  Get JEE1 App! Coming Soon!
                    </button>
                </div>
            </div>
        </>
    )
}
