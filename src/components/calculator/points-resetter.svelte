<script>
  import { stats } from '../../stores/stats';
  function handleReset() {
    stats.forEach(storeTuple => {
      const [name, store] = storeTuple;
      store.reset();
    });
  }
</script>

<style>
  .reset-button {
    font-size: 16px;
    line-height: 20px;
    padding: 5px 10px;
    border-radius: 45px;
  }

  .reset-button:focus {
    outline: none;
  }
  </style>

  <button class='reset-button' on:click={handleReset}>Reset</button>
