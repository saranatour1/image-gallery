<script>
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';

  let showBtn = false;

  const handleScroll = () => {
    if(browser){
      showBtn = window.scrollY > 0;
    }
  }

  onMount(() => {
    if(browser){
      window.addEventListener('scroll', handleScroll);
    }

    return () =>{
      window.removeEventListener("scroll", handleScroll) 
    }
  });

</script>

<header>
  <nav >
    <a href="https://github.com/saranatour1/image-gallery" aria-label="github repo link">
      <DiGithubBadge/>
    </a>
    {#if showBtn}
      <button class="button-60" aria-labelledby="scroll to top" on:click={()=>window.scrollTo(0,0)}>top</button>
    {/if}

  </nav>

</header>
  
<style>
  header{
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
  }
  a{
    width: 3rem;
  }
  nav{
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 80%;
    height: 1.5rem;
    padding: 1rem 0.5rem;
  }

  a:hover{
    filter: drop-shadow(0 0 0.2rem crimson);
  }

  .button-60 {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: .375em;
    box-shadow: none;
    box-sizing: border-box;
    color: #363636;
    cursor: pointer;
    display: inline-flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1rem;
    height: 2.5em;
    justify-content: center;
    line-height: 1.5;
    padding: calc(.5em - 1px) 1em;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  .button-60:active {
    border-color: #4a4a4a;
    outline: 0;
  }

  .button-60:focus {
    border-color: #485fc7;
    outline: 0;
  }

  .button-60:hover {
    border-color: #b5b5b5;
  }

  .button-60:focus:not(:active) {
    box-shadow: rgba(72, 95, 199, .25) 0 0 0 .125em;
  }

</style>



