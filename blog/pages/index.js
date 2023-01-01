import { Box, Button, Modal, Pagination, PaginationItem, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomizedMenus from '../components/CustomizedMenus';
import URLS from '../helpers/url-helper';
import { articleStatusHelper } from '../helpers/article-helper';
import HeadComponent from '../components/HeadComponent';
import { Pages } from '../constants/pages';
import { getDateFormated } from '../helpers/datetime-helper';
import MultipleSelectCheckmarks from '../components/Select';
import axiosApiInstance from '../http/axiosInstance';

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
    const [skip, setSkip] = useState(0);
    const [take] = useState(10);

    useEffect(() => {
        const urlGet = URLS.URL_ARTICLES(skip, take);

        axiosApiInstance
            .get(urlGet)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [skip]);

    const handleDelete = () => {
        // api a delete
        const urlDelete = URLS.URL_ARTICLES_DELETE(articleToDelete.id);

        axiosApiInstance.delete(urlDelete).then((response) => {
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

    const handleChangeStatus = (article, status) => {
        const urlPause = URLS.URL_ARTICLES_CHANGE_STATUS(article.id);

        const payload = {
            status: status,
        };

        axiosApiInstance.put(urlPause, payload).then((response) => {
            if (response.status === 204) {
                const newData = [...data];
                for (const x of newData) {
                    if (article.id === x.id) {
                        x.status = status;
                    }
                }
                setData(newData);
            }
        });
    };

    const handleChangePage = (event, value) => {
        setSkip((value - 1) * take);
    };

    return (
        <div className="div-container">
            <HeadComponent pageId={Pages.LIST_ARTICLES} />
            <div className="container">
                <div className="row">
                    <div className="listar-articulos-header">
                        <h1 className="listar-articulos-header-text">Listar artículos</h1>
                    </div>
                </div>
                <div className="row header-row-cta">
                    <div className="col-12 col-md-8 container-btn-search-status">
                        <div>
                            <MultipleSelectCheckmarks />
                        </div>
                        <div>
                            <Button variant={`outlined`} type="button" className="btn-search-status">
                                <Link href="" className="">
                                    Buscar
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 container-btn-create-article">
                        <Link href="/create-article" className="link-create-article">
                            <button type="button" className="btn btn-primary btn-sm btn-create-article">
                                Crear artículo
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row table-articles-container">
                    <table className="table table-striped table-style">
                        <thead>
                            <tr>
                                <th className="table-header-col text-center"></th>
                                <th className="table-header-col text-left">Título</th>
                                <th className="table-header-col text-left">Autor</th>
                                <th className="table-header-col text-center">Fecha</th>
                                <th className="table-header-col text-center">Estado</th>
                                <th className="table-header-col text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((p, i) => (
                                <tr key={i}>
                                    <td className="table-body-col text-center">{i + 1}</td>
                                    <td className="table-body-col text-left">{p.title}</td>
                                    <td className="table-body-col text-left">{p.author}</td>
                                    <td className="table-body-col text-center">
                                        {getDateFormated(p.lastUpdated)}
                                    </td>
                                    <td className="table-body-col text-center">
                                        {articleStatusHelper.GET_ARTICLE_STATUS(p.status)}
                                    </td>
                                    <td className="table-body-col text-center">
                                        <CustomizedMenus
                                            article={p}
                                            handleDeleteModal={handleDeleteModal}
                                            handleEdit={handleEdit}
                                            handleChangeStatus={handleChangeStatus}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Pagination
                            count={10}
                            onChange={handleChangePage}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
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
        </div>
    );
};

export default HomePage;
