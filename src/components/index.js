import React, { useState, useEffect } from 'react';
import { Cocktaildata } from '../helpers';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
const Home = () => {
     const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  console.log(list)
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getData = async () => {
    try {
      const response = await fetch(Cocktaildata);
      const data = await response.json();
      console.log(data.drinks)
      setList(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [value]);

  return (
    <>
    
    <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/newsletter">Newsletter</Link>
      <div>
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        {list.map(({ idDrink, strGlass, strAlcoholic, strDrinkThumb }) => (
          <div key={idDrink}>
            <img src={strDrinkThumb} alt="nkar" />
            <h2>{strGlass}</h2>
            <p>{strAlcoholic}</p>
            <button>Details</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;