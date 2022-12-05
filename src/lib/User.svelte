<script>
  export let image, name, email, i
</script>

<div
  class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg items-center cursor-pointer"
>
  <p class="w-10">{i + 1}</p>
  <img class="rounded-full w-14 h-14" src={image} alt={name} />
  <h3 class="mx-4 w-20">{name}</h3>
  <p class="mx-4 w-20">{email}</p>
</div>
