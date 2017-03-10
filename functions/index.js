const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.initializeVoteCount = functions.database.ref('/restaurants/{restaurant}').onWrite(event => {
  const data = event.data;
  if (!data.previous.exists()) {
    data.ref.parent.child('vote_count').set(0);
  }
});

exports.tallyVotes = functions.database.ref('/restaurants/{restaurant}/votes').onWrite(event => {
  const data = event.data;
  const count = data.exists() ? data.numChildren() : 0;
  data.ref.parent.child('vote_count').set(count);
});
