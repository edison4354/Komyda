# Welcome To Komyda!

## How To Run

### Komyda couldn't be easier to get up and running!
First create a cluster using mongodb and retrieve the connection string (MongoDB Atlas URI)

In terminal, simply

1. `git clone` the repository

2. Setup the server
```
cd server
npm install
npm install -g nodemon
```

3. Setup the Web server
```
cd client
npm install
```

4. Create an Atlas URI connection parameter in `server/config.env` with your MongoDB Atlas URI:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=3000
```
See https://docs.mongodb.com/drivers/node/current/quick-start/ for more details 


5. Start server:
```
cd server
nodemon server
```

6. Start Web server
```
cd client
npm start
```
