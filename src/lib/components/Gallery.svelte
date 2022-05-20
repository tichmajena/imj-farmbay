
<script>
  import { Slidy } from "svelte-slidy"; // import component
  
  let index;

  export let  pictures = [
    { id: 1, src: "$lib/gallery/gal-01.jpeg" },
    { id: 2, src: "$lib/gallery/gal-02.jpeg" },
    { id: 3, src: "$lib/gallery/gal-03.jpeg" },
    { id: 4, src: "$lib/gallery/gal-04.jpeg" },
    { id: 5, src: "$lib/gallery/gal-05.jpeg" },
    { id: 6, src: "$lib/gallery/gal-06.jpeg" },
    { id: 7, src: "$lib/gallery/gal-07.jpeg" },
    { id: 9, src: "$lib/gallery/gal-09.jpeg" },
    { id: 10, src: "$lib/gallery/gal-10.jpeg" },
  ]; // slides items

  $: slidy_default = {
    // any name you like
    slides: pictures, // new name "slides" for arr yours slides elements in 2.0
    wrap: {
      id: "slidy_default", // customize this instance Slidy by #id
      width: "100%",
      height: "100%",
      padding: "0",
      align: "middle",
      alignmargin: 20,
    },
    slide: {
      gap: 20,
      class: "", // classname for styling slide
      width: "33%",
      height: "100%",
      backimg: true, // if true image on background slidewrap & slot for content empty
      imgsrckey: "src", // prop for ypurs image src key
      objectfit: "cover", // new in 2.3.0
      overflow: "hidden", // new in 2.4.1
    },
    controls: {
      dots: true,
      dotsnum: true,
      dotsarrow: true,
      dotspure: false, // dotnav like realy dots :)
      arrows: true,
      keys: true, // nav by arrow keys
      drag: true, // nav by mousedrag
      wheel: true, // nav by mousewheel (shift + wheel) or swipe on touch/trackpads
    },
    options: {
      axis: "x", // new in 2.2.0 axis direction
      loop: false, // new in 2.3.0 loop/no options
      duration: 550, // duration slides animation
    },
  }; // slidy settings for current instance
</script>

<Slidy {...slidy_default} bind:index let:item />
<!-- bind:index new prop in 2.0 for external controls & let:item new name for prop to eached elements -->
