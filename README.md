# Medium Clone

A platform for writers to share their articles (*markdown supported*) and read articles from other writers. This project mainly uses **NextJS**, **TailwindCSS**, **Typescript**, **Prisma** and **Redis**.

## Previews

![front page](./preview/preview1.png)
![user home](./preview/preview2.png)
![article view](./preview/preview3.png)

## Running the Project
### Cloning the repository

```fish
git clone https://github.com/0x0n0m4d/medium-clone
cd medium-clone
```

### Install packages

```fish
yarn
```

### Setup .env file

```sh
RESEND_API_KEY=
DATABASE_URL="postgresql://postgres:randompassword@postgres:5432/postgres?schema=public"
NEXT_PUBLIC_URL=http://localhost:8080
```

### Running project with docker

```fish
docker-compose up -d
```

## Stack

- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
  - [Redis](https://redis.io/)
