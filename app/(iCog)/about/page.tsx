import React from 'react'
import Features from './component/features'
import Timeline from './component/Timeline'

export default function page() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8" >
            <Timeline />
            <Features />
        </div>
    )
}
