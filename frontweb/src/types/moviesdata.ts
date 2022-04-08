import { Genre } from "./genre"

export type MoviesData = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre[];
}
