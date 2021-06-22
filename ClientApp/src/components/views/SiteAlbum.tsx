import React from 'react';
import Album from '../Album';
import axios from 'axios';
import { jsonProperty, Serializable } from 'ts-serializable';
import AlbumTagController from '../../store/AlbumTag';
import { IAlbumTag } from '../../store/AlbumTag';
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

    public getImages(): string[] {
        return this.images.map((value, index) => 'https://i.postimg.cc/' + `${value[1]}/${value[2]}.${value[3]}`);
    }
}

class AlbumPageController {
    private _currentAlbum: string;
    private _currentAlbumPage: number;
    private _albumTags: AlbumTagController;
    private _handleScrollFunc = this.handleWindowScroll.bind(this);
    private _offset: number;
    private _onScrollAction: Function;

    public constructor(offset: number) {
        this._offset = offset;
        this._albumTags = new AlbumTagController();
        this._currentAlbumPage = 1;
        let storedTag = localStorage.getItem('albumTag');
        this._onScrollAction = () => { };
        if (storedTag != '' && storedTag != undefined && storedTag != null)
            this._currentAlbum = storedTag;
        else this._currentAlbum = this._albumTags.albumTags[0].album;
    }

    public addScrollAction(action: Function) {
        this._onScrollAction = action;
    }

    private handleWindowScroll() {
        if (window.pageYOffset >= document.body.scrollHeight
            - document.documentElement.clientHeight
            - this._offset) {
            this.scrollWindowEvent(false);
            this._currentAlbumPage++;
            this._onScrollAction();
        }
    }

    public scrollWindowEvent(isListening: boolean) {
        if (isListening) window.addEventListener("scroll", this._handleScrollFunc, true);
        else window.removeEventListener("scroll", this._handleScrollFunc, true);
    }

    public get tags(): Array<IAlbumTag> {
        return this._albumTags.albumTags;
    }

    public get currentTag(): string {
        return this._albumTags.getTagByAlbumId(this._currentAlbum);
    }

    public get page(): number {
        return this._currentAlbumPage;
    }

    public get id(): string {
        return this._currentAlbum;
    }

    public reset(albumId: string) {
        this._currentAlbumPage = 1;
        this._currentAlbum = this._albumTags.albumTags.find((e) => e.tagId === albumId)!.album;
    }
}

export interface SiteAlbumState {
    json?: PostImageJson[];
    isLoading?: boolean;
    images?: Array<string>;
    isTopBtn?: boolean;
}

class SiteAlbum extends React.Component<{}, SiteAlbumState> {

    private _albumPages: AlbumPageController;

    public constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: true,
            json: [],
            images: [],
            isTopBtn: false
        };
        this._albumPages = new AlbumPageController(2000);
        this._albumPages.addScrollAction(this.ensureDataFetched.bind(this));
    }

    private onScroll(event: any) {
        if (window.scrollY > 100)
            this.setState({ isTopBtn: true });
        else this.setState({ isTopBtn: false });
    }

    public async componentDidMount() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        await this.ensureDataFetched();
        this.activateButton(this._albumPages.currentTag);
    }

    public componentWillUnmount() {
        this._albumPages.scrollWindowEvent(false);
        window.removeEventListener('scroll', this.onScroll.bind(this));
    }

    private async ensureDataFetched() {
        if (this._albumPages.id === undefined || this._albumPages.id === "") return;
        this.setState({ isLoading: true });
        axios.get(`${window.origin}/album/${this._albumPages.id}/${this._albumPages.page}`).then((response) => {
            const parsed = new PostImageJson().fromJSON(response.data);
            this.setState(state => {
                const jsonArray = state.json!.concat(parsed);
                const images = state.images!.concat(parsed.getImages());
                return { images: images, json: jsonArray, isLoading: false };
            });
            if (parsed.has_page_next)
                this._albumPages.scrollWindowEvent(true);
        });
    }

    private activateButton(tag: string) {
        $(`#${tag}`)
            .removeClass("btn-common")
            .addClass("btn-primary");
    }

    private loadAlbum(event: React.MouseEvent) {
        $('#tagButtonsContainer .btn-primary')
            .removeClass("btn-primary")
            .addClass("btn-common");
        this.activateButton(event.currentTarget.id);
        this.setState({ isLoading: true, json: [], images: [] });
        this._albumPages.reset(event.currentTarget.id);
        this.ensureDataFetched();
    }

    private scrollToTop() {
        window.scroll({
            behavior: "smooth",
            top: 0
        });
    }


    private renderTagsButtons() {
        return (
            <div id="tagButtonsContainer" className="container">
                <div className="row">
                    {this._albumPages.tags.map((value, index) => {
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
                    <Album images={this.state.images!} containerId="portfolioItems" />;
                </div>
                {this.state.isLoading &&
                    <div className="album-loading">
                        <img src={require("../../assets/img/loader.svg")} alt="" />
                    </div>
                }
                <a className="arrow-up-anchor" onClick={this.scrollToTop}>
                    {this.state.isTopBtn ? < img src={require("../../assets/img/up-arrow-button-svgrepo-com.svg")} alt="" /> : null }
                </a>
            </React.Fragment>
        );
    }
}

export default SiteAlbum;