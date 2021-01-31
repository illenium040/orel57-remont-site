import React from 'react';
import Album from './sub-components/Album';
import axios from 'axios';
import { jsonProperty, Serializable } from 'ts-serializable';


// tslint:disable:variable-name
export class PostImageJson extends Serializable {
    @jsonProperty(Number)
    public status_code: string = "";
    @jsonProperty(Array)
    public images: Array<Array<string>> = [];
    @jsonProperty(Boolean)
    public has_page_next: boolean = false;
    @jsonProperty(String)
    public status_txt: string = "";
}

export interface SiteAlbumState {
    json?: PostImageJson;
    isLoading: boolean;
}


class SiteAlbum extends React.Component<{}, SiteAlbumState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    public async componentDidMount() {
        await this.ensureDataFetched();
    }


    private async ensureDataFetched() {
        axios.get(`${window.origin}/album/jJmrvg7/1`).then((response) => {
            const parsed = new PostImageJson().fromJSON(response.data);
            this.setState({ json: parsed, isLoading: false });
        });
    }

    private renderAlbum() {
        const images: Array<string> = [];
        for (let i = 0; i < this.state.json!.images.length; i++) {
            const element = this.state.json!.images[i];
            images.push('https://i.postimg.cc/'
                + `${element[1]}/${element[2]}.${element[3]}`);
        }
        return (<Album images={images} />);
    }

    public render() {
        return (
            <React.Fragment>
                <section id="hero-area">
                    <div id="site-album">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="title">Альбом</h1>
                                    <h2 className="subtitle">Фото работ с наших объектов</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container album-container">
                    <div className="row">
                        {this.state.isLoading ? <p>Loading...</p> : this.renderAlbum()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SiteAlbum;