# Movie Database

A movie search and details web application built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Material UI](https://mui.com/). Search for movies, view ratings, genres, and detailed information using The Movie Database (TMDb) API.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** Material UI (MUI)
- **State Management:** Zustand
- **API:** TMDb (The Movie Database)
- **Styling:** SCSS Modules

---

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/movie-db.git
cd movie-db
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Environment Variables

Create a `.env.local` file in the root with your TMDb API key:

```
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

---

## Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Building for Production

```bash
npm run build
npm start
```

Or use your preferred package manager.

---

## Testing

To run unit tests (if available):

```bash
npm test
# or
yarn test
# or
pnpm test
```

---

## Project Structure

- `src/components/` – React components (Search bar, Movie card, Movie details, etc.)
- `src/models/` – TypeScript models and types
- `src/store/` – Zustand state management
- `src/styles/` – SCSS modules and global styles
- `app/` – Next.js app directory (routing, pages)

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material UI Documentation](https://mui.com/)
- [TMDb API Docs](https://developer.themoviedb.org/docs)

---

## License

This project is licensed under the MIT License.

---
