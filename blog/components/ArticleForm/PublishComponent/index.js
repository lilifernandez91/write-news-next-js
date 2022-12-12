import { ARTICLE_STATUS } from "../../../constants/articleStatus";

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
                        onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.DRAFT)}
                        id="draft"
                    >
                        Save Draft
                    </button>
                    <button
                        className="btn-action-transparent"
                        onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.DRAFT)}
                        id="preview"
                    >
                        Preview
                    </button>
                </div>
                <div className="publish-container-body-status">
                    <p>
                        Estado: <span>Borrador</span>
                    </p>
                </div>
            </div>

            <div className="publish-container-footer">
                <button className="btn-publish" onClick={(e) => props.onSubmit(e, ARTICLE_STATUS.PUBLISHED)} id="publish">
                    Publicar
                </button>
            </div>
        </div>
    );
};

export default PublishComponent;
