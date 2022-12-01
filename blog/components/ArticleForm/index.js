import CustomCKEditor from '../CkEditor';

const ArticleForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <div className="row">
                    <div className="col-12 col-lg-4">
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
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Autor
                            </label>
                            <input
                                value={props.article.author}
                                onChange={props.onChange}
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
                                value={props.article.tags}
                                onChange={props.onChange}
                                id="tags"
                                type="text"
                                className="form-control"
                                //placeholder=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        {props.content !== null && (
                            <CustomCKEditor
                                content={props.content}
                                onChangeCkeditor={props.onChangeCkeditor}
                            />
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn-article" type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ArticleForm;
