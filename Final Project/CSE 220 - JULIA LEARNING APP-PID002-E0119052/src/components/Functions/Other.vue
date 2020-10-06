<template>
  <div>
    <div class="card" style="padding: 1em; margin: 10px 0">
      function f(x,y) <br />
      &emsp;&emsp;x + y <br />
      end <br />
    </div>
    <div class="card" style="padding: 1em; margin: 10px 0">
      f(x,y) = x + y <br />
      f (generic function with 1 method)
    </div>
    <div class="card" style="padding: 1em; margin: 10px 0">
      s1 = "The quick brown fox jumps over the lazy dog α,β,γ"<br />
      s1_caps = uppercase(s1)<br />
      s1_lower = lowercase(s1)<br />
      println(s1_caps, "\n", s1_lower) <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Other",
};
</script>