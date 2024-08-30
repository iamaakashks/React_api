import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(){
    return (
        <div className='w-[85%] h-full p-4 bg-zinc-200 flex gap-4 flex-wrap'>
            <Link to="/details/1" className='w-60 h-72 rounded-md bg-white mx-auto'>
                <img className='w-full h-[70%] object-scale-down border-zinc-900 p-4 hover:scale-95 transition-transform duration-300' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                <div className='w-full h-[30%] px-[1.5vh] py-4 flex gap-4 items-center border-t-[1px] border-zinc-200'>
                    <h2 className='font-medium leading-4'>Fjallraven - Foldsack No. 1 Backpack</h2>
                    <h4 className='font-semibold flex flex-col'>109.95<span className=' line-through text-zinc-400'>199.99</span></h4>
                </div>
            </Link>
        </div>
    )
}