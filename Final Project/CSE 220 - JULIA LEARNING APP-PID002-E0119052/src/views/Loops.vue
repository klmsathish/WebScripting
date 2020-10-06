<template>
  <div style=" margin: 0 auto; display: block">
    <div class="row" style="width: 100%">
      <div class="col-lg-6" style="padding: 2em">
        <div class="card" style="padding: 2em; height: 100%;background:#fbfbfb;">
          <h3 style="font-weight: 650">
            {{ topics[current] }}
          </h3>
          <div v-if="current == 0"><Intro /></div>
          <div v-if="current == 1"><If /></div>
          <div v-if="current == 2"><Elseif /></div>
          <div v-if="current == 3"><For /></div>
          <div v-if="current == 4"><While /></div>
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
              v-if="current != max - 1"
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
const Intro = () => import("../components/Loops/Introduction");
const While = () => import("../components/Loops/While");
const For = () => import("../components/Loops/For");
const If = () => import("../components/Loops/If");
const Elseif = () => import("../components/Loops/Elseif");
import Repl from '../components/Repl/Repl'


export default {
  name: "loops",
  components: { Intro,While,For,If,Elseif,Repl},
  data() {
    return {
      showing: 0,
      current: 0,
      max:5,
      topics: ["INTRODUCTION", "IF ELSE", "IF ELSEIF ELSE","FOR", "WHILE",], // LEFT : topics
      // content: ["<h></h>"], // LEFT : content for topics
      // show: ["Test.", "Recusandae mollitia odit assumenda aut"], // RIGHT : example code
      // hidden: [
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //   "Recusandae mollitia odit assumenda aut",
      // ], // RIGHT : output
    };
  },

  methods: {
    next() {
      if (this.current < this.max - 1) {
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














































































































































































































































































































































