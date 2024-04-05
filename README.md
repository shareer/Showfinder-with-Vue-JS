# TV Shows Listing App

The application is developed using Vue 3 in Vite, enabling users to browse lists of TV shows categorized by their ratings and genres. The data is fetched from the TVmaze API (https://www.tvmaze.com/api). Users can search for specific shows and access detailed information about each show on the details page

## Technologies Used

- Vue.js
- TypeScript
- Bootstrap for styling
- Pinia for state management
- Axios for making HTTP requests


## Getting Started

To get started with the app, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm :
```sh
npm install
```

## Run the development server
```sh
npm run dev
```
This will start the development server and you can view the app in your browser.

## Node.js and npm Versions

This project was developed using Node.js and npm. Below are the versions used:

- Node.js: v18.16.0
- npm: 9.5.1

## Folder Structure

The project structure is organized as follows:

- `assets/`: Contains the css files and images.
- `components/`: Vue components used in the app.
- `router/` : Vue Routing
- `stores/`: Store modules.
- `types/`: TypeScript type definitions.

## Usage

- View the full list of TV show categories based on genre.
- If the app is loading for the first time, TV show data will be fetched from the API. Once loaded, it will be saved to the store, and then on, it will be retrieved from the store.
- TV shows in each genre will be listed horizontally based on their rating. The show with the highest rating will be shown first, and so on.
- Users can search for a particular TV show through the search bar at the top.
- Users can click on each show card to view the full details of the show.

## Recommended IDE Setup and 

[VSCode](https://code.visualstudio.com/) 

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
