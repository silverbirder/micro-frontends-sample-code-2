import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Item from './components/Item.vue'

const render = (name, { node, data }) => {
  if (name === 'Item') {
    return mountComponent(Vue.extend(Item), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id);

  if (payload) {
    render(name, payload)
  }
})

load('Item').forEach(render.bind(null, 'Item'))
