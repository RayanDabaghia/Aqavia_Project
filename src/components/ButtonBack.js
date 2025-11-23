import { useNavigate } from "react-router-dom";
import '../styles/header.css'



export default function ButtonBack(){
    const navigate = useNavigate();
    return(
        <>
              <div className="top-btn">
        <button className="btn" onClick={() => navigate(-1)}>
           Back
        </button>

        <button className="btn" onClick={() => navigate("/user/home")}>
          Home
        </button>
      </div>
        </>
    )
}