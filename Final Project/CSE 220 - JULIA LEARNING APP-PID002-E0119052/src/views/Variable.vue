<template>
  <div style="margin: 0 auto; display: block">
    <div class="row" style="width: 100%">
      <div class="col-lg-6" style="padding: 2em">
        <div class="card" style="padding: 2em; height: 100%;background:#fbfbfb;">
          <h3 style="font-weight: 650">
            {{ topics[current] }}
          </h3>
          <div v-if="current == 0"><Intro /></div>
          <div v-if="current == 1"><Simple /></div>
          <div style="margin-top: auto">
            <button
              class="btn btn-outline-danger"
              style="font-weight: 550; float: left"
              v-if="current != 0"
              @click="prev"
            >
              Previous
            </button>
            <button
              class="btn btn-outline-success"
              style="font-weight: 550; float: right"
              v-if="current != show.length - 1"
              @click="next"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      <Repl />
    </div>
  </div>
</template>

<script>
// const Intro =
// import Intro from '../components/Variable/Introduction'
const Intro = () => import("../components/Variable/Introduction");
const Simple = () => import("../components/Variable/Simple");
import Repl from '../components/Repl/Repl'


export default {
  name: "Variables",
  components: { Intro, Simple,Repl },
  data() {
    return {
      showing: 0,
      current: 0,
      topics: ["INTRODUCTION", "SIMPLE EXECUTIONS"], // LEFT : topics
      content: ["<h></h>"], // LEFT : content for topics
      show: ["Test.", "Recusandae mollitia odit assumenda aut"], // RIGHT : example code
      hidden: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Recusandae mollitia odit assumenda aut",
      ], // RIGHT : output
    };
  },

  methods: {
    next() {
      if (this.current < this.show.length - 1) {
        this.showing = 0;
        this.current += 1;
      }
    },
    prev() {
      if (this.current > 0) {
        this.showing = 0;
        this.current -= 1;
      }
    },
    make() {
      window.setTimeout(() => (this.showing = 1), 1500);

      // window.setTimeout(()=>this.showing = 1,1500);
    },
  },
};
</script>














































































































































































































































































































































