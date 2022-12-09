import React from 'react';
import Head from 'next/head';
import { Pages } from '../../constants/pages';

const descriptions = {
    [Pages.CREATE_ARTICLE]: 'Para crear un artículo, rellena los campos y pulsa el botón de crear',
    [Pages.EDIT_ARTICLE]: 'Para editar un artículo, rellena los campos y pulsa el botón de editar',
    [Pages.LIST_ARTICLES]: 'Listado de artículos',
};

const titles = {
    [Pages.CREATE_ARTICLE]: 'Crear artículo',
    [Pages.EDIT_ARTICLE]: 'Editar artículo',
    [Pages.LIST_ARTICLES]: 'Listar artículos',
};

const urls = {
    [Pages.CREATE_ARTICLE]: '/create-article',
    [Pages.EDIT_ARTICLE]: '/create-article',
    [Pages.LIST_ARTICLES]: '/',
};
const images = {
    [Pages.CREATE_ARTICLE]: `articles/news.jpg`,
    [Pages.EDIT_ARTICLE]: `articles/news.jpg`,
    [Pages.LIST_ARTICLES]: `articles/news.jpg`,
};

function HeadComponent({ pageId, description, title, url, image }) {
    url = url ?? `${process.env.NEXT_PUBLIC_URL_FRONT}${urls[pageId]}`;
    title = title ?? titles[pageId];
    description = description ?? descriptions[pageId];
    image = image ?? `${process.env.NEXT_PUBLIC_AZURE_BANNER_IMAGES}/${images[pageId]}`;

    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <link rel="canonical" href={url} key="canonical" />
            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                key="robots"
            />
            <meta name="description" content={description} key="name-description" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:url" content={url} key="url" />
            <meta property="og:type" content="sports" key="type" />
            <meta property="og:title" content={title} key="title" />
            <meta property="og:description" content={description} key="description" />
            <meta property="og:image" content={image} key="image" />
            <meta property="og:image:width" content="1080" />
            <meta property="og:image:height" content="653" />
            <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
            <meta name="twitter:image" content={image} key="twitter-image" />
            <meta name="twitter:image:src" content={image} key="twitter-image-src" />
            <meta name="twitter:image:alt" content="estadisticas" key="twitter-card-image-alt" />
            <meta name="twitter:site" content="@AnaliticaLFM" key="twitter-site" />
            <meta name="twitter:creator" content="@AnaliticaLFM" key="twitter-creator" />
            <meta name="twitter:title" content={title} key="twitter-title" />
            <meta name="twitter:description" content={description} key="twitter-description" />
        </Head>
    );
}

export default HeadComponent;
