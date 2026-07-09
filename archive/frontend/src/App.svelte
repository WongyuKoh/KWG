<script>
  import Router from 'svelte-spa-router'
  import Home from "./routes/Home.svelte"  
  import Navigation from './components/Navigation.svelte';

  const routes = {
    '/': Home,

    
  }
</script>

<Navigation />
<Router {routes}/>
