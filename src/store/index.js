import { createPinia } from 'pinia'
const store = createPinia();

export function RegisterPina(app) {
  app.use(store);
}

export default store
