<script>
  import StatsButtons from './stat-buttons';

  export let store;
  export let name;

  let inputVal = $store;
  $: inputVal = $store;
  // create an input change fn and validate rather than bind
  function _onChange(e) {
    const value = e.target.value;
    store.set(value);
  }

  function _onBlur() {
    inputVal = $store;
  }
</script>

<style>
  label {
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
  }
  .name {
    width: 10px;
  }
  .stat-input {
    width: 35px;
  }
</style>

<label for={name}>
  <div class='name'>{name}</div>
  <input
    class='stat-input'
    type=number
    name={name}
    bind:value={inputVal}
    on:input={_onChange}
    on:blur={_onBlur}
  >
  <StatsButtons store={store}/>
</label>