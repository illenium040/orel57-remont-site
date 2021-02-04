import * as React from 'react';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import NavMenu from './NavMenu';
import { FirstPageSections } from '../../lib/Section';
import HeroArea from './HeroArea';
import ServicesDescription from './ServicesDescription';
import Portfolio from './Portfolio';
import About from './About';
import Contacts from './Contacts';


class Layout extends React.Component<{ children?: React.ReactNode }> {

    public constructor(props: { children?: React.ReactNode }) {
        super(props);
        FirstPageSections.getInsctance()
            .addSection(HeroArea.name, { id: "hero-area", icon: Icons.faHome, value: "Главная" })
            .addSection(ServicesDescription.name, { id: "services", icon: Icons.faCogs, value: "Услуги" })
            .addSection(Portfolio.name, { id: "porfolio", icon: Icons.faImage, value: "Фото" })
            .addSection(About.name, { id: "about", icon: Icons.faInfo, value: "О нас" })
            .addSection(Contacts.name, { id: "contacts", icon: Icons.faEnvelope, value: "Контакты" });
    }

    public render() {
        return (
            <React.Fragment>
                <NavMenu id={"navbar"} />
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default Layout;
