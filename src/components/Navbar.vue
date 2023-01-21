<template>
  <nav class="navbar bg-dark">
    <div style="display:flex; justify-content:space-between">
  <div><form class="d-flex" role="admin">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        /> </form></div>
</div>
<router-link
    :to="{ name: 'Admin' }"
    style="padding: 10px; display: flex; justify-content: space-between"
  >
    Admin
  </router-link>
  </nav>
</template>

