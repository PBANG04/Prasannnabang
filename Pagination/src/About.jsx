import React from "react";
import { useNavigate } from "react-router-dom";
import pagination from "./pagination";
function About(){
let navigate=useNavigate()
let [b] = pagination("https://fakestoreapi.com/products")

function aboutt(){
    navigate("/")
}
    return(
        <>
         <div>

                

<div>
    {b.filter(ele => ele.id > 5 & ele.id<11).map((ele, index) => (
        <div key={ele.id}>
            <p>{ele.title}</p>
         
        </div>
    ))}
</div>



        <button onClick={()=>aboutt()}>1</button>
        </div>
        </>
    )
}
export default About