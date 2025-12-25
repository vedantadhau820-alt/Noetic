function getReflectionNotifications() {
  const notifications = [];

  // 1. Saved but not reflected
  const unreflected = Vault.getSavedItems().filter(
    item => !item.reflections || item.reflections.length === 0
  );

  unreflected.slice(0, 3).forEach(item => {
    notifications.push({
      text: `You saved "${item.title}" — reflect on it.`,
      action: () => openModal(item)
    });
  });

  // 2. Today's reminder
  notifications.push({
    text: "Have you reflected on today’s knowledge?",
    action: () => {
      // optional: scroll to today section
    }
  });

  return notifications;
}

window.getReflectionNotifications = getReflectionNotifications;
