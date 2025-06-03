import { Animated, TouchableWithoutFeedback } from 'react-native';
import { useRef } from 'react';

export default function TouchableScale({ children, onPress }: { children: React.ReactNode; onPress?: () => void }) {
  const scale = useRef(new Animated.Value(1)).current;
  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };
  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale }] }}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
}
