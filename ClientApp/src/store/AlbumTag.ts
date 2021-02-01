import * as tags from "../album-tags.json";

export interface IAlbumTag {
    tagName: string;
    tagId: string;
    album: string;
}


export default class AlbumTagController {
    private _albumTags: IAlbumTag[];
    public constructor() {
        this._albumTags = tags.tags as IAlbumTag[];
    }

    public get albumTags(): IAlbumTag[] {
        return this._albumTags;
    }
}