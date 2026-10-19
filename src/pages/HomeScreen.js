
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppToolbar from '../components/AppToolbar';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen({ navigation, route }) {
  const username = route.params?.username || 'aluno';

  return (
    <SafeAreaView style={globalStyles.screen} edges={['left', 'right', 'bottom']}>
      <AppToolbar navigation={navigation} title="Início" />

      <View style={globalStyles.content}>
        <Text style={styles.eyebrow}>ÁREA PRINCIPAL</Text>
        <Text style={globalStyles.title}>Olá, {username}!</Text>
        <Text style={globalStyles.subtitle}>
          Seja bem-vindo ao Nexo Mobile. Explore as áreas do aplicativo
          pelos atalhos abaixo.
        </Text>

        <View style={globalStyles.card}>
          <Text style={styles.cardTitle}>Explore o Nexo</Text>
          <Text style={styles.cardDescription}>
            Conheça a proposta do aplicativo ou entre em contato
            para saber mais.
          </Text>

          <PrimaryButton
            title="Conheça o projeto"
            onPress={() => navigation.navigate('About')}
          />
          <PrimaryButton
            title="Entre em contato"
            variant="secondary"
            onPress={() => navigation.navigate('Contact')}
          />
        </View>

        <Text style={styles.footer}>Nexo Mobile · 2026</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
    marginTop: 18,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardDescription: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
  },
  footer: {
    color: colors.muted,
    textAlign: 'center',
    marginTop: 28,
    fontSize: 12,
  },
});
