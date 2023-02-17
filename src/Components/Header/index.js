// You have to check whether the person is logged in or not 
// If not logged in, displace something else
import './index.css'
const Header = ()=>{
    return(
        <div className="header-section">
            {/* <img src="/home/isod/asdafs/as"/> */}
            <h1 className='logo'>EEM List</h1>
            <div className='navbar-header'>
                <nav className='navbar'>
                    <ul className='right-section'>
                        <li>Create new note</li>
                        <li>Show Schedule</li>
                        <li>Invite friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;