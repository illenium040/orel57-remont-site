import { type } from 'jquery';
import React from 'react';
import Lightbox from 'react-image-lightbox';
import Modal from 'react-modal';
import $ from 'jquery';

type LightboxWrapperProps = {
    index: number;
    images: Array<string>;
};

interface ILightboxWrapperState {
    isOpen: boolean;
    index: number;
}

export class LightboxWrapper extends React.Component<LightboxWrapperProps, ILightboxWrapperState> {
    public constructor(props: LightboxWrapperProps) {
        super(props);
        this.state = {
            isOpen: false,
            index: this.props.index
        };
    }

    private lockScroll(): void {
        let scrollPosition = [
            window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        ];
        let html = $('html'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }

    private unlockScroll(): void {
        let html = $('html');
        let scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }

    public render() {
        return (
            <React.Fragment>
                <img src={this.props.images[this.props.index]} alt="" />
                {this.state.isOpen && (
                    <Lightbox mainSrc={this.props.images[this.state.index]}
                        nextSrc={this.props.images[(this.state.index + 1) % this.props.images.length]}
                        prevSrc={this.props.images[(this.state.index + this.props.images.length - 1) % this.props.images.length]}
                        onCloseRequest={() => {
                            $('.logo-menu').show();
                            this.unlockScroll();
                            this.setState({ isOpen: false });
                        }}
                        reactModalStyle={{ content: { margin: '0px' } }}
                        imagePadding={20}
                        wrapperClassName={"lightbox-image-container"}
                        onMovePrevRequest={() =>
                            this.setState({
                                index: (this.state.index + this.props.images.length - 1) % this.props.images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                index: (this.state.index + 1) % this.props.images.length,
                            })
                        } />)
                }
                <div className="overlay">
                    <div className="icons">
                        <a className="preview">
                            <i onClick={() => {
                                $('.logo-menu').hide();
                                this.lockScroll();
                                this.setState({ isOpen: true });
                            }} className="fa fa-search-plus fa-4x"></i>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}