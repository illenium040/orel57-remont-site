import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompanyName } from '../../lib/constInfo';
import { ISectionInfo, FirstPageSections } from '../../lib/Section';


export interface NavMenuProps {
    id: string;
}

export interface NavMenuState {
    isOpen: boolean;
    sections?: ISectionInfo[];
}

export default class NavMenu extends React.PureComponent<NavMenuProps, NavMenuState> {
    public constructor(props: NavMenuProps) {
        super(props);
        this.state = {
            isOpen: false,
            sections: []
        };
    }

    public componentDidMount() {
        this.setState({
            isOpen: false,
            sections: FirstPageSections.getInsctance().getAllSections()
        });
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
                                {this.state.sections!.map((section, index) => {
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
