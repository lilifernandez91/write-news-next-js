const TagsComponent = (props) => {
    return (
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
            />
        </div>
    );
};

export default TagsComponent;
