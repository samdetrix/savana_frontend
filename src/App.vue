<template>
  <div class="container" style="color:blanchedalmond">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/dashboard">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/albums">Albums</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/photos">Photos</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>


  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
