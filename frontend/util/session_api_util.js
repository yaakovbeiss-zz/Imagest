export const login = account => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: account
  })
);

export const signup = account => (
  $.ajax({
    method: 'POST',
    url: '/api/accounts',
    data: account
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const loginAsGuest = () => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      username: "guest",
      password: "password"
    }
  })
);
