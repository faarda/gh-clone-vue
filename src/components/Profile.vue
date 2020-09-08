<template>
  <div class="gh-main__profile">
    <div class="gh-main__profile__user">
      <figure class="gh-main__profile__user__img">
        <img :src="profile.avatar_url" alt="" />
      </figure>
      <div class="gh-main__profile__user__name">
        <h1>{{ profile.name }}</h1>
        <span class="username">{{ profile.login }}</span>
      </div>
    </div>
    <div class="gh-main__profile__about">
      {{ profile.bio }}
    </div>
    <a href="" class="gh-btn gh-btn--light gh-btn--block mb-2">Edit Profile</a>
    <div class="gh-main__profile__stats">
      <a href=""
        ><feather type="users" class="icon" />
        <span class="stat-count">{{ profile.followers }}</span> Followers</a
      >
      <div class="ml-1"></div>
      &centerdot;
      <div class="ml-1"></div>
      <a href=""
        ><span class="stat-count">{{ profile.following }}</span> Following</a
      >
      <!-- <div class="ml-1"></div>
      &centerdot;
      <div class="ml-1"></div>
      <a href=""
        ><feather type="star" class="icon" />
        <span class="stat-count">12</span></a
      > -->
    </div>
    <div class="gh-main__profile__extra-details">
      <div
        class="gh-main__profile__extra-details__detail"
        v-if="profile.company"
      >
        <feather type="briefcase" class="icon" />
        {{ profile.company }}
      </div>
      <div
        class="gh-main__profile__extra-details__detail"
        v-if="profile.location"
      >
        <feather type="map-pin" class="icon" />
        {{ profile.location }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
    profile: Object
  },
  mounted() {
    const navTabs = document.querySelector(".gh-tabs__container");

    const profileImage = document.querySelector(".gh-main__profile__user__img");
    const profileTop =
      profileImage.clientHeight + profileImage.offsetTop - navTabs.clientHeight;

    const tabsUser = document.querySelector(".gh-tabs__user");

    window.addEventListener("scroll", () => {
      const windowTop = window.scrollY;

      //show the user details on the navigation tab
      if (windowTop > profileTop - 20) {
        tabsUser.classList.add("visible");
      } else {
        tabsUser.classList.remove("visible");
      }
    });
  }
};
</script>

<style></style>
