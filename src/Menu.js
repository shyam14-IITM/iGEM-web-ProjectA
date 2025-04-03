
const Menu = ({scrolled})=>{
    return ( 
        <div className={scrolled?"mainMenu":"Menu"}>
            <div className="circle">

            </div>
            <a className="a1" href="">item 1</a>
            <a className="a2" href="">item 2</a>
            <a className="a3" href="">item 3</a>
            <a className="a4" href="">item 4</a>
        </div>
    );
}
 
export default Menu;