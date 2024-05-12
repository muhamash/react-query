import './App.css'
import Details from './components/Details'
import ProductList from './components/ProductList'

function App() {

  return (
    <div className="max-w-[1440px] px-5 mx-auto flex gap-5 justify-center items-center">
      <div className='w-2/3'>
        <ProductList/>
      </div>
      <div className="w-1/2">
        <Details id={5}/>
      </div>
    </div>
  )
}

export default App
