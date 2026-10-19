
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppToolbar from '../components/AppToolbar';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

export default function ContactScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.screen} edges={['left', 'right', 'bottom']}>
      <AppToolbar navigation={navigation} title="Contato" />

      <View style={globalStyles.content}>
        <Text style={styles.eyebrow}>FALE CONOSCO</Text>
        <Text style={globalStyles.title}>Entre em contato</Text>
        <Text style={globalStyles.subtitle}>
          Este espaço apresenta os canais de contato demonstrativos
          do projeto.
        </Text>

        <View style={globalStyles.card}>
          <Text style={styles.cardTitle}>Canais de atendimento</Text>

          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>contato@nexomobile.example</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Atendimento</Text>
          <Text style={styles.value}>
            Segunda a sexta-feira, das 9h às 17h
          </Text>

          <Text style={styles.note}>
            Os dados acima são ilustrativos e não representam
            canais reais de atendimento.
          </Text>
        </View>

        <PrimaryButton
          title="Voltar ao início"
          onPress={() => navigation.navigate('Home')}
        />
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
    marginTop: 18,
    marginBottom: 10,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 18,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  value: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 18,
  },
  note: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 19,
    marginTop: 20,
  },
});
