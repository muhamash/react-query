import './App.css';
import Details from './components/Details';
import { SelectedContextProvider } from './components/hooks/SelectedContext';
import ProductList from './components/ProductList';

function App ()
{
  
  // const [ selected, setSelected ] = useState( null );
  // const handleSelection = ( id ) =>
  // {
  //   console.log(id)
  //   setSelected(id)
  // }
  return (
    <SelectedContextProvider>
      <div className="max-w-[1440px] p-5 mx-auto flex gap-5 justify-center ">
        <div className='w-2/3'>
          <ProductList  />
        </div>
        <div className="w-1/2">
          <Details />
        </div>
      </div>
    </SelectedContextProvider>
  );
}

export default App
