export async function load() {
  const imagePath = "http://localhost:5173/src/lib/static"; 
  const arrayOfImages = [];

  for (let i = 1; i <= 235; i++) {
    arrayOfImages.push(`${imagePath}/${i}.jpg`);
  }

  return {
    all: arrayOfImages, 
  };
}
