import React from "react";

import { Text, View, FlatList } from "react-native";
import PropTypes from "prop-types";

import s from "../container/Polls/PollStyle";
import Author from "./Post/authorBox";
import Description from "./Description";
import PostTypes from "../container/Polls/PollTypes";

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    checkFirst(index) {
        if(index !== 0) return { borderTopWidth: 1, borderColor: "#eee" }
    }

    render() {

        let { 
            post,
            extraData,
            clickable,
            scroll,
            style,
            refreshing,
            onRefresh,
            onEndReached,
            header,
            footer,
            empty
        } = this.props;

        if(!Array.isArray(post)) post = [post];

        return(
            <FlatList 
                style={style}
                data={post}
                extraData={extraData}
                scrollEnabled={scroll}

                //Refresh
                refreshing={refreshing}
                onRefresh={onRefresh}

                //onEndReached
                onEndReachedThreshold={0.4}
                onEndReached={onEndReached}

                //Render Footer / Header / Empty
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                ListEmptyComponent={empty}

                keyExtractor={(item) => item._id}
                renderItem={({ item, index }) => {
                    return(
                        <View style={[s.post, this.checkFirst(index)]}>
                            <View style={s.pPostHeader}>
                                <Author poll={item} clickable={clickable} navigation={this.props.navigation} />
                                <Text style={s.pTitle}>{item.heading}</Text>
                            </View>
                            <Description style={s.description} text={item.text} />
                            <PostTypes poll={item} clickable={clickable} />
                        </View>
                    )
                }}
            />
        )
    }

}

Post.propTypes = {
    post: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    extraData: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    style: PropTypes.object,
    scroll: PropTypes.bool,
    clickable: PropTypes.bool,
}

export default Post;