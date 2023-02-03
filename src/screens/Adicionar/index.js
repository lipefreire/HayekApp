import * as React from 'react';
import * as RN from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../../config/fb';
import { useNavigation } from '@react-navigation/native';
import EmojiPicker from 'rn-emoji-keyboard';
import { styles } from './styles'

export default function Add({route}) {
    const navigation = useNavigation();
    var teste = route.params?.clientId2
    
    const [isOpen, setIsOpen] = React.useState(false);
    const [newItem, setNewItem] = React.useState({
        emoji: '🛠️',
        name: '',
        price: 0,
        ativo: true,
        createdAt: new Date(),
        clientUID: `${teste}`
    });

    const handlePick = (emojiObject) => {
        setNewItem({
            ...newItem,
            emoji: emojiObject.emoji,
        });
    }

    const onSend = async () => {
        const docRef = await addDoc(collection(database, 'cliente'), newItem);
        navigation.goBack();
      }

    return(
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Novo Cliente</RN.Text>
            <RN.Text onPress={() => setIsOpen(true)} style={styles.emoji}>{newItem.emoji}</RN.Text>
            <EmojiPicker
                onEmojiSelected={handlePick}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
                <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, name: text})}
                    style={styles.containerInputPassword} 
                    placeholder='Nome do Cliente' 
                    placeholderTextColor='#942cbc'
                />
                <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, price: text})}
                    style={styles.containerInputPassword} 
                    placeholder='Preço do Serviço'
                    keyboardType="number-pad"
                    placeholderTextColor='#942cbc'
                />
            <RN.TouchableOpacity 
            style={styles.containerButtonLogin}
            onPress={onSend}
            >
                <RN.Text style={styles.textButtonLogin}>PUBLICAR</RN.Text>
            </RN.TouchableOpacity>
        </RN.View>
    )
}