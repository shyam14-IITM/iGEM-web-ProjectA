import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ItemDrop = ({idx,back,isSmall}) => {
const data=[["Description","Experiments","Results","Contributions","Notebook","Safety","Future Direction"],["Model","Software"],["Integrated Human Practice","Education"],["Members","Attributions"]] ;
const styl=["135px","170px","200px","240px"];
const [styles,setStyles]=useState({opacity:"0.1"}) ;
    return (
        <div style={isSmall?{top:styl[idx]}:null}
            
         className={"itemDrop"}>
            {
                data[idx].map((link)=>(
                    <Link name="subnavLink" to={"/"+link.toLowerCase()} >{link}</Link>
                ))

                
            }
        </div>
     );
} 
 
export default ItemDrop;