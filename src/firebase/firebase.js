import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     })
// //     console.log(expenses)
// //   });
//
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   });
// })
//
//
//
// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 109500,
// //   createdAt: 89320423492
// // });
//
//
// // database.ref().push({
// //   title: 'Course Topics',
// //   body: 'React, Python, Ruby'
// // });
//
// // const firebaseNotes = {
// //   notes: {
// //     jfkadsl: {
// //       title: 'First Note',
// //       body: 'This is my note'
// //     },
// //     aksdfldasf: {
// //       title: 'Second Note',
// //       body: 'This is my note'
// //     }
// //   }
// // };
// //
// // const notes = [{
// //   id: '12',
// //   title: 'First Note',
// //   body: 'This is my note'
// // }, {
// //   id: '761ase',
// //   title: 'Another Note',
// //   body: 'This is my note for real'
// // }];
// //
// // database.ref('notes').set(firebaseNotes)
//
// // Set up data subscription -> Eric is a software developer at Amazon
//
// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.position} at ${val.job.company}`)
// // })
//
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // })
// //
// // setTimeout(() => {
// //   database.ref('age').set(900)
// // }, 3500);
// //
// // setTimeout(() => {
// //   database.ref().off(onValueChange)
// // }, 7000);
// //
// // setTimeout(() => {
// //   database.ref('age').set(2342342)
// // }, 10500);
//
// // database.ref('location/country')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val)
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e)
// //   });
//
// // database.ref().set({
// //   name: 'Eric',
// //   age: 30,
// //   job: {
// //     position: 'Teacher',
// //     company: 'Ubesta',
// //     stresslevel: 'low'
// //   },
// //   location: {
// //     city: 'Seoul',
// //     country: 'Korea'
// //   }
// // }).then(() => {
// //   console.log('data is saved!');
// // }).catch((e) => {
// //   console.log('This failed', e)
// // });
// //
// //
// //
// // database.ref().update({
// //   'job/position': 'Software Developer',
// //   'job/company': 'Amazon',
// //   'job/stresslevel': 'medium',
// //   'location/city': 'Seatttttle'
// // })
//
//
// // database.ref('age').set(31)
// //
// // database.ref('attributes/height').set(70)
// // database.ref('attributes/weight').set(170)
// //
// // database.ref('isSingle').remove().then(() => {
// //   console.log('Remove Succeeded')
// // }).catch((error) => {
// //   console.log('Remove Failed: ' + error.message)
// // });
