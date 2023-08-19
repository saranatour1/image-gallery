<script lang="ts">
  import { onMount } from "svelte";

  export let imageArray:string[];



</script>

<div >
  {#each imageArray as item,index}
    <img src={item} alt="Probably the sunset or sunrise" loading="lazy"  >
  {/each}
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
  }
  
  img {
    width: 100%;
    max-width: 600px; 
  }
  </style>
  
  
  
  
  
  