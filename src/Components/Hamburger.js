import './Hamburger.css'

const Hamburger = () => {
    return(
        <div className='Hamburger'>
            
            <div id="menuToggle">
                <input type="checkbox" />

                <span id="line1"></span>
                <span id="line2"></span>
                <span id="line3"></span>

                <ul id="menu">
                    <a href="#HomepageLeftSide"><button className='Hamburger-Reserve'>REZERVOVAT</button></a>
                    <a className='Hamburger-Link' href="#Vehicles"><li>Naše vozy</li></a>
                    <a className='Hamburger-Link' href="#Info"><li>Jak to funguje?</li></a>
                </ul>

            </div>
        </div>
    )
}

export default Hamburger