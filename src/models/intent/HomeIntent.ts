import {Photo} from "../datamodels/Photo.ts";
import {List} from "immutable";
import {UiPhoto} from "../uimodels/UiPhoto.ts";

export type HomeState = {
    loadState: LoadState<string>,
    photos: List<UiPhoto>
}

export type HomeEvent = {
    onCheckDetail: () => void
}

export type LoadState<T> =
    | Loading
    | Error
    | Success<T>

export type Loading = { type: 'loading' }
export type Error = { type: 'error'; data: string }
export type Success<T> = { type: 'success'; data: T }

export type HomeIntent = HomeState & HomeEvent