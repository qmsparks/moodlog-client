import { atom, selector } from 'recoil';

export const logState = atom({
  key: 'logState',
  default: null
})

export const emotionState = selector ({
  key: 'emotionState',
  get: ({get}) => {
    const log = get(logState);
    return log.emotions;
  }
})

export const thoughtState = selector ({
  key: 'thoughtState',
  get: ({get}) => {
    const log = get(logState);
    return log.thoughts;
  }
})