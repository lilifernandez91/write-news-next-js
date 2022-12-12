import { CKEditor } from 'ckeditor4-react';

const CustomCKEditor = (props) => {
    return (
        <div className="">
            <h2 className="ck-editor">Contenido</h2>
            <CKEditor
                initData={props.content}
                onInstanceReady={() => {}}
                onChange={props.onChangeCkeditor}                
            />
        </div>
    );
};

export default CustomCKEditor;
