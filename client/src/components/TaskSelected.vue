<template>
    <div>
       {{task.taskName}} <br>
        Last Completed on: {{task.lastComplete}}
    </div>
    
</template>

<script>
export default {
    name: "TaskSelected",
    props: ["task"]
}
</script>

<style scoped>
body {
    background: lightskyblue;
}

</style>