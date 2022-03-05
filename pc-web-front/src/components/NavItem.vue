<template>
	<RouterLink
		v-if="localPath !== undefined"
		:to="localPath"
		> {{ name }} </RouterLink>
	<strong
		v-else
		> {{name}} </strong>
</template>

<style>
a {
	text-decoration: none;
}
</style>

<script>
export default {
	props: ['name','localPath'],
	methods: {
		isLocal: (k) => k !== undefined,
	}
}
</script>