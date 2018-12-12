import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';

import { image_cache } from "../actions";

class ImageCache extends React.Component {

    componentWillMount() {
        this.props.image_cache(this.props.source, this.props.loading);
    }

    //shouldComponentUpdate(next) {
    //    return true;
    //}

    getSource() {
        if (!this.props.localUri) return require("../assets/img/pb.png");
        return { uri: this.props.localUri }
    }

    render() {
        return (
            <Image
                {...this.props}
                source={this.getSource()}
            />
        );
    }
}

const mapStateToProps = (state, componentProps) => {
    const { loading, loaded } = state.image;
    return {
        loading: loading.includes(componentProps.source),
        localUri: loaded[componentProps.source]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        image_cache: (source, loading) => {
            dispatch(image_cache(source, loading));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCache);