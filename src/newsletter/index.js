import React, { useState, useEffect } from 'react';
export const Newsletter = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChanges = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem('inputValue', inputValue);
    };
  
    useEffect(() => {
      const getValue = localStorage.getItem('inputValue');
      setInputValue(getValue); 
    }, []);
  
    return (
      <>
        <h2>Our Newsletter</h2>
        <div>
        <form >
        <label>Name<input type='text' value={inputValue} onChange={handleChanges} />
            </label>
            <label>Last Name<input type='text' value={inputValue} onChange={handleChanges} />
            </label>
            <label>Email<input type='email' value={inputValue} onChange={handleChanges} />
            </label>
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
          </form>
        </div>
      </>
    );
  };