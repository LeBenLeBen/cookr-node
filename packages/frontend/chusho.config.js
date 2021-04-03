import spriteUrl from './src/assets/images/icons.svg';

export default {
  components: {
    alert: {
      class: ({ variant }) => {
        return [
          'block py-3 px-5 border-b-1 rounded-lg',
          {
            'bg-red-100 text-red-700 border-red-200': variant?.includes(
              'error'
            ),
          },
          {
            'bg-blue-100 text-blue-700 border-blue-200': variant?.includes(
              'info'
            ),
          },
          {
            'bg-green-100 text-green-700 border-green-200': variant?.includes(
              'success'
            ),
          },
        ];
      },
    },
    btn: {
      class: ({ variant }) => {
        return [
          'inline-flex items-center justify-center ring-offset-2 ring-offset-alt-100',
          {
            'py-3 px-4 sm:px-5':
              variant?.match(/(default|primary)/) &&
              !variant?.includes('small'),
            'py-2 px-3 sm:px-4': variant?.includes('small'),
            'font-bold leading-tight bg-alt-200 bg-opacity-75 hover:bg-opacity-100 text-alt-700 hover:text-alt-900 rounded-lg': variant?.includes(
              'default'
            ),
            'text-white hover:text-white focus:text-white font-bold leading-tight bg-primary-500 hover:bg-primary-600 rounded-lg shadow': variant?.includes(
              'primary'
            ),
            'text-alt-600 hover:text-alt-800 rounded': variant?.includes(
              'link'
            ),
            'block w-full': variant?.includes('block'),
          },
        ];
      },
    },
    icon: {
      spriteUrl,
      class: 'icon',
    },
  },
};
