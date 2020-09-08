<template>
  <header class="gh__header">
    <input
      type="checkbox"
      class="gh__header__toggle-checkbox"
      id="gh__header__toggle-checkbox"
    />
    <label for="gh__header__toggle-checkbox" class="gh__header__toggle show-sm">
      <div class="gh__header__toggle__inner"></div>
    </label>
    <div class="gh__header__logo">
      <svg
        class="octicon octicon-mark-github v-align-middle"
        height="32"
        viewBox="0 0 16 16"
        version="1.1"
        width="32"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
    </div>
    <nav class="gh__header__nav">
      <form action="" class="gh-form">
        <div class="gh-form__group gh__header__nav__search">
          <input
            type="search"
            name=""
            class="gh-form__input gh-form__input--dark"
            placeholder="Search or jump to..."
            id=""
          />
        </div>
      </form>
      <ul class="gh__header__nav__list">
        <li class="gh__header__nav__item">
          <a href="https://github.com/pulls" class="gh__header__nav__link"
            >Pulls</a
          >
        </li>
        <li class="gh__header__nav__item">
          <a href="https://github.com/issues" class="gh__header__nav__link"
            >Issues</a
          >
        </li>
        <li class="gh__header__nav__item">
          <a href="https://github.com/marketplace" class="gh__header__nav__link"
            >Marketplace</a
          >
        </li>
        <li class="gh__header__nav__item">
          <a href="https://github.com/explore" class="gh__header__nav__link"
            >Explore</a
          >
        </li>
        <li class="gh__header__nav__item show-sm">
          <button class="gh__header__user">
            <figure class="gh__header__user__img">
              <img :src="profile.avatar_url" alt="" />
            </figure>

            <b>{{ profile.login }}</b>
          </button>
        </li>
        <li class="gh__header__nav__item show-sm">
          <a
            href="https://github.com/notifications"
            class="gh__header__nav__link gh__header__actions__action"
          >
            <feather type="log-out" class="ml-1"></feather>
            Sign Out
          </a>
        </li>
      </ul>
    </nav>
    <div class="gh__header__actions">
      <a
        href="https://github.com/notifications"
        class="gh__header__nav__link gh__header__actions__action notif"
      >
        <feather type="bell"></feather>
      </a>
      <a
        href="https://github.com/notifications"
        class="gh__header__nav__link gh__header__actions__action hide-sm"
      >
        <feather type="plus"></feather>
        <feather type="chevron-down" class="caret" size="10"></feather>
      </a>
      <button class="gh__header__user hide-sm">
        <figure class="gh__header__user__img">
          <img :src="profile.avatar_url" alt="" />
        </figure>

        <feather type="chevron-down" class="caret"></feather>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  props: {
    profile: Object
  }
};
</script>

<style>
.caret .feather {
  width: 1.4rem !important;
  height: 1.4rem !important;
}
</style>
