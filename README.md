## Using nestjs and expressjs on a separate routes
PoC showing how to have an expressjs application under certain path while having nestjs under another. 

This was produced by doing:
1. https://docs.nestjs.com/first-steps
2. Wiring up express in the bootstrap function in `addExpressAppToNestApp` in `src/main.ts`.
3. Changing `app.controler.ts` path from default `/` to `/nest`.
4. Added `"allowJs": true` to `tsconfig.json` so JS files imported from TS files are included in the built bundle.

### Run

1. `npm run start` (or `yarn start`)
2. go to `localhost:3000/` or `localhost:3000/another_express_path` to use express
3. go to `localhost:3000/nest` to use nestjs controller

### Usage in an existing express app
Replace `createSampleExpressApp()` function call with the desired express app. As a result that app should be working as it was before, but additional path `nest` will be available to the nestjs controller. Other nestjs controllers may be added as needed.

### Disclaimer
This is just a simple non-production ready PoC. Not tested with big real world expressjs app. It's purpose is to test it out with an existing expressjs app to verify it doesn't introduce any regressions and nestjs works as intended in this case. 
