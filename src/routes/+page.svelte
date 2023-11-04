<script lang="ts">
  import Scroller from "$lib/Scroller.svelte";
  import { onMount } from "svelte";
  export let data:{all:string[]};
  
  const openGraghRandom = () => {
    const random = Math.floor(Math.random() * data.all.length);
    return data.all[random];
  }
  
  
  let i = 0;
  const shuffleArray = (array:(string[])) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  let arraySlice = shuffleArray(data.all.slice(i, i + 10));

  onMount(() => {
		window.scrollTo(0,0)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY; 
      const windowHeight = window.innerHeight; 
      const documentHeight = document.documentElement.scrollHeight; 
      const distanceToBottom = documentHeight - (scrollY + windowHeight);
      const threshold = 300;
      if (distanceToBottom < threshold) {
        i += 10;
        if (i < data.all.length) {
          arraySlice = arraySlice.concat(shuffleArray(data.all.slice(i, i + 10)));
        }
      }
    });
  });
</script>

<svelte:head>
	<title>Sunset and Sunrise Pictures</title>
	<meta name="description" content=" a list of images that I took over the years of sunset and/or sunrise that I thought were cool to show" />
  <meta property="og:title" content="Sunset and Sunrise Pictures" />
  <meta property="og:description" content=" a list of images that I took over the years of sunset and/or sunrise that I thought were cool to show" />
  <meta property="og:image" content={`https://sunset-and-sunrise-image-scroller.vercel.app/${openGraghRandom()}`} />
  <meta property="og:url" content="https://sunset-and-sunrise-image-scroller.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Sunset and Sunrise Pictures" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sunset and Sunrise Pictures" />
</svelte:head>

<section>
	<Scroller imageArray={arraySlice}/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
    overflow: hidden;
    scroll-behavior: smooth;
	}

</style>
