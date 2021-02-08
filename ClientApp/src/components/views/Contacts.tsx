import * as React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { ISectionInfo } from '../../lib/Section';

interface ContactState {
    name: string;
    email: string;
    subject: string;
    message: string;
    phoneNumber: string;
}

class Contacts extends React.Component<{}, ContactState> {

    private readonly _emptyState: ContactState;

    public constructor(props: {}) {
        super(props);
        this._emptyState = {
            email: "",
            name: "",
            message: "",
            phoneNumber: "",
            subject: ""
        };
        this.state = this._emptyState;
    }

    private isHoney(): boolean {
        $(".honey input").toArray().forEach(element => {
            if ($(element).val() !== "") return true;
        });
        return false;
    }

    private submit(e: React.FormEvent) {
        e.preventDefault();
        if (this.isHoney()) return;
        axios.post(`${window.origin}/email`, this.state).then((response) => {
            this.setState(this._emptyState);
        }).catch((reject) => console.log(reject));
    }

    public render() {
        return (
            <section id="contacts">
                <div className="container text-center">
                    <div className="row">
                        <h1 className="title">Свяжитесь с нами</h1>

                        <h2 className="subtitle">Опишите Вашу проблему</h2>

                        <form role="form" className="contact-form" method="post" onSubmit={this.submit.bind(this)}>
                            <div className="container col-md-offset-3 col-md-6 wow fadeInLeft" data-wow-delay=".5s">
                                <div className="form-group">
                                    <div className="controls">
                                        <input type="text" className="form-control"
                                            placeholder="Ваше имя" name="name"
                                            value={this.state.name} onChange={(e) => this.setState({ name: e.currentTarget.value })} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <input type="email" className="form-control email"
                                            placeholder="Ваш e-mail" name="email"
                                            value={this.state.email} onChange={(e) => this.setState({ email: e.currentTarget.value })} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <input type="tel" className="form-control phone"
                                            placeholder="Номер телефона" name="phone"
                                            value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.currentTarget.value })} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <input type="text" className="form-control requiredField"
                                            placeholder="Тема" name="subject"
                                            value={this.state.subject} onChange={(e) => this.setState({ subject: e.currentTarget.value })} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <textarea rows={7} className="form-control"
                                            placeholder="Ваше сообщение" name="message"
                                            value={this.state.message} onChange={(e) => this.setState({ message: e.currentTarget.value })}></textarea>
                                    </div>
                                </div>
                                {/* honey-pot */}
                                <div className="form-group honey">
                                    <div className="controls">
                                        <input type="text" className="form-control" placeholder="Ваше имя" name="name" />
                                    </div>
                                </div>
                                <div className="form-group honey">
                                    <div className="controls">
                                        <input type="email" className="form-control email" placeholder="Ваш e-mail" name="email" />
                                    </div>
                                </div>
                                <div className="form-group honey">
                                    <div className="controls">
                                        <input type="tel" className="form-control phone" placeholder="Номер телефона" name="phone" />
                                    </div>
                                </div>
                                <div className="form-group honey">
                                    <div className="controls">
                                        <input type="text" className="form-control requiredField" placeholder="Тема" name="subject" />
                                    </div>
                                </div>
                                <div className="form-group honey">
                                    <div className="controls">
                                        <textarea rows={7} className="form-control" placeholder="Ваше сообщение" name="message"></textarea>
                                    </div>
                                </div>
                                <button type="submit" id="submit" className="btn btn-lg btn-common">Отправить</button>
                                <div id="success" style={{ color: '#34495e' }} ></div>

                            </div>
                        </form>

                    </div>
                </div>
            </section >
        );
    }
}

export default Contacts;