import {createMuiTheme, Theme} from "@material-ui/core";

export interface Rating {
    score: number;
    id: string;
}

export interface Ratings {
    [key: string]: Rating;
}

const RATINGS_KEY = "ackee-cookbook-ratings";

export const getRatings = (): Ratings =>
    JSON.parse(localStorage.getItem(RATINGS_KEY) || "{}");

export const saveRatings = (ratings: Ratings) =>
    localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));

export const getRating = (id: string): Rating | null => getRatings()[id];

export const addRating = (rating: Rating) => {
    const ratings = getRatings();
    ratings[rating.id] = rating;
    return saveRatings(ratings);
};

export const getTheme = (theme?: Theme): Theme => theme || (createMuiTheme());
