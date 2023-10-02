import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Animated, Easing } from 'react-native';

import styles from './styles';

const transparent = 'rgba(0, 0, 0, 0.65)';

const ModalWindow = () => {
  const [openModal, setOpenModal] = useState(false);
  const rotateAnim = new Animated.Value(0);

  useEffect(() => {
    if (openModal) {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,  
          delay: 0, 
          useNativeDriver: true,
        })
      ).start();
    } else {
      rotateAnim.setValue(0);
    }
  }, [openModal, rotateAnim]);

  const spinStyle = {
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  function renderModal() {
    return (
      <Modal visible={openModal} animationType='slide' transparent={true}>
        <TouchableOpacity onPress={() => setOpenModal(false)} style={styles.crossWrapper}>
          <Text style={styles.cross}>X</Text>
        </TouchableOpacity>
        <View style={[styles.modal_container, { backgroundColor: transparent }]}>
          <Animated.View style={[styles.welcome_modal, spinStyle]}>
            <Text style={styles.welcome_text}> Welcome friend </Text>
          </Animated.View>
        </View>
      </Modal>
    );
  }

  return (
    <View>
      <TouchableOpacity style={styles.welcome_btn} onPress={() => setOpenModal(true)}>
        <Text style={styles.btn_text}>🤗</Text>
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
};

export default ModalWindow;
