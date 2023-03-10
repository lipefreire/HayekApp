import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../../config/fb';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Cliente({
    id,
    emoji,
    name,
    price,
    ativo,
}) {

    const navigation = useNavigation();

    const onDelete = () => {
        const docRef = doc(database, 'cliente', id);
        deleteDoc(docRef);
    }

    const Finalizar = () => {
        const docRef = doc(database, 'cliente', id);
        updateDoc(docRef, { ativo: false });
    }

    return(
        <RN.View>
            <RN.View style={styles.productContainer}>
                <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <RN.Text style={styles.emoji}>{emoji}</RN.Text>
                    {/* <AntDesign onPress={Editar} name="edit" size={30} color="black" /> */}
                    <AntDesign onPress={onDelete} name="delete" size={30} color="black" />
                </RN.View>
                <RN.Text style={styles.name}>{name}</RN.Text>
                <RN.Text style={styles.price}>R$ {price}</RN.Text>
                {!ativo ? (
                    <RN.TouchableOpacity 
                    style={[styles.button, {backgroundColor: 'gray'}]}>
                    <RN.Text style={styles.buttonText}>Finalizado</RN.Text>
                </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity 
                    onPress={Finalizar}
                    style={styles.button}>
                    <RN.Text style={styles.buttonText}>Ativo</RN.Text>
                </RN.TouchableOpacity>
                )}
                
            </RN.View>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    button: {
        backgroundColor: '#942cbc',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center'
   },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});