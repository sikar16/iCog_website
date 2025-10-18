"use client"

import React, { useState } from 'react'
import Scrollimages from './component/Scrollimages'
import NumbersSoFar from './component/NumbersSoFar'
import IdentifyingNeeds from './component/IdentifyingNeeds'
import Solution from './component/Solution'
import BuildingBlock from './component/BuildingBlock'
import Flag from './component/Flag'

export default function Page() {
    const [shouldAnimateNeeds, setShouldAnimateNeeds] = useState(false)

    const handleScrollComplete = () => {
        setShouldAnimateNeeds(true)
    }

    return (
        <div className="">
            <Scrollimages onScrollComplete={handleScrollComplete} />
            <IdentifyingNeeds shouldAnimate={shouldAnimateNeeds} />
            <Flag />
            <Solution />
            <BuildingBlock />
            <NumbersSoFar />
        </div >
    )
}
