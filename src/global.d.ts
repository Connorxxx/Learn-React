import {List} from "immutable";

declare global {
    interface String {
        isEmpty(): boolean
    }

    interface Array<T> {
        toList() : List<T>
    }
}