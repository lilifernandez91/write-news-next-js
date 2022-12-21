import PushPinIcon from '@mui/icons-material/PushPin';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { ARTICLE_STATUS } from '../../../constants/articleStatus';

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

const PublishComponent = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleClose = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    return (
        <div className="publish-container">
            <div className="publish-container-header">
                <h5 className="publish-container-header-text">Publicar</h5>
            </div>

            <div className="publish-container-body">
                <div className="publish-container-body-draft">
                    <button
                        className="btn-action-transparent"
                        onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.DRAFT)}
                        id="draft"
                    >
                        Guardar borrador
                    </button>
                    <button
                        className="btn-action-transparent"
                        onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.DRAFT)}
                        id="preview"
                    >
                        Vista previa
                    </button>
                </div>
                <div className="publish-container-body-status">
                    <p>
                        <PushPinIcon className="icon-publish" />
                        <span className="span">Estado: </span> 
                        <span></span> 
                        <span className="span-edit" onClick={handleClick}>
                            Editar
                        </span>
                    </p>
                    <p>
                        <VisibilityIcon className="icon-publish" />
                        <span className="span">Visibilidad:</span> Publicado
                    </p>
                    <p>
                        <DateRangeIcon className="icon-publish" />
                        <span className="span">Publicar:</span> Inmediatamente
                    </p>
                </div>
            </div>

            <div className="publish-container-footer">
                <button
                    className="btn-publish"
                    onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.PUBLISHED)}
                    id="publish"
                >
                    Publicar
                </button>
            </div>

            <Modal
                open={showModal === true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="container-modal">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cambiar estados
                    </Typography>
                    <form className='container container-form-modal'>
                        <div>
                            <div>
                                <input type="radio" name="status" value="borrador"/>
                                <label for="name" className='label-modal' onClick={(e) => props.onChangeStatus(e, ARTICLE_STATUS.DRAFT)}>Borrador</label>
                            </div>
                            <div>
                                <input type="radio" name="status" value="creado" />
                                <label for="name" className='label-modal' onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.CREATED)}>Creado</label>
                            </div>
                            <div>
                                <input type="radio" name="status" value="publicado" />
                                <label for="name" className='label-modal' onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.PUBLISHED)}>Publicado</label>
                            </div>
                            <div>
                                <input type="radio" name="status" value="pausado" />
                                <label for="name" className='label-modal' onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.PAUSED)}>Pausado</label>
                            </div>
                            <div>
                                <input type="radio" name="status" value="archivado" />
                                <label for="name" className='label-modal' onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.ARCHIVED)}>Archivado</label>
                            </div>
                            <div>
                                <input type="radio" name="status" value="eliminado" />
                                <label for="name" className='label-modal' onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.DELETED)}>Eliminado</label>
                            </div>
                        </div>
                        <button className='btn-modal'>Guardar</button>
                    </form>
                </Box>
            </Modal>
            {showModal && null}
        </div>
    );
};

export default PublishComponent;
