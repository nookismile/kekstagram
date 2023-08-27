import { addPhoto } from './addPhotos.js';

const photo = new Array(25).fill(null).map(() => addPhoto());

export { photo };
