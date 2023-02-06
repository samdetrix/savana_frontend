<template>
    <div>
        <div class="container">
          <label for="email"><b>Email</b></label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter Email Address"
            name="email"
            required
          />
  
          <label for="fname"><b>First Name</b></label>
          <input
            v-model="first_name"
            type="text"
            placeholder="Enter First Name"
            name="fname"
            required
          />

          <label for="lname"><b>Last Name</b></label>
          <input
            v-model="last_name"
            type="text"
            placeholder="Enter Last Name"
            name="lname"
            required
          />

          <label for="phone"><b>Phone Number</b></label>
          <input
            v-model="phone_number"
            type="number"
            placeholder="Enter Phone Number"
            name="phone"
            required
          />

          <label for="id"><b>ID Number</b></label>
          <input
            v-model="id_number"
            type="number"
            placeholder="Enter ID Number"
            name="id"
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
            <p>Already have an account? Sign in<router-link to="/" class="text-sm mt-3 mb-0">here</router-link></p>
          </div>  

          <button class="button" @click="register">Register</button>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default{
    name: "sign-up",

    data(){
    return{
      first_name: "",
      last_name: "",
      password: "",
      phone_number: "",
      id_number: "",
      email: "",
    };
  },

  methods:{
    register(e){
      e.preventDefault();
      axios.post("http://127.0.0.1:8000/api/register/", {
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        phone_number: this.phone_number,
        id_number: this.id_number,
        email: this.email,
      }).then(()=>{
        // localStorage.setItem("access-token", + response.data.token);
        let confirmAction = confirm("Registration successful. Would you like to sign in?");
        if(confirmAction){
          this.$router.replace({path: '/'});
        }else{
          location.reload();
        }
      }).catch((error)=>{
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
template {
    font-family: Arial, Helvetica, sans-serif;
  }
  input[type="text"],
  input[type="password"], input[type="number"], input[type="email"]{
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