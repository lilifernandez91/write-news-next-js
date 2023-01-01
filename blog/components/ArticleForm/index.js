import { ARTICLE_STATUS } from '../../constants/articleStatus';
import CustomCKEditor from '../CkEditor';
import AuthorComponent from './AuthorComponent';
import BannerImageComponent from './BannerImageComponent';
import PublishComponent from './PublishComponent';
import TagsComponent from './TagsComponent';

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
                    {props.content !== null && (
                        <CustomCKEditor content={props.content} onChangeCkeditor={props.onChangeCkeditor} />
                    )}
                </div>
                <div className="col-12 col-lg-4">
                    <PublishComponent
                        onSubmit={props.onSubmit}
                        onChangeStatus={props.onChangeStatus}
                        article={props.article}
                    />

                    <AuthorComponent
                        onChange={props.onChange}
                        article={props.article}
                        onChangeAuthor={props.onChangeAuthor}
                    />

                    <TagsComponent onChange={props.onChange} article={props.article} />

                    <BannerImageComponent
                        onChangeBannerImage={props.onChangeBannerImage}
                        article={props.article}
                    />
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
