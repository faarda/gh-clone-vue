<template>
  <section class="gh-tabs__container">
    <div class="gh-tabs__container__inner">
      <!-- .gh-tabs__container__inner__beo -->
      <div class="gh-tabs__user">
        <figure class="gh-tabs__user__img">
          <img :src="profile.avatar_url" alt="" />
        </figure>
        {{ profile.login }}
      </div>
      <ul class="gh-tabs">
        <li class="gh-tabs__tab">
          <a href="" class="gh-tabs__tab__link">
            <feather type="book-open" class="icon" />
            Overview
          </a>
        </li>
        <li class="gh-tabs__tab">
          <a href="" class="gh-tabs__tab__link active">
            <feather type="book" class="icon" />
            Repositories
            <span class="pill">32</span>
          </a>
        </li>
        <li class="gh-tabs__tab">
          <a href="" class="gh-tabs__tab__link">
            <feather type="trello" class="icon" />
            Projects
          </a>
        </li>
        <li class="gh-tabs__tab">
          <a href="" class="gh-tabs__tab__link">
            <feather type="box" class="icon" />
            Packages
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "tabs",
  props: {
    profile: Object
  },
  mounted() {
    const navTabs = document.querySelector(".gh-tabs__container");
    const tabTop = navTabs.offsetTop;

    window.addEventListener("scroll", () => {
      const windowTop = window.scrollY;

      // stick the navigation tab to the top
      if (windowTop > tabTop + 20) {
        navTabs.classList.add("fixed");
      } else {
        navTabs.classList.remove("fixed");
      }
    });
  }
};
</script>
