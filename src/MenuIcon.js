import { useState,useEffect } from "react";
const MenuIcon = () => {
    const [scrolled, setScrolled] = useState(false);

    let classN = "";
    const handleScroll=() => {
        setScrolled(window.scrollY>200);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll
            
        )
        // console.log("ran ran");
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    }, [scrolled])

    return (
        <>
            <img  className={scrolled?"menuS":"menu"} src="/logo.jpg" alt="" />
        </>
      );
}
 
export default MenuIcon;