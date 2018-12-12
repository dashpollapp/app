const initialState = {
    loading: ["a"],
    loaded: {}
}

export default function (state = initialState, action) {

    switch (action.type) {

        case "IMAGE_CACHE":
            let addLoading = [...state.loading, action.payload.id];
            addLoading = addLoading.filter(onlyUnique)
            return { ...state, loading: addLoading };

        case "IMAGE_CACHE_SUCCESS":
            const loading = state.loading.filter(uri => uri !== action.payload.id);
            return { ...state, loaded: { ...state.loaded, [action.payload.id]: action.payload.uri }, loading }

        default:
            return state;
    }
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}