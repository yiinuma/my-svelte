<script>
  import { Router, Route, Link } from 'svelte-navigator'
  import HomePage from './page/HomePage.svelte'
  import UserPage from './page/UserPage.svelte'
  import TailwindCss from './TailwindCSS.svelte'
</script>

<Router>
  <nav class="p-4 bg-blue-800 text-white">
    <Link class="p-4 cursor-pointer hover:underline" to="/">Home</Link>
    <Link class="p-4 cursor-pointer hover:underline" to="/users">Users</Link>
  </nav>
  <Route path="/" component={HomePage} />
  <Route path="/users" component={UserPage} />
</Router>
<TailwindCss />
