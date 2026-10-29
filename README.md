# Unsolved Case — c-unsolvedcase.github.io

Online co-op detective game for 1–4 players, played in the phone browser.
Case 1: **The Last Ferry** (5 chapters, 28 clues, 5 suspects, 4 locations, spoken character dialogue, party voice chat).

## How this deployment works

- **Front-end (this repo, GitHub Pages):** the files at the repo root are the
  `client/` from the original project. Served at https://c-unsolvedcase.github.io/
- **Game server (Oracle VPS, Docker `unsolved-case`, Node 20):** the authoritative
  server in `server/` + `package.json`. It is NOT run by GitHub Pages.
  The Pages client connects to it at `wss://3danatomie.com/ws` — the VPS
  OpenLiteSpeed vhost for 3danatomie.com proxies `/ws` to the Node server on
  localhost:3000 (see `client/js/net.js`). Rooms live in the container's
  `/data` volume on the VPS.
- **To run the server yourself:** `npm install && npm start` (port 3000),
  then open the client against that host (same-host WS is kept for local use).

Original project README, tools (Blender scene builder, voice synthesis) and
tests are in the author's uploaded zip; only the playable client + server are
in this Pages repo.
