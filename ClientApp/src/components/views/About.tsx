import React from 'react';
import { ISectionInfo } from '../../lib/Section';

export interface AboutProps {
    sectionInfo: ISectionInfo;
}

class About extends React.Component<AboutProps> {
    public render() {
        return (
            <section id={this.props.sectionInfo.id} className="wow animated fadeInRight">
                <div className="container">
                    <div className="row">
                        <h1 className="title">Немного о нас</h1>
                        <h2 className="subtitle">Виды работ</h2>

                        <div className="col-md-12 col-sm-12">
                            <p>
                                Мы выполняем множество видов строительно-ремонтных работ. Начиная от ремонта квартир и домов, заканчивая малоэтажным строительством с нуля под ключ!
                                Имеем 20-ти летний опыт работы в данной сфере услуг и большое количество довольных клиентов.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default About;