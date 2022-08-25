import React from "react";
import { Link } from "react-router-dom";
import sty from "./General_Css/Page.module.css"


const Page = () => {
return (
     <div className={sty.container}>
      <div>
        <Link to="Home">
        <button>Welcome</button>
        </Link>
        </div>
        
     </div>
)
}

export default Page