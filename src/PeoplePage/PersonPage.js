import React from 'react'
import * as peopleApi from "../api/people";

class PersonPage extends React.Component {
    state = {
        isLoaded: false,
        personId:'',
        person: []
    };
    componentDidMount() {
        const { location } = this.props;
        const personId = location.pathname;
        this.setState({personId}, this.loadPerson);
    };

    loadPerson = async () => {
        const person = await peopleApi.getById(this.state.personId);

        this.setState({
            isLoaded: true,
            person
        });

    };

    render() {
        const { isLoaded , person} = this.state;

        return (
            <div>
                PersonPage
                {
                    isLoaded ?
                       ( <div>
                           <br />
                           <ul>
                              { Object.keys(person).map(item => {
                                  return <li key={ item }>
                                            <span>{item.replace('_',' ')} - </span>
                                            <br />
                                            {(typeof person[item])==="string" ? person[item]
                                                : person[item].length
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
export default PersonPage;