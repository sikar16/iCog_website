import React from 'react'
import CultureSection from './component/CultureSection'
import JoinOurTeam from './component/JoinOurTeam'
import ScrollVideoSection from './component/ScrollVideoSection'
import TalentRosterForm from './component/TalentRosterForm'
import Hero from './component/Hero'

export default function page() {
    return (
        <div>
            <Hero />
            <CultureSection />
            <JoinOurTeam />
            {/* <ScrollVideoSection /> */}
            <TalentRosterForm />

        </div>
    )
}
