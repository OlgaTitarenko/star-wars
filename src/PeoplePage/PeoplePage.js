import React from 'react';

import * as peopleApi from '../api/people';
import Pagination from '../Common/Pagination'

class PeoplePage extends React.Component {
  state = {
    isLoaded: false,
    page: 0,
    count: 0,
    people: [],
  };

  componentDidMount() {
    this.updatePageFromURL();
  }

  componentDidUpdate() {
    this.updatePageFromURL();
  }

  updatePageFromURL() {
    const { location } = this.props;
    const urlParams = new URLSearchParams(location.search);
    const page = +urlParams.get('page') || 1;

    if (page === this.state.page) {
      return;
    }

    this.setState({ page }, this.loadPeople);
  }

  loadPeople = async () => {
    const { page } = this.state;
    const { count, results: people } = await peopleApi.getAll({ page });

    this.setState({
      people,
      count,
      isLoaded: true,
    });
  };

  render() {
    const { people, isLoaded, count, page } = this.state;

    return (
      <div className="PeoplePage">
        <h1>People page</h1>

        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <ul>
              { people.map(person => (
                <li key={person.name}>{person.name}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default PeoplePage;
