import { environment } from '../../environments/environment';
export const stompConfig = {
  // Which server?
  brokerURL: environment.serverUrl + '/websocket',
};
