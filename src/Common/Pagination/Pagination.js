import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ location, count, page = 1, perPage = 10 }) => {

  const pagesCount = Math.ceil(count / perPage);
  const pages = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const getSearchWithPage = (page) => {
    const urlParams = new URLSearchParams(location.search);

    urlParams.set('page', page);

    return urlParams.toString();
  };

  return (
    <div className="Pagination">
      {pages.map(page => (
        <Link
          key={page}
          to={{
            pathname: location.pathname,
            search: getSearchWithPage(page),
          }}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number,
  perPage: PropTypes.number,
};

export default withRouter(Pagination);
