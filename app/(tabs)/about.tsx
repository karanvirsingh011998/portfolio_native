import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>About Me</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.text}>
            Passionate software engineer around 3 years of experience building scalable web and mobile applications, delivering innovative solutions using modern technologies like React.js, Next.js, React Native, and MERN stack. Skilled in frontend performance optimization, API integration, and CI/CD automation to enhance development efficiency and user experience.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>

          <View style={styles.experienceItem}>
            <Text style={styles.company}>LuminoGuru.</Text>
            <Text style={styles.position}>Software Engineer</Text>
            <Text style={styles.duration}>Nov-2024 - Present</Text>
            <Text style={styles.description}>
              • Developed and optimized multiple web applications using React.js, Next.js, and Tailwind CSS, ensuring high performance and scalability.{'\n'}
              • Implemented CI/CD pipelines with GitHub Actions, Vercel, and Railway, reducing deployment time by 40% and improving development workflow.{'\n'}
              • Built and integrated RESTful and GraphQL APIs for seamless communication between frontend and backend services.{'\n'}
              • Enhanced website performance through lazy loading, server-side rendering (SSR), and code-splitting, improving user experience and Core Web Vitals.{'\n'}
              • Mentored junior developers by conducting code reviews, sharing best practices, and providing hands-on training in React, Next.js, and state management.{'\n'}
              • Designed and developed interactive UI components using ShadCN/UI, Framer Motion, and DaisyUI to create visually appealing and user-friendly interfaces.{'\n'}
              • Worked on full-stack development with the MERN stack, handling both frontend and backend logic, database design, and API integration.{'\n'}
              • Implemented authentication and authorization using JWT and OAuth for secure user management.{'\n'}
              • Led development of multiple React Native applications{'\n'}
              • Implemented CI/CD pipelines reducing deployment time by 40%{'\n'}
              • Mentored junior developers and conducted code reviews
            </Text>
          </View>

          <View style={styles.experienceItem}>
            <Text style={styles.company}>Wits Innovation Lab</Text>
            <Text style={styles.position}>Software Engineer</Text>
            <Text style={styles.duration}>May-2022 - Nov-2024</Text>
            <Text style={styles.description}>
              • Developed responsive web applications using React.js and Tailwind CSS, improving UI/UX for various client projects.{'\n'}
              • Optimized frontend performance by implementing lazy loading, code-splitting, and minimizing re-renders, leading to faster load times.{'\n'}
              • Collaborated with backend teams to integrate APIs, ensuring smooth data flow and efficient state management in React applications.{'\n'}
              • Assisted in debugging and troubleshooting complex frontend issues, enhancing application stability and user experience.{'\n'}
              • Developed and maintained multiple React applications{'\n'}
              • Implemented real-time features using WebSocket{'\n'}
              • Optimized application performance improving load times by 60%
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.educationItem}>
            <Text style={styles.degree}>Bachelor of Computer Applications</Text>
            <Text style={styles.school}>Panjab University</Text>
            <Text style={styles.year}>2015 - 2018</Text>
          </View>
          <View style={styles.educationItem}>
            <Text style={styles.degree}>Masters of Computer Applications</Text>
            <Text style={styles.school}>Punjab Technical University</Text>
            <Text style={styles.year}>2018 - 2020</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  experienceItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  company: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  position: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginTop: 4,
  },
  duration: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  educationItem: {
    marginBottom: 15,
  },
  degree: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  school: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 2,
  },
  year: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
});