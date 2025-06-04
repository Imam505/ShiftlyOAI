// app/screens/RoleSwitch.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { useAuthStore } from '../stores/authStore';
import { palette, spacing } from '../../theme';
import type { RootStackParamList } from '../navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function RoleSwitch() {
  const setRole     = useAuthStore(s => s.setRole);
  const navigation  = useNavigation<Nav>();

  const selectRole = async (role: 'seeker' | 'employer') => {
    console.log('>>> pressed', role);                 // debug-метка
    await AsyncStorage.setItem('role', role);
    setRole(role);

    navigation.navigate(role === 'seeker' ? 'HomeSeeker' : 'HomeEmployer');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: spacing(4) }}>
      <TouchableOpacity
        onPress={() => selectRole('seeker')}
        style={{ backgroundColor: palette.primary, padding: spacing(4), borderRadius: 8, marginBottom: spacing(2) }}>
        <Text style={{ color: palette.onPrimary, textAlign: 'center' }}>Соискатель</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => selectRole('employer')}
        style={{ backgroundColor: palette.primary, padding: spacing(4), borderRadius: 8 }}>
        <Text style={{ color: palette.onPrimary, textAlign: 'center' }}>Работодатель</Text>
      </TouchableOpacity>
    </View>
  );
}
