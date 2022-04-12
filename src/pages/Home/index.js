import React, { useState } from 'react';
import { View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Picker,
    Pressable,
    Modal
} from 'react-native';


import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'



export default function Home() {

    
    
   

    const categories = [
        {
            "name": "American Curl",
            "img": "https://cdn.fakercloud.com/avatars/drewbyreese_128.jpg",
            "id": "1",
        },
        {
            "name": "Siberian",
            "img": "https://cdn.fakercloud.com/avatars/kucingbelang4_128.jpg",
            "id": "2"
        },
        {
            "name": "Tonkinese",
            "img": "https://cdn.fakercloud.com/avatars/gu5taf_128.jpg",
            "id": "3"
        },
        {
            "name": "Pixiebob",
            "img": "https://cdn.fakercloud.com/avatars/mhudobivnik_128.jpg",
            "id": "4"
        },
        {
            "name": "Himalayan",
            "img": "https://cdn.fakercloud.com/avatars/lososina_128.jpg",
            "id": "5"
        },
        {
            "name": "Balinese",
            "img": "https://cdn.fakercloud.com/avatars/tgormtx_128.jpg",
            "id": "6"
        },
        {
            "name": "Toyger",
            "img": "https://cdn.fakercloud.com/avatars/reabo101_128.jpg",
            "id": "7"
        },
        {
            "name": "Sphynx",
            "img": "https://cdn.fakercloud.com/avatars/d00maz_128.jpg",
            "id": "8"
        },
        {
            "name": "Havana",
            "img": "https://cdn.fakercloud.com/avatars/raphaelnikson_128.jpg",
            "id": "9"
        },
        {
            "name": "Nebelung",
            "img": "https://cdn.fakercloud.com/avatars/bagawarman_128.jpg",
            "id": "10"
        },
        {
            "name": "American Wirehair",
            "img": "https://cdn.fakercloud.com/avatars/heykenneth_128.jpg",
            "id": "11"
        },
        {
            "name": "Kurilian Bobtail",
            "img": "https://cdn.fakercloud.com/avatars/opnsrce_128.jpg",
            "id": "12"
        },
        {
            "name": "Thai",
            "img": "https://cdn.fakercloud.com/avatars/jedbridges_128.jpg",
            "id": "13"
        },
        {
            "name": "Scottish Fold",
            "img": "https://cdn.fakercloud.com/avatars/calebjoyce_128.jpg",
            "id": "14"
        },
    ]

    const animals = [
            {
                "name": "Howe",
                "age": 24335,
                "img": "http://placeimg.com/640/480/cats",
                "id": "1",
            },
            {
                "name": "Brekke",
                "age": 4418,
                "img": "http://placeimg.com/640/480/cats",
                "id": "2"
            },
            {
                "name": "Doyle",
                "age": 71480,
                "img": "http://placeimg.com/640/480/cats",
                "id": "3"
            },
            {
                "name": "Emmerich",
                "age": 18967,
                "img": "http://placeimg.com/640/480/cats",
                "id": "4"
            },
            {
                "name": "Gaylord",
                "age": 8633,
                "img": "http://placeimg.com/640/480/cats",
                "id": "5"
            },
            {
                "name": "Kunze",
                "age": 39797,
                "img": "http://placeimg.com/640/480/cats",
                "id": "6"
            },
            {
                "name": "Langworth",
                "age": 42159,
                "img": "http://placeimg.com/640/480/cats",
                "id": "7"
            },
            {
                "name": "Waters",
                "age": 15978,
                "img": "http://placeimg.com/640/480/cats",
                "id": "8"
            },
            {
                "name": "Weber",
                "age": 20963,
                "img": "http://placeimg.com/640/480/cats",
                "id": "9"
            },
            {
                "name": "Hansen",
                "age": 73009,
                "img": "http://placeimg.com/640/480/cats",
                "id": "10"
            },
            {
                "name": "Stracke",
                "age": 16714,
                "img": "http://placeimg.com/640/480/cats",
                "id": "11"
            },
            {
                "name": "Kassulke",
                "age": 66982,
                "img": "http://placeimg.com/640/480/cats",
                "id": "12"
            },
            {
                "name": "Bauch",
                "age": 24558,
                "img": "http://placeimg.com/640/480/cats",
                "id": "13"
            },
    
    ]

//     const getMoviesFromApiAsync = async () => {
//   try {
//     const response = await fetch(
//       'https://reactnative.dev/movies.json'
//     );
//     const json = await response.json();
//     return json.movies;
//   } catch (error) {
//     console.error(error);
//   }
// };
// {
//     {
//         "name": "Howe",
//         "age": 24335,
//         "img": "http://placeimg.com/640/480/cats",
//         "id": "1",

//     "category": name
// }
// ...animal

// {
//     // "name": "Howe",
//     // "age": 24335,
//     // "img": "http://placeimg.com/640/480/cats",
//     // "id": "1",
//     "category": name
// },
// 0

    const listaCompleta = () => {
        return animals.map((animal,index)=>{
            return { ...animal, category: categories[index].name}
        })
    }

    const listaCinco = listaCompleta()

    const Card = () => {
        return listaCinco.map((animal, index) => {
            

                
            const [modalVisible, setModalVisible] = useState(false);
            
                    return (<>
                        <Pressable
                            key={index}
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={styles.card}>
                                <View>
                                    <Image 
                                        source={animal.img}
                                        style={styles.cardImage}
                                    />  
                                </View>
                                
                                <View style={styles.textCardContainer}>

                                    <Text>{animal.name}</Text>
                                    <Text>{animal.category}</Text>
                                    <Text>{animal.age} Anos</Text>
                                    
                                    {/* <Text>{item}</Text> */}
                                </View>
                            </View>
                        </Pressable>
                        
                        <Pressable
                        
                            onPress={() => setModalVisible(false)}
                        >
                            <Modal
                                visible={modalVisible}
                                transparent={true}
                                animationType="fade"
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Aqui estão mais detalhes sobre o animal:</Text>
                                        <Text >{animal.name}</Text>
                                    </View>
                                </View>
                            </Modal>
                        </Pressable>
                    </>);
                    
        });
    };

    
categories.map((item)=> {

})

    const Select = () => {
        return categories.map(
            (item) => {
          
                return (
                    <Picker.Item key={item.id} label={item.name}/>
                    // <View key={item.key} style={styles.card}>
                    //     <View >
                    //         <Image
                    //             source={item.img}
                    //             style={styles.cardImage}
                    //         />  
                    //     </View>
                        
                    //     <View style={styles.textCardContainer}>

                    //         <Text style={{textAlign: 'start'}}>{item.name}</Text>
                    //         {/* <Text>{item}</Text> */}
                    //     </View>
                    // </View>
                  );
            
          
        });
    };

    const navigation = useNavigation();

    const [selectedValue, setSelectedValue] = useState();

    return (
        <View style={styles.container}>                                                                         
             <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                 <Text onPress={ () => navigation.navigate('SignIn')} style={styles.signButton}>X</Text> 
               
                <Text style={styles.title}>Home</Text>
                <Text style={styles.subtitle}>Escolha uma categoria para visualizar</Text> 
                  
            </Animatable.View>

            <View style={styles.pickerContainer}>
                <View>
                    <Picker style={styles.pickerStyle}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {Select()}
                        {/* <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" /> */}
                    </Picker>
                    <View style={styles.arrow}/>
                </View>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.listTitle}>Resultado da busca:</Text>
                <View>{Card()}</View>

            </View>

           
      </View>


       

    );
}


