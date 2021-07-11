# Komyda

## How To Run
Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=3000
```

Start server:
```
cd server
npm install
npm install -g nodemon
nodemon server
```

Start Web server
```
cd client
npm install
npm start
```
