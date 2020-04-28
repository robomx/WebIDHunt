<template>
  <div>
    <div class="header">
      <img src="../assets/logo.png" class="header-logo" alt="">
      <p class="title center-align">WebIDHunt</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
 font-family: 'Roboto', sans-serif;
}
.header {
  height: 74px;
  background-color: #0a173e;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-align {
  display: flex;
  height: 74px;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  color: white !important;
}
.header-logo {
  height: 30px;
  width: 30px;
  position: relative;
  left: -11px;
}

</style>