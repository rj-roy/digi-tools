import { Suspense } from 'react'
import './App.css'
import Header from './components/HeaderFooter/Header'
import Hero from './components/main/Hero'
import Products from './components/main/product/Products'


const fetchProducts = async () => {
  const res = await fetch('/products.json');
  return res.json();
}

function App() {
  const productPromise = fetchProducts();

  return (
    <>
      <header className='w-full max-w-6xl mx-auto'>
        <Header></Header>
      </header>

      <main className='w-full max-w-6xl mx-auto space-y-16'>
        <Hero></Hero>
        <Suspense>
          <Products productPromise={productPromise}></Products>
        </Suspense>
      </main>
    </>
  )
}

export default App
