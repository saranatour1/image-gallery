<script>
  export let imageArray;
</script>

<div>
  {#await imageArray}
	<p>...waiting</p>
{:then}
{#each imageArray as item}
<img src={item} alt="Either sunset or sunrise" loading="lazy"  >
{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}


</div>

<style>
  div {
    width: 70%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-area: auto;
    gap: 5px;
    justify-items: center;
    margin: 0 auto; 
    object-fit: cover;
    scroll-behavior: smooth;
  }

  img {
    width: 100%;
    max-width: 600px; 
    transition: transform 0.3s ease-in-out;
  }

  </style>
  
  
  
  
  
  