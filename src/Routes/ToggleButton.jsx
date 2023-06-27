import React, { useState } from 'react';

const ToggleButton = () => {
  
 
const [darkMode, setDarkMode] = useState(false);


const toggleMode = () => {
    
   
setDarkMode(!darkMode);
    
   
if (darkMode) {
      
     
document.body.classList.remove('dark-mode');
    } 
   
else {
      
     
document.body.classList.add('dark-mode');
    }
  };
 
return (
    
   
<button className='botonNegro' onClick={toggleMode}>
Cambio☀ 🌙
    </button>
  );
};


 
export default ToggleButton;