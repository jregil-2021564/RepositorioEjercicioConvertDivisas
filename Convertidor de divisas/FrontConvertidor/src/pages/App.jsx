import { Convertidor } from "../components/convertidor/Convertidor"
import { Navbar } from "../components/navbar/Navbar"

export const App = () => {
  return (
    <main>
      <Navbar/>
      <Convertidor/>
    </main>
  )
}
