import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<IUser | null>(null);
    const isAuthenticated = ref<boolean>(false);

    function setUser(data: IUser | null, isAuth: boolean = false) {
      user.value = data;
      isAuthenticated.value = isAuth;
    }

    return { user, isAuthenticated, setUser };
  }
);
