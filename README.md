## Using nestjs and expressjs on a separate routes
PoC showing how to have an expressjs application under certain path while having nestjs under another. This was produced by doing https://docs.nestjs.com/first-steps and then wiring up express in the bootstrap function in `src/main.ts`. 

1. `npm run start` (or `yarn start`)
2. go to `localhost:3000/express` to use express router
3. go to `localhost:3000/` to use nestjs controller
