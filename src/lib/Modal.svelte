<script>
  import { createEventDispatcher, onDestroy } from 'svelte'

  const dispatch = createEventDispatcher()
  const close = () => {
    dispatch('close')
  }

  let modal

  const handle_keydown = (e) => {
    if (e.key === 'Escape') {
      close()
      return
    }

    if (e.key === 'Tab') {
      // trap focus
      const nodes = modal.querySelectorAll('*')
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0)

      let index = tabbable.indexOf(document.activeElement)
      if (index === -1 && e.shiftKey) index = 0

      index += tabbable.length + (e.shiftKey ? -1 : 1)
      index %= tabbable.length

      tabbable[index].focus()
      e.preventDefault()
    }
  }

  // const previously_focused =
  //   typeof document !== 'undefined' && document.activeElement

  // if (previously_focused) {
  //   onDestroy(() => {
  //     previously_focused.focus()
  //   })
  // }
</script>

<svelte:window on:keydown={handle_keydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={close}
  class="relative z-10"
  role="dialog"
  aria-modal="true"
  bind:this={modal}
>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-center justify-center min-h-full p-4 text-center sm:p-0"
    >
      <div
        class="bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm-max-w-sm sm:w-full sm:p-6"
      >
        <div class="mt-5 sm:mt-6">
          <!-- svelte-ignore a11y-autofocus -->
          <button
            autofocus
            on:click={close}
            class="px-2 py-1 border rounded hover:bg-gray-200">Close</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
