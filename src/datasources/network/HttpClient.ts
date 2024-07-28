import {Either, match, tryCatch} from "fp-ts/Either";
import {Photo} from "../../models/datamodels/Photo.ts";
import {List} from "immutable";
import {pipe} from "fp-ts/function";


export const fetchBody = <T>(url: string, params: Record<string, string> = {}): Either<string, Promise<T>> => tryCatch(
    async () => {
        const fullUrl = params ? buildUrl(url, params) : url
        const response = await fetch(fullUrl)
        if (!response.ok) throw new Error(`Could not fetch response Status: ${response.status}`)
        return await response.json() as T
    },
    e => String(e)
)

const buildUrl = (base: string, params: Record<string, string>) => {
    const url = new URL(base)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return url.toString()
}






