// @ts-nocheck
import { serialize } from 'cookie';

/**
 * This sets `cookie` on `response` object
 */
export const cookie = (response, name, value, options = {}) => {
  const stringValue =
    typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value);

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  response.setHeader(
    'Set-Cookie',
    serialize(name, String(stringValue), options)
  );
};
