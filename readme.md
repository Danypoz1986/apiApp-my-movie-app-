# Api App (My Movie App)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Installation](#installation)
- [API Usage](#api-usage)
  - [Search Movies](#search-movies)
  - [Get Movie Details](#get-movie-details)
- [App Screens](#app-screens)
  - [Home Page](#home-page)
  - [Details Page](#details-page)
- [Deployment](#deployment)
- [Credits](#credits)
- [Author](#author)


## Overview
My Movie App is an Ionic React application that allows users to search for movies, series, 
and episodes using the OMDb API. 
Users can browse search results and view detailed information about each selected item.
This app was created by following the tutorial video from **Simon Grimm's YouTube channel: 
[Ionic React Beginners Guide](https://www.youtube.com/watch?v=xn-qpnT2n3Q).**

## Features
- 🔍 Search movies, series, and episodes by title
- 🎬 Filter results by type (Movie, Series, Episode)
- ⭐ View detailed movie information including ratings, plot, director, and more
- 🎭 Display posters for each search result
- 📜 Responsive UI built with Ionic Framework
  
## Technologies Used
- **Ionic React** – For building the UI
- **TypeScript** – For type safety and structured code
- **React Hooks** – For state and effect management
- **OMDb API** – For retrieving movie data

## Project Setup
To create this project, I used the following command:
```bash
ionic start apiApp blank --type=react
```
## Installation
To run the project locally in Ionic, follow these steps:
```bash
# Clone the repository
git clone https://github.com/Danypoz1986/apiApp-my-movie-app-
cd apiApp-my-movie-app-

# Install dependencies
npm install

# Start the development server
ionic serve
```
The app will be available at `http://localhost:8100`.

## API Usage
The app fetches data from the **OMDb API** using two main functions:
### Search Movies
Fetches a list of movies, series, or episodes based on the search term and selected type.
```bash
const searchData = async (title: string, type: SearchType): Promise<searchResult[] | searchError> => {
  const result = await fetch(`https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=6d6d09e7`);
  return result.json();
};
```
### Get Movie Details
Fetches detailed information about a specific movie by IMDb ID.
```bash
const getDetails = async (id: string): Promise<DetailsResult> => {
  const result = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=6d6d09e7`);
  return result.json();
};
```
## App Screens
### Home Page
- Displays a search bar and a **filter dropdown** for selecting the type of content.
- Shows a list of search results with **posters and titles.**

### Details Page
- Shows **detailed information** about the selected movie, including:    
    - Title, Genre, Year
    - IMDb Rating
    - Director, Actors
    - Awards and Plot Summary

## Deployment
The app is deployed on **Netlify** and can be accessed at:

[https://api-app-my-movie-app.netlify.app/movies](https://api-app-my-movie-app.netlify.app/movies)

## Credits
- **OMDb API** – For providing movie data
- **Ionic Framework** – For UI components
- **Simon Grimm's YouTube Tutorial** – Guide for building the app

## Author
Developed by **Daniel Pozzoli** 🚀

