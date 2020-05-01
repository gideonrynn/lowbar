<template>
  <div id="app">
    <Tasks v-bind:tasks="tasks" />
  </div>
</template>

<script>
// importing the component from the Tasks
import Tasks from './components/Tasks.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    axios.get('http://localhost:3001/api/tasks')
      .then(res => this.tasks = res.data)
      .catch(err => console.log(err))
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
body {
  background-image: url('assets/doodles.png')
}
</style>
