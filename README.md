# React 

# Moodflix

Moodflix is a modern movie search app built with React. Instantly search for movies, view details, and discover new favorites with a beautiful, responsive UI.

## Features
- 🔍 Real-time movie search
- 🎬 Movie details with posters and ratings
- 🌙 Clean, modern, and responsive design


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
	 ```sh
	 git clone https://github.com/nasihrahman/moodflix-react.git
	 cd moodflix
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 # or
	 yarn install
	 ```

### Running the App

Start the development server:
```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Screenshots

### Home Page
![Moodflix Home Page](/moodflix/screenshots/1.png)

### Movie Details
![Moodflix Movie Details](/moodflix/screenshots/2.png)


## Project Structure
```
moodflix/
	public/           # Static assets (images, icons)
	src/
		components/     # React components (MovieCard, Search, etc.)
		App.jsx         # Main app component
		main.jsx        # Entry point
		...
	package.json      # Project metadata and scripts
	vite.config.js    # Vite configuration
```

## Customization
- Update images in the `public/` folder for branding.
- Modify styles in `src/App.css` and `src/index.css`.
- Extend components in `src/components/` for new features.

## Technical Details

### API
- Uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) for fetching movie data.
- API requests are made using the Fetch API with a Bearer token stored in the `.env` file as `VITE_TMDB_API_KEY`.
- Endpoints used:
	- `GET /search/movie?query=...` for searching movies
	- `GET /discover/movie?sort_by=popularity.desc` for popular movies

### Main Components
- `App.jsx`: Handles state, API calls, and renders the main layout.
- `Search.jsx`: Search input component with debounced input for efficient API calls.
- `MovieCard.jsx`: Displays movie poster, title, rating, language, and release year.

### State Management
- Uses React hooks (`useState`, `useEffect`) for state and side effects.
- Debouncing implemented with `react-use`'s `useDebounce` to limit API calls while typing.

### Styling
- Tailwind CSS for utility-first, responsive design.
- Custom styles in `App.css` and `index.css`.

### Tooling
- Built with [Vite](https://vitejs.dev/) for fast development and hot module replacement.
- Linting with ESLint and recommended React plugins.





---

