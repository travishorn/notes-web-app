# Daily Journal

Capture your thoughts, one day at a time. Build a journaling habit with daily
prompts and mood tracking.

## Installation

Make sure you have git and Node.js installed.

Clone this repository.

```sh
git clone https://github.com/travishorn/dj
```

Change into the directory.

```sh
cd dj
```

Install the dependencies.

```sh
npm install
```

Run the database migrations.

```sh
npx knex migrate:latest
```

Seed the database.

```sh
npx knex seed:run
```

## Development

Start the development server.

```sh
npm run dev
```

Go to http://localhost:5173 in your browser to see the running app.

## Deployment

Create a production version of the app.

```sh
npm run build
```

Preview the production build.

```sh
npm run preview
```

See https://kit.svelte.dev/docs/building-your-app for next steps.

## License

The MIT License

Copyright 2024 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
