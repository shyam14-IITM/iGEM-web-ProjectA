import { useState, useEffect } from "react";
import itemDrop from "./itemDrop";
import ItemDrop from "./itemDrop";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";

const Navbar = () => {
   const[scrolly,setScrolly]=useState(window.scrollY);
const [styles,setStyles]=useState({});
    // let className = "";

// NavBar scroll functionality
 
window.addEventListener("scroll",()=>{
    let newScrolly=window.scrollY;
    
        setStyles(newScrolly>scrolly?{top:"-100px"}:{top:"0px"});
        setScrolly(newScrolly);
        setIsCLicked([false,false,false,false]);
    
        
})

const [hbCLicked,setHbClicked]=useState(false);
// const [a1CLicked,setA1Clicked]=useState(false);
// const [a2CLicked,setA2Clicked]=useState(false);
// const [a3CLicked,setA3Clicked]=useState(false);
// const [a4CLicked,setA4Clicked]=useState(false);

const [isClicked,setIsCLicked]=useState([false,false,false,false]); //for nav anchor tags

function toggleNavItemClick(a){
    let newArr=[false,false,false,false];

    newArr[a]=isClicked[a]?false:true;
    setIsCLicked(newArr);
}
const[isSmall,setisSmall]=useState(false);
window.addEventListener("resize",()=>{
    let newSm= window.innerWidth<820;
    setisSmall(newSm);
})
function closeSubMenu(e){
    if(e.target.name=='subnavLink'){
        setIsCLicked([false,false,false,false]);
        console.log(e.target.name);
        
    }
    

}



    return (

        <nav style={styles} >

            <div style={styles}   className={hbCLicked && isSmall?"opened":"nav-bar"} >
                
                   <Link className="logolink" to="/"><img src="/logo.jpg" alt="Logo" /></Link> 
               
                { !hbCLicked && <span onClick={
                    ()=>{
                        
                            setHbClicked(!hbCLicked);
                      
                    }
                } className={"material-symbols-outlined hb"}>menu</span>}
                { hbCLicked && <img id="close" src="close.png" onClick={
                    ()=>{
                        
                            setHbClicked(!hbCLicked);
                      
                    }
                } />}
                <a onClick={
                    (e)=>{toggleNavItemClick(0); closeSubMenu(e)}} className="nav-item " >PROJECT {
                        isClicked[0] && (hbCLicked && isSmall || !hbCLicked && !isSmall) && <ItemDrop   isSmall={isSmall} idx={0}/>
                     } </a>
                    
                <a onClick={
                    ()=>{toggleNavItemClick(1)}} className="nav-item" >DRY LAB {
                        isClicked[1] &&  (hbCLicked && isSmall || !hbCLicked && !isSmall) && <ItemDrop  isSmall={isSmall}  idx={1}/>
                     } </a>
                    
                <a onClick={
                    ()=>{toggleNavItemClick(2)}}className="nav-item" >HUMAN PRACTICES   {
                        isClicked[2] &&  (hbCLicked && isSmall || !hbCLicked && !isSmall) && <ItemDrop  isSmall={isSmall}  idx={2}/>
                    }</a>
                  
                <a onClick={
                    ()=>{toggleNavItemClick(3)}}className="nav-item"  >TEAM {
                        isClicked[3] &&  (hbCLicked && isSmall || !hbCLicked && !isSmall) && <ItemDrop isSmall={isSmall}  idx={3}/>
                    }
 </a>
                    

                   

                {/* <div className={hbCLicked?"opened":"closed"}>
                <a onClick={
                    ()=>{
                        if(!a1CLicked){
                            setA1Clicked(true); console.log("clicked")
                        }
                        else{
                            setA1Clicked(false);
                        }

                    }} class="nav-item " href="#">PROJECT</a>
                <a onClick={
                    ()=>{
                        if(!a2CLicked){
                            setA2Clicked(true); console.log("clicked")
                        }
                        else{
                            setA2Clicked(false);
                        }

                    }} class="nav-item" href="#">DRY LAB</a>
                <a onClick={
                    ()=>{
                        if(!a3CLicked){
                            setA3Clicked(true); console.log("clicked")
                        }
                        else{
                            setA3Clicked(false);
                        }

                    }} class="nav-item" href="#">HUMAN PRACTICES</a>
                <a onClick={
                    ()=>{
                        if(!a4CLicked){
                            setA4Clicked(true); console.log("clicked")
                        }
                        else{
                            setA4Clicked(false);
                        }

                    }} class="nav-item" href="#">TEAM</a>

                </div> */}



            </div>
        </nav>

    );
}

export default Navbar;