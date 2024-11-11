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
        test: "HELLO",
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        Answer1: ''
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
      },
      select_ansewer(number) {
        this.$refs.Q1.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q1.offsetWidth; // Trigger reflow
        this.$refs.Q1.classList.add("animate__rubberBand"); // Start animation

//yesNo1
        if (this.Answer1 == "no") {
          this.$refs.Y1.hidden = true; // show
          this.$refs.N1.hidden = false; // show
        }

        if (this.Answer1 == "yes") {
          this.$refs.Y1.hidden = false; // show
          this.$refs.N1.hidden = true; // show
        }


        
      
        
      }
    }
  }).mount('#app');