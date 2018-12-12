export default function (del = false) {
    return dispatch => {
        dispatch({ type: "CACHE" });

        if(del) {

            Expo.FileSystem.readDirectoryAsync(Expo.FileSystem.cacheDirectory)
            .then(file => {

                let length = file.length;
                let i = 0;

                file.forEach(name => {

                    Expo.FileSystem.deleteAsync(Expo.FileSystem.cacheDirectory + name, {idempotent: true})
                    .then(d => {

                        i++;

                        if(length === i) {

                            Expo.FileSystem.getInfoAsync(Expo.FileSystem.cacheDirectory, {})
                            .then(info => {
                                dispatch({ type: "CACHE_SUCCESS", payload: { info, deleted: true }})
                            })
                            
                        }

                    })

                })

            })

        } else {

            Expo.FileSystem.getInfoAsync(Expo.FileSystem.cacheDirectory, {})
            .then(info => {
                dispatch({ type: "CACHE_SUCCESS", payload: { info, deleted: false }}) 
            })

        }
    }
}
