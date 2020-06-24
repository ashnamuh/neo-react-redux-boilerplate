import { Action } from 'typesafe-actions'

export interface LoadingState {
  [key: string]: boolean;
}

const initialState: LoadingState = {}

export default (state = initialState, action: Action) => {
  const { type } = action
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)

  if (!matches) {
    return state
  }

  const [, requestName, requestState] = matches

  return {
    ...state,
    [requestName]: requestState === 'REQUEST'
  }
}
