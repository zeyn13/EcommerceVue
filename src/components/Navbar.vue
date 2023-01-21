<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <form class="d-flex" role="Search">
        <input id="input"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <router-link :to="{ name: 'Admin' }" style="">
          Admin
        </router-link>
      </form>
    </div>
  </nav>
</template>
<style scoped>

input{
text-align: justify;
}
</style>
