# Lessons Learned
I found it easiest to complete the steps in slightly different order:

1. Include CORS so our frontend and backend work on different ports
    a. `npm install cors` to project
    b. `const cors = require('cors')` in index.js
2. Get port number from environment variable if exists, if not assign it
    a. since working with Heroku
    b. `const PORT = process.env.PORT || 3001`
3. Generate frontend build
    a. `npm run build`
4. Copy frontend build to backend deployment path
5. Run locally to make sure things are working
    a. `npm run dev` or `npm start`
6. Now deploy to Heroku
    a. `git init`
    b. `heroku login` if not already
    c. `heroku create` to make the project
    d. `git add .`
    e. `git commit -m "initial commit"`
    f. `git push -u heroku master`
    g. `heroku logs --tail` to ensure the app is up and running