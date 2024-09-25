import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
// import Username from "../features/user/UserName";

function Header(){
    return(
        <header className="bg-yellow-500 uppercase py-3 px-4 border-b border-stone-200 sm:px-6 flex items-center justify-between">
            <Link to='/' className="tracking-widest">Fast-React-Pizza-App</Link>
            <SearchOrder/>
            {/* <Username/> */}
        </header>
    )
}

export default Header;
            