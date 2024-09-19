import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header(){
    return(
        <header>
            <Link to='/'>Fast-React-Pizza-App</Link>
            <SearchOrder/>
            
            <p>Kunal parashar</p>
        </header>
    )
}

export default Header;