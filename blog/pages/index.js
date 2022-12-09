import { Box, Modal, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import CustomizedMenus from '../components/CustomizedMenus';
import URLS from '../helpers/url-helper';
import { articleStatusHelper } from '../helpers/article-helper';
import { ARTICLE_STATUS } from '../constants/articleStatus';
import { getDateFormated } from '../helpers/datetime-helper';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

const HomePage = () => {
    const [data, setData] = useState([]);
    const [articleToDelete, setArticleToDelete] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const urlGet = URLS.URL_ARTICLES();

        axios
            .get(urlGet)
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
        const urlDelete = URLS.URL_ARTICLES_DELETE(articleToDelete.id);

        axios.delete(urlDelete).then((response) => {
            if (response.status === 204) {
                setShowModal(false);
                const newData = data.filter((x) => x.id !== articleToDelete.id);
                setData(newData);
            }
        });
    };

    const handleDeleteModal = (article) => {
        setShowModal(true);
        setArticleToDelete(article);
    };

    const handleEdit = (article) => {
        const url = `/edit-article/${article.id}`;
        router.push(url);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handlePause = (article) => {
        const urlPause = URLS.URL_ARTICLES_PAUSE(article.id);

        const payload = {
            status: ARTICLE_STATUS.PAUSED,
        };

        axios.put(urlPause, payload).then((response) => {
            if (response.status === 204) {
            }
        });
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
                                    <th></th>
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
                                        <td>{i + 1}</td>
                                        <td>{p.title}</td>
                                        <td>{p.author}</td>
                                        <td>{getDateFormated(p.lastUpdated)}</td>
                                        <td>{articleStatusHelper.GET_ARTICLE_STATUS(p.status)}</td>
                                        <td>
                                            <CustomizedMenus
                                                article={p}
                                                handleDeleteModal={handleDeleteModal}
                                                handleEdit={handleEdit}
                                                handlePause={handlePause}
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
                <Box sx={style} className="container-modal">
                    <ClearIcon id="icon-modal" />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ¿Estás seguro?
                    </Typography>
                    <h1 className="text-modal">
                        ¿Realmente desea eliminar este artículo? Este proceso no se puede deshacer.
                    </h1>
                    <div className="button-div">
                        <button className="button-cancel" onClick={handleClose}>
                            Cancelar
                        </button>
                        <button className="button-yes" onClick={handleDelete}>
                            Sí
                        </button>
                    </div>
                </Box>
            </Modal>
            {showModal && null}
        </div>
    );
};

export default HomePage;
