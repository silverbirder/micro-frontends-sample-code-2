<template>
  <div className="row">
    <div className="card bg-primary border-light shadow-soft">
      <div className="card-body">
        <h3 className="h5 card-title">{{ title }}{{ title }}{{ title }}</h3>
        <button className="btn btn-icon-only btn-primary" type="button" aria-label="love button" title="love button">
          <span aria-hidden="true" className="fas fa-shopping-cart"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

