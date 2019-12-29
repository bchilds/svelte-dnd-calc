<script>
  import { pointsRemaining } from '../../stores/stats';
  function handleReset() {
    pointsRemaining.update(DEFAULT_POINT_COUNT);
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
