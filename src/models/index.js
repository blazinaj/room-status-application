// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RoomStatus = {
  "OPEN": "OPEN",
  "CHECKED_IN": "CHECKED_IN",
  "TECH_IN": "TECH_IN",
  "DOC_IN": "DOC_IN"
};

const { Room, Office } = initSchema(schema);

export {
  Room,
  Office,
  RoomStatus
};