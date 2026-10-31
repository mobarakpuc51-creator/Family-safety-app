import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function ChildScreen({ onBack }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daughter's Safety App</Text>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>Switch Role</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.shieldBox}>
          <Text style={styles.shieldEmoji}>🛡️</Text>
          <Text style={styles.shieldTitle}>Protected & Monitored</Text>
          <Text style={styles.shieldDesc}>Your device is securely connected with your parents for safety.</Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>🟢 Location & Safety Active</Text>
          <Text style={styles.statusSub}>Running safely in the background</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#dcdde1' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#2f3640' },
  backText: { color: '#0984e3', fontWeight: 'bold' },
  content: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  shieldBox: { alignItems: 'center', backgroundColor: '#fff', padding: 30, borderRadius: 20, width: '100%', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 3, marginBottom: 20 },
  shieldEmoji: { fontSize: 60, marginBottom: 15 },
  shieldTitle: { fontSize: 22, fontWeight: 'bold', color: '#2f3640', marginBottom: 10, textAlign: 'center' },
  shieldDesc: { fontSize: 15, color: '#718093', textAlign: 'center', lineHeight: 22 },
  statusBox: { backgroundColor: '#e8f8f5', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center', borderWidth: 1, borderColor: '#a3e4d7' },
  statusText: { fontSize: 16, fontWeight: 'bold', color: '#117a65' },
  statusSub: { fontSize: 13, color: '#1abc9c', marginTop: 3 }
});
