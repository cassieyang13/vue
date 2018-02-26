<template lang="html">
    <div id="app">
      <h2 v-text="title"></h2>
      <input v-model="newItem" v-on:keyup.enter="onEnter">
      <ul>
        <li v-for="item in items" v-text="item.label" v-bind:class="[{finished: item.isFinish}]"
            @click="toggleFinish(item)" ></li>
      </ul>
      <p>boy tell me: {{childrenWord}}</p>
      <component-a msgFromDad="ok you can" v-on:tell-me-something="listenToMyBoy"></component-a>
    </div>
</template>

<script lang="babel">
  import Store from './store'
  import ComponentA from './components/componentA'
  export default {
    data () {
      return {
        title: 'This is first test',
        items: Store.fetch(),
        active: 'active',
        newItem: '',
        childrenWord: ''
      }
    },
    methods: {
      toggleFinish: function (item) { // item 默认为事件的值
        item.isFinish = !item.isFinish
      },
      onEnter: function () {
        console.log(this.newItem)
        this.items.push({
          label: this.newItem,
          isFinish: false
        })
        this.newItem = ''
      },
      listenToMyBoy: function (msg) {
        this.childrenWord = msg
      }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true, // 深度更改
        immediate: true
      }
    },
    components: {
      ComponentA
    }
  }
</script>

<style>
  .active {
    text-decoration: underline;
  }
  .finished {
    text-decoration: underline;
  }
</style>
