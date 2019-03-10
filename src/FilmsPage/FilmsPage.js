import React from 'react';

import * as peopleApi from '../api/people';
import Pagination from '../Common/Pagination'

class FilmsPage extends React.Component{
    state = {
        isLoaded: false,
        page: 0,
        count: 0,
        films: [],
    };

    render() {
        return (
            <div className="FilmsPage">
                <h1>Films page</h1>
            </div>
        );
    }
}

export default FilmsPage;
