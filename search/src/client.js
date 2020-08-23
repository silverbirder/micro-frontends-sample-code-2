import { mountComponent, loadById, load } from 'nova-react';

import Search from './components/Search';

const render = (name, { node, data }) => {
  if (name === 'Search') {
    return mountComponent(Search, node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Search').forEach(render.bind(null, 'Search'))
