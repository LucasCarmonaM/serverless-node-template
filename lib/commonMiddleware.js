import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpUrlEncodeBodyParser from '@middy/http-urlencode-body-parser';

export default (handler) =>
  middy(handler).use([httpJsonBodyParser(), httpUrlEncodeBodyParser(), httpEventNormalizer(), httpErrorHandler()]);
