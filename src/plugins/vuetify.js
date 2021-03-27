import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#D84315',
        secondary: '#525F7F'
      }
    }
  }
})
