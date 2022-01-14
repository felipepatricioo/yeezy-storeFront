import './style.css';

export default function Footer () {
    return ( 
        <footer>
            {/* <div>
                <ul>
                    <li> 
                        <h6>ESTE É O FOOTER </h6>
                    </li>
                    <li> 
                    <h6>ESTE É O FOOTER </h6>
                    </li>
                </ul>
            </div> */}
            <div className="footer-msg"> 
            <h6>Website made by <a href="http://github.com/felipepatricioo" target="_blank" rel="noopener noreferrer">Felipe</a></h6>
            </div>
        </footer>
    )
}