import React from 'react'
import Scrollimages from './component/Scrollimages'
import NumbersSoFar from './component/NumbersSoFar'
import IdentifyingNeeds from './component/IdentifyingNeeds'
import Solution from './component/Solution'
import BuildingBlock from './component/BuildingBlock'
import Flag from './component/Flag'

export default function page() {
    return (
        <div className="">
            <Scrollimages />
            <IdentifyingNeeds />
            <Flag />
            <Solution />
            <BuildingBlock />
            <NumbersSoFar />
        </div >
    )
}
