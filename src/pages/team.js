import React from 'react'
import Layout from '../components/layout'
import logo from '../images/avatar_512.png'
import { BoldBodyText, BodyText } from '../components/text'

const TeamPage = () => (
  <Layout>
    <h2>TEAM</h2>
    <p style={{ overflow: 'hidden' }}>
      <img
        style={{
          float: 'left',
          margin: 0,
          padding: 0,
          marginRight: 6,
          marginBottom: 0,
          display: 'inline-block',
        }}
        width={80}
        src={logo}
        alt='eralp karaduman'
      />
      <BoldBodyText style={{ padding: 0, margin: 0, marginBottom: 5 }}>
        Eralp Karaduman
      </BoldBodyText>
      <BodyText>
        Hello, I'm the only person working in this company.
        I make software stuff, which are usually apps, games, toys and experiments.
        Learn more about me at&nbsp;
        <a href="http://eralpkaraduman.com">eralpkaraduman.com</a>
        <div>
          <strong>E-Mail:</strong>&nbsp;
          <a href="mailto:eralp@nicework.company">eralp@nicework.company</a>
        </div>
      </BodyText>
    </p>
  </Layout>
)

export default TeamPage
