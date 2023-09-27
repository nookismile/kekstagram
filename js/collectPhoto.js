import { addPhoto } from './addPhotos.js';

const photos = new Array(25).fill(null).map(() => addPhoto());

export { photos };
