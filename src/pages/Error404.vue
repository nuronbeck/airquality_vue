<template>
  <div class="fullscreen bg-red text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 20vh">
        404
      </div>

      <div class="text-h6" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="red-10"
        unelevated
        label="Go Home"
        to="/en"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>
