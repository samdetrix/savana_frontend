<template>
    <div id="id01" class="modal">
      <div class="modal-content animate">
        <div class="imgcontainer">
          <!-- <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span> -->
        </div>
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input
            v-model="username"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
  
          <label for="psw"><b>Password</b></label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
  
          <div>
            <p>No account? Register<router-link to="/register" class="text-sm mt-3 mb-0">here</router-link></p>
          </div>  

          <button class="button" @click="login">Login</button>
        </div>
  
        <!-- <div class="container" style="background-color:#f1f1f1">
                  <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
              </div> -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "SignIn",
    data() {
      return {
        username: "",
        password: "",
      };
    },
    mounted() {
      document.getElementById("id01").style.display = "block";
    },
    methods: {
      login() {
        // make login api request and save token
        if (this.username.length < 1) {
          alert("Enter username");
          return;
        }
        if (this.password.length < 6) {
          alert("Enter a valid password");
          return;
        }
        axios
          .post("http://127.0.0.1:8000/api/login/", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("access-token", "Token " + response.data.token);
            localStorage.setItem(
              "name",
              response.data.personnel.user.first_name +
                " " +
                response.data.personnel.user.last_name
            );
            
            localStorage.setItem("account_id", response.data.personnel.id);
    
            // document.getElementById("id01").style.display = "none";
            location.reload();

          })    
      },
    },
  };
  </script>

  <style scoped>
  template {
    font-family: Arial, Helvetica, sans-serif;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .button {
    background-color: rgba(22, 156, 9, 0.664);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  .button:hover {
    opacity: 0.8;
  }
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
  }
  img.avatar {
    width: 20%;
    border-radius: 50%;
  }
  .container {
    padding: 16px;
  }
  css multiple cards span.psw {
    float: right;
    padding-top: 16px;
  }
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    padding-top: 60px;
  }
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto;
    border: 1px solid #888;
    width: 40%;
  }
  .close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
  }
  .close:hover,
  .close:focus {
    color: red;
    cursor: pointer;
  }
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s;
  }
  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }
  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
  </style>
  