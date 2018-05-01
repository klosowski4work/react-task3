
import React from 'react';
import { Button } from '../../components/Button';
import image from '../../../images/net.jpg';

export class Header extends React.Component {
    render() {
        return <React.Fragment>
            <div className="Header" style={{ backgroundImage: `url('${image}')` }}></div>
        </React.Fragment >;
    }
};