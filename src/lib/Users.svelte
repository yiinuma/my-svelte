<script>
  import FilterUser from './FilterUser.svelte'
  import User from './User.svelte'

  let users = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      name: 'John',
      userEmail: 'John@bitfumes.com',
      active: false,
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      name: 'Jenie',
      userEmail: 'Jenie@bitfumes.com',
      active: true,
    },
    {
      id: 3,
      image: 'https://cdn-icons-png.flaticon.com/512/560/560277.png',
      name: 'Keiji',
      userEmail: 'Keiji@bitfumes.com',
      active: false,
    },
  ]

  let filterUsers = users

  const filter = (e) => {
    if (e.detail === 'null') {
      filterUsers = users
      return
    } else if (e.detail === 'false') {
      filterUsers = users.filter((user) => user.active === false)
      return
    }
    filterUsers = users.filter((user) => user.active === true)
  }
</script>

<FilterUser on:filter={filter} />
<h1 class="text-2xl text-center mt-10">List of Users</h1>
{#each filterUsers as user, i (user.id)}
  <User {user} {i} />
{:else}
  <p>No user found</p>
{/each}
