import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaPlusCircle, FaRegTimesCircle } from "react-icons/fa";

const DeashBoard = () => {

    const [showSubmenu, setShowSubmenu] = useState(false);
    const [clickedItemId, setClickedItemId] = useState(null);

    const sidebarItemsData = [
        {
            id: 1,
            name: 'Users',
            icon: 'users',
            subItems: [
                {
                    id: 1,
                    name: 'User List',
                    description: ' description a user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor feugiat hendrerit. Proin enim mauris, porta id magna in, euismod condimentum sem. Nunc augue magna, '
                },
                {
                    id: 2,
                    name: 'Add User',
                    description: ' description a user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor feugiat hendrerit. Proin enim mauris, porta id magna in, euismod condimentum sem. Nunc augue magna, vestibulum ut lectus sit amet, tincidunt '
                },
            ],
        },
        {
            id: 2,
            name: 'Products',
            icon: 'users',
            subItems: [
                {
                    id: 1,
                    name: 'Products List',
                    description: ' Produdct list Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor feugiat hendrerit. Proin enim mauris, porta id magna in, euismod condimentum sem. Nunc augue magna, vestibulum ut lectus sit amet, tincidunt ultricies purus. Duis consectetur lacinia augue id tempor. Donec ultricies magna vel tellus pellentesque dictum. Donec viverra, metus eu eleifend laoreet, velit ipsum pellentesque arcu, eu lacinia mi ligula vel orci. Maecenas ullamcorper quam vitae mauris tincidunt vulputate. Integer eu dignissim sem. Praesent vitae augue augue. Vivamus lacinia ut ex ac placerat. Sed eu lobortis nulla. Aliquam ac lacinia elit, ac varius magna. Sed a odio id tellus dictum finibus in at magna. Mauris interdum porta magna a semper. Sed fermentum porta quam quis suscipit.',
                },
                {
                    id: 2,
                    name: 'Add Product',
                    description: 'Add Product Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor feugiat hendrerit. Proin enim mauris, porta id magna in, euismod condimentum sem. Nunc augue magna, vestibulum ut lectus sit amet, tincidunt ultricies purus. Duis consectetur lacinia augue id tempor. Donec ultricies magna vel tellus pellentesque dictum. Donec viverra, metus eu eleifend laoreet, velit ipsum pellentesque arcu, eu lacinia mi ligula vel orci. Maecenas ullamcorper quam vitae mauris tincidunt vulputate. Integer eu dignissim sem. Praesent vitae augue augue. Vivamus lacinia ut ex ac placerat. Sed eu lobortis nulla. Aliquam ac lacinia elit, ac varius magna. Sed a odio id tellus dictum finibus in at magna. Mauris interdum porta magna a semper. Sed fermentum porta quam quis suscipit.',
                },
            ],
        },
    ]

    const [visible, setVisible] = useState(true);

    const handleCloseItems = () => {
        setVisible(false);
    };

    const handleDisplayItems = () => {
        setVisible(true);
    };

    const handleMainMenuItemClick = (itemId) => {
        if (itemId === clickedItemId) {
            setShowSubmenu(false);
            setClickedItemId(null);
        } else {
            setShowSubmenu(true);
            setClickedItemId(itemId);
        }
    };

    const handleSubMenuItemClick = (subItem) => {
        console.log(subItem)
    }


    return (
        <div className='relative'>
            <div className='w-full border py-4 text-center font-semibold bg-white shadow-lg text-2xl'>Header</div>
            <div>
                <div
                    className={
                        visible
                            ? 'w-[20%] border h-screen absolute transform translate-x-0 transition duration-500 ease-in-out bg-white shadow-lg'
                            : 'w-[20%] border h-screen absolute transform -translate-x-full transition duration-500 ease-in-out'
                    }
                >
                    <button
                        onClick={handleCloseItems}
                        className=" text-white p-2 absolute top-2 right-2 my_btn"
                    >
                        <FaRegTimesCircle className='text-3xl bg-red-100 text-red-500 rounded-full p-1'></FaRegTimesCircle>
                    </button>
                    <div className="mt-10">
                        <div className="flex flex-col">
                            <div className="flex flex-col  flex-grow">
                                <ul className="flex flex-col space-y-2">
                                    {sidebarItemsData.map((item, index) => (
                                        <li
                                            className="main_menu font-semibold bg-gray-100 py-4 hover:bg-gray-200 cursor-pointer flex justify-evenly"
                                            onClick={() => handleMainMenuItemClick(`item-${item.id}`)}
                                        >
                                            {item.name}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                            </svg>
                                            {showSubmenu && clickedItemId === `item-${item.id}` && (
                                                <ul className="sub_items flex flex-col ml-4 bg-white w-full">
                                                    {item.subItems?.map((subItem, subIndex) => (
                                                        <li
                                                            className="font-semibold bg-gray-100 p-2  hover:bg-gray-200 cursor-pointer"
                                                            id={`subitem-${item.id}`}
                                                            onClick={() => handleSubMenuItemClick(`subitem-${index}-${subIndex}`)}
                                                        >
                                                            {subItem.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleDisplayItems}
                    className={
                        visible
                            ? '-left-60 z-50 absolute '
                            : 'z-50 absolute transition duration-1000 ease-in-out animate-moveLeft '
                    }
                >
                    <FaPlusCircle className='my_btn mt-4 ml-4 text-3xl bg-blue-100 text-blue-500 rounded-full p-1'></FaPlusCircle>
                </button>
            </div>
            <div
                className={
                    !visible
                        ? 'p-[5%] py-4 w-[100%] border right-0 absolute transition-all duration-500 ease-in-out'
                        : 'py-4 p-[5%] w-[80%] border right-0 absolute transition-all duration-500 ease-in-out'
                }
            >
                {sidebarItemsData.map((item, index) => (
                    item.subItems?.map((subItem, subIndex) =>
                    <h1>{subItem.description}</h1>
                    )
                ))}

                <Outlet />
            </div>
        </div>
    );
};

export default DeashBoard;