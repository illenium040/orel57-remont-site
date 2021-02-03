import * as React from 'react';

export interface IContactsProps {

}

export interface IContactsState {

}

class Contacts extends React.Component<{ id: string }, IContactsState> {
    public render() {
        return (
            <section id={this.props.id}>
                <div className="container text-center">
                    <div className="row">
                        <h1 className="title">Свяжитесь с нами</h1>

                        <h2 className="subtitle">Опишите Вашу проблему</h2>


                        <form role="form" className="contact-form" method="post">
                            <div className="container col-md-offset-3 col-md-6 wow fadeInLeft" data-wow-delay=".5s">
                                <div className="form-group">
                                    <div className="controls">
                                        <input type="text" className="form-control" placeholder="Ваше имя" name="name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <input type="email" className="form-control email" placeholder="Ваш e-mail" name="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <input type="text" className="form-control requiredField" placeholder="Тема" name="subject" />
                                    </div>
                                </div>

                                <div className="form-group">

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