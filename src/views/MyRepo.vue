<template>
  <div class="gh">
    <div class="deep-center" v-if="isLoading">Loading...</div>
    <div class="deep-center" v-else-if="hasError">
      {{ errorMessage }}
    </div>
    <template v-else>
      <app-header :profile="profile"></app-header>
      <app-tabs :profile="profile"></app-tabs>
      <main class="gh-main">
        <user-profile :profile="profile"></user-profile>
        <div class="gh-main__repos">
          <repo-search></repo-search>
          <repo-list :repos="repos"></repo-list>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import AppHeader from "@/components/Header";
import AppTabs from "@/components/Tabs";
import UserProfile from "@/components/Profile";
import RepoSearch from "@/components/Search";
import RepoList from "@/components/RepoList";
import axios from "axios";
export default {
  name: "my-repo",
  components: {
    AppHeader,
    AppTabs,
    UserProfile,
    RepoSearch,
    RepoList
  },
  data() {
    return {
      username: "",
      profile: {},
      repos: [],
      hasError: false,
      errorMessage: ""
    };
  },
  created() {
    this.username = this.$route.params.username || "faarda";

    axios.defaults.baseURL = "https://api.github.com/";

    axios
      .get(`users/${this.username}`)
      .then(res => {
        this.profile = res.data;

        axios
          .get(`users/${this.username}/repos`)
          .then(res => {
            const repos = res.data;

            this.repos = repos
              .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
              .slice(0, 21);

            // this.loa
          })
          .catch(err => {
            if (err.response.status === 404) {
              this.hasError = true;
              this.errorMessage = `Github user with ${this.username} not found`;
            } else {
              this.hasError = true;
              this.errorMessage =
                "Something went wrong! Couldn't fetch details";
            }
          });
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.hasError = true;
          this.errorMessage = `Github user with ${this.username} not found`;
        } else {
          this.hasError = true;
          this.errorMessage = "Something went wrong! Couldn't fetch details";
        }
      });
  },
  mounted() {
    const navTabs = document.querySelector(".gh-tabs__container");
    const tabTop = navTabs.offsetTop;

    const profileImage = document.querySelector(".gh-main__profile__user__img");
    const profileTop =
      profileImage.clientHeight + profileImage.offsetTop - navTabs.clientHeight;

    const tabsUser = document.querySelector(".gh-tabs__user");

    window.addEventListener("scroll", () => {
      const windowTop = window.scrollY;

      // stick the navigation tab to the top
      if (windowTop > tabTop + 20) {
        navTabs.classList.add("fixed");
      } else {
        navTabs.classList.remove("fixed");
      }

      //show the user details on the navigation tab
      if (windowTop > profileTop - 20) {
        tabsUser.classList.add("visible");
      } else {
        tabsUser.classList.remove("visible");
      }
    });
  },
  computed: {
    isLoading() {
      return !(this.repos.length > 0 && Object.keys(this.profile).length > 0);
    }
  }
};
</script>

<style>
.deep-center {
  width: 100%;
  height: 95vh;
  display: grid;
  place-items: center;
}
</style>
