import React from 'react'
import Layout from '../components/layout'
import logo from "../images/eralp.jpg"

const TeamPage = () => (
  <Layout>
    <h1>TEAM</h1>
    <p>Nice Work Company is a one man shop.</p>
      
        <p style={{overflow: 'hidden'}}>
          <img
            style={{
              borderRadius: 40,
              float: 'left',
              margin: 0,
              padding: 0,
              marginRight: 6,
              marginBottom: 0,
              display: 'inline-block'
            }}
            width={80}
            src={logo}
            alt='eralp karaduman'
          />
          <h3 style={{padding: 0, margin: 0, marginBottom: 10}}>
            Eralp Karaduman
          </h3>
            Hello, I'm the only person working in this company.
            I make software stuff, which are usually apps, games, toys and experiments.
            Learn more about me at&nbsp;
            <a href="http://eralpkaraduman.com">eralpkaraduman.com</a>
          <div>
            <strong>E-Mail:</strong>&nbsp;
            <a href="mailto:eralp@nicework.company" >eralp@nicework.company</a>
          </div>
        </p>
      
  </Layout>
)

export default TeamPage
