<template>
  <div class="home">
    <SignIn v-if="showLoginDialog"/>
<br
/>
    <DashBoard />
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'
import DashBoard from '@/components/DashBoard.vue'

export default {
  name: 'HomeView',

  components: {
        SignIn,
        DashBoard
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
        }
  }

}
</script>
