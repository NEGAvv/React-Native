import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ContactItem = ({ contact }) => {
  return (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{contact.firstName} {contact.lastName}</Text>
      <Text style={styles.contactInfo}>Email: {contact.email}</Text>
      <Text style={styles.contactInfo}>Phone: {contact.phone}</Text>
    </View>
  );
};

export default ContactItem;
