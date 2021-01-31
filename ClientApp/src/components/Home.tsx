import * as React from 'react';
import { connect } from 'react-redux';
import HeroArea from './HeroArea';
import NavMenu from './NavMenu';
import ServicesDescription from './ServicesDescription';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import About from './About';
import { sections } from './ConstInfo';


const Home = () => (
  <div id="home" data-spy="scroll" data-offset="20" data-target="#navbar">
    <HeroArea id={sections.heroArea.id} />
    <ServicesDescription id={sections.services.id} />
    <Portfolio id={sections.portfolio.id} />
    <About id={sections.about.id} />
    <Contacts id={sections.contacts.id} />
  </div>
);

export default connect()(Home);
