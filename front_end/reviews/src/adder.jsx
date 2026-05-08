import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Styles from './adder.module.css'
import axios from 'axios';
const Addnew = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={Styles.top_bar}>
        <button onClick={() => navigate("./inputt.jsx")}>New +</button>
      </div>
    </>
  )
}
export default Addnew;