import axios from 'axios';
import { useState } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CustomCKEditor from '../../components/CkEditor';
import validarFormulario from '../../components/Validation';

const CreateArticle = () => {
    const [article, setArticle] = useState({
        title: '',
        secondaryTitle: '',
        author: '',
        tags: '',
    });

    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const url = 'https://futbol-stats-blog-api.azurewebsites.net/api/articles';

    //Para controlar el input
    const onChange = (event) => {
        const { id, value } = event.target; //event.target es el input y se queda con el id y el value
        setArticle({ ...article, [id]: value });
    };

    //Para obtener el artículo y el contenido y se le manda el payload a la API
    const onSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validarFormulario(article, content);
        setErrors(validationErrors);
        if (validationErrors.length > 0) {
            return;
        }

        //Para las tags
        const tagList = article.tags.split(',');
        const tagListTrimmed = tagList.map((club) => club.trim());

        const payload = {
            ...article,
            content: content,
            tags: tagListTrimmed,
        };

        axios.post(url, payload).then((response) => {
            if (response.status === 200) {
                // redirigir al usuario a la pagina de listar articulos
            } else {
                // decirle al usuario que algo salio mal
            }
        });
    };

    const onChangeCkeditor = (event) => {
        const text = event.editor.getData();
        setContent(text);
    };

    return (
        <div className="div-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="title-editor">Crear artículo</h1>
                    </div>
                    {errors && errors.length > 0 && (
                        <div className="div-errors">
                            <WarningAmberIcon className="errors-icon" />
                            <ul className="errors">
                                {errors.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Título
                                    </label>
                                    <input
                                        value={article.title}
                                        onChange={onChange}
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        //aria-describedby="emailHelp"
                                        placeholder="Escribe el título del artículo"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Título Secundario
                                    </label>
                                    <input
                                        value={article.secondaryTitle}
                                        onChange={onChange}
                                        id="secondaryTitle"
                                        type="text"
                                        className="form-control"
                                        placeholder="Escribe el título secundario del artículo"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Autor
                                    </label>
                                    <input
                                        value={article.author}
                                        onChange={onChange}
                                        id="author"
                                        type="text"
                                        className="form-control"
                                        placeholder="Escribe el autor"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Tags
                                    </label>
                                    <input
                                        value={article.tags}
                                        onChange={onChange}
                                        id="tags"
                                        type="text"
                                        className="form-control"
                                        //placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-8">
                                <CustomCKEditor onChangeCkeditor={onChangeCkeditor} />
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn-article" type="submit">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateArticle;
