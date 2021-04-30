import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <nav style={{ textAlign: 'center' }}>This is our Navbar</nav>
            <main>{children}</main>
            <footer style={{ textAlign: 'center' }}>This is the footer</footer>
        </div>
    )
}

export default Layout
