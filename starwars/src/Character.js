import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard';

const Character = function() {
    const [char, setChar] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/1/`)
        .then(response => {
          console.log(response.data)
          setChar(response.data)
        })
        .catch(error => (
          console.log(error)
        ))
      }, [])

      return (
        <div>
            {
                char.map((name, index) => {
                    console.log(name);
                    return (
                        <CharCard key = {index} text = {name}/>
                    )
                })
            }
        </div>
    )
}

export default Character;