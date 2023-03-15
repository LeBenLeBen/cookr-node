import { computed, nextTick, ref } from 'vue';

const _notifications = ref<Set<Notification>>(new Set());

type Notification = {
  type: 'error' | 'info' | 'success';
  message: string;
  id?: string;
  title?: string;
  duration?: number;
};

export function notify(notification: Notification) {
  const sameExistingNotification = [..._notifications.value].find(
    (n) => !!n.id && n.id === notification.id
  );
  if (sameExistingNotification) {
    _notifications.value.delete(sameExistingNotification);
  }

  nextTick(() => {
    _notifications.value.add(notification);
  });

  const duration = notification.duration ?? 10000;

  if (duration) {
    setTimeout(() => {
      _notifications.value.delete(notification);
    }, duration);
  }
}

export function hide(notification: Notification) {
  _notifications.value.delete(notification);
}

export function clear() {
  _notifications.value.clear();
}

export const notifications = computed(() => _notifications.value);
