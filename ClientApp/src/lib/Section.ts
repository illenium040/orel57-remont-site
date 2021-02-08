import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ISectionInfo {
    id: string;
    value: string;
    icon: IconDefinition;
}

export class FirstPageSections {

    private static _instance: FirstPageSections;
    private readonly _sections: Map<string, ISectionInfo>;

    private constructor() {
        this._sections = new Map<string, ISectionInfo>();
    }

    public addSection(name: string, sectionInfo: ISectionInfo): FirstPageSections {
        if (!this._sections.has(name))
            this._sections.set(name, sectionInfo);
        return this;
    }

    public getSection(name: string): ISectionInfo | undefined {
        return this._sections.has(name) ?
            this._sections.get(name) :
            undefined;
    }

    public getAllSections(): ISectionInfo[] {
        return Array.from(this._sections).map((value, index) => value[1]);
    }

    public static getInsctance(): FirstPageSections {
        if (!this._instance)
            this._instance = new FirstPageSections();
        return this._instance;
    }

}