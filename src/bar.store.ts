import { types } from 'mobx-state-tree';

export const BarStore = types.model().actions(self => ({
  read() {
    return "result"
  }
}))
