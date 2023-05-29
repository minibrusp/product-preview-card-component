import { useEffect, useState } from "react"
import Home from "./Pages/Home/Home"

import ProductImageMobile from "./assets/images/image-product-mobile.jpg"
import ProductImageDesktop from "./assets/images/image-product-desktop.jpg"
import Footer from "./Components/Footer/Footer"

function App() {

  const [ product, setProduct ] = useState({
    productName: "Gabrielle Essence Eau De Parfum",
    productType: "Perfume",
    text: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    currentPrice: 149.99,
    originalPrice: 169.99,
    imgUrlMobile: ProductImageMobile,
    imgUrlDesktop: ProductImageDesktop

  })

  return (
    <div className="App">
      <Home  
        {...product}
      />
      <Footer />
    </div>
  )
}

export default App
