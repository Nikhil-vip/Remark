import Styles from './inputt.module.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const User_in = () => {
  return (
    <>
      <input type='text' placeholder='enter ur name'></input>
      <input type="text" placeholder='enter ur message'></input>
      <button>post</button>
    </>
  )
}
export default User_in;