import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (<div className="flex flex-col min-h-screen bg-inherit max-w-6xl px-2 md:px-4 mx-auto">
  <Navbar />
  <main id='main' className="flex-grow">{children}</main>
  <Footer />
</div>
  )
}