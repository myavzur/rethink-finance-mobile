// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_brief_captain_stacy.sql';
import m0001 from './0001_striped_blob.sql';
import m0002 from './0002_handy_kat_farrell.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0001,
m0002
    }
  }
  