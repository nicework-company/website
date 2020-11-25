import React from 'react'
import Layout from '../components/layout'
import { BoldBodyText, LinkText, BodyText } from '../components/text'


const IndexPage = () => (
  <Layout>
    <h2>Hi,</h2>
    <BodyText style={{marginBottom: 20}}>
      We are the Nice Work Company.
    </BodyText>
    <address>
      <BoldBodyText>E-Mail: </BoldBodyText>
      <LinkText>
        <a href="mailto:contact@nicework.company">contact@nicework.company</a>
      </LinkText>
      <BoldBodyText>Address: </BoldBodyText>
      <BodyText>
        NiceWork OÜ<br />
        Harju maakond, Lasnamäe linnaosa,<br />
        Sepapaja tn 6,<br />
        15551<br />
        Tallinn / Estonia
      </BodyText>
      <BoldBodyText>Registration Code: </BoldBodyText>
      <BodyText>14559412</BodyText>
    </address>
  </Layout>
)

export default IndexPage
