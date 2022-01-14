import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import ZipCard from './ZipCard';

export default class ZipCode extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                zipCode: props.zipCode,
                data: [],
                isFound: false
            }
    }

    componentDidMount()
    {
        const zip = this.state.zipCode;
        const url = `https://ctp-zip-api.herokuapp.com/zip/${zip}`;

        axios.get(url)
            .then((response) =>
            {
                const data = response.data;

                this.setState({ data, isFound: true });
            })
            .catch((error) =>
            {
                console.log(error);
                this.setState({ data: [], isFound: false });
            });
    }

    componentDidUpdate(prevProps)
    {
        if(this.props.zipCode !== prevProps.zipCode)
        {
            const zip = this.props.zipCode;
            const url = `http://ctp-zip-api.herokuapp.com/zip/${zip}`;

            axios.get(url)
                .then((response) =>
                {
                    const data = response.data;

                    this.setState({ data, isFound: true });
                })
                .catch((error) =>
                {
                    console.log(error);
                    this.setState({ data: [], isFound: false });
                });
        }
    }

    render()
    {
        return (
            this.state.isFound ?
                <section className="zip-card-grid">
                    {this.generateZipCards(this.state.data)}
                </section>
                : <p>No results found</p>
        );
    }

    generateZipCards(data)
    {
        let cards = [];

        data.forEach((element, index) =>
        {
            const city = element.City;
            const state = element.State;
            const location = `${element.Lat}, ${element.Long}`;
            const population = element.EstimatedPopulation;
            const wages = element.TotalWages;

            cards.push(<ZipCard
                key={index.toString()}
                city={city}
                state={state}
                location={location}
                population={population}
                wages={wages}
            />);
        });

        return cards;
    }
}

ZipCode.propTypes =
    {
        zipCode: PropTypes.string.isRequired
    }