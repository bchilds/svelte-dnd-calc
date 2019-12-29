<script>
  export let store;

</script>

<div>
  <button on:click={store.increment}>+</button>
  <button on:click={store.decrement}>-</button>
  <button on:click={store.max}>MAX</button>
</div>