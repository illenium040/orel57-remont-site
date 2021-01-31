import * as React from 'react';
import { CompanyName } from './ConstInfo';

export interface IHeroAreaProps {

}

export interface IHeroAreaState {

}

class HeroArea extends React.Component<{ id: string }, IHeroAreaState> {

    public render() {
        return (
            <section id={this.props.id}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title"><CompanyName /></h1>
                            <h2 className="subtitle">Ремонт жилых и нежилых помещений</h2>

                            <img className="col-md-6 col-sm-6 col-xs-12 animated fadeInLeft"
                                src={require("../assets/img/house.png")} alt="" />

                            <div className="col-md-6 col-sm-6 col-xs-12 animated fadeInRight delay-0-5">
                                <p className="lead">
                                    Мы занимаемся множеством видов ремонтных работ, например: <br />
                                    • Установка окон и конструкций ПВХ <br />
                                    • Монтаж натяжных потолков <br />
                                    • Изготовление корпусной мебели и т.д. <br />
                                </p>
                                {/* <a href="#" className="btn btn-common btn-lg">Donload Now!</a>
                                <a href="#" className="btn btn-primary btn-lg">Learn More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroArea;