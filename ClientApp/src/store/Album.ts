import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface AlbumState {
    album?: string;
    page?: number;
    isLoading: boolean;
    postImageJson: string;
}

interface RequestPhotoesAction {
    type: 'REQUEST_PHOTOES';
    page: number;
    album: string;
}

interface ReceivePhotoesAction {
    type: 'RECEIVE_PHOTOES';
    page: number;
    album: string;
    postImageJson: string;
}

type AlbumActions = RequestPhotoesAction | ReceivePhotoesAction;

export const actionCreators = {
    requestAlbum: (album: string, page: number): AppThunkAction<AlbumActions> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.album && page !== appState.album.page) {
            fetch(`album`)
                .then(response =>
                    response.json() as Promise<any>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_PHOTOES', page: page, album: album, postImageJson: data });
                });

            dispatch({ type: 'REQUEST_PHOTOES', page: page, album: album });
        }
    }
};

const unloadedState: AlbumState = { postImageJson: "", isLoading: false };

export const reducer: Reducer<AlbumState> = (state: AlbumState | undefined, incomingAction: Action): AlbumState => {
    if (state === undefined)
        return unloadedState;

    const action = incomingAction as AlbumActions;
    switch (action.type) {
        case 'REQUEST_PHOTOES':
            return {
                page: action.page,
                album: action.album,
                postImageJson: state.postImageJson,
                isLoading: true
            };
        case 'RECEIVE_PHOTOES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.page === state.page)
                return {
                    page: action.page,
                    album: action.album,
                    postImageJson: action.postImageJson,
                    isLoading: false
                };
            break;
    }

    return state;
};