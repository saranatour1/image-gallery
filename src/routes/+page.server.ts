
export async function load() {
  try {
    const imagePath = "/src/lib/static";
    const arrayOfImages = new Array();
    for (let i = 1; i <= 235; i++) {
      arrayOfImages.push(`${imagePath}/${i}.jpg`);
    }
    return {
      all: await arrayOfImages,
    };
  } catch (e) {
    console.error(e);
  }
}
