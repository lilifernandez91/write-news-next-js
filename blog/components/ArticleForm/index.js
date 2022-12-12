import { ARTICLE_STATUS } from '../../constants/articleStatus';
import CustomCKEditor from '../CkEditor';
import AuthorComponent from './AuthorComponent';
import PublishComponent from './PublishComponent';

const ArticleForm = (props) => {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Título
                        </label>
                        <input
                            value={props.article.title}
                            onChange={props.onChange}
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
                            value={props.article.secondaryTitle}
                            onChange={props.onChange}
                            id="secondaryTitle"
                            type="text"
                            className="form-control"
                            placeholder="Escribe el título secundario del artículo"
                        />
                    </div>
                    {props.content !== null && (
                        <CustomCKEditor content={props.content} onChangeCkeditor={props.onChangeCkeditor} />
                    )}
                </div>
                <div className="col-12 col-lg-4">
                    <div className="mb-3 author-component">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Autor
                        </label>
                        <AuthorComponent
                            onChange={props.onChange}
                            article={props.article}
                            onChangeAuthor={props.onChangeAuthor}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Tags
                        </label>
                        <input
                            value={props.article.tags}
                            onChange={props.onChange}
                            id="tags"
                            type="text"
                            className="form-control"
                            placeholder="Escribe las tags separadas por una coma"
                        />
                    </div>
                    <PublishComponent onSubmit={props.onSubmit} />
                </div>
            </div>
            <div className="col-12">
                <button className="btn-article" onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.CREATED)}>
                    Guardar
                </button>
            </div>
        </div>
    );
};

export default ArticleForm;
