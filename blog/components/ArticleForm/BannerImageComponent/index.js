import { useState } from 'react';
import URLS from '../../../helpers/url-helper';
import axiosApiInstance from '../../../http/axiosInstance';

const BannerImageComponent = (props) => {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const saveFile = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('formFile', file);
        formData.append('fileName', fileName);

        const res = await axiosApiInstance.post(URLS.URL_IMAGES(), formData);

        props.onChangeBannerImage(res?.data?.blob?.uri);
    };

    return (
        <div className="banner-image-container">
            <div className="banner-image-container-header">
                <h4 className="banner-image-container-header-text">Imagen de Portada</h4>
            </div>
            <div className="banner-image-container-body">
                <div className="banner-image-container-body-file">
                    <input type="file" onChange={saveFile} />
                </div>
                <div className="banner-image-container-body-upload">
                    <input type="button" value="Subir Imagen" onClick={uploadFile} />
                </div>
            </div>          

            {props.article && props.article.bannerImage && (
                <div className="banner-image-container-footer">
                    <div className="banner-image-container-foolter-preview">
                        <img
                            src={props.article.bannerImage}
                            alt=""
                            style={{ width: '100%', height: '250px' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BannerImageComponent;
