<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6" style="justify-content: center;">
            <div class="card">
          <div class="card-header">All Users</div>
          <div class="card-body">
            <table id="users" class="table table-striped">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ID NUMBER</th>
                  <th>PHONE NUMBER</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.user.first_name }}</td>
                  <td>{{ user.user.email }}</td>
                  <td>{{ user.id_number }}</td>
                  <td>{{ user.phone_number }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserList",

  data() {
    return {
      users: [],
    };
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/users/", {
          headers: { Authorization: localStorage.getItem("access-token") },
        })
        .then((response) => {
          this.users = response.data.result;
        });
    },
  },
};
</script>