const styles = StyleSheet.create({

    subtitle: {
        marginBottom: 10
    },
    
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000099',
      },
    signButton: {
        padding: 5,
        textAlign: 'center',
        width: 30,
        border: "1px solid #000",
        borderRadius: 15,
        alignSelf: 'flex-end'
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
    shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
    modalText: {
        textAlign: 'end' 
      },

    pickerStyle:{
        height: 52,
        width: "150px",
        backgroundColor: '#FBC234',
        boxShadow: "0px 7px 20px #00000075",
        appearance: "none",
        borderRadius: '25px',
        padding: "15px",
        border: 'none',
        color: '#fff',

    },
    arrow: {
        border: '1px solid #000',
        width: '5px',
        height: '5px',
        position: 'absolute',
        right: 45,
        top: 25
    },
    pickerContainer: {
        display: 'flex',
        height: 100,
        paddingStart: 20,
        width: 200,
        justifyContent: "center",
      },
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    card: {
        borderRadius: '5px',
        border: '1px solid #000',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',

        
    },
    containerForm: {
        display: 'flex',
        height: 'auto',
        width: '100vw', 
        backgroundColor: '#ffc9f2',
        padding: 32
    },
    textCardContainer: {
        display: 'flex',
        justifyContent: 'start',
        width: '200px',
        //textAlign: 'center',
        paddingLeft: 20
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    text:{
        color: 'a1a1a1'
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',        
        color: '#cc3fe6',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#cc3fe6',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    logoContainer:{
        alignSelf: 'center',
        paddingTop: 80
    },
    imageProps: { width: '250px', height: '250px'},
    containerHeader:{
        marginTop: '5%',
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    cardImage: {
        width: '75px',
        height: '75px',
        backgroundColor: '#cc3fe6',
    }
})


