import { useState } from 'react';
import './Toc.css';

const Toc = ({isScrolled}) => {
    

    const anchors=["The Payload Problem","The SynBio Solution","COSMOBIOME","Modeling","Astrolabe"];
    const[isClicked,setIsClicked]=useState([false,false,false,false]);
    const handleNavClick=(id)=>{
       let newArr=[false,false,false,false];
       newArr[id]=true;
       setIsClicked(newArr);
    }
    let styles={transform:"translateX(-320px)"};
    return ( 
        <div style={isScrolled?{}:styles} className="DescNav Toc">
            <div>
                {
                anchors.map((link,idx)=>{
                    return <a onClick={()=>{handleNavClick(idx)}} className = {isClicked[idx]?"active":""} href={"#section"+(idx+1)}>{link}</a>
                })
            }
        </div>
            </div>
            
     );
}
 
export default Toc;