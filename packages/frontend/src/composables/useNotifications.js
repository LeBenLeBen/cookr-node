import { ref, computed, nextTick } from 'vue';

const _notifications = ref(new Set());

export function notify(notification) {
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

export function hide(notification) {
  _notifications.value.delete(notification);
}

export const notifications = computed(() => _notifications.value);
