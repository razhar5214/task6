import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ZipCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                key: props.key,
                city: props.city,
                state: props.state,
                location: props.location,
                population: props.population,
                wages: props.wages
            }
    }

    render()
    {
        let props = this.props;
        const key = props.key;
        const city = props.city !== "" ? props.city : "N/A";
        const state = props.state !== "" ? props.state : "N/A";
        const location = props.location !== "" ? props.location : "N/A";
        const population = props.population !== "" ? props.population : "N/A";
        const wages = props.wages !== "" ? props.wages : "N/A";

        return (
            <section className="zip-card" key={key}>
                <h3 className="zip-card-title">{city}, {state}</h3>
                <ul className="zip-card-details">
                    <li>State: {state}</li>
                    <li>Location: ({location})</li>
                    <li>Populated (estimated): {population}</li>
                    <li>Total Wages: {wages}</li>
                </ul>
            </section>
        );
    }
}

ZipCard.propTypes =
    {
        key: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        population: PropTypes.string.isRequired,
        wages: PropTypes.string.isRequired
    }