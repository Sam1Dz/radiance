import TopicsData from '@/database/data.json';

/* TYPES */
import type { Topics } from '@/type';

interface Database {
  version: string;
  role: Topics[];
}

const database = JSON.parse(JSON.stringify(TopicsData)) as Database;

export function getRawData() {
  return database;
}

export function getTopics(selector: string) {
  const splitUid = selector.split('_');
  // const identifier = splitUid[0][0];

  let currentData: Topics[] = database.role;
  for (let i = 0; i < splitUid.length; i++) {
    const uid = splitUid[i];
    const found = currentData.find((topic) => topic.uid === uid);

    if (!found) {
      return currentData;
    }

    if (i === splitUid.length - 1) {
      return found;
    }

    if (found && found.topics) {
      currentData = found.topics;
    } else {
      return found;
    }
  }
}
