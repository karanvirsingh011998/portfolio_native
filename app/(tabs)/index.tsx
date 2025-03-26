import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView, MotiText } from 'moti';

export default function HomeScreen() {
  const skills = [
    "React.js", "React Native", "TypeScript", "Node.js",
    "Express.js", "MongoDB", "Tailwind CSS", "Next.js"
  ];

  const libraries = [
    "Redux Toolkit", "React Query", "Formik", "React Hook Form",
    "Zod", "Framer Motion", "Yup", "Axios", "ESLint", "Jest", "React Testing Library"
  ];

  const services = [
    { title: "Website Development", description: "Modern, responsive websites" },
    { title: "Mobile App Development", description: "Cross-platform apps." },
    { title: "UI/UX Design", description: "Pixel-perfect designs with smooth animations." },
    { title: "Performance Optimization", description: "Enhancing speed and responsiveness." },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Profile Header */}
        <MotiView
          style={styles.header}
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 800 }}
        >
          <Image source={require('../../assets/images/profilePic.webp')} style={styles.profileImage} />
          <MotiText
            style={styles.name}
            from={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 200 }}
          >
            Karanvir Singh
          </MotiText>
          <MotiText
            style={styles.title}
            from={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 400 }}
          >
            Software Engineer
          </MotiText>
          <MotiText
            style={styles.subtitle}
            from={{ translateY: 20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 600 }}
          >
            Specialized in Web Development & React Native
          </MotiText>
        </MotiView>

        {/* Bio Section */}
        <MotiView
          style={styles.bioContainer}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 800 }}
        >
          <Text style={styles.bioText}>
            Passionate software engineer with 3+ years of experience building scalable web and mobile apps using React.js, Next.js, React Native, and MERN stack.
          </Text>
        </MotiView>

        {/* Stats Section */}
        <MotiView style={styles.statsContainer}>
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Projects" },
            { number: "5+", label: "Clients" }
          ].map((stat, index) => (
            <MotiView
              key={stat.label}
              style={styles.statItem}
              from={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1000 + index * 200 }}
            >
              <Text style={styles.statNumber}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </MotiView>
          ))}
        </MotiView>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Skills</Text>
          <View style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <MotiView
                key={skill}
                style={styles.skillItem}
                from={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1200 + index * 100 }}
              >
                <Text style={styles.skillText}>{skill}</Text>
              </MotiView>
            ))}
          </View>
        </View>

        {/* Libraries Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Libraries & Tools</Text>
          <View style={styles.skillsGrid}>
            {libraries.map((lib, index) => (
              <MotiView
                key={lib}
                style={styles.skillItem}
                from={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1400 + index * 100 }}
              >
                <Text style={styles.skillText}>{lib}</Text>
              </MotiView>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Offered</Text>
          <View style={styles.servicesContainer}>
            {services.map((service, index) => (
              <MotiView
                key={service.title}
                style={styles.serviceItem}
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1600 + index * 200 }}
              >
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </MotiView>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  scrollContent: { paddingBottom: 40 },
  header: { alignItems: 'center', paddingTop: 40, paddingHorizontal: 20 },
  profileImage: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 28, fontWeight: '700', color: '#1a1a1a', marginBottom: 8 },
  title: { fontSize: 20, color: '#007AFF', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666666', textAlign: 'center', paddingHorizontal: 20 },
  bioContainer: { backgroundColor: '#f9f9f9', padding: 16, marginHorizontal: 20, borderRadius: 10, marginTop: 20 },
  bioText: { fontSize: 14, color: '#333333', textAlign: 'center', lineHeight: 20 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 30, paddingHorizontal: 20 },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 24, fontWeight: '700', color: '#007AFF' },
  statLabel: { fontSize: 14, color: '#666666', marginTop: 4 },
  section: { paddingHorizontal: 20, marginTop: 20 },
  sectionTitle: { fontSize: 22, fontWeight: '600', color: '#1a1a1a', marginBottom: 20, textAlign: 'center' },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  skillItem: { backgroundColor: '#f5f5f5', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, margin: 5 },
  skillText: { color: '#333333', fontSize: 14 },
  servicesContainer: { paddingHorizontal: 10 },
  serviceItem: {
    backgroundColor: '#e3f2fd',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2
  },
  serviceTitle: { fontSize: 18, fontWeight: '600', color: '#007AFF' },
  serviceDescription: { fontSize: 14, color: '#333', marginTop: 4 },
});
