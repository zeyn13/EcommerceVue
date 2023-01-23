<template>
  <nav>
    <form class="d-flex" role="admin">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search Items"
        aria-label="Search"
      />
    </form>
    <div class="menu-item"><a href="/">Home</a></div>
    <div class="menu-item"><a href="#">About</a></div>
    <Dropdown title="Browse" :items="browse" />
    <Dropdown title="Account" :items="account" />
    <div class="menu-item"><a href="admin">Admin</a></div>
  </nav>
</template>

<script>
import Dropdown from "./Dropdown";
export default {
  name: "navbar",
  components: {
    Dropdown,
  },

  data() {
    return {
      account: [
        {
          title: "Wishlist",
          link: "#",
        },
        {
          title: "Log In",
          link: "#",
        },
        {
          title: "SignUp",
          link: "/signup",
        },
      ],
    };
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: rgb(166, 161, 161);
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: rgb(107, 87, 87);
  border-bottom-color: #ff5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
