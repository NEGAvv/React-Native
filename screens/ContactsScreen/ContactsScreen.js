import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ContactItem from './ContactItem';
import styles from './styles';

const contacts = [
    {
      id: 1,
      firstName: "Alina",
      lastName: "Khudolii",
      email: "alina.khudolii@example.com",
      phone: "+1234567890",
    },
    {
      id: 2,
      firstName: "Evgenii",
      lastName: "Khudolii",
      email: "evgenii.khudolii@example.com",
      phone: "+9876543210",
    },
    {
      id: 3,
      firstName: "Kate",
      lastName: "Khudolii",
      email: "kate.khudolii@example.com",
      phone: "+1122334455",
    },
    {
      id: 4,
      firstName: "Petro",
      lastName: "Khudolii",
      email: "petro.khudolii@example.com",
      phone: "+9988776655",
    },
    {
      id: 5,
      firstName: "Inna",
      lastName: "Khudolii",
      email: "inna.khudolii@example.com",
      phone: "+5544332211",
    },
    {
        id: 6,
        firstName: "Nina",
        lastName: "Khudolii",
        email: "nina.khudolii@example.com",
        phone: "+5678432211",
      },
      {
        id: 7,
        firstName: "Oleksandr",
        lastName: "Khudolii",
        email: "oleksandr.khudolii@example.com",
        phone: "+8564732412",
      },
      {
        id: 8,
        firstName: "Oleg",
        lastName: "Khudolii",
        email: "oleg.khudolii@example.com",
        phone: "+4523437431",
      },
      {
        id: 9,
        firstName: "Tetiana",
        lastName: "Khudolii",
        email: "tetiana.khudolii@example.com",
        phone: "+3845634201",
      },
  ];

const ContactsScreen = () => {
  return (
    <ScrollView style={styles.container}>
    {contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} />
    ))}
  </ScrollView>
  )
}

export default ContactsScreen