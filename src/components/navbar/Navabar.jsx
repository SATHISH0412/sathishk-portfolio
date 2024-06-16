import './navbar.css'

function Navbar(){
    return(<>
         <section className='navbar'>
         <div className="logo">
                <img src="df" alt="images" />
            </div>
            <div className="navitems">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                </ul>
            </div>
         </section>
         <section className=" dropdown">
        
            <div className="dropitem">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                </ul>
            </div>
         </section>

     </>);

}

export default Navbar;