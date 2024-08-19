import '../css/SearchBar.css'
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [ term, setTerm ] = useState('');

    const handleForm = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    };


    const handleChnage = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className='search-head'>
            <div className='search-bar'>
            <label>Enter Search Term</label>
                <form onSubmit={handleForm}>
                    <input onChange={handleChnage} value=   {term} />
                    <button type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;