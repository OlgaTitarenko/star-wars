import React from 'react';

const CategoryPage = ({ match }) => (
  <div className="CategoryPage">
    <h1>Category page {JSON.stringify(match.params.category)}</h1>
  </div>
);

export default CategoryPage;
