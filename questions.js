document.getElementById("animateBtn").addEventListener("click", function() {
    const element = document.getElementById("animatedElement");
    element.hidden = false;
    element.classList.remove("animate__tada"); // Reset animation
    void element.offsetWidth; // Trigger reflow
    element.classList.add("animate__tada"); // Start animation
  });


  // VUE

  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const message = ref('Hello vue!');
      return {
        message
      };
    },
    data() {
      return {
        test: "HELLO"
      };
    },
    methods: {
      test_animate() {
        console.log("TEST");
        // Use Vue ref to access the element
        this.$refs.toAnimate.classList.remove("animate__tada"); // Reset animation
        this.$refs.toAnimate.hidden = false; // show
        void this.$refs.toAnimate.offsetWidth; // Trigger reflow
        this.$refs.toAnimate.classList.add("animate__tada"); // Start animation
      }
    }
  }).mount('#app');