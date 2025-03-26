import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Phone, MapPin, Send, GitBranchIcon, Globe } from 'lucide-react-native';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contact</Text>

      <View style={styles.contactInfo}>
        <Pressable style={styles.infoItem} onPress={() => Linking.openURL('mailto:karanvir011998@gmail.com')}>
          <Mail size={24} color="#007AFF" />
          <Text style={styles.infoText}>karanvir011998@gmail.com</Text>
        </Pressable>
        <Pressable style={styles.infoItem} onPress={() => Linking.openURL('tel:+918437333427')}>
          <Phone size={24} color="#007AFF" />
          <Text style={styles.infoText}>+91 8437333427</Text>
        </Pressable>
        <Pressable style={styles.infoItem} onPress={() => Linking.openURL('https://karanvirsingh011998.github.io/portfolio/')}>
          <Globe size={24} color="#007AFF" />
          <Text style={styles.infoText}>Portfolio</Text>
        </Pressable>
        <Pressable style={styles.infoItem} onPress={() => Linking.openURL('https://github.com/karanvirsingh011998')}>
          <GitBranchIcon size={24} color="#007AFF" />
          <Text style={styles.infoText}>github.com/karanvirsingh011998</Text>
        </Pressable>
        <Pressable style={styles.infoItem} onPress={() => Linking.openURL('https://www.linkedin.com/in/karanvir-singh-a72a61196/')}>
          <Send size={24} color="#007AFF" />
          <Text style={styles.infoText}>linkedin.com/in/karanvir-singh-a72a61196/</Text>
        </Pressable>
        <View style={styles.infoItem}>
          <MapPin size={24} color="#007AFF" />
          <Text style={styles.infoText}>Chandigarh, India</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 30,
  },
  contactInfo: {
    marginBottom: 40,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#666666',
    marginLeft: 12,
  }
});
