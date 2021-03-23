import { types } from 'mobx-state-tree';

export const FooStore = types.model().actions(self => ({
  read() {
    return "result"
  }
}))
