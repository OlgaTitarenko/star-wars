import React from 'react'
import * as filmsApi from "../api/films";

class FilmPage extends React.Component {
    state = {
        isLoaded: false,
        filmId:'',
        film: []
    };
    componentDidMount() {
        const { location } = this.props;
        const filmId = location.pathname;
        this.setState({filmId}, this.loadFilm);
    };

    loadFilm = async () => {
        const film = await filmsApi.getById(this.state.filmId);

        this.setState({
            isLoaded: true,
            film
        });

    };

    render() {
        const { isLoaded , film} = this.state;

        return (
            <div>
                Film Page
                {
                    isLoaded ?
                        ( <div>
                            <br />
                            <ul>
                                { Object.keys(film).map(item => {
                                    return <li key={ item }>
                                        <span>{item.replace('_',' ')} - </span>
                                        <br />
                                        {((typeof film[item])==="string" || (typeof film[item])==="number") ? film[item]
                                            : film[item].length
                                        }
                                    </li>
                                })}
                            </ul>
                        </div>)
                        :( <div>Loading</div>)
                }
            </div>
        )
    }
}
export default FilmPage;