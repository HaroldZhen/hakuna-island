<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#"></a>
        <router-link :to="{ name: 'front.index' }">首頁</router-link>
      </li>
      <slot></slot>
    </ol>
  </nav>
</template>
