import React from "react";
import { Link } from "react-router-dom";
import sty from "./General_Css/Page.module.css"


const Page = () => {
return (
     <div className={sty.container}>
      <div >
           <h1 className={sty.h1}>PI Food</h1>
        <Link to="Home">
        <button className={sty.wl} >Welcome</button>
        </Link>
        </div>
        
     </div>
 )
} 

export default Page