<template>
  <div>
    <h6 style="font-weight: 600">User-defined functions</h6>
    <p>
      In Julia, a function is an object that maps a tuple of argument values to
      a return value. Julia functions are not pure mathematical functions,
      because they can alter and be affected by the global state of the program.
      Following examples show function definitions and methods to call them.
    </p>
     <h6 style="font-weight: 600">Built-in functions</h6>
      <strong>collect() </strong>- in built function to return an array of items in a collection or iteration specified with some condition.
       <br>
      <strong> repeat() </strong>-The repeat() is an inbuilt function in julia which is used to construct an array by repeating the specified array elements with the specified number of times.
 
    <h6 style="font-weight: 600">string functions</h6> 
    <strong>uppercase()</strong>-  Converts strings to uppercase
    <br />
     <strong>lowercase()</strong> - converts strings to lowercase
     <br />
     <strong> replace()</strong> - Replaces substring/string with a new string
     
     </div>
</template>

<script>
export default {
  name: "Introduction",
};
</script>

<style>
</style>