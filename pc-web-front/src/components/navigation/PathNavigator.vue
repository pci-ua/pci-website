<template>
<span id="nav-path">
<RouterLink :to="(c='/')">/home/</RouterLink>
<div v-for="k in $route.path.split('/').filter(k=>k!='')">
<RouterLink :to="(c+=k+'/')">{{k}}/</RouterLink>
</div>
</span>

</template>

<style>
#nav-path {
  background: -webkit-linear-gradient(0deg, #00FFFF, #618EFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#nav-path * {
  text-decoration: none;
  display: inline;
}

#nav-path *:hover {
	text-decoration-line: underline;
	text-decoration-color: var(--color-title);
	text-decoration-thickness: 1px;
}
</style>
