import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateArticle from '../create-article';

const EditArticlePage = (props) => {
    const [article, setArticle] = useState({
        title: '',
        secondaryTitle: '',
        author: '',
        tags: '',
    });

    const url =
        'https://futbol-stats-blog-api.azurewebsites.net/api/articles/a0cfe1b7-9053-46f3-8476-9a21d6a2521a';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setArticle(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <CreateArticle />
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            id: 'a0cfe1b7-9053-46f3-8476-9a21d6a2521a',
        }, // will be passed to the page component as props
    };
}

export default EditArticlePage;
