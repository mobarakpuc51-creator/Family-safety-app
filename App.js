import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  const [role, setRole] = useState(null); // 'parent' or 'child'

  if (!role) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Family Safety App</Text>
          <Text style={styles.subtitle}>Select your role to continue</Text>

          <TouchableOpacity style={styles.parentButton} onPress={() => setRole('parent')}>
            <Text style={styles.buttonText}>Parent (මෙය Parent App)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.childButton} onPress={() => setRole('child')}>
            <Text style={styles.buttonText}>Child (මෙය Daughter's App)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (role === 'parent') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Parent Dashboard</Text>
          <TouchableOpacity onPress={() => setRole(null)}>
            <Text style={styles.backText}>Switch Role</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>🟢 Daughter's Device Connected</Text>
            <Text style={styles.statusText}>Last synced: Just now</Text>
          </View>

          <TouchableOpacity style={styles.featureButton}>
            <Text style={styles.featureTitle}>📍 Live Location</Text>
            <Text style={styles.featureDesc}>Track daughter's real-time GPS location</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureButton}>
            <Text style={styles.featureTitle}>📞 Call & SMS History</Text>
            <Text style={styles.featureDesc}>View WhatsApp/IMO & normal call logs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureButton}>
            <Text style={styles.featureTitle}>📸 Live Camera / Snapshot</Text>
            <Text style={styles.featureDesc}>Request remote camera view safely</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureButton}>
            <Text style={styles.featureTitle}>⏳ App Usage Control</Text>
            <Text style={styles.featureDesc}>Block or limit social media apps</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daughter's Safety App</Text>
        <TouchableOpacity onPress={() => setRole(null)}>
          <Text style={styles.backText}>Switch Role</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.childContent}>
        <View style={styles.shieldBox}>
          <Text style={styles.shieldEmoji}>🛡️</Text>
          <Text style={styles.shieldTitle}>Protected by Family Safety</Text>
          <Text style={styles.shieldDesc}>Your parents are connected to ensure your safety and well-being.</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Status: Active & Monitoring</Text>
          <Text style={styles.infoSubText}>Location sharing is enabled.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  card: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2f3640', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#718093', marginBottom: 30 },
  parentButton: { backgroundColor: '#40739e', padding: 18, borderRadius: 12, width: '100%', alignItems: 'center', marginBottom: 15 },
  childButton: { backgroundColor: '#44bd32', padding: 18, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#dcdde1' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#2f3640' },
  backText: { color: '#0984e3', fontWeight: 'bold' },
  content: { padding: 20 },
  statusCard: { backgroundColor: '#e1f5fe', padding: 15, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: '#b3e5fc' },
  statusTitle: { fontSize: 16, fontWeight: 'bold', color: '#01579b', marginBottom: 5 },
  statusText: { fontSize: 14, color: '#0288d1' },
  featureButton: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  featureTitle: { fontSize: 18, fontWeight: 'bold', color: '#2f3640', marginBottom: 5 },
  featureDesc: { fontSize: 14, color: '#718093' },
  childContent: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  shieldBox: { alignItems: 'center', backgroundColor: '#fff', padding: 30, borderRadius: 20, width: '100%', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 3, marginBottom: 20 },
  shieldEmoji: { fontSize: 60, marginBottom: 15 },
  shieldTitle: { fontSize: 22, fontWeight: 'bold', color: '#2f3640', marginBottom: 10, textAlign: 'center' },
  shieldDesc: { fontSize: 15, color: '#718093', textAlign: 'center', lineHeight: 22 },
  infoBox: { backgroundColor: '#e8f8f5', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center', borderWidth: 1, borderColor: '#a3e4d7' },
  infoText: { fontSize: 16, fontWeight: 'bold', color: '#117a65' },
  infoSubText: { fontSize: 13, color: '#1abc9c', marginTop: 3 }
});
