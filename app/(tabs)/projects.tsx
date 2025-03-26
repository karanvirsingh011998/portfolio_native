import { View, Text, StyleSheet, ScrollView, Image, Pressable,Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const projects = [
  {
    title: "Pixel Print Studios",
    description: "Pixel Prints Studios specializes in high-quality custom printing services, from T-shirts to business cards and banners.",
    link: "https://www.pixelprintstudios.in/",
    // image: require("../../assets/images/pixelPrints.png"),
    techStack: ["Next.js", "Typescript", "Vercel"],
    libraries: ["Shadcn", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Encapsulate",
    description: "A CRM integration project that connects user accounts with Capsule CRM, allowing seamless profile management.",
    link: "https://capsulecrm.lusites.xyz/",
    techStack: ["HTML", "CSS", "Next.js", "Typescript"],
    libraries: ["Material UI", "Formik", "Yup", "React Redux", "React Helmet"],
  },
  {
    title: "Flahybase",
    description: "A biotechnology website showcasing an AI-driven ecosystem for Precision Oncology.",
    link: "https://flahybase.com",
    techStack: ["HTML", "CSS", "Next.js"],
    libraries: ["Tailwind CSS", "react-particles", "Formik", "Yup", "p5-wrapper/react"],
  },
  {
    title: "FlahyRecovery",
    description: "A biotech company platform with user, admin, and partner portals for streamlined workflows.",
    link: "https://flahyrecovery.com",
    techStack: ["HTML", "CSS", "Next.js", "Typescript"],
    libraries: ["Tailwind CSS", "crypto.js", "Formik", "Yup", "next-intl"],
  },
  {
    title: "Wil Website",
    description: "A corporate website for Wits Innovation Lab, focusing on cutting-edge business solutions.",
    link: "https://www.thewitslab.com",
    techStack: ["HTML", "CSS", "Next.js", "Typescript"],
    libraries: ["Material UI", "Axios", "React Particles", "React Hook Form", "Yup"],
  },
  {
    title: "Herbalife Lifestyle Program",
    description: "An admin and distributor management system with advanced data visualization using Recharts.",
    techStack: ["HTML", "CSS", "React.js", "Typescript"],
    libraries: ["Material UI", "Axios", "React Hook Form", "Yup", "day.js"],
  },
  {
    title: "WePlanIT",
    description: "A project management tool with customizable workflows, task tracking, and data visualization.",
    link: "https://planit.thewitslab.com",
    techStack: ["HTML", "CSS", "Next.js", "Node.js", "Express.js", "MongoDB"],
    libraries: ["Redux", "Antd", "Chart.js", "Typescript"],
  },
  {
    title: "Wil Portfolio",
    description: "A dynamic portfolio site showcasing Wits Innovation Lab's expertise and solutions.",
    techStack: ["HTML", "CSS", "React.js", "Strapi"],
    libraries: ["Material UI", "React-pdf"],
  },
  {
    title: "ConvoK - Real-Time Communication Redefined",
    description: "Experience the future of communication with ConvoK! This innovative web app offers secure, real-time chat with dark and light mode support.",
    link: "https://karanvirsingh011998.github.io/convoK",
    // image: require("../../assets/images/convoK.png"),
    techStack: ["React.js", "Shadcn", "Tailwind CSS", "Framer Motion", "React Hook Form", "Yup"],
    libraries: []
  },
  {
    title: "Realtime Tracking",
    description: "This project demonstrates a real-time location tracking application built with Node.js, Express, Socket.io, and Leaflet.js. Live location of user is displayed on an interactive map in real-time.",
    link: "https://github.com/karanvirsingh011998/realtime-tracking",
    // image: require("../../assets/images/realtimeTracking.jpg"),
    techStack: ["Express.js", "Socket.io", "Node.js", "Leaflet"],
    libraries: []
  },
  {
    title: "Form Validations",
    description: "This project demonstrates form validation using React Hook Form, Formik, Yup, and Zod.",
    link: "https://karanvirsingh011998.github.io/FormsAndValidations/",
    // image: require("../../assets/images/formValidation.png"),
    techStack: ["React.js", "React Hook Form", "Formik", "Yup", "Zod"],
    libraries: []
  },
  {
    title: "Far Away - Travel List",
    description: "Far Away is a React-based packing list application designed to make travel preparations seamless and efficient.",
    link: "https://karanvirsingh011998.github.io/travel_list/",
    // image: require("../../assets/images/farAway.png"),
    techStack: ["HTML", "CSS", "React.js", "React Dom"],
  },
  {
    title: "Fast Pizza Co.",
    description: "This project demonstrates a pizza shop menu with available and unavailable pizzas.",
    link: "https://github.com/karanvirsingh011998/pizzaMenu",
    // image: require("../../assets/images/pizzaMenu.png"),
    techStack: ["HTML", "CSS", "React.js"],
    libraries: []
  },
];

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Projects</Text>
      
      <View style={styles.projectsGrid}>
        {projects.map((project) => (
          <Pressable
            key={project.title}
            style={styles.projectCard}
            onPress={() => project.link && Linking.openURL(project.link)}
          >
            <View style={styles.projectContent}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <View style={styles.tagsContainer}>
                {project.techStack.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Pressable>
        ))}
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
  projectsGrid: {
    gap: 20,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    padding: 15,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: '#666666',
  },
});