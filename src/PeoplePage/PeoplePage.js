import React from 'react';

import * as peopleApi from '../api/people';
import Pagination from '../Common/Pagination'

class PeoplePage extends React.Component {

  state = {
    isLoaded: false,
    page: 0,
    count: 0,
    people: [],
    person: []
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

  loadPerson = async (url) => {
    const api='https://swapi.co/api/people/1/';
    const getId = url.match(/\d\d?/)[0];
    const person = await peopleApi.getById(getId);
    this.setState({person});
    console.log('person', person);
  }

onClickName(url) {
   // this.loadPerson(url)
  console.log(url);
}
  render() {
    const { people, isLoaded, count, page } = this.state;

    return (
      <div className="PeoplePage">
        <h1>People page</h1>

        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />

            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Mass</td>
                  <td>Height</td>
                  <td>Hair color</td>
                  <td>Skin color</td>
                </tr>
              </thead>
              <tbody>
              { people.map ( person => (
                    <PersonTable person={person} key={person.name} onClick={this.onClickName(person)} />
              ))
              }
              </tbody>
            </table>

          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

const PersonTable = ({person}) => {

  return  (
      <tr>
        <td>{person.name}</td>
        <td>{person.mass}</td>
        <td>{person.height}</td>
        <td>{person.hair_color}</td>
        <td>{person.skin_color}</td>
      </tr>
     )
}

export default PeoplePage;
