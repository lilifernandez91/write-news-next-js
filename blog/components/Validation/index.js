const validarFormulario = (article, content) => {
    let errors = [];

    if (!article.title) {
        errors.push('El título no debe estar vacío')
    } else if (article.title.length < 10 || article.title.length > 150){
        errors.push('El título debe contener entre 10 y 150 caracteres')
    }

    if(!article.secondaryTitle){
        errors.push('El subtítulo no debe estar vacío')
    } else if (article.secondaryTitle.length < 10 || article.secondaryTitle.length > 250){
        errors.push('El subtítulo debe contener entre 10 y 250 caracteres')
    }

    if(!article.author){
        errors.push('El campo del autor no debe estar vacío')
    } else if (article.author.length < 2 || article.author.length > 10){
        errors.push('El campo del autor debe contener entre 2 y 10 caracteres')
    }

    if(!content){
        errors.push('El campo del contenido no debe estar vacío')
    } else if (content.length < 100){
        errors.push('El campo del contenido debe contener como mínimo 100 caracteres')
    }

    return errors
};

export default validarFormulario;
