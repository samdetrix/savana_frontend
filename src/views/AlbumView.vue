<template>
    <div class="container">
        <br>
        <AlbumComponent />

    </div>
</template>

<script>
import AlbumComponent from '@/components/AlbumComponent.vue';

export default{
    name: "album-view",

    components:{
        AlbumComponent
    }
}

</script>