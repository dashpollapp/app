import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'react-native';

class CachedImage extends React.Component {

    componentWillMount() {
        this.props.fetch_image(this.props.source);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.localUri === nextProps.localUri) return false;
        //if(this.props.) redux store "loading" im image_cache reducer
        return true;
    }

    getSource() {
        if (!this.props.localUri) return require("../assets/img/koni.png");
        return { uri: this.props.localUri };
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
    const { loading, loaded } = state.image_cache;
    return {
        isLoading: loading.includes(componentProps.source.uri),
        localUri: loaded[componentProps.source.uri]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch_image: source => {
            dispatch(fetch_image(source));
        }
    }
}

/**
 
CachedImage.propTypes = {
        localUri: PropTypes.string,
        source: PropTypes.shape({
            uri: PropTypes.string.isRequired,
            filename: PropTypes.string.isRequired,
        }).isRequired,
        fetch_image: PropTypes.func.isRequired
    };



*/

export default connect(mapStateToProps, mapDispatchToProps)(CachedImage);