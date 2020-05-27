import api from './baseAPI';

let call;

function getOnlyOnce(config) {
  // cancel previous requests
  if (call) {
    call.cancel('Request cancelled. Only one request is allowed at a time.');
  }
  call = api.CancelToken.source();
  config.cancelToken = call.token;

  return api(config);
}

export const getTimespanElements = (budgetId, timespan) => {
  let config = {
    method: 'get',
    url: `/budgets/${budgetId}/timespan`,
    params: { timespan },
  };

  return getOnlyOnce(config).then((res) => res.data);
};
