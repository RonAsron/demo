import AppGoogleLogin from "./AppGoogleLogin";
const Navbar =({show})=>{
    return(
        <div className={show? 'slidenav active' : 'slidenav'}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    < a href="/">Story</a>
                </li>
                <li>
                    < a href="/">Question thread</a>
                </li>
                <li>
                    < a href="/">Contact Us</a>
                </li>
                <li>
                    <AppGoogleLogin />
                </li> 
            </ul>
        </div>
    )
}

export default Navbar;