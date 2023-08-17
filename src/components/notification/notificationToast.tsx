import { Box, CloseButton, Stack, Text } from "@chakra-ui/react";

import { Notification, NotificationType } from "@/stores/notifications";

const notificationVariants: Record<NotificationType, { color: string }> = {
  info: {
    color: "primary",
  },
  success: {
    color: "green",
  },
  warning: {
    color: "orange",
  },
  error: {
    color: "red",
  },
};

type NotificationToastProps = {
  notification: Omit<Notification, "duration">;
  onDismiss: (id: string) => void;
};

export const NotificationToast = ({
  notification,
  onDismiss,
}: NotificationToastProps) => {
  const { id, type, title, message } = notification;

  return (
    <Box
      w={{ base: "full", sm: "md" }}
      boxShadow="md"
      bg="white"
      borderRadius="lg"
      {...notificationVariants[type]}
    >
      <Stack direction="row" p="4" spacing="3" justifyContent="space-between">
        <Stack spacing="2.5">
          <Stack spacing="1">
            <Text fontSize="sm" fontWeight="medium">
              {title}
            </Text>
            {notification.message && (
              <Text fontSize="sm" color="muted">
                {message}
              </Text>
            )}
          </Stack>
        </Stack>
        <CloseButton
          onClick={() => onDismiss(id)}
          transform="translateY(-6px)"
        />
      </Stack>
    </Box>
  );
};
