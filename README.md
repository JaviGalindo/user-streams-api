<h1 align="center">Welcome to user-streams-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.14.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3Dv14.7.0-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

>  Services to check number of concurrent streams and prevent a user from watching more than 3 streams concurrently.
## Prerequisites

- npm >=6.14.0
- node >=v14.7.0

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```
## How to use it
To check how many concurrent streams a customer has, the request needs to be like: 
>  GET /streams/:userId

When userId is a valid UUID of an existing user the successful response from the API is:
```json
{
    "numberStreams":1
}
```
If there is an error the possible responses are:
- Validation error:
```json
{
    "errorCode": 400,
    "message": "\"userId\" must be a valid GUID"
}
```
- NotFound error:
```json
{
    "errorCode": 404,
    "message": "User not found"
}
```
- User with already 3 concurrent streams:
```json
{
    "errorCode": 403,
    "message": "This user already has 3 concurrent streams"
}
```
## Improvements
1. Implementing full CRUD service where the consumer is able to manage the number of streams of the users. I made the assumption that only GET was required, but in a real implementation I'm sure updating, removing and creating would be needed.
2. Implementing Storage system where the service can give the requested data. I would choose Redis for this implementation. Redis will give a fast way to manage the number of streams of the users.
3. I would add unit testing. Right now the code coverage is a 100% but I would still create unit testing for all functions in this service.
4. I would also implement Gitflow and GitActions so instead of working on Master there are features, bugfix, hotfix... branches. With Github actions it would be possible to detect linting issues, tests failing, etc. and avoiding merge when pull request is not green.
5. I would add more logging (debug, warn...) and also depending on the environment (develop, production, local) setting level option for logger.
6. I would also use a third party service to manage the logs generated for the APP (e.g: Kibana) so we are able to monitor issues.****

## Author

👤 **Javier Galindo**
