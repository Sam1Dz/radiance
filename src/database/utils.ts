'use server';

import { existsSync } from 'fs';
import { readFile } from 'fs/promises';

import type { Topics } from '@/type';

const path = process.cwd() + '/src/database/topics.json';

export async function readTopics(): Promise<Topics[]> {
  if (!existsSync(path)) {
    return [];
  }

  const file = await readFile(path, 'utf-8');
  return JSON.parse(file);
}
