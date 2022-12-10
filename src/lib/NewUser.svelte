<script>
  import Modal from './Modal.svelte'
  let showModal = false
</script>

<button
  on:click={() => (showModal = true)}
  class="px-2 py-1 bg-blue-600 text-white rounded cursor-pointer ml-auto"
  >New User
</button>
{#if showModal}
  <Modal on:close={() => (showModal = false)} />
{/if}
