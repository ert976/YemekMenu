import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../auth';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const { login, register } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Hata', 'Lütfen kullanıcı adı ve şifre girin.');
      return;
    }

    try {
      const success = await login(username, password);
      if (success) {
        router.replace('/(tabs)');
      } else {
        Alert.alert('Hata', 'Geçersiz kullanıcı adı veya şifre.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Giriş yapılırken bir hata oluştu.');
    }
  };

  const handleRegister = async () => {
    if (!username || !password || !email) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      const success = await register(username, email, password);
      if (success) {
        Alert.alert('Başarılı', 'Kayıt başarılı! Giriş yapabilirsiniz.', [
          { text: 'Tamam', onPress: () => router.replace('/(tabs)') }
        ]);
      } else {
        Alert.alert('Hata', 'Bu kullanıcı adı veya e-posta zaten kullanılıyor.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Kayıt yapılırken bir hata oluştu.');
    }
  };

  const handleDemoLogin = async () => {
    console.log('Demo giriş butonu tıklandı!');
    try {
      const success = await login('demokullanici', 'demoparola');
      console.log('Login sonucu:', success);
      if (success) {
        console.log('Yönlendiriliyor...');
        router.replace('/(tabs)');
      } else {
        Alert.alert('Hata', 'Demo girişi başarısız.');
      }
    } catch (error) {
      console.error('Demo giriş hatası:', error);
      Alert.alert('Hata', 'Demo girişi başarısız.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yemek Menü Uygulaması</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
        />
        
        {!isRegisterMode && (
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        )}
        
        {isRegisterMode && (
          <>
            <TextInput
              style={styles.input}
              placeholder="E-posta"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </>
        )}
        
        {isRegisterMode ? (
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={() => setIsRegisterMode(!isRegisterMode)}
        >
          <Text style={styles.buttonText}>
            {isRegisterMode ? 'Giriş Yap' : 'Kayıt Ol'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.demoButton]} 
          onPress={handleDemoLogin}
        >
          <Text style={styles.buttonText}>Demo Hesapla Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#343a40',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#dee2e6',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0d6efd',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  demoButton: {
    backgroundColor: '#20c997',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});