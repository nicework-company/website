import React from 'react'
import { Link } from 'gatsby'

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
        margin: '0 auto',
        maxWidth: 500,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
)

export default Header
