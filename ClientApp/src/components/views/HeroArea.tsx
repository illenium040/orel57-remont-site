import * as React from 'react';
import { CompanyName } from '../../lib/constInfo';
import { ISectionInfo } from '../../lib/Section';


class HeroArea extends React.Component {
    public render() {
        return (
            <section id="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title"><CompanyName /></h1>
                            <h2 className="subtitle">Ремонт жилых и нежилых помещений</h2>

                            <img className="col-md-6 col-sm-6 col-xs-12 animated fadeInLeft"
                                src={require("../../assets/img/house.png")} alt="" />

                            <div className="col-md-6 col-sm-6 col-xs-12 animated fadeInRight delay-0-5">
                                <p className="lead">
                                    Мы занимаемся множеством видов ремонтных работ, например: <br />
                                    • Установка окон и конструкций ПВХ <br />
                                    • Монтаж натяжных потолков <br />
                                    • Изготовление корпусной мебели и т.д. <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroArea;