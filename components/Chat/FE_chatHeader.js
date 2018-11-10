import Swipeout from "react-native-swipeout";

<Swipeout backgroundColor="#fff" left={swipeoutHide} autoClose="true" buttonWidth={128}>
    <View style={[css.pageInfos]}>
        <Text style={t.h1}>Bekannte</Text>
        <Text style={t.desc}>
            Hier siehst du alle Menschen mit denen du etwas zu tun hast. Klicke auf das Profilbild für mehr Infos. Klicke auf den
            Name zum chatten.
        </Text>
    </View>
</Swipeout>;

var swipeoutHide = [
    {
        component: (
            <View style={[swipeoutHideCSS.box]}>
                <TouchableOpacity style={[swipeoutHideCSS.btn]}>
                    <Image source={require("./data/hide.png")} style={[swipeoutHideCSS.image]} />
                </TouchableOpacity>
            </View>
        )
    }
];
