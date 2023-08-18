import { API_KEY,} from '$env/static/private';
import { json } from '@sveltejs/kit';


export async function load() {
  const arrayOfImages = new Array();
  for (let i = 1; i <= 162; i++) {
    arrayOfImages.push(`${API_KEY}/${i}.jpg`);
  }
  // console.log(arrayOfImages[0])
  return {
    all: await arrayOfImages,
  };
}