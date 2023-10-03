import { photo } from './photo.js';

const photos = new Array(25).fill(null).map(() => photo());

export { photos };
