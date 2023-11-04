export async function load() {
  const imagePath = "https://media.githubusercontent.com/media/saranatour1/image-gallery/new/src/lib/static/"; 
  const arrayOfImages = [];

  for (let i = 1; i <= 235; i++) {
    arrayOfImages.push(`${imagePath}/${i}.jpg`);
  }

  return {
    all: arrayOfImages, 
  };
}
