import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useAuth } from '@/auth';
import { resetUserData, resetAllUserData } from '@/database';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const { user, logout } = useAuth();

  const handleResetUserRatings = async () => {
    if (!user) {
      Alert.alert('Hata', 'Lütfen önce giriş yapın.');
      return;
    }

    Alert.alert(
      'Onay',
      'Tüm yemek tercihlerinizi sıfırlamak istediğinizden emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Sıfırla',
          style: 'destructive',
          onPress: async () => {
            try {
              await resetUserData(user.id);
              Alert.alert('Başarılı', 'Yemek tercihleriniz sıfırlandı.');
            } catch (error) {
              console.error('Tercihler sıfırlanırken hata:', error);
              Alert.alert('Hata', 'Tercihler sıfırlanırken bir hata oluştu.');
            }
          }
        }
      ]
    );
  };

  const handleResetAllData = async () => {
    Alert.alert(
      'Onay',
      'Tüm kullanıcı verilerinizi (yemek tercihleri ve menüler) sıfırlamak istediğinizden emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Sıfırla',
          style: 'destructive',
          onPress: async () => {
            try {
              await resetAllUserData();
              Alert.alert('Başarılı', 'Tüm kullanıcı verileriniz sıfırlandı.');
            } catch (error) {
              console.error('Veriler sıfırlanırken hata:', error);
              Alert.alert('Hata', 'Veriler sıfırlanırken bir hata oluştu.');
            }
          }
        }
      ]
    );
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Ayarlar</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Veri Yönetimi</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleResetUserRatings}
        >
          <Text style={styles.buttonText}>Yemek Tercihlerini Sıfırla</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={handleResetAllData}
        >
          <Text style={styles.buttonText}>Tüm Verileri Sıfırla</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hesap</Text>

        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Uygulama Bilgisi</Text>
        <Text style={styles.infoText}>Yemek Menü Uygulaması v1.0</Text>
        <Text style={styles.infoText}>SQLite veritabanı kullanır</Text>
        <Text style={styles.infoText}>Çevrimdışı destek mevcuttur</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  section: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0d6efd',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  dangerButton: {
    backgroundColor: '#dc3545',
  },
  logoutButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#6c757d',
  },
});