
import Header from './header/Header'
import Footer from './footer/Footer'


const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <main style={{paddingTop: '60px'}}>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout