## Flow Prop Backend API Service
## Table of Contents

- [Overview](#Overview)
- [Getting Started](#getting-started)
- [EndPoints](#EndPoints)
- [Contributing to the Project](#contributing-to-the-project)
- [Deploy](#deploy)
- [Other](#other)
- [Meta](#meta)

## Overview

This services provides an api layer whereby we can query , property listing by agentid or organisationids.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Environment Variables 
An example of environment variabes is included needed for duplication `sample.env` and copy into `.env`

#### Install Dependencies
1. Get Yarn
``
    npm -g install yarn
``
2. Install Dependencies
``
yarn install
``
3. Compiles for development
``
yarn dev
``
4. Compiles and outputs packaged code
``
yarn build
``

## EndPoints

A postman collection is added to this repo, for ease of use and testing purposes


## Contributing to the Project

For detailed guidelines on how to create custom branches according to contribution follow
Refer to `CONTRIBUTING.md`

## Deploy

This nestjs project is deployable as an aws lambda function


Export the contents of the created `.env` file to the current terminal session.

```bash
set -o allexport; source .env; set +o allexport
```

## Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

## Meta

| Version | Author                                          | Date       |
| ------- | ----------------------------------------------- | ---------- |
| 0.0.1   | Jameel Geduld <jameel.wilite@gmail.com> | 16/02/2023 |



