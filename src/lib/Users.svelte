<script>
  import User from './User.svelte'

  let users = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      name: 'John',
      userEmail: 'John@bitfumes.com',
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      name: 'Jenie',
      userEmail: 'Jenie@bitfumes.com',
    },
    {
      id: 3,
      image: 'https://cdn-icons-png.flaticon.com/512/560/560277.png',
      name: 'Keiji',
      userEmail: 'Keiji@bitfumes.com',
    },
  ]

  const getUsers = () => {
    return users
  }
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>
  {#each getUsers() as { image, name, email, id }, i (id)}
    <User {image} {name} {email} {i} />
  {:else}
    <p>No user found</p>
  {/each}
</div>
