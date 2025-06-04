import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../stores/authStore'; // твой Zustand-стор
import { palette, spacing } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export default function RoleSwitch() {
  const setRole = useAuthStore((s) => s.setRole);
  const navigation = useNavigation();

  const selectRole = async (role: 'seeker' | 'employer') => {
    await AsyncStorage.setItem('role', role);
    setRole(role);

    if (role === 'seeker') {
      navigation.navigate('ApplicantScreen');
    } else if (role === 'employer') {
      navigation.navigate('EmployerScreen');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: spacing(4) }}>
      <TouchableOpacity
        onPress={() => selectRole('seeker')}
        style={{ backgroundColor: palette.primary, padding: spacing(4), borderRadius: 8, marginBottom: spacing(2) }}
      >
        <Text style={{ color: palette.onPrimary, textAlign: 'center' }}>Соискатель</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => selectRole('employer')}
        style={{ backgroundColor: palette.primary, padding: spacing(4), borderRadius: 8 }}
      >
        <Text style={{ color: palette.onPrimary, textAlign: 'center' }}>Работодатель</Text>
      </TouchableOpacity>
    </View>
  );
}
