const initialState = {
    loading: [],
    loaded: {}
}

export default function (state = initialState, action) {

    switch (action.type) {

        case "IMAGE_CACHE":
            return {...state, loading: [...state.loading, action.payload.uri].filter(onlyUnique)};

        case "IMAGE_CACHE_SUCCESS":
            const loading = state.loading.filter(uri => uri !== action.payload.uri);
            return {...state, loaded: {...state.loaded, [action.payload.id]: action.payload.uri}, loading}
        
        default:
            return state;
    }
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

/*

    {
        _id: uri
    }

*/

