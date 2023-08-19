<script>
  import Scroller from "$lib/Scroller.svelte";
  import { onMount } from "svelte";

  export let data;
  let i = 0;

	$:console.log(i);
  const shuffleArray = (array) => {
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
	
			// if(i===data.all.length || i<=data.all.length-1 || i>= data.all.length){
			// 	i=0;
			// }


    });
  });
</script>

<svelte:head>
	<title>Sunset and Sunrise Pictures</title>
	<meta name="description" content="Scroll over my images" />
</svelte:head>

<section >
	<Scroller imageArray={arraySlice}/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.5;
	}

</style>
