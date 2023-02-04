import { defineConfig } from 'chusho';

import spriteUrl from './src/assets/images/icons.svg';

const btnClass = ({
  variant,
  disabled,
}: {
  variant?: Record<string, boolean>;
  disabled?: boolean;
}) => {
  return [
    'inline-flex items-center justify-center ring-offset-2 ring-offset-alt-100',
    {
      'py-3 px-4 sm:px-5 rounded-lg':
        (variant?.default || variant?.primary || variant?.favorite) &&
        !variant?.small,
      'py-2 px-3 sm:px-4 rounded': variant?.small,
      'font-bold leading-tight bg-alt-200 bg-opacity-75 hover:bg-opacity-100 text-alt-700 hover:text-alt-900':
        variant?.default,
      'text-white hover:text-white focus:text-white font-bold leading-tight bg-primary-500 hover:bg-primary-600 shadow':
        variant?.primary,
      'text-primary-600 bg-primary-200 bg-opacity-85': variant?.favorite,
      'text-alt-600 hover:text-alt-800 rounded': variant?.link,
      'block w-full': variant?.block,
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

export default defineConfig({
  components: {
    alert: {
      class: ({ variant }) => {
        return [
          'block py-3 px-5 border-b-1 rounded-lg',
          {
            'bg-red-100 text-red-700 border-red-200': variant?.error,
          },
          {
            'bg-blue-100 text-blue-700 border-blue-200': variant?.info,
          },
          {
            'bg-green-100 text-green-700 border-green-200': variant?.success,
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
      class: ({ variant }) => {
        return [
          {
            'flex flex-col gap-2': !variant,
            'grid sm:grid-cols-4 gap-4 sm:gap-4': variant?.grid,
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
});
