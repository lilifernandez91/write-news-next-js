import { useState } from 'react';
import { useRouter } from 'next/router';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Pages } from '../../constants/pages';
import validarFormulario from '../../components/Validation';
import ArticleForm from '../../components/ArticleForm';
import HeadComponent from '../../components/HeadComponent';
import axiosApiInstance from '../../http/axiosInstance';
import URLS from '../../helpers/url-helper';
import { ROUTES_CONSTANTS } from '../../constants/routes-constants';

const CreateArticle = () => {
    const [article, setArticle] = useState({
        title: '',
        author: 'Analítica Fantasy',
        tags: '',
    });

    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const router = useRouter();

    //Para controlar el input
    const onChange = (event) => {
        const { id, value } = event.target; //event.target es el input y se queda con el id y el value
        setArticle({ ...article, [id]: value });
    };

    const onChangeAuthor = (event) => {
        const { value } = event.target; //event.target es el input y se queda con el id y el value
        setArticle({ ...article, author: value });
    };

    const onChangeBannerImage = (imageUrl) => {
        setArticle({ ...article, bannerImage: imageUrl });
    };

    //Para obtener el artículo y el contenido y se le manda el payload a la API
    const onSubmit = (event, status) => {
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
            status: status,
        };

        const urlGet = URLS.URL_ARTICLES();

        axiosApiInstance.post(urlGet, payload).then((response) => {
            if (response.status === 200 || response.status === 204) {
                // redirigir al usuario a la pagina de listar articulos
                router.push(ROUTES_CONSTANTS.ARTICLES);
            } else {
                // decirle al usuario que algo salió mal
            }
        });
    };

    const onChangeCkeditor = (event) => {
        const text = event.editor.getData();
        setContent(text);
    };

    return (
        <div className="div-container">
            <HeadComponent pageId={Pages.CREATE_ARTICLE} />
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
                    <ArticleForm
                        onSubmit={onSubmit}
                        content={content}
                        article={article}
                        onChange={onChange}
                        onChangeAuthor={onChangeAuthor}
                        onChangeCkeditor={onChangeCkeditor}
                        onChangeBannerImage={onChangeBannerImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateArticle;
