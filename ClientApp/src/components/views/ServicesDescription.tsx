import React from 'react';

export interface IServicesDescriptionProps {

}

export interface IServicesDescriptionState {

}

class ServicesDescription extends React.Component<{ id: string }, IServicesDescriptionState> {
    public render() {
        return (
            <section id={this.props.id}>
                <div className="container text-center">
                    <div className="row">
                        <h1 className="title">Чем мы занимаемся</h1>
                        <h2 className="subtitle">Основные виды работ</h2>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <img src={require("../../assets/img/furniture.png")} alt="" />
                                <p className="h3">Изготовление мебели</p>
                                <p>Изготовление, сборка и монтаж мебели</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <img src={require("../../assets/img/window1.png")} alt="" />
                                <p className="h3">Установка ПВХ окон</p>
                                <p>Установка ПВХ окон, дверей и конкструкций</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <img src={require("../../assets/img/ceil.png")} alt="" />
                                <p className="h3">Натяжные потолки</p>
                                <p>Монтаж многоуровневых натяжных потолков, фотопечать</p>
                            </div>
                        </div>

                    </div>
                    <div className="row" style={{ padding: "0px" }}>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <img src={require("../../assets/img/laminat.png")} alt="" />
                                <p className="h3">Напольные покрытия</p>
                                <p>Монтаж стяжки и напольных покрытий</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <img src={require("../../assets/img/door.png")} alt="" />
                                <p className="h3">Установка дверей</p>
                                <p>Установка межкомнатных дверей и дверей сейфов</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <img src={require("../../assets/img/malyar.png")} alt="" />
                                <p className="h3">Штукатурно-малярные работы</p>
                                <p>Штукатурка, шпатлевка, обои, потолочный плинтус</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesDescription;