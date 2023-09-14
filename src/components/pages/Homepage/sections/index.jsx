'use client'
import Container from '@/components/atoms/Container'
import NavBar from '@/components/molecules/NavBar'
import React from 'react'
import LearnMoreSection from './LearnMoreSection'
import { ProtofolioJobsProposals } from '@/mock/ProtofolioJobsProposals'
import ProtofolioJobsProposalsSections from './ProtofolioJobsProposalsSections'
import { StyledDivProtoJobPropslas } from './ProtofolioJobsProposalsSections/style'
import SearchSection from './SearchSection'
import JobsMayLikeIt from './JobsMayLikeIt'

const Sections = () => {
  return (
    <div>
        <NavBar/>
      <Container>
        <div style={{ width:'70%'}}>
<LearnMoreSection/>
<StyledDivProtoJobPropslas>
{ProtofolioJobsProposals.map((data, index) => (
        <ProtofolioJobsProposalsSections
          key={index}
          title={data.title}
          text={data.text}
          image={data.image}
        />
      ))}</StyledDivProtoJobPropslas>
      <SearchSection/>
      <JobsMayLikeIt/>
      </div>
      </Container>
    </div>
  )
}

export default Sections
