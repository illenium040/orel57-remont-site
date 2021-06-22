import React from 'react';
import { Link } from 'react-router-dom';
import { ISectionInfo } from '../../lib/Section';
import AlbumTagController, { IAlbumTag } from '../../store/AlbumTag';


class ServicesDescription extends React.Component {

    private _tags: AlbumTagController;

    public constructor(props: {}) {
        super(props);
        this._tags = new AlbumTagController();
    }

    private storeAlbumLink(tag: IAlbumTag) {
        localStorage.setItem('albumTag', tag.album);
    }

    public render() {
        return (
            <section id="services">
                <div className="container text-center">
                    <div className="row">
                        <h1 className="title">Чем мы занимаемся</h1>
                        <h2 className="subtitle">Основные виды работ</h2>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <Link to={'/album'} onClick={this.storeAlbumLink.bind(this, this._tags.albumTags[2])}>
                                    <img src={require("../../assets/img/furniture.png")} alt="" />
                                </Link>
                                <p className="h3">Изготовление мебели</p>
                                <p>Изготовление, сборка и монтаж мебели</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                            <div className="service-item">
                                <Link to={'/album'} onClick={this.storeAlbumLink.bind(this, this._tags.albumTags[4])}>
                                    <img src={require("../../assets/img/window1.png")} alt="" />
                                </Link>
                                <p className="h3">Установка ПВХ окон</p>
                                <p>Установка ПВХ окон, дверей и конкструкций</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                                <div className="service-item">
                                <Link to={'/album'} onClick={this.storeAlbumLink.bind(this, this._tags.albumTags[0])}>
                                    <img src={require("../../assets/img/ceil.png")} alt="" />
                                </Link>
                                <p className="h3">Натяжные потолки</p>
                                <p>Монтаж многоуровневых натяжных потолков, фотопечать</p>
                            </div>
                        </div>

                    </div>
                    <div className="row" style={{ padding: "0px" }}>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                                    <div className="service-item">
                                <Link to={'/album'} onClick={this.storeAlbumLink.bind(this, this._tags.albumTags[3])}>
                                    <img src={require("../../assets/img/laminat.png")} alt="" />
                                </Link>
                                <p className="h3">Напольные покрытия</p>
                                <p>Монтаж стяжки и напольных покрытий</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                                        <div className="service-item">
                                <Link to={'/album'} onClick={this.storeAlbumLink.bind(this, this._tags.albumTags[1])}>
                                    <img src={require("../../assets/img/door.png")} alt="" />
                                </Link>
                                <p className="h3">Установка дверей</p>
                                <p>Установка межкомнатных дверей и дверей сейфов</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft">
                                            <div className="service-item">
                                <Link to={'/album'} onClick={this.storeAlbumLink.bind(this, this._tags.albumTags[3])}>
                                    <img src={require("../../assets/img/malyar.png")} alt="" />
                                </Link>
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