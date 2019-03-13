import React from 'react';
import { Link } from 'react-router-dom';

import * as filmsApi from '../api/films';

class FilmsPage extends React.Component{
    state = {
        isLoaded: false,
        filmsId:'',
        films: []
    };

    componentDidMount() {
        this.updatePageFromURL();
    }

    updatePageFromURL() {
        const { location } = this.props;
        const filmsId = location.pathname;
        this.setState({ filmsId }, this.loadFilms);
    }

    loadFilms = async () => {
        const { filmsId } = this.state;
        const { results : films} = await filmsApi.getAll({ filmsId });
        this.setState({
            films,
            isLoaded: true,
        });
    };

    render() {
        const { films, isLoaded } = this.state;

        return (
            <div className="FilmsPage">
                <h1>Films page</h1>
                { isLoaded ? (
                    <>
                        <table>
                            <thead>
                            <tr>
                                <td>Title</td>
                                <td>Episode id</td>
                                <td>Director</td>
                                <td>Producer</td>
                            </tr>
                            </thead>
                            <tbody>
                            { films.map(film=>{
                               return <FilmTable film={film} key={film.url} />
                            })
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
const FilmTable = ({film}) => {
    return  (
        <tr>
            <td><Link to={film.url.replace('https://swapi.co/api','')}>{film.title}</Link></td>
            <td>{film.episode_id}</td>
            <td>{film.director}</td>
            <td>{film.producer}</td>
        </tr>
    )
}

export default FilmsPage;
