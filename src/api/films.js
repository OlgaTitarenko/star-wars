import { get } from './_helper';

export const getAll = ({ page = 1, search = '' }) => {
    const urlParams = new URLSearchParams();

    urlParams.set('page', page);
    urlParams.set('search', search);

    return get(`/films?${urlParams.toString()}`);
};

export const getById = (filmId) => {
    return get(`${filmId}`);
};
