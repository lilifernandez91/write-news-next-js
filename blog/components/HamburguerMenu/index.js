import Link from 'next/link';

const HamburguerMenu = () => {
    return (
        <div className="hamburguer-menu-container">
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/contactanos">Contáctanos</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default HamburguerMenu;
