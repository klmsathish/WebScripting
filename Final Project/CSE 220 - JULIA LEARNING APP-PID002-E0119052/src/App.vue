<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand"  style="margin: 0 1em">
          <strong>
            <img
              :src="require('@/assets/bluer.png')"
              style="height: 1.5em"
              alt="blueimg"
            />
            LEARNJULIA
          </strong>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto text-center">
            <li class="nav-item" style="margin: 0 1em">
              <router-link to = "/" class="nav-link">HOME</router-link>
            </li>
            <li class="nav-item" style="margin: 0 1em">
              <router-link to = "/variables" class="nav-link" >VARIABLES</router-link>
            </li>
            <li class="nav-item" style="margin: 0 1em">
              <router-link to = "/loops" class="nav-link">CONTROL FLOW</router-link>
            </li>
            <li class="nav-item" style="margin: 0 1em">
              <router-link to="/functions" class="nav-link" >FUNCTIONS</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item" style="margin: 0 1em 0 0">
              <a
                class="nav-link"
                href="https://repl.it/languages/julia"
                target="__self"
              >
                <button class="btn btn-outline-light">PRACTICE</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #999;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #454545;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>
