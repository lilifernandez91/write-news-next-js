const validarFormulario = (article, content) => {
    let errors = [];

    if (!article.title) {
        errors.push('El título no debe estar vacío')
    } else if (article.title.length < 10 || article.title.length > 150){
        errors.push('El título debe contener entre 10 y 150 caracteres')
    }

    if(!content){
        errors.push('El campo del contenido no debe estar vacío')
    } else if (content.length < 100){
        errors.push('El campo del contenido debe contener como mínimo 100 caracteres')
    }

    return errors
};

export default validarFormulario;
