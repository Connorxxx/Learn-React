import {fetchBody} from "../datasources/network/HttpClient.ts";
import {List} from "immutable";
import {Photo} from "../models/datamodels/Photo.ts";

const BASE_URL = "https://api.unsplash.com"
const ACCESS_KEY = "FwwjrXyEstpJ_NPZCOggXf_SepXKCr_iDmOt5Z54LS8"

const LOAD_PHOTOS = `${BASE_URL}/photos`

export const getPhotos = fetchBody<Array<Photo>>(LOAD_PHOTOS, {
    "client_id": ACCESS_KEY,
    "page": "0",
    "per_page": "10"
})

