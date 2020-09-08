<template>
  <li class="gh-main__repos__repo">
    <div class="gh-main__repos__repo__top">
      <div class="gh-main__repos__repo__details">
        <h2 class="title">
          <a :href="repo.html_url">
            {{ repo.name }}
          </a>
        </h2>
        <p class="desc">{{ repo.description }}</p>
      </div>
      <a href="" class="gh-btn gh-btn--light gh-btn--sm"
        ><feather type="star" class="icon" />&nbsp; Star</a
      >
    </div>
    <div class="gh-main__repos__repo__details__extra">
      <span class="detail">{{ repo.language }}</span>
      <span class="detail"
        ><feather type="star" /> {{ repo.stargazers_count }}</span
      >
      <span class="detail"><feather type="git-branch" /> {{ repo.forks }}</span>
      <span class="detail">Updated 3 days ago</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "repo",
  props: {
    repo: Object
  }
};
</script>

<style></style>
