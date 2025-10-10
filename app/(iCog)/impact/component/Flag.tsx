import Image from 'next/image'
import React from 'react'

export default function Flag() {
    return (
        <div className='h-[728px] '>
            <div className='my-[111px] mx-[56px] flex justify-around bg-gray-50 rounded-[50px]'>
                <div className='bg-gray-100 mt-[149px] ms-[67px] w-[374px] h-[209px] py-[44px] px-[22px] rounded-2xl'>
                    <p className='font-bold'>National Footprint</p>
                    <p>We believe access to opportunity shouldn’t depend on geography. That’s why our journey has taken us to
                        <span className='font-bold'> 25+ cities</span>  bringing learning, tools, and possibilities closer to home.</p>
                </div>
                <div className='p-[30px] border'>
                    <Image
                        src=""
                        alt="iCog workspace"
                        width={473}
                        height={200}
                        className='w-[572px] h-[495px]'
                    />
                </div>
            </div>
        </div>
    )
}
