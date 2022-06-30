/**
 * Question 1:
 * What are the issues in the page, how would you fix it?
 */

import React from 'react';
import { connect } from 'react-redux';

const mapCompaniesIntoPeople = (people, companies) => {
    /* Map Company names into each person that they work for */
    //ovde bi mi trebao neki api sa podacima 
};

const mapPeopleIntoHouses = (houses, people) => {
    /* Map people into house who live in the house */
};

//ovo gore bi islo u posebnu komponentu

class App extends React.Component {
    render() {
        this.props.fetchPeople() //odakle ovaj fetchPeople()
        return (
            <div className="main">
                {/* ove dve komponente nisu importovane */}
                <People data={this.props.people} />
                <House data={this.props.houses} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { people: { data }, companies, houses } = state; //destructuring iz state, data se vadi iz people (nested)
    const people = mapCompaniesIntoPeople(data, companies);
    const house = mapPeopleIntoHouses(houses, data) //drugi naziv konstante
    return {
        people,
        house, //ovde takodje
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPeople: () => dispatch(fetchPeople()) //fetchPeople property nije definisan, treba da se importuje na vrhu kao 
    //import {fetchPeople} from '../redux
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //ovo je dobro
