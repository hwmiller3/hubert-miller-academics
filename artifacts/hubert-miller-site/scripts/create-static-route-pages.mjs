import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const artifactRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const outputRoot = path.join(artifactRoot, 'dist', 'public');
const entryHtml = path.join(outputRoot, 'index.html');

for (const route of ['research', 'cv', 'contact']) {
  const routeDirectory = path.join(outputRoot, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(entryHtml, path.join(routeDirectory, 'index.html'));
}

await writeFile(path.join(outputRoot, '.nojekyll'), '');
