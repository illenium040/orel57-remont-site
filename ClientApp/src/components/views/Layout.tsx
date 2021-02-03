import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import { sections } from '../../lib/constInfo';


export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu id={"navbar"} sections={[
            sections.heroArea,
            sections.services,
            sections.portfolio,
            sections.about,
            sections.contacts
        ]} />
        {props.children}
    </React.Fragment>
);
