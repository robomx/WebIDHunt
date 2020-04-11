<template>
  <div>
    <div class="header">
      <p class="title center-align">WebIDHunt</p>
    </div>
    <div class="container">
      <div class="searchbar">
        <input type="text" id="fname" name="fname" />
        <button>Check</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  height: 74px;
  background-color: #00b4cc;
}
.center-align {
  display: flex;
  height: 74px;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  color: white !important;
}
.searchbar {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 5px;
}
input {
  height: 29px;
  width: 283px;
  border: 3px solid #00b4cc;
  background-color: #fff;
}
button {
  margin-left: -1px;
  height: 29px;
  margin-top: 0px;
  outline: none;
  border: 3px solid #00b4cc;
  background-color: #00b4cc;
  font-size: 1em;
  color: white;
}
</style>