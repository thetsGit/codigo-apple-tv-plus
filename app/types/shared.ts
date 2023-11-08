export type SetState<T> = (newValue: T | ((prevValue: T) => T)) => void;
