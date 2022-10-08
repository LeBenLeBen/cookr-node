import { ChushoUserOptions } from 'chusho';
import spriteUrl from './src/assets/images/icons.svg';

const btnClass = ({
  variant,
  disabled,
}: {
  variant: string;
  disabled: boolean;
}) => {
  return [
    'inline-flex items-center justify-center ring-offset-2 ring-offset-alt-100',
    {
      'py-3 px-4 sm:px-5 rounded-lg':
        variant?.match(/(default|primary|favorite)/) &&
        !variant?.includes('small'),
      'py-2 px-3 sm:px-4 rounded': variant?.includes('small'),
      'font-bold leading-tight bg-alt-200 bg-opacity-75 hover:bg-opacity-100 text-alt-700 hover:text-alt-900':
        variant?.includes('default'),
      'text-white hover:text-white focus:text-white font-bold leading-tight bg-primary-500 hover:bg-primary-600 shadow':
        variant?.includes('primary'),
      'text-primary-600 bg-primary-200 bg-opacity-85':
        variant?.includes('favorite'),
      'text-alt-600 hover:text-alt-800 rounded': variant?.includes('link'),
      'block w-full': variant?.includes('block'),
      'opacity-75': disabled,
    },
  ];
};

const fieldClass = ({ disabled }: { disabled: boolean }) => {
  return [
    'block w-full py-3 px-5 border border-alt-300 rounded-lg shadow-inner ring-offset-2 ring-offset-alt-100',
    {
      'bg-alt-200': disabled,
      'bg-white': !disabled,
    },
  ];
};

export default {
  components: {
    alert: {
      class: ({ variant }: { variant: string }) => {
        return [
          'block py-3 px-5 border-b-1 rounded-lg',
          {
            'bg-red-100 text-red-700 border-red-200':
              variant?.includes('error'),
          },
          {
            'bg-blue-100 text-blue-700 border-blue-200':
              variant?.includes('info'),
          },
          {
            'bg-green-100 text-green-700 border-green-200':
              variant?.includes('success'),
          },
        ];
      },
    },

    btn: {
      class: btnClass,
    },

    collapseBtn: {
      class: btnClass,
    },

    formGroup: {
      as: 'div',
      class: ({ variant }: { variant: string }) => {
        return [
          {
            'flex flex-col gap-2': !variant,
            'grid sm:grid-cols-4 gap-4 sm:gap-4': variant?.includes('grid'),
          },
        ];
      },
    },

    icon: {
      spriteUrl,
      class: 'icon',
    },

    label: {
      class: 'block font-medium',
    },

    textField: {
      class: fieldClass,
    },

    textarea: {
      class: fieldClass,
    },
  },
} as ChushoUserOptions;
