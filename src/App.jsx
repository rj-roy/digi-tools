import { Suspense, useState } from 'react'
import './App.css'
import Header from './components/HeaderFooter/Header'
import Hero from './components/main/Hero'
import Products from './components/main/product/Products'
import GetStarted from './components/main/GetStarted'
import Pricing from './components/main/Pricing'
import Footer from './components/HeaderFooter/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const fetchProducts = async () => {
  const res = await fetch('/products.json');
  return res.json();
}

const notify = {
  add: () => toast.success('Item Added to Cart'),
  remove: () => toast.error('Item Removed from Cart'),
  purchase: () => toast.success('Purchase Succeed')
}

function App() {
  const productPromise = fetchProducts();
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      <header className='w-full max-w-6xl mx-auto'>
        <Header selectedProducts={selectedProducts}></Header>
      </header>

      <main className='w-full mx-auto space-y-5'>
        <Hero></Hero>
        <Suspense fallback={<Loading />}>
          <Products
            notify={notify}
            productPromise={productPromise}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          ></Products>
        </Suspense>
        <GetStarted />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}

function Loading() {
  return <div className='min-h-screen w-full mx-auto grid place-items-center'>
    <span className="loading loading-dots loading-xl"></span>
  </div>;
}

export default App
