import LoginForm from "@/components/loginForm"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import sfondo from "@/assets/sfondo.jpg"

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden gap-2">
      <Header />

      <main className="relative flex-1 min-h-0 flex items-center justify-center rounded-xl overflow-hidden mx-26">
        <img
          src={sfondo}
          alt="description"
          className="w-full h-full object-cover"
        />
        <LoginForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
