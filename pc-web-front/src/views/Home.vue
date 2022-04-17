<template>
<div id="home-content">
  <main>
	<h2> Bienvenue chez pci ! </h2>

	<img src="@/assets/HoloTexture.png" />
  </main>

  <aside>
  <img src="@/assets/DecorationShapes.png" />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget risus nunc eu gravida. Diam sed elit ultricies rhoncus purus aenean sed. Tincidunt viverra vitae imperdiet accumsan lacus, mattis. Lacus nisi, orci, proin risus, molestie pellentesque ultrices rhoncus. Orci orci ultricies placerat duis amet. Sit vitae gravida in amet nec. Purus ut est viverra diam adipiscing integer eget. Vitae, tellus nec lobortis in lectus tincidunt tempus tellus sed. Eget porttitor porttitor lorem mollis ultrices eget posuere duis.
  </aside>
</div>
</template>

<style>
#home-content {
	display: grid;
	grid-template-columns: 2fr 1fr;
	min-height: Calc(100vh - 5rem);
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

main * {
	margin: 1rem;
}

h2 {
	color: var(--color-title);
	font-size: 40pt;
}

aside {
    font-size: 120%;
    line-height: 1.8rem;
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
}
</style>
