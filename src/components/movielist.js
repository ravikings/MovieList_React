import { getByTitle } from "@testing-library/dom";

const movies =[
    {
        id: 1,
        title: "terminator",
        genre: {id: "dvcw4495864", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDtae: "2018-01-03T19:04:28.809Z"
    },
    {
        id: 2,
        title: "terminator",
        genre: {id: "dvcw4495864", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDtae: "2018-01-03T19:04:28.809Z"
    },
    {
        id: 3,
        title: "terminator",
        genre: {id: "dvcw4495864", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDtae: "2018-01-03T19:04:28.809Z"
    },
    {
        id: 4,
        title: "terminator",
        genre: {id: "dvcw4495864", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDtae: "2018-01-03T19:04:28.809Z"
    },
    {
        id: 5,
        title: "terminator",
        genre: {id: "dvcw4495864", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDtae: "2018-01-03T19:04:28.809Z"
    },
    {
        id: 6,
        title: "terminator",
        genre: {id: "dvcw4495864", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDtae: "2018-01-03T19:04:28.809Z"
    },
    {
        id: 7,
        title: "terminator",
        genre: {id: "dvcw4495864", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDtae: "2018-01-03T19:04:28.809Z"
    }
]

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m.id === id);
}