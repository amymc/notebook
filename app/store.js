import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {}
  },

  mutations: {
    ADD_NOTE (state) {
      console.log('state', state)
      const newNote = {
        text: 'New note',
        favourite: false
      }
      state.notes.push(newNote)
      state.activeNote = newNote
      console.log('state', state, 'newNote', newNote)
    },

    EDIT_NOTE (state, text) {
      state.activeNote.text = text
    },

    DELETE_NOTE (state) {
      state.notes.$remove(state.activeNote)
      state.activeNote = state.notes[0]
    },

    TOGGLE_FAVOURITE (state) {
      console.log('state', state)
      state.activeNote.favourite = !state.activeNote.favourite
    },

    SET_ACTIVE_NOTE (state, note) {
      state.activeNote = note
    }
  },

  actions: {
    addNote ({commit}) {
      console.log('addNote')
      commit('ADD_NOTE')
    },

    editNote ({commit}, text) {
      console.log('text', text)
      commit('EDIT_NOTE', text)
    },

    deleteNote ({commit}, note) {
      commit('DELETE_NOTE', note)
    },

    updateActiveNote ({commit}, note) {
      console.log('set active', note)
      commit('SET_ACTIVE_NOTE', note)
    },

    toggleFavourite ({commit}) {
      console.log('toggleFavourite')
      commit('TOGGLE_FAVOURITE')
    }
  },

  getters: {
    activeNote: state => state.activeNote,
    notes: state => state.notes,
    favouritedNotes: state => state.notes.filter((note) => { return note.favourite })
  }

})
