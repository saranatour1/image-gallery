<script>
import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
</script>

<header>
  <nav >

        <a href="https://github.com/saranatour1/scroll">
        <DiGithubBadge/>
        </a>

  </nav>

</header>
  
<style>
  header{
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
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
  /* width: auto;
  height: auto; */
}
</style>



