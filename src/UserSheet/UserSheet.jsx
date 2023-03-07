import React from 'react';
import Image from '../Images/mc_gl.jpeg'; //import user image

const UserInformation = () => {
    return (

        <div>
            <header>
                <p className='text-center border text-2xl p-4'>This is a Header</p>
            </header>
            <div className="flex flex-col mx-20">
                <div className="bg-gray-200 rounded-lg p-4 w-full">
                    <div className="flex flex-col">
                        <div className="flex flex-col  item-center gap-4 items-center ">
                            <img src={Image} alt="user" className=" rounded-full w-28 h-28 object-cover" />
                        </div>
                        <div className="grid md:pl-[3%] mt-4 xxl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4">
                            <div className='text-start'>
                                <h1 className="text-gray-500">Name</h1>
                                <h1 className="text-xl text-gray-500">John Doe</h1>
                            </div>
                            <div className='text-start'>
                                <h1 className="text-gray-500">User Email</h1>
                                <h1 className="text-xl text-gray-500">jhone@gmail.com</h1>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Designation:</p>
                                <p className="text-xl text-gray-500">Manager</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Role:</p>
                                <p className="text-xl text-gray-500">Admin</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Professional ID:</p>
                                <p className="text-xl text-gray-500">123456</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">UNICE ID:</p>
                                <p className="text-xl text-gray-500">7890123</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Contact:</p>
                                <p className="text-xl text-gray-500">123-456-7890</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Address:</p>
                                <p className="text-xl text-gray-500">123 Main St, Anytown USA</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Creator:</p>
                                <p className="text-xl text-gray-500">Jane Doe</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Updater:</p>
                                <p className="text-xl text-gray-500">John Smith</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Status:</p>
                                <p className="text-xl text-gray-500">Active</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Joining Date:</p>
                                <p className="text-xl text-gray-500">01/01/2022</p>
                            </div>
                            <div className='text-start'>
                                <p className="text-gray-500">Salary:</p>
                                <p className="text-xl text-gray-500">$100,000</p>
                            </div>
                        </div>
                        <div className="grid mt-10 grid-cols-1 gap-4">
                            <div className="col-span-2">
                                <p className="text-gray-500">Details:</p>
                                <p className="text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu tellus eu magna pharetra vehicula.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInformation;
