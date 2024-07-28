import {HomeIntent, HomeState} from "../models/intent/HomeIntent.ts";
import {List} from "immutable";
import {useImmer} from "use-immer";
import {useEffect} from "react";
import {pipe} from "fp-ts/function";
import {getPhotos} from "../repositorys/UnsplashRepository.ts";
import * as E from "fp-ts/Either";
import {Photo} from "../models/datamodels/Photo.ts";
import {UiPhoto} from "../models/uimodels/UiPhoto.ts";

export const useHomeViewModel = (): HomeIntent => {
    const homeState: HomeState = {
        loadState: {type: "loading"},
        photos: List.of()
    }
    const [state, setState] = useImmer(homeState)
    useEffect(() => {
        pipe(getPhotos, E.match(
            e => {
                setState(draft => {
                    draft.loadState = {type: "error", data: e}
                })
            },
            async r => {
                const photos = pipe(await r, List).map(p => mapToUiPhoto(p))
                setState(_ => ({
                    loadState: {type: "success", data: ""},
                    photos: photos
                }))
            }
        ))
    }, [setState])
    return {
        ...state,
        onCheckDetail() {

        }
    }
}

const mapToUiPhoto = (photo: Photo): UiPhoto => {
    return {
        description: photo.description ?? "enjoy",
        id: photo.id,
        name: photo.user.name,
        profile_image: photo.user.profile_image.medium ?? photo.user.profile_image.small,
        url: photo.urls.large ?? photo.urls.small,
        username: photo.user.username
    }
}