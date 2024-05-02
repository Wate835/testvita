<template>
  <main class="main">
    <div class="wrapper">
      <div class="logo"><LogoIcon /></div>
      <form class="form" @submit.prevent="onSubmit">
        <div class="input-wrapper">
          <input
            name="username"
            v-model="loginValue"
            class="auth-input"
            placeholder="Логин"
          />
        </div>
        <div class="input-wrapper">
          <input
            name="password"
            v-model="passwordValue"
            class="auth-input"
            :type="passwordFieldType"
            placeholder="Пароль"
          />
          <div
            style="color: #e2061a; margin-bottom: 20px; font-size: 12px; line-height: 17px"
            v-if="resError"
          >
            {{ resError }}
          </div>
        </div>

        <Checkbox label="Запомнить меня" />

        <Button type="submit" class="auth-btn" variant="primary" :is-full="true">Войти</Button>
      </form>
      <Button @click="test" type="submit" class="auth-btn" variant="primary" :is-full="true">тест</Button>
      <Button @click="testComment" type="submit" class="auth-btn" variant="primary" :is-full="true">тестКоммент</Button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import axios from 'axios';

const router = useRouter();

const passwordVisible = ref(false);
const toggleVisPass = () => {
  passwordVisible.value = !passwordVisible.value;
};
const passwordFieldType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const iconVisBtn = computed(() => (!passwordVisible.value ? 'eye' : 'eye-close'));

const loginValue = ref()
const passwordValue = ref()

const resError = ref();
const onSubmit = async () => {
  // const status = await login({ ...values });
  const response2 = await axios.post('/auth/login', 
    {}, 
    { 
      params: {
        username: loginValue.value,
        password: passwordValue.value
      }
    }
  )

  // if (status === 200) {
  //   router.push('/');
  // } else {
  //   resError.value = 'Неверный логин или пароль.';
  // }
};
const test = async()=> {
  const response = await axios.get('/api/userInfo/findAll')
}
const testComment = async()=> {
  const response = await axios.post(`/api/post`, {
    briefDescription: "string",
    fullDescription: "string",
    title: "string"
  }, {
  params: {
    userInfoId: 30
  }
})
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 28px;
  background-color: #f4f6f9;
  color: #343a40;
  font-family: 'Manrope', 'Open Sans', sans-serif;
  font-weight: 500;
  font-style: normal;
  box-sizing: border-box;
}

.logo {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -30px);
}

.wrapper {
  position: relative;
  display: flex;
  width: 398px;
  height: max-content;
  background-color: white;
  box-shadow: 0 4px 19px rgba(210, 210, 210, 0.25);
  border-radius: 20px;
}

.form {
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 32px;
}

.form-label {
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 28px;
}

.input-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.auth-input {
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 6px;
}

.label-checkbox {
  display: flex;
  align-items: center;
  column-gap: 6px;
  margin-bottom: 32px;
}

#checkbox {
  border: #d7d7d7;
}

.auth-btn {
  margin-top: 28px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
}

.show-password__btn {
  cursor: pointer;
  width: 20px;
  transition-duration: 400ms;
}

.show-password__btn:hover {
  color: #2161ab;
}

@media (max-width: 375px) {
  .form-label {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  .label-checkbox {
    display: block;
    margin-bottom: 16px;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
