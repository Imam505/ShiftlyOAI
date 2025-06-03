# ShiftlyOAI

React Native app built with Expo SDK 53.

## Запуск на устройстве

1. `npm install`
2. `npx expo start --tunnel`
3. Отсканируйте QR-код приложением **Expo Go** (iPhone 14 Pro Max).

## Mock & TODO
- Геолокация: координаты по умолчанию Махачкала (42.9849 N, 47.5046 E).
- Платежи заменены на `paymentServiceMock.ts`.
- Push-уведомления работают через `expo-notifications`.
- TODO: подключить FCM/APNs для продакшена.
