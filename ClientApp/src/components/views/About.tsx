import React from 'react';
import Album from '../Album';

export interface IAboutProps {

}

export interface IAboutState {

}

class About extends React.Component<{ id: string }, IAboutState> {
    public render() {
        return (
            <section id={this.props.id} className="wow animated fadeInRight">
                <div className="container">
                    <div className="row">
                        <h1 className="title">Немного о нас</h1>
                        <h2 className="subtitle">Виды работ</h2>

                        <div className="col-md-8 col-sm-12">
                            <p>
                                Мы выполняем множество видов строительно-ремонтных работ. Начиная от ремонта квартир и домов, заканчивая малоэтажным строительством с нуля под ключ!
                                Имеем 20-ти летний опыт работы в данной сфере услуг и большое количество довольных клиентов.
                            </p>
                        </div>
                        <img className="col-md-4 col-md-4 col-sm-12 col-xs-12" src={require("../../assets/img/about/graph.png")} alt="" />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;