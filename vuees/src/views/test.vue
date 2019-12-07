<template>
  <div class="test">
    {{name}}
    <input v-model="name" />
  </div>
</template>

<script>
export default {
  name : "test",
  data(){debugger;
    return {
      name:'testname',
      age:10
    }
  }
};
</script>
