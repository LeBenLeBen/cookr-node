import spriteUrl from './src/assets/images/icons.svg';

export default {
  components: {
    alert: {
      class: ({ variant }) => {
        return [
          'block py-3 px-4 rounded',
          {
            'bg-red-100 text-red-700': variant?.includes('error'),
          },
        ];
      },
    },
    btn: {
      class: ({ variant }) => {
        return [
          'inline-block ring-offset-2 ring-offset-alt-100',
          {
            'py-3 px-4 sm:px-5 shadow':
              variant?.includes('default') || variant?.includes('primary'),
            'font-bold leading-tight bg-white hover:text-alt-600 rounded-lg': variant?.includes(
              'default'
            ),
            'text-white hover:text-white focus:text-white font-bold leading-tight bg-primary-500 hover:bg-primary-600 rounded-lg': variant?.includes(
              'primary'
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
