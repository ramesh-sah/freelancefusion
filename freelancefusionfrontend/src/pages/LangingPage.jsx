import React from 'react'
import LandingHeroSection from '../components/LandingHeroSection'
import { LandingPlatformShowcaseSection } from '../components/LandingPlatformShowcaseSection'
import LandingSponsorSection from '../components/LandingSponsorSection'
import LandingStatsSection from '../components/LandingStatsSection'
import LandingTeamSection  from '../components/LandingTeamSection'
import LandingTestimonialsSection from '../components/LandingTestimonialsSection'
import LandingPageNavBar from '../components/LandingPageNavBar'
import AnimatedDivider from '../components/AnimatedDivider'
import LandingCTASection from '../components/LandingCTASection'
import Footer from '../components/Footer'

function LangingPage() {
  return (
    <>
    <LandingPageNavBar/>  
    <LandingHeroSection/>
    <AnimatedDivider/>
          <LandingStatsSection />
      <AnimatedDivider />
    
    <LandingPlatformShowcaseSection/>
      <AnimatedDivider />
<LandingTestimonialsSection/>
      <AnimatedDivider />
          <LandingSponsorSection />
      <AnimatedDivider />
    
    <LandingTeamSection/>
      <AnimatedDivider />
      <LandingCTASection/>
      <Footer/> 
    </>
  )
}

export default LangingPage;