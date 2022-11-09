<template>
  <div class="hello" v-if="error">
    <h2>{{ error }}</h2>
  </div>
  <div v-else>
    <div v-if="loading">
      <h2>Loading data...</h2>
    </div>
    <h1>Users</h1>
    <table>
      <theader>
        <tr>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </theader>
      <tbody>
        <tr v-for="item in data">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useFetch } from '../composable/Usefetch.js';
export default {
  setup() {
    const { data, error, loading } = usefetch(
      'https://jsonplaceholder.typicode.com/users',
      {}
    );
    return(
      
    )
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
