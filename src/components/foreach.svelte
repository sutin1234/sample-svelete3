<script>
  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" }
  ];
</script>

<h1>foreach #1 used</h1>
<ul>
  {#each cats as { id, name }, i}
    <li>
      <a target="_blank" size="37x18" href="https://www.youtube.com/watch?v={id}" rel="noreferrer">
         {i + 1}: {name}
      </a>
    </li>
  {/each}
</ul>

<h1>foreach #2 used</h1>
<ul>
  {#each cats as cat, i}
    <li>
      <a target="_blank" size="37x18" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
         {i + 1}: {cat.name}
      </a>
    </li>
  {/each}
</ul>
