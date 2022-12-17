<script>
  import { tweened } from 'svelte/motion'
  import { flip } from 'svelte/animate'
  import { cubicIn, quadInOut } from 'svelte/easing'
  import FilterUser from './FilterUser.svelte'
  import NewUser from './NewUser.svelte'
  import User from './User.svelte'
  import { users, remove, add } from '../store'
  import { onMount } from 'svelte'

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

  const progress = tweened(0, {
    duration: 500,
    easing: cubicIn,
  })

  onMount(() => {
    progress.set(filterUsers.length)
  })
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <div class="flex justify-between mx-4 items-center mt-4">
    <FilterUser on:filter={filter} />
    <NewUser on:newUser={add} />
  </div>
  <progress max="10" min="0" value={$progress} class="w-full px-4" />
  {#each filterUsers as user, i (user.id)}
    <div animate:flip={{ delay: 250, duration: 800, easing: quadInOut }}>
      <User on:remove={remove} {user} {i} />
    </div>
  {:else}
    <p>No user found</p>
  {/each}
</div>
