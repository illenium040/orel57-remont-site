import * as React from 'react';
import { LightboxWrapper } from './LightBoxWrapper';


export interface IAlbumProps {
    images: Array<string>;
}

export interface IAlbumState {
    index: number;
}

class Album extends React.Component<IAlbumProps, IAlbumState> {
    public constructor(props: IAlbumProps) {
        super(props);
    }
    public render() {

        const lightBoxes: Array<JSX.Element> = [];
        for (let i = 0; i < this.props.images.length; i++)
            lightBoxes.push(<LightboxWrapper index={i} images={this.props.images} />);

        return (
            <div id="portfolioItems">
                {lightBoxes.map((value, index) => {
                    return <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="portfolio-item wow fadeInLeft" data-wow-delay=".5s">
                            {value}
                        </div>
                    </div>;
                })}
            </div>
        );
    }
}

export default Album;