import * as React from 'react';
import { connect } from 'react-redux';
import HeroArea from './HeroArea';
import ServicesDescription from './ServicesDescription';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import About from './About';
import { FirstPageSections } from '../../lib/Section';

class Home extends React.Component {
  public render() {
    return (
        <div id="home" data-spy="scroll" data-offset="20" data-target="#navbar">
            <HeroArea />
            <ServicesDescription />
            <Portfolio />
            <About />
            <Contacts />
      </div>
    );
  }
}

export default connect()(Home);
