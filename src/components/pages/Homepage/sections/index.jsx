'use client'
import Container from '@/components/atoms/Container'
import NavBar from '@/components/molecules/NavBar'
import React from 'react'
import LearnMoreSection from './LearnMoreSection'
import { ProtofolioJobsProposals } from '@/mock/ProtofolioJobsProposals'
import ProtofolioJobsProposalsSections from './ProtofolioJobsProposalsSections'
import { StyledDivProtoJobPropslas } from './ProtofolioJobsProposalsSections/style'

const Sections = () => {
  return (
    <div>
        <NavBar/>
      <Container>
<LearnMoreSection/>
<StyledDivProtoJobPropslas>
{ProtofolioJobsProposals.map((data, index) => (
        <ProtofolioJobsProposalsSections
          key={index}
          title={data.title}
          text={data.text}
        />
      ))}</StyledDivProtoJobPropslas>
      </Container>
    </div>
  )
}

export default Sections
