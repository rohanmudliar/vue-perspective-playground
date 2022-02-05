const vm = Vue.createApp({
  data() {
    return {
      perspective: 500,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      this.perspective = 500;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copy() {
      const el = document.createElement("textarea");
      el.value = `transform : ${this.animateBox.transform}`;
      document.body.appendChild(el);
      el.select();

      el.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(el.value);

      document.body.removeChild(el);
    },
  },
  computed: {
    animateBox() {
      return {
        transform: `perspective(${this.perspective}px)  rotateX(${this.rotateX}deg)  rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
}).mount("#app");
