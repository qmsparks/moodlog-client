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