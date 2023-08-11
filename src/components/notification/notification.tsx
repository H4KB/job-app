import { useNotifications } from "@/stores/notifications";
import { Box, Flex } from "@chakra-ui/react";
import { NotificationToast } from "./notificationToast";

export const Notification = () => {
  const { notifications, dismissNotification } = useNotifications();

  if (notifications.length < 1) return null;

  return (
    <Box as="section" p="4" position="fixed" top="12" right="0" zIndex="1">
      <Flex gap="4" direction="column-reverse">
        {notifications.map((notification) => (
          <NotificationToast
            key={notification.id}
            notification={notification}
            onDismiss={dismissNotification}
          />
        ))}
      </Flex>
    </Box>
  );
};
