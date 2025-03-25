import React from 'react'

export default function Pagination() {
    return (
        <div className="flex justify-center gap-4 mt-[120px]">
            <button className="text-white disabled:opacity-50 "> Prev </button>
            <div className=' flex gap-2'>
                <button className={` rounded-sm  bg-green-500 text-white w-8 h-8 `}>1</button>
                <button className={` rounded-sm bg-gray-700 text-gray-300 w-8 h-8 `}>2</button>
            </div>
            <button className="text-white disabled:opacity-50"> Next</button>
        </div>
    )
}
