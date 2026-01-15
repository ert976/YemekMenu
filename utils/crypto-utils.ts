import * as Crypto from 'expo-crypto';

export async function hashPassword(password: string): Promise<string> {
  try {
    const saltBytes = await Crypto.getRandomBytesAsync(16);
    const salt = Array.from(saltBytes).map(b => b.toString(16).padStart(2, '0')).join('');
    
    const keyMaterial = password + salt;

    const hashedKey = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      keyMaterial
    );

    return `${salt}:${hashedKey}`;
  } catch (error) {
    console.error('Şifre hashleme hatası:', error);
    throw new Error('Şifre hashleme başarısız');
  }
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    const [salt, storedHash] = hash.split(':');
    
    const keyMaterial = password + salt;

    const hashedKey = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      keyMaterial
    );

    return hashedKey === storedHash;
  } catch (error) {
    console.error('Şifre doğrulama hatası:', error);
    return false;
  }
}
