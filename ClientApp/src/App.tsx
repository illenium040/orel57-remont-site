import './custom.css';
import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/views/Layout';
import Home from './components/views/Home';
import SiteAlbum from './components/views/SiteAlbum';


const WOW = require('wowjs');

export class App extends React.Component {
    public componentDidMount() {
        new WOW.WOW().init();
    }

    public render() {
        return (
            // <Link key="my-anchor" to="/about#my-anchor">Go To Anchor</Link>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/album' component={SiteAlbum} />
            </Layout>
        );
    }
}


