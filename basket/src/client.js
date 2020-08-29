import { mountComponent, load, loadById } from 'hypernova-svelte'

import Example from './components/Example.svelte'
import {MyElement} from './components/customElements/my-element'

exports.MyElement = MyElement

const render = (name, { node, data }) => {
  if (name === 'Example') {
    return mountComponent(Example, node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Example').forEach(render.bind(null, 'Example'))
