
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppToolbar from '../components/AppToolbar';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.screen} edges={['left', 'right', 'bottom']}>
      <AppToolbar navigation={navigation} title="Sobre" />

      <View style={globalStyles.content}>
        <Text style={styles.eyebrow}>NOSSA PROPOSTA</Text>
        <Text style={globalStyles.title}>Sobre o Nexo</Text>
        <Text style={globalStyles.subtitle}>
          Um projeto desenvolvido para demonstrar navegação mobile,
          organização de componentes e validação de login.
        </Text>

        <View style={globalStyles.card}>
          <Text style={styles.cardTitle}>Simplicidade e conexão</Text>
          <Text style={styles.description}>
            O Nexo Mobile reúne uma interface simples e intuitiva,
            com telas organizadas e acesso rápido às principais
            informações do aplicativo.
          </Text>
          <Text style={styles.description}>
            Este projeto utiliza React Native e Expo, com navegação
            entre telas e autenticação simulada para fins acadêmicos.
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
    marginBottom: 14,
  },
  description: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 12,
  },
});
