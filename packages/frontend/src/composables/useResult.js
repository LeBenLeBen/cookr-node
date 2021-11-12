import { computed } from 'vue';

/**
 * Courtesy of https://github.com/vuejs/vue-apollo
 */
export function useResult(result, defaultValue, pick) {
  return computed(() => {
    const value = result.value;
    if (value) {
      if (pick) {
        try {
          return pick(value);
        } catch (e) {
          // Silent error
        }
      } else {
        const keys = Object.keys(value);
        if (keys.length === 1) {
          // Automatically take the only key in result data
          return value[keys[0]];
        } else {
          // Return entire result data
          return value;
        }
      }
    }
    return defaultValue;
  });
}
