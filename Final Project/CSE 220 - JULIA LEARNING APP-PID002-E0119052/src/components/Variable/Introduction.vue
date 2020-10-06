<template>
  <div>
    <p>
      Variables are some names given to the memory location to which they are
      assigned. These memory locations are used to store values that can be
      accessed by using the name of the location, i.e. Variable. Unlike C and
      Java, variables in Julia need not to be written with a Datatype. Julia
      auto-assigns the variable type by analyzing the type of value assigned to
      it.
    </p>

    <h6 style="font-weight: 600">RULES FOR LABLING JULIA VARIABLES</h6>

    <ul>
      <li>
        Variable names in Julia must start with an underscore, a letter(A-Z or
        a-z) or a Unicode character greater than 00A0(nbsp).
      </li>
      <li>
        Variable names can also contain digits(0-9) or !, but must not begin
        with these.
      </li>
      <li>Operators like (+, ^, etc.) can also be used to name a variable.</li>
      <li>
        Variable names can also be written as words seperated by underscore, but
        that is not a good practice and must be avoided unless necessary.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Introduction",
};
</script>

<style>
</style>