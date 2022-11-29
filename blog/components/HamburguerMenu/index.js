import Link from 'next/link';

const HamburguerMenu = () => {
    return (
        <div className="hamburguer-menu-container">
             <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className="collapse container-menu" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <nav>
                        <ul className='container-list'>
                            <li>
                                <Link href="/" className='link-menu'>Home</Link>
                            </li>
                            <li>
                                <Link href="/contactanos" className='link-menu'>Contáctanos</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
           
        </div>
    );
};

export default HamburguerMenu;
