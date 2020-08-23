import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Product from './components/Product.vue'

const render = (name, { node, data }) => {
  if (name === 'Product') {
    return mountComponent(Vue.extend(Product), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id);

  if (payload) {
    render(name, payload)
  }
})

load('Product').forEach(render.bind(null, 'Product'))
