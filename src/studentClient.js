import axios from "axios";
import React from "react";

export function getAllBooks() {

    let allBooks = [];
    axios.get("book/getAll").then(function (response) {
        allBooks = response.data;
        return allBooks;
    }).catch(err => {
        return allBooks;
    })
}

export const getOne = (id) => axios.get(`/book/getOne/${id}`)

export const deleteOne = (id) => axios.delete(`/book/delete/${id}`)

