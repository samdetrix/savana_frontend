<template>
  <div class="py-4 container">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header pb-0">
            <div class="d-flex align-items-center"></div>
            <div class="card-body">
              <div class="row">
                <div>
                  <div v-for="photo in photos" :key="photo.id">
                    <h5 class="lead">{{ photo.album_id.album_title }}</h5>
                    <img
                      v-bind:src="
                        'http://127.0.0.1:8000' + photo.album_image_thumbnail
                      "
                      width="200"
                      height="200"
                      style="border-radius: 7px"
                    />
                  </div>
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
  name: "PhotoList",

  data() {
    return {
      photos: [],
    };
  },

  mounted() {
    this.getPhotos();
  },

  methods: {
    getPhotos() {
      axios
        .get("http://127.0.0.1:8000/api/photos/", {
          headers: { Authorization: localStorage.getItem("access-token") },
        })
        .then((response) => {
          this.photos = response.data;
        });
    },
  },
};
</script>
