<script>
  import { createEventDispatcher } from 'svelte'
  import { fly } from 'svelte/transition'

  const dispatch = createEventDispatcher()

  export let user, i
  const remove = () => {
    dispatch('remove', user.id)
  }
</script>

<div
  transition:fly={{
    duration: 1000,
    x: 200,
  }}
  class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg items-center cursor-pointer relative"
>
  <button
    on:click={remove}
    class="absolute right-0 top-0 -mt-3 rounded-full w-5 h-5 text-center text-sm bg-red-300 text-white hover:bg-red-700"
    >X
  </button>
  <p class="w-10">{i + 1}</p>
  <img class="rounded-full w-14 h-14" src={user.image} alt={user.name} />
  <h3 class="mx-4 w-20">{user.name}</h3>
  <p class="mx-4 w-20">{user.email}</p>
</div>
