import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi,</h1>
    <p>
      We are the Nice Work Company.
    </p>
    <p>
      <h3>Contact</h3>
      <strong>E-Mail: </strong>
      <a href="mailto:contact@nicework.company" >contact@nicework.company</a>
      <p>
        <strong>Address: </strong>
        <p style={{fontSize: '0.8em'}}>
          NiceWork OÜ<br/>
          Harju maakond, Lasnamäe linnaosa,<br/>
          Sepapaja tn 6,<br/>
          15551<br/>
          Tallinn / Estonia
        </p>
        <strong>Registration Code:</strong>
        <p>14559412</p>
      </p>
    </p>
  </Layout>
)

export default IndexPage
