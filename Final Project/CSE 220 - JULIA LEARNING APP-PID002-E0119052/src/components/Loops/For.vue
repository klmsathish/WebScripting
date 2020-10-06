<template>
  <div>
    <p>
      The for loop makes common repeated evaluation idioms easier to write.
      Since counting up and down like the above while loop does is so common, it
      can be expressed more concisely with a for loop:
    </p>
    <div class="card" style="padding: 1em; margin: 15px 0">
      <b>for i = 1:5 <br />&emsp;println(i) <br />end <br /></b>1 2 3 4 5
    </div>
    <div class="card" style="padding: 1em; margin: 15px 0">
      <b>for i in [1,4,0] <br />&emsp;println(i) <br />end <br /></b>1 4 0
    </div>
  </div>
</template>

<script>
export default {
  name: "For",
};
</script>