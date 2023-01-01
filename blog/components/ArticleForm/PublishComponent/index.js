import { ARTICLE_STATUS } from '../../../constants/articleStatus';
import { articleStatusHelper } from '../../../helpers/article-helper';

const PublishComponent = (props) => {
    return (
        <div className="publish-container">
            <div className="publish-container-header">
                <h5 className="publish-container-header-text">Publicar</h5>
            </div>

            <div className="publish-container-body">
                <div className="publish-container-body-draft">
                    <button
                        className="btn-action-transparent"
                        onClick={(e) => props.onChangeStatus(e, ARTICLE_STATUS.DRAFT)}
                        id="draft"
                    >
                        Save Draft
                    </button>
                    <button
                        className="btn-action-transparent"
                        onClick={(e) => props.onChangeStatus(e, ARTICLE_STATUS.DRAFT)}
                        id="preview"
                    >
                        Preview
                    </button>
                </div>
                <div className="publish-container-body-status">
                    <p>
                        Estado:{' '}
                        <span style={{ fontStyle: 'italic' }}>
                            {articleStatusHelper.GET_ARTICLE_STATUS(props.article.status)}
                        </span>
                    </p>
                </div>
            </div>

            <div className="publish-container-footer">
                <button
                    className="btn-publish"
                    onClick={(e) => props.onChangeStatus(e, ARTICLE_STATUS.PUBLISHED)}
                    id="publish"
                >
                    Publicar
                </button>
            </div>
        </div>
    );
};

export default PublishComponent;
