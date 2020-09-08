<template>
  <ul class="gh-main__repos__list">
    <single-repo v-for="repo in repos" :key="repo.id" :repo="repo" />
  </ul>
</template>

<script>
import SingleRepo from "./Repo";
export default {
  name: "repo-list",
  components: {
    SingleRepo
  },
  props: {
    repos: Array
  }
};
</script>

<style></style>
