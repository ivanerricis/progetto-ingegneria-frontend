import LoginForm from "@/components/loginForm"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import sfondo from "@/assets/sfondo.jpg"

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />

      <main className="relative flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden">
        <img
          src={sfondo}
          alt="description"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <LoginForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
