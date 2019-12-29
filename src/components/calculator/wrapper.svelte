<script>
  import {
    DEFAULT_POINT_COUNT,
  } from '../../constants';
  import PointsResetter from './points-resetter';
  import Row from './row';
  import { pointsRemaining, stats } from '../../stores/stats';

</script>

<style>
  .wrapper {
    padding: 15px 20px;
    border: 3px solid grey;
    display: flex;
    flex-direction: column;
  }

  .header-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  .row {
    padding: 5px 0;
  }

  h3 {
    margin: 0;
  }

</style>

<div class='header-row'>
  <h3>Points Remaining: <strong>{$pointsRemaining}</strong></h3>
  <PointsResetter />
</div>
<div class='wrapper'>
  {#each stats as [name, store]}
    <div class='row'>
      <Row name={name} store={store} />
    </div>
  {/each}
</div>