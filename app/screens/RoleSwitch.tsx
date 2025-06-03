import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../stores/authStore';
import { palette, spacing, radius } from '../../theme';

export default function RoleSwitch() {
  const setRole = useAuthStore((s) => s.setRole);
  const selectRole = async (role: 'seeker' | 'employer') => {
    await AsyncStorage.setItem('role', role);
    setRole(role);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: spacing(4) }}>
      <TouchableOpacity onPress={() => selectRole('seeker')} style={{ backgroundColor: palette.primary, padding: spacing(4), borderRadius: radius, marginBottom: spacing(3) }}>
        <Text style={{ color: palette.onPrimary, textAlign: 'center' }}>Соискатель</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectRole('employer')} style={{ backgroundColor: palette.primary, padding: spacing(4), borderRadius: radius }}>
        <Text style={{ color: palette.onPrimary, textAlign: 'center' }}>Работодатель</Text>
      </TouchableOpacity>
    </View>
  );
}
