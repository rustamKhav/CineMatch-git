import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#0a0a1a] to-[#453BFF]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

