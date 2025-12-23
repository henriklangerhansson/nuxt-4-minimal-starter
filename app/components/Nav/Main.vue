<template>
  <nav
    ref="nav"
    role="navigation"
    aria-label="Main menu"
  >
    <ul class="font-bold">
      <li>
        <NuxtLink
          to="/about"
          exact-active-class="underline"
        >
          About
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
