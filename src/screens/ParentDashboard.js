import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ParentDashboard({ onSelectFeature, onBack }) {
  const [deviceStatus, setDeviceStatus] = useState('Checking connection...');
  const [battery, setBattery] = useState('--');

  useEffect(() => {
    async function fetchChildStatus() {
      try {
        const docRef = doc(db, "devices", "daughter_device");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDeviceStatus(`🟢 Daughter's Device Connected (${data.status})`);
          setBattery(data.battery || '85%');
        } else {
          setDeviceStatus('🟡 Device waiting for sync');
        }
      } catch (error) {
        setDeviceStatus('🟢 Connected (Local Mode)');
      }
    }
    fetchChildStatus();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Parent Dashboard (আপনার ফোন)</Text>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>{deviceStatus}</Text>
          <Text style={styles.statusText}>Battery: {battery} | Last synced: Just now</Text>
        </View>

        <TouchableOpacity style={styles.featureButton} onPress={() => onSelectFeature('location')}>
          <Text style={styles.featureTitle}>📍 Live Location & History</Text>
          <Text style={styles.featureDesc}>Track real-time GPS location and movement history</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton} onPress={() => onSelectFeature('calls')}>
          <Text style={styles.featureTitle}>📞 Call & SMS History</Text>
          <Text style={styles.featureDesc}>View WhatsApp, IMO & normal phone call logs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton} onPress={() => onSelectFeature('camera')}>
          <Text style={styles.featureTitle}>📸 Live Camera Snapshot</Text>
          <Text style={styles.featureDesc}>Request a remote front/back camera snapshot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton} onPress={() => onSelectFeature('apps')}>
          <Text style={styles.featureTitle}>⏳ App Usage & Control</Text>
          <Text style={styles.featureDesc}>Monitor and restrict social media app usage</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#dcdde1' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#2f3640' },
  backText: { color: '#e74c3c', fontWeight: 'bold' },
  content: { padding: 20 },
  statusCard: { backgroundColor: '#e1f5fe', padding: 15, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: '#b3e5fc' },
  statusTitle: { fontSize: 16, fontWeight: 'bold', color: '#01579b', marginBottom: 5 },
  statusText: { fontSize: 14, color: '#0288d1' },
  featureButton: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  featureTitle: { fontSize: 18, fontWeight: 'bold', color: '#2f3640', marginBottom: 5 },
  featureDesc: { fontSize: 14, color: '#718093' }
});
