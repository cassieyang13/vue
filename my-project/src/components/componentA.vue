<template lang="html">
  <div class="hello">
    <div>{{msg}}</div>
    <button v-on:click="onClick">child say</button>
  </div>
</template>

<script lang="babel">
  export default {
    data () {
      return {
        msg: 'form componentA'
      }
    },
    props: ['msgFromDad'],
    methods: {
      onClick: function () {
        console.log(this.msgFromDad)
        this.$emit('tell-me-something', 'hi dad')
      }
    },
    components: {}
  }
</script>

<style>

</style>
