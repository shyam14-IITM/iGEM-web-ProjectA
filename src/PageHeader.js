import './PageHeader.css';

const PageHeader = ({Title,darktext}) => {
    return ( 
        <header className="header">
                <div className="Title">
                    <p >{Title}<span id="dark">{darktext}</span></p>
                    
                </div>
               <div className="imgdiv">
                    <img src="http://static.igem.wiki/teams/5155/mars.webp" alt="" />
                </div> 
            </header>
     );
}
 
export default PageHeader;