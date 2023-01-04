import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HamburguerMenu from '../HamburguerMenu';

const Header = () => {
    const [width, setWidth] = useState(0);
    const isMobile = 992;

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            handleWindowSizeChange();
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }
    }, []);

    return (
        <div className='header'>
            {width >= isMobile ? (
                <nav>
                    <ul className='list-container'>
                        <li className='list-header'>
                            <Link href="/" className='link'>Artículos</Link>
                        </li>
                        <li className='list-header'>
                        <PersonIcon className='person-icon-login'/>
                            <Link href="/login" className='link'>Iniciar sesion
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : (
                <HamburguerMenu />
            )}
        </div>
    );
};

export default Header;
