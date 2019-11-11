# Rock, Paper, Scissors with Firebase

## Two-player rock, paper, scissors app

1. Vanilla Bootstrap _for page styling_

2. jQuery _for DOM manipulations_

3. Firebase _for database_

## Instructions

1. Enter your username

2. Wait for Player 2 to start

3. Pick rock, paper or scissors

4. Wait for Player 2

5. **REMEMBER**
   - **_Rock_** Beats _Scissors_
   - **_Scissors_** beats _Paper_
   - **_Paper_** beats _Rock_ _(somehow...)_

## Installation Instructions

1. Download or clone repo

2. Get API keys from Firebase

   - [Instructions for setting up Firebase available here](https://firebase.google.com/docs/web/setup)

3. Place them in a _config.js_

```js
const firebaseConfig = {
  apiKey: "abcdef-123456-ghijkl-789-mno",
  authDomain: "sample-123.firebaseapp.com",
  databaseURL: "https://sample-123.firebaseio.com",
  projectId: "sample-123",
  storageBucket: "sample-123.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:010000010001:web:a1b2c3d4f5"
};
```

4. Save _config.js_ to **_assets/javascript/_**

5. Open _index.html_ and you should be up and running!
