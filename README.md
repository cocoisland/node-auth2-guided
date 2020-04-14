# Node Token Auth 2 Guided Project using jsonwebtoken to sign token when /register and verify token when /login. Token are sent in cookie from server to client.

Guided project for **Node Auth 2** Module.

Pro: servers can scale up horizontally as client token hashed password are verified when login by any servers which can compare client hashed password from local storage.

Con: server can not enforce client logout.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type`npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds support for `JSON Web Tokens (JWT)` to the API.
