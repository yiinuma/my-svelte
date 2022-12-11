<script>
  import FilterUser from './FilterUser.svelte'
  import NewUser from './NewUser.svelte'
  import User from './User.svelte'
  import { users, remove, add } from '../store'

  $: filterUsers = $users

  const filter = (e) => {
    if (e.detail === 'null') {
      filterUsers = $users
      return
    } else if (e.detail === 'false') {
      filterUsers = $users.filter((user) => user.active === false)
      return
    }
    filterUsers = $users.filter((user) => user.active === true)
  }
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>
  <div class="flex justify-between mx-4 items-center mt-4">
    <FilterUser on:filter={filter} />
    <NewUser on:newUser={add} />
  </div>
  {#each filterUsers as user, i (user.id)}
    <User on:remove={remove} {user} {i} />
  {:else}
    <p>No user found</p>
  {/each}
</div>
