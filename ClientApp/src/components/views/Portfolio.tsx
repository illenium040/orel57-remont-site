import React from 'react';
import { Redirect } from 'react-router-dom';
import Album from '../Album';

export interface IPortfolioProps {

}

export interface IPortfolioState {
    redirect: boolean;
}

class Portfolio extends React.Component<{ id: string }, IPortfolioState> {

    private redirectToAlbum() {
        return <Redirect to="/album" />;
    }

    public constructor(props: { id: string }) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    private setRedirect = () => {
        this.setState({
            redirect: true
        });
    }
    private renderRedirect = () => {
        if (this.state.redirect)
            return <Redirect to="/album" />;
    }

    public render() {
        return (
            <section id={this.props.id}>
                <div className="container">
                    <div className="row">
                        <h1 className="title">Альбом</h1>
                        <h2 className="subtitle">Фотографии с наших объектов</h2>

                        <div style={{ textAlign: "center" }} className="animated fadeInRight delay-0-5">

                            <Album images={[
                                require("../../assets/img/portfolio/img1.jpg"),
                                require("../../assets/img/portfolio/img2.jpg"),
                                require("../../assets/img/portfolio/img3.jpg"),
                                require("../../assets/img/portfolio/img4.jpg"),
                                require("../../assets/img/portfolio/img5.jpg"),
                                require("../../assets/img/portfolio/img6.jpg")
                            ]}
                                wrapperClassName="col-lg-4 col-md-4 col-sm-6 col-xs-12" />
                            {this.renderRedirect()}
                            <a onClick={this.setRedirect} className="btn btn-primary btn-lg">Показать все</a>
                        </div>
                    </div>

                </div>

            </section>);
    }
}

export default Portfolio;