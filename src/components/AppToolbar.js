
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';

const links = [
  { label: 'Início', screen: 'Home' },
  { label: 'Sobre', screen: 'About' },
  { label: 'Contato', screen: 'Contact' },
];

export default function AppToolbar({ navigation, title }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>NEXO</Text>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.links}>
          {links.map((link) => (
            <Pressable
              key={link.screen}
              onPress={() => navigation.navigate(link.screen)}
              style={({ pressed }) => [
                styles.link,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.linkText}>{link.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.primary,
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 14,
  },
  brand: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 3,
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 4,
  },
  links: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  link: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    backgroundColor: '#29415E',
    borderRadius: 9,
  },
  linkText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
});
