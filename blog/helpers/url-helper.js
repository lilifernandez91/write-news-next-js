const URLS = {
    URL_IMAGES: () => {
        const url = `${process.env.NEXT_PUBLIC_URL_API}/images`;
        return url;
    },
    URL_ARTICLES: (skip, take) => {
        const url = `${process.env.NEXT_PUBLIC_URL_API}/articles?skip=${skip}&take=${take}`;
        return url;
    },
    URL_ARTICLES_DELETE: (id) => {
        return `${process.env.NEXT_PUBLIC_URL_API}/articles/${id}`;
    },
    URL_ARTICLES_EDIT: (id) => {
        return `${process.env.NEXT_PUBLIC_URL_API}/articles/${id}`;
    },
    URL_ARTICLES_CHANGE_STATUS: (id) => {
        return `${process.env.NEXT_PUBLIC_URL_API}/articles/update-status/${id}`;
    },
};

export default URLS;
