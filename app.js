const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    reset() {
      this.counter = 0;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('submitted');
    },
    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
