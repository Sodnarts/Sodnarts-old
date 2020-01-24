const functions = require('firebase-functions');
const app = require('../server/index');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.server = functions.https.onRequest(app);
