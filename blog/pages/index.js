import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CustomizedMenus from '../components/ArticlesAccions';

const HomePage = () => {
    const [data, setData] = useState([]);
    const url = 'https://futbol-stats-blog-api.azurewebsites.net/api/articles';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='div-container'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='div-button'>
                        <h1>Listar artículos</h1>
                        <button type="button" className="btn btn-primary btn-sm">
                        <Link href="/create-article" className='link'>Crear artículo</Link>
                        </button>
                        </div>
                        <table className='table table-striped table-style'>
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Autor</th>
                                    <th>Fecha</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((p, i) => (
                                    <tr key={i}>
                                        <td>{p.title}</td>
                                        <td>{p.author}</td>
                                        <td>{p.author}</td>
                                        <td>{p.author}</td>
                                        <td>
                                        <CustomizedMenus />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


