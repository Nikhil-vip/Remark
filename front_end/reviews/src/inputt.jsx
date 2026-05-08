import React, { useState } from 'react';
import axios from 'axios';
import Styles from './inputt.module.css';

const User_in = () => {
  // Fix 1: Hooks MUST be inside the component
  const [name, setname] = useState('');
  const [message, setmessage] = useState('');

  const handle_submit = async (e) => {
    // Optional: if this was a form, you'd use e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/message', { name, message });

      // Fix 2: Use 'response.status', not 'res'
      if (response.status === 201) {
        console.log("success");
      }
    } catch (err) {
      console.log("unsuccessful", err);
    }
  }

  return (
    <>
      {/* Fix 3: Added correct arrow function syntax (=>) */}
      <input
        type='text'
        placeholder='enter ur name'
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder='enter ur message'
        onChange={(e) => setmessage(e.target.value)}
      />

      {/* Fix 4: Removed () so it only runs on click */}
      <button onClick={handle_submit}>post</button>
    </>
  )
}

export default User_in;