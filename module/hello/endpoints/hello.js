import commonMiddleware from '../../../lib/commonMiddleware';

async function hello(event, context, callback) {
  try {
    return response(callback, { message: 'hello', event }, 200);
  } catch (error) {
    return response(callback, { message: 'failed', err: error }, 500);
  }
}

export const handler = commonMiddleware(hello);
