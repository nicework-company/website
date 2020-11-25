import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/logo.png"

const styles = {
  menuUl: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    marginTop: 10
  },

  menuLi: {
    display: 'inline',
  },

  menuLink: {
    color: 'white',
    fontSize: '0.8em',
    textDecoration: 'underline',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginRight: '0.8em'
  },
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#fa8231',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        margin: '0 auto',
        maxWidth: 500,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, padding: 0}}>
        <img src={logo} alt="nice work company logo" style={{
              margin: 0,
              width: 60,
              marginRight: 20,
              borderRadius: 30
            }} />
        <h1 style={{ margin: 0, fontSize: '2.2em' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              flexDirection: 'row',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div style={{display: 'flex'}}>
        <ul style={styles.menuUl}>
          <li style={styles.menuLi}>
            <Link style={styles.menuLink} to="/">ABOUT</Link>
          </li>
          <li style={styles.menuLi}>
            <Link style={styles.menuLink} to="/team">TEAM</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
