import React from 'react'
import { IoAddOutline } from "react-icons/io5";

export default function Nav(){
    return (
        <div className='flex flex-col gap-4 pt-4 w-[15%] bg-zinc-100'>
            <a className='flex items-center justify-between mx-auto px-3 w-[90%] py-2 bg-zinc-500 text-white rounded-md text-md' href="/create">Add New Product <IoAddOutline className='w-6 h-full rounded-full hover:bg-zinc-200 hover:text-zinc-900' /> </a>
            <div className='h-full'>
            <h1 className='text-2xl w-[90%] mx-auto '>Categories</h1>
            <ul className='px-5 text-base flex flex-col gap-2 mt-4 text-zinc-700'>
                <li className='flex items-center gap-2'><span className='h-3 w-3 bg-green-300 rounded-full'></span>Cat 1</li>
                <li className='flex items-center gap-2'><span className='h-3 w-3 bg-purple-300 rounded-full'></span>Cat 2</li>
                <li className='flex items-center gap-2'><span className='h-3 w-3 bg-blue-300 rounded-full'></span>Cat 3</li>
            </ul>
            </div>
        </div>
    )
}