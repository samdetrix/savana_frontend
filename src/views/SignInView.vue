<template>
    <div>
        <SignIn v-if="showLoginDialog"/>
    </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'

export default{
    name: 'SignInView',

    components: {
        SignIn
    },

    data(){
      return{
          showLoginDialog: false,
      }
  },

  mounted() {
        // check if token is saved in local storage, if it's not, show signin dialog
        if(localStorage.getItem("access-token") == null){
            this.showLoginDialog = true
        }else{
            window.location.href = '/dashboard'
        }
  }
}
</script>