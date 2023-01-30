import * as THREE from 'three'

export default {
  install(app) {
    app.config.globalProperties.$three = THREE
  }
}