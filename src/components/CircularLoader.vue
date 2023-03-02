<template>
  <div class="d-flex flex-col w-100 h-100 flex-grow-1 loader">
    <v-progress-circular 
      indeterminate
      model-value="20" 
      data-test-id="progress-circular" />
  </div>
</template>

<style scoped lang="scss">
.loader {
  justify-content: center;
  align-items: center;
}
</style>
