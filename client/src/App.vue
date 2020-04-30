<template>
  <div id="app">
    <Tasks v-bind:tasks="tasks" />
  </div>
</template>

<script>
// importing the component from the Todos
import Tasks from './components/Tasks.vue'

export default {
  name: 'App',
  components: {
    Tasks
  },
  data() {
    return {
      tasks: [
      {
        taskName: "Clean fish tanks",
        category: "",
        details: "",
        note: "Need to order more cleaner",
        lastComplete: "4/21/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "weekly",
        id: 1
    },
    {
        taskName: "Clean shower",
        category: "bathroom",
        details: "",
        note: "need more spray",
        lastComplete: "4/1/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "monthly",
        id: 2
    },
    {
        taskName: "Clean sink",
        category: "bathroom",
        details: "",
        note: "need more spray",
        lastComplete: "4/1/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "monthly",
        id: 3
    },

      ]
    }
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
