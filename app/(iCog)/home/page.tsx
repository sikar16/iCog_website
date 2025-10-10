import React from 'react'
import HomeHero from './component/HomeHero'
import Statistics from './component/Statistics'
import Partners from './component/Partners'
import LatestNews from './component/LatestNews'

export default function page() {
    return (
        <div>
            <HomeHero />
            <Statistics />
            <Partners />
            <LatestNews />
        </div>
    )
}
