export const response = (callback, body = {}, status = 200) => {
  return callback(null, {
    statusCode: status,
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
    },
    body: body ? JSON.stringify(body) : ''
  });
};
