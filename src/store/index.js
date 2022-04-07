import { createPinia } from 'pinia'
const store = createPinia();

export function RegesterPina(app) {
  app.use(store);
}

export default store
