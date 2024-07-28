import {List} from "immutable";

export type Photo = {
    id: string;
    created_at: string
    updated_at: string | null
    width: number
    height: number
    color: string | null
    views: number | null
    downloads: number | null
    likes: number | null
    description: string | null
    urls: Urls
    links: Links
    user: User
    exif: Exif | null
    location: Location | null
    tags: List<Tag> | null
}

type Tag = {
    type: string | null
    title: string | null
}

type Location = {
    city: string | null
    country: string | null
    position: string | null
}

type Exif = {
    model: string | null
    exposure_time: string | null
    aperture: string | null
    focal_length: number | null
    iso: number | null
}

type User = {
    id: string
    username: string
    name: string
    portfolio_url: string | null
    bio: string | null
    location: string | null
    total_likes: number | null
    total_photos: number
    total_collection: number
    profile_image: Urls
    links: Links
}

type Links = {
    self: string
    html: string
    photos: string | null
    likes: string | null
    portfolio: string | null
    download: string | null
    download_location: string | null
}

type Urls = {
    thumb: string | null
    small: string
    medium: string | null
    regular: string | null
    large: string | null
    full: string | null
    raw: string | null
}

const testJson = `
{
    "id": "LBI7cgq3pbM",
    "created_at": "2016-05-03T11:00:28-04:00"
}
`

const getPhoto = () => {
    const photo: Photo = JSON.parse(testJson)
    console.log(photo.created_at)
}

getPhoto()