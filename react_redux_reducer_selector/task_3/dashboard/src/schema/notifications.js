#!/usr/bin/node
// const notifications = require('../notifications.json');
import notifData from '../notifications.json';
import { schema, normalize } from 'normalizr';




// define users schema
const user = new schema.Entity('users');

// set idAttribute in options to guid in messages schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

// define notifications schema that ties the other schema into our json data
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notifData, [notification]);

export function getAllNotificationsByUser(userId) {
  return Object.values(normalizedData.entities.notifications)
    .filter((note) => note.author == userId)
    .map((note) => normalizedData.entities.messages[note.context]);
}
