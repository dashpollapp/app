import { Share } from 'react-native';

export default function(poll) {

    Share.share({
        message: "'" + poll.heading + "' - Stimme jetzt ab: https://dashpoll.net/poll/" + poll._id,
        url: 'https://dashpoll.net/poll/' + poll._id,
        title: 'Umfrage'
        }, {
        // Android:
        dialogTitle: 'Beitrag teilen',
        // iOS:
        excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter' //Twitter
        ]
    })
    
}