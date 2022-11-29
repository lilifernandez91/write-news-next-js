import { Box, Modal, Typography } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CustomizedMenus from '../components/ArticlesAccions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const HomePage = () => {
    const [data, setData] = useState([]); 
    const [articleToDelete, setArticleToDelete] = useState(null); 
    const [showModal, setShowModal] = useState(false);

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

    const handleDelete = () => {
        // api a delete
        const url = `https://futbol-stats-blog-api.azurewebsites.net/api/articles/${articleToDelete.id}`;
        
        axios.delete(url).then((response) => {
            if (response.status === 204) {
                setShowModal(false);
                const newData = data.filter(x => x.id !== articleToDelete.id);
                setData(newData);
            }
        });
    };

    const handleDeleteModal = (article) => {
        setShowModal(true);
        setArticleToDelete(article);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className="div-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="div-button">
                            <h1>Listar artículos</h1>
                            <button type="button" className="btn btn-primary btn-sm">
                                <Link href="/create-article" className="link">
                                    Crear artículo
                                </Link>
                            </button>
                        </div>
                        <table className="table table-striped table-style">
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
                                        <td>{p.lastUpdated}</td>
                                        <td>{p.status}</td>
                                        <td>
                                            <CustomizedMenus
                                                article={p}
                                                handleDeleteModal={handleDeleteModal}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal
                open={showModal === true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ¿Estás seguro que desea eliminar el artículo?
                    </Typography>
                    <div className='button-div'>
                    <button className='botton-delete' onClick={handleDelete}>Sí</button>
                    <button className='botton-delete' onClick={handleClose}>Cancelar</button>
                    </div>
                </Box>
            </Modal>
            {showModal && null}
        </div>
    );
};

export default HomePage;
