<template>
  <ul type="square">
    <li>
      <span style="font-weight: 600">print()</span> : This message is used to
      displays a message/statement in the console
    </li>
    <div class="card" style="padding: 1em; margin: 15px 0">
      print("Hello. This is a sample text .")
    </div>
    <li>
      <span style="font-weight: 600">println()</span> : This displays message
      automatically and adds '\n' new line
    </li>
    <div class="card" style="padding: 1em; margin: 15px 0">
      s1 = "The quick brown fox jumps over the lazy dog α,β,γ" println(s1)
    </div>
    <li>
      <span style="font-weight: 600">printf()</span> : C language style commmand
      used to displays a message/statement in the console
    </li>
    <div class="card" style="padding: 1em; margin: 15px 0">
      using Printf @printf "volume = %0.3f\n" vol #> volume = 113.097
    </div>
  </ul>
</template>

<script>
export default {
  name: "Simple",
};
</script>