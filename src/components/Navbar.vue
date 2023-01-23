<template>
  <nav class="navbar bg-dark">
    <div style="display: flex; justify-content: space-between">
      <div>
        <form class="d-flex" role="admin">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search Items"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link class="dropdown-item" :to="{ name: 'Signup' }"
              >Sign up
          </router-link>
          </div>
        </form>
      </div>
    </div>
    <router-link :to="{ name: 'Admin' }"> Admin </router-link>
  </nav>
</template>
