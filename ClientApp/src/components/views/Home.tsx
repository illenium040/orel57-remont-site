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
    const fp = FirstPageSections.getInsctance();
    return (
      <div id="home" data-spy="scroll" data-offset="20" data-target="#navbar">
        <HeroArea sectionInfo={fp.getSection(HeroArea.name)!} />
        <ServicesDescription sectionInfo={fp.getSection(ServicesDescription.name)!} />
        <Portfolio sectionInfo={fp.getSection(Portfolio.name)!} />
        <About sectionInfo={fp.getSection(About.name)!} />
        <Contacts sectionInfo={fp.getSection(Contacts.name)!} />
      </div>
    );
  }
}

export default connect()(Home);
