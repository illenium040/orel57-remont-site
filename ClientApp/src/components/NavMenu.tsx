import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CompanyName } from './ConstInfo';

export interface ISectionInfo {
    id: string;
    value: string;
    icon: IconDefinition;
}

export interface INavMenuProps {
    id: string;
    sections: Array<ISectionInfo>;
}

export default class NavMenu extends React.PureComponent<INavMenuProps, { isOpen: boolean }> {
    public constructor(props: INavMenuProps) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    private toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    public render() {
        const toggler = this.toggleMenu.bind(this);
        return (
            <div className="logo-menu">
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header col-md-3">
                            <button type="button" className="navbar-toggle" onClick={toggler}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#home">
                                <CompanyName />
                            </a>
                        </div>

                        <div className={"collapse navbar-collapse " + (this.state.isOpen ? "show" : "")}>
                            <ul className="nav navbar-nav col-md-9 pull-right" id={this.props.id}>
                                {this.props.sections.map((section, index) => {
                                    return <li key={`${section.id}-${index}`}>
                                        <a href={`#${section.id}`}>
                                            <FontAwesomeIcon icon={section.icon} />
                                            {` ${section.value}`}
                                        </a>
                                    </li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        );
    }


}
