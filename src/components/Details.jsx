import { Link } from "react-router-dom";

export default function Details(){
    return (
        <div className='w-[60%] mx-auto border-[1px] border-zinc-300 rounded-xl'>
            <div className='p-4 flex items-center'>
                <img className='h-80 w-56 object-cover rounded-xl' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt="" />
                <div className='flex flex-col gap-2 mt-1 mx-8'>
                    <h1 className='text-lg font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                    <h4 className='text-zinc-600 text-sm'>Men's Clothing</h4>
                    <h2 className='text-base leading-5 w-3/4 font-light'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h2>
                    <h4>$109.95<span className='line-through ml-2 text-zinc-500'>$199.99</span></h4>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <Link to='/' className='px-4 py-1.5 bg-red-500 rounded-lg text-zinc-100'>Remove</Link>
                            <Link to='/' className='px-4 py-1.5 bg-blue-500 rounded-lg text-zinc-100'>Add to Cart</Link>
                        </div>
                        <div className='flex'>⭐⭐⭐⭐⭐ (120)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}