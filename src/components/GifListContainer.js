import React, { useState, useEffect } from 'react';
import GifList from './GifList';

function GifListContainer() {
    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        fetchData(search);
    }, [search]);

    const fetchData = (value) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=uI7MtjwoThmIP8oUN6CIwZT7YVRVZMmT&rating=g`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setGifs(json.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={search} />
            <input type='submit'/>
            {gifs.map((gif) => (
        <GifList key={gif.id} gif={gif} />
      ))}
        </div>
    );
}

export default GifListContainer;
