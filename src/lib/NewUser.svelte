<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import Modal from './Modal.svelte'
  const dispatch = createEventDispatcher()

  let showModal = false
  let newUser = {}

  const clearForm = () => {
    newUser = {
      name: '',
      email: '',
      active: true,
    }
  }

  const handelForm = () => {
    dispatch('newUser', newUser)
    clearForm()
    showModal = false
  }
</script>

<button
  on:click={() => (showModal = true)}
  class="px-2 py-1 bg-blue-600 text-white rounded cursor-pointer ml-auto"
  >New User
</button>
{#if showModal}
  <Modal
    on:close={() => ((showModal = false), clearForm())}
    on:submit={handelForm}
  >
    <h1 class="text-2xl text-center">Create new user</h1>
    <div class="py-1 px-2 my-4">
      <label for="">Name</label>
      <input
        bind:value={newUser.name}
        type="text"
        class="px-2 py-1 w-full rounded border"
      />
    </div>
    <div class="py-1 px-2 my-4">
      <label for="">Email</label>
      <input
        bind:value={newUser.email}
        type="email"
        class="px-2 py-1 w-full rounded border"
      />
    </div>
    <div class="py-1 px-2 my-4 flex justify-between">
      <label for="true">Active:</label>
      <div class="flex">
        <label for="true"
          >Yes
          <input
            bind:group={newUser.active}
            type="radio"
            id="true"
            value={true}
            name="active"
            class="px-2 py-1 rounded border mx-5"
          />
        </label>
        <label for="false"
          >No
          <input
            bind:group={newUser.active}
            type="radio"
            id="false"
            value={false}
            name="active"
            class="px-2 py-1 rounded border mx-5"
          />
        </label>
      </div>
    </div>
    <button
      type="submit"
      disabled={newUser.name && newUser.email ? false : true}
      id="submit-button"
      slot="right-button"
      class="px-2 py-1 !bg-blue-400 text-white rounded disabled:!bg-gray-200"
      >Create</button
    >
  </Modal>
{/if}
