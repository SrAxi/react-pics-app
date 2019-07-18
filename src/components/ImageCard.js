import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    };

    render() {
        const { alt_description, urls: { regular: regularUrl } } = this.props.image;

        return (
            <div>
                <img
                    alt={alt_description}
                    src={regularUrl}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;
