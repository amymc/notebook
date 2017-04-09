<template>
  <div id="toolbar" inline-template>
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavourite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favourite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
  export default {
    methods: {
      addNote () {
        this.$store.dispatch('addNote')
      },
      deleteNote () {
        this.$store.dispatch('deleteNote')
      },
      toggleFavourite () {
        console.log('toggle')
        this.$store.dispatch('toggleFavourite')
      }
    },
    computed: {
      activeNote () {
        return this.$store.getters.activeNote
      }
    }
  }
</script>

