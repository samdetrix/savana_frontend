<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header"><strong>Create Album</strong></div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Album Title</label>

                      <input
                        v-model="album_title"
                        type="text"
                        class="form-control"
                        placeholder="Enter Album Title"
                        name="album_title"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Select Owner </label>
                      <select class="form-control" v-model="user_id">
                        <option
                          v-for="user in users"
                          :key="user.id"
                          :value="user.id"
                        >
                          {{ user.user.first_name }}
                        </option>
                      </select>
                    </div>

                    <button
                      @click="createAlbum"
                      type="submit"
                      class="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header"><strong>Albums</strong></div>
                <div class="card-body">
                  <table id="albums" class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Album Name</th>
                        <th scope="col">Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="album in albums" :key="album.id">
                        <th scope="row"></th>
                        <td>{{ album.album_title }}</td>
                        <td>
                          {{ album.user_id.user.first_name }}
                          {{ album.user_id.user.last_name }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
  name: "AlbumList",

  data() {
    return {
      albums: [],
      users: [],
      user_id: "",
      album_title: "",
    };
  },

  mounted() {
    this.getAlbums();
    this.getUsers();
  },

  methods: {
    getAlbums() {
      axios
        .get("http://127.0.0.1:8000/api/albums/", {
          headers: { Authorization: localStorage.getItem("access-token") },
        })
        .then((response) => {
          this.albums = response.data.results;
        });
    },

    getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/users/", {
          headers: { Authorization: localStorage.getItem("access-token") },
        })
        .then((response) => {
          this.users = response.data.result;
        });
    },

    createAlbum() {
      axios
        .post(
          "http://127.0.0.1:8000/api/albums/",
          {
            user_id: this.user_id,
            album_title: this.album_title,
          },
          {
            headers: {
              Authorization: localStorage.getItem("access-token"),
            },
          }
        )
        .then(() => {
          location.reload();
        });
    },
  },
};
</script>
