import * as tags from "../album-tags.json";

export interface IAlbumTag {
    tagName: string;
    tagId: string;
    album: string;
}

interface HashTable<T> {
    [key: string]: T;
}

export default class AlbumTagController {
    private _albumTags: IAlbumTag[];
    private _hashTable: HashTable<string>;
    public constructor() {
        this._albumTags = tags.tags as IAlbumTag[];
        this._hashTable = {};
        this._albumTags.map((tag, i) => {
            this._hashTable[tag.album] = tag.tagId;
        });
    }

    public getTagByAlbumId(id: string) {
        return this._hashTable[id];
    }

    public get albumTags(): IAlbumTag[] {
        return this._albumTags;
    }
}