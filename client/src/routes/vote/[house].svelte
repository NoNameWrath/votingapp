<script>
  // @ts-nocheck

  import { page } from "$app/stores";
</script>

<div>
  <div class="grid place-content-end m-10">
    <img src="../sishya.svg" alt="" />
  </div>
  <div class="grid place-content-center -m-20">
    <img src="../{$page.params.house}.svg" alt="" />
  </div>
  <div class="grid place-content-center">
    <div class="flex">
      <div
        class="grid flex-grow card place-items-center -mt-5 mr-72 shadow-lg shadow-gray-500"
      >
        <a href="/vote/{$page.params.house}/male">
          <img src="../man.svg" alt="man" />
        </a>
      </div>
      <div
        class="grid flex-grow card place-items-center ml-72 -mt-5 shadow-lg shadow-gray-500"
      >
        <a href="/vote/{$page.params.house}/female">
          <img src="../woman.svg" alt="woman" />
        </a>
      </div>
    </div>
  </div>
  <div class="grid place-content-center">
    <img src="../hands.svg" alt="" />
  </div>
</div>
