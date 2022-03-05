<template>
    <a href="{{Link}}">{{linkName}}</a>
</template>

<script>
export default {
  name: 'LinkComponent',
  props: {
      variable1: String, // type de variable (string,integer,...)
      linkName: String,
      Link: String
  },
  data() {
      return {
      }
  } 
}
</script>

<style>
    /* ici le css */
</style>

