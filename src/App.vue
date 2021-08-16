<template>
  <div id="nav">
      <router-link to="/">Home</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
text-align: center;
color: #2c3e50;
}

#nav {
padding: 30px;

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
}
</style>
