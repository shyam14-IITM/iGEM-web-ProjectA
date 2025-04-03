import "./Attributions.css";
const Attributions = () => {
    return ( 
        <div className="Attributions">
            <br /><br /><br /><br />
            <header>
                <div>
                    <p>Attributions</p>
                    
                </div>
               <div>
                    <img src="http://static.igem.wiki/teams/5155/mars.webp" alt="" />
                </div> 
                

            </header>

            {/* <h3>Team Member Contributions</h3> */}
            <br /><br />
            <div>
                 <iframe src="https://teams.igem.org/wiki/5155/attributions" width={"100%"} height="100%" >
            </iframe>

            </div>
           
        </div>
     );
}
 
export default Attributions;