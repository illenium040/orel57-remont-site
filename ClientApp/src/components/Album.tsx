import * as React from 'react';
import { gridify } from '../lib/gridify';
import { LightboxWrapper } from './LightBoxWrapper';
import $ from 'jquery';

export interface IAlbumProps {
    images: Array<string>;
    containerId?: string;
    wrapperClassName?: string;
}

export interface IAlbumState {
    index: number;
}

class Album extends React.Component<IAlbumProps, IAlbumState> {

    private _options = {
        srcNode: '.portfolio-item',             // grid items (class, node)
        margin: '20px',             // margin in pixel, default: 0px
        width: '250px',             // grid item width in pixel, default: 220px
        max_width: '350px',              // dynamic gird item width if specified, (pixel)
        resizable: true,            // re-layout if window resize
        transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
    };

    public constructor(props: IAlbumProps) {
        super(props);
    }

    public componentDidUpdate() {
        this.onGridify();
    }

    public componentDidMount() {
        this.onGridify();
    }

    private onGridify() {
        gridify($("#portfolioItems"), this._options);
        $('.portfolio-item').css('visibility', 'visible');
    }

    public render() {

        const lightBoxes: Array<JSX.Element> = [];
        for (let i = 0; i < this.props.images.length; i++)
            lightBoxes.push(<LightboxWrapper index={i} images={this.props.images} />);

        return (
            <div id={this.props.containerId}>
                {lightBoxes.map((value, index) => {
                    return <div key={`item-${index}`} className={this.props.wrapperClassName}>
                        <div className="portfolio-item animated wow fadeInLeft" data-wow-delay=".5s">
                            {value}
                        </div>
                    </div>;
                })}
            </div>
        );
    }
}

export default Album;