
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';
import PrimaryButton from '../components/PrimaryButton';

const TEST_USERNAME = 'aluno';
const TEST_PASSWORD = 'nexo123';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin() {
    if (!username.trim() || !password.trim()) {
      setError('Preencha o usuário e a senha para continuar.');
      return;
    }

    if (
      username.trim() !== TEST_USERNAME ||
      password !== TEST_PASSWORD
    ) {
      setError('Usuário ou senha inválidos. Tente novamente.');
      return;
    }

    setError('');

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
          params: { username: username.trim() },
        },
      ],
    });
  }

  return (
    <SafeAreaView style={globalStyles.screen}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.brandContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>N</Text>
            </View>
            <Text style={styles.brand}>NEXO MOBILE</Text>
            <Text style={styles.tagline}>
              Sua experiência começa aqui.
            </Text>
          </View>

          <View style={globalStyles.card}>
            <Text style={globalStyles.title}>Bem-vindo!</Text>
            <Text style={globalStyles.subtitle}>
              Entre com suas credenciais para acessar o aplicativo.
            </Text>

            <Text style={styles.label}>Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu usuário"
              placeholderTextColor={colors.muted}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel="Usuário"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor={colors.muted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              accessibilityLabel="Senha"
            />

            {error ? (
              <Text style={styles.error}>{error}</Text>
            ) : null}

            <PrimaryButton
              title="Entrar"
              onPress={handleLogin}
            />

            <Text style={styles.hint}>
              Acesso de demonstração: aluno / nexo123
            </Text>
          </View>

          <Text style={styles.footer}>
            Nexo Mobile · Aplicativo demonstrativo
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  logoText: {
    color: colors.secondary,
    fontSize: 32,
    fontWeight: '800',
  },
  brand: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 3,
  },
  tagline: {
    color: colors.muted,
    marginTop: 8,
    fontSize: 14,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 11,
    minHeight: 49,
    paddingHorizontal: 14,
    color: colors.text,
    fontSize: 15,
  },
  error: {
    color: colors.danger,
    fontSize: 13,
    marginTop: 12,
    lineHeight: 19,
  },
  hint: {
    color: colors.muted,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 20,
  },
  footer: {
    color: colors.muted,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
  },
});
