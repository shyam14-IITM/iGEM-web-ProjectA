import { useState,useEffect } from "react";

const Home = () => {
    const [scrol,setScrol]=useState(0);
    window.addEventListener("scroll",()=>{
        if(window.scrollY>90 && window.scrollY<200){
            setScrol(2);
            console.log("excecuted set 2");
        }

        if(window.scrollY>1200 && window.scrollY< 1400){
                setScrol(3);
                console.log("excecuted set 3");    
        }
        
        if(window.scrollY>1900 && window.scrollY<2200){
            setScrol(4);
        }
        // if(window.scrollY==2277){
        //     setScrol(5);
        // }
        // if(window.scrollY>90){
        //     setScrol(2);
        // }
        // console.log(window.scrollY," ", scrol)
    })
    return (  
        <>
            <div  className="box b1">
                
                <div className={scrol>=0?"text moveIN2":"text"}>
                    Humans have always been fascinated by the<br /> world beyond: <br /><br />Creation myths, cave paintings, constellations
                </div>
                <img className={scrol>=0?"moveIN":""} src="/home-img-1.jpg" alt="" />
                
    
            </div>
            
            <div className="box b2">
                
                <div className={scrol>=2?"text moveIN2":"text"}>
                It took us less than 66 years to go from the <br/> first flying plane, to fly to the moon
                </div>
                <img className={scrol>=2?"moveIN":""} src="/home-image-moon.jpg" alt="" />
                {/* <img src="" alt="" /> */}
                
    
            </div>
                
            <div className="box b3">
                
                <div className={scrol>=3?"text moveIN2":"text"}>
                Imagine a future where humanity thrives on<br/> distant worlds, not just surviving, but<br/> flourishing.
                </div>
                <img className={scrol>=3?"moveIN":""}  src="https://static.igem.wiki/teams/5155/3-compressed.gif"alt="" />
                
    
            </div>
            <div className="box b4">
                
                <div className={scrol>=4?"text moveIN2":"text"}>
                But, transporting resources from Earth is<br/> costly and cumbersome
                </div>
                <img className={scrol>=4?"moveIN":""}  src="https://static.igem.wiki/teams/5155/4-compressed.gif" alt="" />
                
    
            </div>
            <div className="box b5">
                
                <div className="text">
                Instead, what if we could harness the<br/> resources from host planets to support<br/> human life?<br/><br/> The answer, is <span style={{color: "yellow"}}>In-Situ Resource Utilization</span>
                </div>
                <img src="https://static.igem.wiki/teams/5155/5-compressed.gif"/>
                
    
            </div>
            <div className="box b6">
                
                <div className="text">
                    On Mars, the soil holds a precious resource:<br/> <span style={{color:"yellow"}} >Silica</span><br/><br/> But how do we unlock its potential?<br/><br/>
                    Using <i >Pseudomonas fluorescens</i>, we can<br/> solubilize the silica found in Martian soil,
                    <br/> transforming it into a usable form – <span>silicic<br/> acid</span>
                </div>
                <img src="https://static.igem.wiki/teams/5155/6-compressed.gif"/>
                
    
            </div>
            <div className="box b7">
                
                <div className="text">
                Enter <i >Phaeodactylum tricornutum</i>,<br/> microalgal diatoms with a unique ability to<br/> use silicic acid to form their cell walls
                </div>
                <img src="https://static.igem.wiki/teams/5155/7-compressed.gif"/>
                
    
            </div>
            <div className="box b8">
                
                <div className="text ">
                The bacteria and diatoms create a closed-<br/>loop system for nutrient and silica recycling<br/><br/> Both organisms can be engineered to produce<br/> compounds of interest – a <span > dual <br/> biomanufacturing</span> setu
                </div>
                <img src="https://static.igem.wiki/teams/5155/8-new.gif"/>
                
    
            </div>
            <div className="box">
                
                <div className="text">
               We Present
                </div>
                <img id="ab" src="https://static.igem.wiki/teams/5155/9.webp"/>
                
    
            </div>
            <div className="box b10">
                
                <div className="text">
                a CO-culture with Silicon MObilization for<br/> BIOmanufacturing using Martian rEgolith<br/><br/> With ISRU and synthetic biology, we’re not<br/> just exploring space; we’re making it our <br/>home<br/><br/> The future of interplanetary living starts<br/> here.
                </div>
                <img  src="https://static.igem.wiki/teams/5155/new-footer.webp" />
                
    
            </div>
         
            





        </>
    );

}
export default Home;