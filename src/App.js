import './css/App.css'
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from './api'
import ImageList from "./components/ImageList";
import axios from 'axios'

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () =>{
            setLoading(true)
          const response = await axios.get('https://dummyjson.com/products');
          const result = await response.data;
          if(result){
            setLoading(false)
            setError(null)
            setData(result.products)
          }else{
            setLoading(false)
            setError("There was an error loading this page")
          }

        }
        fetch()
      }, [])

      

    const [ images, setImages ] = useState([])

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result)
    }


    if(loading) return <p>Loading...</p>
    
    return <div>
        <SearchBar onSubmit={handleSubmit} />
        {
          images?.length == 0 ? (
            
            <div className='landing-image'>
              {error && <p>{error}</p>}
             {
                data?.map(item => (
                    <div key={item.id}>
                        <div className='single-image'>
                            <img src={item.images[0]} alt='img'/>
                            {/* <p className='price-tage'>{item.price}</p> */}
                        </div>
                    </div>
                ))
             }
            </div>
          ) : (
            
              <ImageList images={images} />
          )  
        }
    </div>
}

export default App;