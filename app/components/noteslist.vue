<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <!-- Favourites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favourites'"
            :class="{active: show === 'favourites'}">
            Favourites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: 'all'
      }
    },

    methods: {
      updateActiveNote (note) {
        this.$store.dispatch('updateActiveNote', note)
      }
    },
    computed: {
      activeNote () {
        return this.$store.getters.activeNote
      },
      notes () {
        return this.$store.getters.notes
      },
      filteredNotes () {
        if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favourites') {
          return this.notes.filter(note => note.favourite)
        }
      }
    }
  }
</script>