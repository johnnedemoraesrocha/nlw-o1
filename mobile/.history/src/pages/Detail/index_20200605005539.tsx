import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, SafeAreaView } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, LongPressGestureHandler } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg'
import MapView, { Marker }  from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

interface Params {
  id: number;
}

interface Data{
  point: {
    image: string;
    name:string;
    email:string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  itens: {
    title: string;
  }[];
}
const Detail = () => {
  const [data, setData] = useState<Data>({} as Data)
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams =route.params as Params;

  console.log(route.params)

  useEffect(() => {
    api.get(`points/${routeParams.id}`).then( response => {

    })
  })

  function handleNavigateBack(){
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex:1 }}>
        <View style={styles.container} >
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={20} color="#34cb79" />
          </TouchableOpacity>

          <Image style={styles.pointImage} source={{
            uri: 'https://images.unsplash.com/photo-1540661116512-12e516d30ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80' 
          }} >

          </Image>

          <Text style={styles.pointName} >Mercadao do João</Text>
            <Text style={styles.pointItems} >Lampada, Óleo</Text>

            <View style={styles.address}>
              <Text style={styles.addressTitle}>Endereço</Text>
              <Text style={styles.addressContent}>Rio do Sul / SC</Text>
            </View>
        </View>

        <View style={styles.footer}>

          <RectButton style={styles.button} onPress={() => {}}>
            <FontAwesome name="whatsapp" size={20} color="#FFF" />
            <Text style={styles.buttonText}>WhatsApp</Text>
          </RectButton>

          <RectButton style={styles.button} onPress={() => {}}>
            <Icon name="mail" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Email</Text>
          </RectButton>

        </View>
    </SafeAreaView>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },
  
  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
});


export default Detail;