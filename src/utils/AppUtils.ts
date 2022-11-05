/**
 * App Utils
 */

export const async = (func: Function, duration = 0): any => {
  return setTimeout(func, duration);
};

export const isNull = (value: any): boolean => {
  return Object.is(value, null);
};

export const isUndefined = (value: any): boolean => {
  return Object.is(typeof value, 'undefined');
};

export const isBlank = (value: any): boolean => {
  return Object.is(value, null) || Object.is(value, undefined) || Object.is(value, '');
};

export const isBothBlank = (value1: any, value2: any): boolean => {
  return isBlank(value1) && isBlank(value2);
};

export const isString = (value: any): boolean => {
  if (value && Object.is(typeof value, 'object')) {
    return Object.is(value.constructor, String);
  }
  return Object.is(typeof value, 'string');
};

export const isNumber = (value: any): boolean => {
  return Object.is(typeof value, 'number') && isFinite(value);
};

export const isNumeric = (value: string): boolean => {
  return Object.is(Number(value).toString(), 'NaN') ? false : true;
};

export const isBoolean = (value: any): boolean => {
  return Object.is(typeof value, 'boolean');
};

export const isArray = (value: any): boolean => {
  return value && Object.is(typeof value, 'object') && Object.is(value.constructor, Array);
};

export const isObject = (value: any): boolean => {
  return value && Object.is(typeof value, 'object');
};

export const isDate = (value: any): boolean => {
  return value && Object.is(typeof value, 'object') && Object.is(value.constructor, Date);
};

export const isSymbol = (value: any): boolean => {
  return Object.is(typeof value, 'symbol');
};

export const isRegExp = (value: any): boolean => {
  return value && Object.is(typeof value, 'object') && Object.is(value.constructor, RegExp);
};

export const isError = (value: any): boolean => {
  return value instanceof Error && !Object.is(typeof value.message, 'undefined');
};

export const isFunction = (value: any): boolean => {
  return Object.is(typeof value, 'function');
};

export const isBooleanString = (value: any): boolean => {
  if (value == 'true' || Object.is(value, true)) {
    return true;
  } else if (value == 'false' || Object.is(value, false)) {
    return true;
  }
  return false;
};

export const toBoolean = (value: any): boolean => {
  if (value == 'true' || Object.is(value, true)) {
    return true;
  } else if (value == 'false' || Object.is(value, false)) {
    return false;
  }
  if (isUndefined(value) || isNull(value)) {
    return value;
  }
  return false;
};

export const isDifferent = (value1: any, value2: any, caseSensitive?: boolean): boolean => {
  if (!isBothBlank(value1, value2)) {
    if (Object.is(caseSensitive, false)) {
      return !Object.is(String(value1).toUpperCase(), String(value2).toUpperCase());
    } else {
      return !Object.is(JSON.stringify(value1), JSON.stringify(value2));
    }
  }
  return false;
};

export const isStrictlyDifferent = (value1: string, value2: string): boolean => {
  return !Object.is(JSON.stringify(value1), JSON.stringify(value2));
};

// Format Tweet Numbers
export const formatTweetNumbers = (count: number): string => {
  if (count < 1e4) return String(count);
  if (count >= 1e4 && count < 1e6) {
    return +(count / 1e3).toFixed(1) + "K";
  }
  if (count >= 1e6 && count < 1e9) {
    return +(count / 1e6).toFixed(1) + "M";
  }
  return +(count / 1e9).toFixed(1) + "B";
}