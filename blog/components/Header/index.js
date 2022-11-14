import Link from 'next/link';
import { useEffect, useState } from 'react';
import HamburguerMenu from '../HamburguerMenu';

const Header = () => {
    const [width, setWidth] = useState(0);
    const isMobile = 992;

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
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
                    <ul>
                        <li className='list-header'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='list-header'>
                            <Link href="/contactanos">Contáctanos</Link>
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
