import axios from 'axios';
import { useEffect, useState } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useRouter } from 'next/router';
import validarFormulario from '../../components/Validation';
import ArticleForm from '../../components/ArticleForm';
import URLS from '../../helpers/url-helper';

const EditArticlePage = (props) => {
    const [article, setArticle] = useState({});
    const [content, setContent] = useState(null);
    const [errors, setErrors] = useState([]);
    const router = useRouter();

    const getTags = (tagList) => {
        if (tagList === null) {
            return '';
        }
        let result = tagList.join(', ');

        return result;
    };

    useEffect(() => {
        const urlEdit = URLS.URL_ARTICLES_EDIT(props.id);

        axios
            .get(urlEdit)
            .then((response) => {
                const newArticle = { ...response.data };
                newArticle.tags = getTags(newArticle.tags);

                setArticle(newArticle);
                setContent(response.data.content);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onChange = (event) => {
        const { id, value } = event.target;
        setArticle({ ...article, [id]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validarFormulario(article, content);
        setErrors(validationErrors);
        if (validationErrors.length > 0) {
            return;
        }

        const tagList = article.tags.split(',');
        const tagListTrimmed = tagList.map((club) => club.trim());

        const payload = {
            ...article,
            content: content,
            tags: tagListTrimmed,
        };

        const urlEdit = URLS.URL_ARTICLES_EDIT(props.id);

        axios.put(urlEdit, payload).then((response) => {
            if (response.status === 200) {
                router.push('/');
            }
        });
    };

    const onChangeCkeditor = (event) => {
        const text = event.editor.getData();
        setContent(text);
    };

    return (
        <div>
            <div className="div-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title-editor">Editar artículo</h1>
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
                            article={article}
                            content={content}
                            onChange={onChange}
                            onChangeCkeditor={onChangeCkeditor}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    return {
        props: {
            id: id,
        }, // will be passed to the page component as props
    };
}

export default EditArticlePage;
