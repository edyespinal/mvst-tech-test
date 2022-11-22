## MVST Challenge

Hi, thanks for the fun coding challenge!
Let's just get some thigns out of the way first...

- Did it take me more time than I expected? **Yes**
- Did I try to implement some things I haven't used before? **Yes**
- Was it a good idea to implement things I'm not sure will work? **Probably not...**
- Was it worth it? **Yes, and it was fun as well**

## Before we start

I made some assumptions that help clarify some of the decisions made on the project. The first one is that this project is not a big project containing millions of products or users. With this in mind I decided to opt for a `NoSQL` database (`MongoDB`) instead of `PostgreSQL`. Although relational databases are more scalable on the long term I thought the flexibility and lower cost (I might be way off here) of a non-relational database was good enough for this project.

I decided to try an implement [`tRPC`](https://trpc.io/) (which I've never used before) combined with [`prisma`](https://www.prisma.io/) to get a solid, type-safe, scalable and stable API and data layer for the application.

**(I have to say I'm quite impressed with tRPC)**

I converted some `classes` in the frontend to a `factory` function. I didn't implement this pattern for every `class` since I'm still debating on the pros and cons of both. I would love to hear your opinion on this!

## The Codebase

### Backend

Love the choice of Nest for this. I don't have a lot of experience with it, but so far it has been a pleasant experience. Having said that, there were no major changes to backend.

I added the `Coffees` and `Teas` modules, both of which only have a method to get all the documents form the database.
This would have to be worked on to add better `error handling` and `pagination` in case the products start to grow in numbers!

Also, right now the backend is "wide open" with `CORS` allowing calls from anywhere without requiring some form of authorization.

You can find a deployed version of the backend here:
[MVST Backend](https://mvst-tech-test-backend-r0904lapn-edyespinal.vercel.app/)

There are only two endpoint defined:

- GET: Coffees

```
https://mvst-tech-test-backend-r0904lapn-edyespinal.vercel.app/v1/api/coffees
```

- GET: Teas

```
https://mvst-tech-test-backend-r0904lapn-edyespinal.vercel.app/v1/api/teas
```

### Frontend

I love even more the choice of NextJS for the frontend!

I decided to connect the frontend and backend using `tRPC` and `Prisma` right after running `yarn` to add all the `GraphQL` dependencies. Implementing `GraphQL` for this project maybe would have been easy but I had been looking for a project to test `tRPC` for a while now... so thanks!

Things I think are missing here are better testing as I'm not very familiar with it (but I'd like to be) and Storybook as I saw it was already a dependency on the project.

You can find a deployed version of the app here: [MVST Frontend](https://main--mvst-tech-test-frontend.netlify.app/)

### What would you improve if given more time?

Backend:

- Error handling
- RESTFul API for coffees and teas
- Authorization

Frontend:

- Better folder structure
- Consistent use of patterns (e.g. Classes vs Factory functions)
- Minor details on outcome vs design provided
- Better testing

---

### Feedback for the challenge

Nothing really, I think it is a good challenge with a great starting point to start focusing on the project without worrying about boilerplate.

---

Cheers 🍻

Edy Espinal
