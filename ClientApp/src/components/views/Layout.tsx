import * as React from 'react';
import NavMenu from './NavMenu';

class Layout extends React.Component<{ children?: React.ReactNode }> {

    public constructor(props: { children?: React.ReactNode }) {
        super(props);
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
