import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompanyName } from '../../lib/constInfo';
import { ISectionInfo } from '../../lib/Section';
import * as Icons from '@fortawesome/free-solid-svg-icons';

export interface NavMenuProps {
    id: string;
}

export interface NavMenuState {
    isOpen: boolean;
}

export default class NavMenu extends React.Component<NavMenuProps, NavMenuState> {

    private readonly sections: ISectionInfo[] = [{ id: "hero-area", icon: Icons.faHome, value: "Главная" },
    { id: "services", icon: Icons.faCogs, value: "Услуги" },
    { id: "porfolio", icon: Icons.faImage, value: "Фото" },
    { id: "about", icon: Icons.faInfo, value: "О нас" },
    { id: "contacts", icon: Icons.faEnvelope, value: "Контакты" }
    ];

    public constructor(props: NavMenuProps) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    public componentDidMount() {
        this.setState({ isOpen: false });
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
                                {this.sections.map((section, index) => {
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
