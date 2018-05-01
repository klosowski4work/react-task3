
import React from 'react';
import { Button } from '../../components/Button';
import { FilmDetails } from '../MovieDetails';
import { Header } from '../Header';

export class App extends React.Component {
    render() {
        return <React.Fragment>
            <Header />
            App
            <Button />
            <FilmDetails />
        </React.Fragment>;
    }
};