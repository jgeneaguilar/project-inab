const KEY = {
    USER_ID: 'i__uid',
    AUTH_TOKEN: 'i__at'
};

export function getUserCredentials() {
  return {
    _id: localStorage.getItem(KEY.USER_ID),
    token: localStorage.getItem(KEY.AUTH_TOKEN)
  };
}

export function setUserCredentials(userId, authToken) {
  localStorage.setItem(KEY.USER_ID, userId);
  localStorage.setItem(KEY.AUTH_TOKEN, authToken);
}

export function removeUserCredentials() {
  localStorage.removeItem(KEY.USER_ID);
  localStorage.removeItem(KEY.AUTH_TOKEN);
}