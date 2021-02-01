import React from 'react';
import Album from './sub-components/Album';
import axios from 'axios';
import { jsonProperty, Serializable } from 'ts-serializable';
import AlbumTagController from '../store/AlbumTag';
import { IAlbumTag } from '../store/AlbumTag';
import $ from 'jquery';

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
    private _albumTags: AlbumTagController;
    public constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: true
        };
        this._albumTags = new AlbumTagController();
    }

    public async componentDidMount() {
        await this.ensureDataFetched(this._albumTags.albumTags[0].album, 1);
    }

    private async ensureDataFetched(album: string, page: number) {
        if (album === undefined || album === "") return;
        axios.get(`${window.origin}/album/${album}/${page}`).then((response) => {
            const parsed = new PostImageJson().fromJSON(response.data);
            this.setState({ json: parsed, isLoading: false });
        });
    }

    private loadAlbum(event: React.MouseEvent) {
        $('#tagButtonsContainer .btn-primary')
            .removeClass("btn-primary")
            .addClass("btn-common");
        $(event.currentTarget)
            .removeClass("btn-common")
            .addClass("btn-primary");
        this.setState({ isLoading: true });
        this.ensureDataFetched(this._albumTags.albumTags.find((e) => e.tagId === event.currentTarget.id)!.album, 1);
    }


    private renderAlbum() {
        const images: Array<string> = [];
        for (let i = 0; i < this.state.json!.images.length; i++) {
            const element = this.state.json!.images[i];
            images.push('https://i.postimg.cc/'
                + `${element[1]}/${element[2]}.${element[3]}`);
        }
        return (<Album images={images} containerId="portfolioItems" />);
    }

    private renderTagsButtons() {
        return (
            <div id="tagButtonsContainer" className="container">
                <div className="row">
                    {this._albumTags.albumTags.map((value, index) => {
                        return <a key={`btn-index-${index}`} onClick={this.loadAlbum.bind(this)}
                            id={value.tagId}
                            className="btn btn-common btn-lg">{value.tagName}</a>;
                    })}
                </div>
            </div>
        );
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
                {this.renderTagsButtons()}
                <div className="container-sm">
                    {this.state.isLoading ? <p>Loading...</p> : this.renderAlbum()}
                </div>
            </React.Fragment>
        );
    }
}

export default SiteAlbum;