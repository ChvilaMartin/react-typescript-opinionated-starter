import { createActionCreator } from 'deox';

export enum AppActionsEnum {
	SET_VERSION = '@APP/SET_VERSION',
}

export const setVersion = createActionCreator(
	AppActionsEnum.SET_VERSION, resolve => (version: number) => resolve(version)
);
