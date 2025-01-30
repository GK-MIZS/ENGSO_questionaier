document.getElementById("animateBtn").addEventListener("click", function () {
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
    const message = ref("Hello vue!");
    return {
      message,
    };
  },
  data() {
    return {
      test: "HELLO",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      Answer1: "",
      Answer2: "",
      Answer3: "",
      Answer4: "",
      Answer5: "",
      Answer6: "",
      Answer7: "",
      Answer8: "",
      Answer9: "",
      big_confeti: true,
      big_confeti2: true,
      checkboxOptions: [
        "Fun",
        "Joy",
        "Excitement",
        "Pride",
        "Feelings of strength and resourcefulness",
        "Calmness",
        "Contentment",
        "Stress relief",
        "Something meaningful one can do for oneself",
        "Personal accomplishment",
      ],
      checkboxOptions2: [
        "Foster the creation of a supportive and pressure-free environment.",
        "Promote social ties and the inclusion of all team members.",
        "Spend extra time and effort to dialogue with young athletes.",
        "Commit to achieve the goals of the young athletes.",
        "Teach the values of healthy competition.",
      ],
      selectedOptions: [], // Stores the selected checkboxes
      selectedOptions2: [], // Stores the selected checkboxes
    };
  },
  methods: {
    test_animate() {
      // Use Vue ref to access the element
      this.$refs.toAnimate.classList.remove("animate__tada"); // Reset animation
      this.$refs.toAnimate.hidden = false; // show
      void this.$refs.toAnimate.offsetWidth; // Trigger reflow
      this.$refs.toAnimate.classList.add("animate__tada"); // Start animation
    },
    select_ansewer(number, r) {
      // confetti

      if (r) {
        this.confeti_sm();
      }

      if (number == 1) {
        this.$refs.Q1.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q1.offsetWidth; // Trigger reflow
        this.$refs.Q1.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 2) {
        this.$refs.Q2.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q2.offsetWidth; // Trigger reflow
        this.$refs.Q2.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 3) {
        this.$refs.Q3.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q3.offsetWidth; // Trigger reflow
        this.$refs.Q3.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 4) {
        this.$refs.Q4.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q4.offsetWidth; // Trigger reflow
        this.$refs.Q4.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 5) {
        this.$refs.Q5.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q5.offsetWidth; // Trigger reflow
        this.$refs.Q5.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 6) {
        this.$refs.Q6.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q6.offsetWidth; // Trigger reflow
        this.$refs.Q6.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 7) {
        this.$refs.Q7.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q7.offsetWidth; // Trigger reflow
        this.$refs.Q7.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 8) {
        // shakers
        this.$refs.battery1.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.battery1.offsetWidth; // Trigger reflow
        this.$refs.battery1.classList.add("animate__rubberBand"); // Start animation
        this.$refs.Q8.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q8.offsetWidth; // Trigger reflow
        this.$refs.Q8.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 9) {
        this.$refs.battery2.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.battery2.offsetWidth; // Trigger reflow
        this.$refs.battery2.classList.add("animate__rubberBand"); // Start animation
        this.$refs.Q9.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q9.offsetWidth; // Trigger reflow
        this.$refs.Q9.classList.add("animate__rubberBand"); // Start animation
      }

      if (number == 10) {
        this.$refs.Q10.classList.remove("animate__rubberBand"); // Reset animation
        void this.$refs.Q10.offsetWidth; // Trigger reflow
        this.$refs.Q10.classList.add("animate__rubberBand"); // Start animation
      }

      //yesNo1
      if (this.Answer1 == "no") {
        this.$refs.Y1.hidden = true; // show
        this.$refs.N1.hidden = false; // show
      }

      if (this.Answer1 == "yes") {
        this.$refs.Y1.hidden = false; // show
        this.$refs.N1.hidden = true; // show
      }

      if (this.Answer2 == "no") {
        this.$refs.Y2.hidden = true; // show
        this.$refs.N2.hidden = false; // show
      }

      if (this.Answer2 == "yes") {
        this.$refs.Y2.hidden = false; // show
        this.$refs.N2.hidden = true; // show
      }

      if (this.Answer3 == "no") {
        this.$refs.Y3.hidden = true; // show
        this.$refs.N3.hidden = false; // show
      }

      if (this.Answer3 == "yes") {
        this.$refs.Y3.hidden = false; // show
        this.$refs.N3.hidden = true; // show
      }

      if (this.Answer4 == "no") {
        this.$refs.Y4.hidden = true; // show
        this.$refs.N4.hidden = false; // show
      }

      if (this.Answer4 == "yes") {
        this.$refs.Y4.hidden = false; // show
        this.$refs.N4.hidden = true; // show
      }

      if (this.Answer5 == "no") {
        this.$refs.Y5.hidden = true; // show
        this.$refs.N5.hidden = false; // show
      }

      if (this.Answer5 == "yes") {
        this.$refs.Y5.hidden = false; // show
        this.$refs.N5.hidden = true; // show
      }

      if (this.Answer6 == "no") {
        this.$refs.Y6.hidden = true; // show
        this.$refs.N6.hidden = false; // show
      }

      if (this.Answer6 == "yes") {
        this.$refs.Y6.hidden = false; // show
        this.$refs.N6.hidden = true; // show
      }

      if (this.Answer7 == "no") {
        this.$refs.Y7.hidden = true; // show
        this.$refs.N7.hidden = false; // show
      }

      if (this.Answer7 == "yes") {
        this.$refs.Y7.hidden = false; // show
        this.$refs.N7.hidden = true; // show
      }

      if (this.Answer8 == "no") {
        this.$refs.Y8.hidden = true; // show
        this.$refs.N8.hidden = false; // show
      }

      if (this.selectedOptions.length > 0) {
        this.$refs.Y8.hidden = false; // show
        this.$refs.N8.hidden = true; // show
      }

      if (this.Answer9 == "no") {
        this.$refs.Y9.hidden = true; // show
        this.$refs.N9.hidden = false; // show
      }

      if (this.selectedOptions2.length > 0) {
        this.$refs.Y9.hidden = false; // show
        this.$refs.N9.hidden = true; // show
      }

      if (this.Answer10 == "no") {
        this.$refs.Y10.hidden = true; // show
        this.$refs.N10.hidden = false; // show
      }

      if (this.Answer10 == "yes") {
        this.$refs.Y10.hidden = false; // show
        this.$refs.N10.hidden = true; // show
      }
    },
    confeti() {
      if (this.big_confeti) {
        confetti({
          particleCount: 500,
          spread: 120,
          origin: { y: 0.6 },
        });

        this.big_confeti = false;
      }
    },
    confeti2() {
      if (this.big_confeti2) {
        confetti({
          particleCount: 500,
          spread: 120,
          origin: { y: 0.6 },
        });

        this.big_confeti2 = false;
      }
    },
    confeti_sm() {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.6 },
      });
    },
  },
}).mount("#app");
