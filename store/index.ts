import { Store } from 'vuex'
// import { initializeStores } from '~/utils/store-accessor'
// import { initializeStores } from '~/utils/store-accessor'
import { getModule } from 'vuex-module-decorators'
import Todos from '~/store/todos'

// eslint-disable-next-line import/no-mutable-exports
let todosStore: Todos

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */
function initializeStores(store: Store<any>): void {
  // Todos を型推論できるストアモジュール化
  todosStore = getModule(Todos, store)
}

export { initializeStores, todosStore }

const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
