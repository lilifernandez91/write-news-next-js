import { ARTICLE_STATUS, ARTICLE_STATUS_TEXT } from '../constants/articleStatus';

export const articleStatusHelper = {
    GET_ARTICLE_STATUS: (articleStatus) => {
        switch (articleStatus) {
            case ARTICLE_STATUS.DRAFT:
                return ARTICLE_STATUS_TEXT.DRAFT;
            case ARTICLE_STATUS.CREATED:
                return ARTICLE_STATUS_TEXT.CREATED;
            case ARTICLE_STATUS.PUBLISHED:
                return ARTICLE_STATUS_TEXT.PUBLISHED;
            case ARTICLE_STATUS.PAUSED:
                return ARTICLE_STATUS_TEXT.PAUSED;
            case ARTICLE_STATUS.ARCHIVED:
                return ARTICLE_STATUS_TEXT.ARCHIVED;
            case ARTICLE_STATUS.DELETED:
                return ARTICLE_STATUS_TEXT.DELETED;
            default:
                return 'Por crear';
        }
    },
    
};
