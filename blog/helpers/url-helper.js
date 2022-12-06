const URLS = {
    URL_ARTICLES: () => {
        const url = `${process.env.NEXT_PUBLIC_URL_API}/articles`;
        return url;
    },
    URL_ARTICLES_DELETE: (id) => {
        return `${process.env.NEXT_PUBLIC_URL_API}/articles/${id}`;
    },
    URL_ARTICLES_EDIT: (id) => {
        return `${process.env.NEXT_PUBLIC_URL_API}/articles/${id}`;
    },
    URL_ARTICLES_PAUSE: (id) => {
        return `${process.env.NEXT_PUBLIC_URL_API}/articles/update-status/${id}`;
    },
};

export default URLS;
