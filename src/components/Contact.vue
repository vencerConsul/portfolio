<template>
  <section id="contact">
    <h2 class="s-title" v-scrollanimation>contact</h2>
    <p class="s-sub-title" v-scrollanimation>Let's work together.</p>
    <div class="c-wrapper">
      <h2 class="s-title">Feel free to connect</h2>
      <form @submit.prevent="sendEmail">
        <div class="form-container">
          <div class="form-wrapper inline">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" v-model="fullname" placeholder="Full name..." required>
          </div>
          <div class="form-wrapper inline">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Email..." required>
          </div>
          <div class="form-wrapper full">
            <label for="message">Message</label>
            <textarea id="message" rows="6" v-model="message" placeholder="Message..." required></textarea>
          </div>
        </div>
        <p v-if="response">Received with gratitude. Thank you!</p>
        <button type="submit" class="submit">Submit</button>
      </form>
    </div>
  </section>
</template>
<script>
import Api from '../services/Api.js';

export default {
  data() {
    return {
      fullname: '',
      email: '',
      message: '',
      response: false
    };
  },
  methods: {
    sendEmail() {
      const formData = {
        fullname: this.fullname,
        email: this.email,
        message: this.message
      };

      Api().post('/api/sendEmail', formData)
        .then(response => {
          console.log(response)
          if (response.data === 'OK') {
            this.fullname = '';
            this.email = '';
            this.message = '';
            this.response = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#contact {
  .c-wrapper {
    max-width: 1141px;
    width: 100%;
    background: #F1F1F1;
    border: 1px solid #D9D9D9;
    padding: 55px 113px;
    text-align: center;
    border-radius: 5px;

    .form-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 40px;

      .form-wrapper {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 20px;

        label {
          margin-bottom: 15px;
        }
      }

      .form-wrapper.inline {
        max-width: 430px;
        width: 100%;
      }

      .form-wrapper.full {
        max-width: 100%;
        width: 100%;
      }

      input,
      textarea {
        background: var(--white);
        padding: 20px 27px;
        border: 0;
        border-radius: 5px;

        &:focus {
          border: 0;
          outline: 0;
        }

        &::placeholder {
          color: rgb(177, 177, 177);
        }
      }
    }

    .submit {
      text-align: center;
      border-radius: 5px;
      max-width: 186px;
      width: 100%;
      min-height: 47px;
      background: var(--tertiary);
      border: 0;
      color: var(--white);
      margin-top: 40px;
      transition: 0.3s;
      cursor: pointer;
    }

    .submit:hover {
      transform: scale(1.1);
    }
  }
}

@media screen and (max-width: 1200px) {
  .form-wrapper.inline {
    max-width: 100% !important;
  }
}

@media screen and (max-width: 768px) {
  #contact {
    .c-wrapper {
      padding: 50px 30px;
    }
  }
}
</style>