import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../../../config/fb';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import Cliente from '../../components/Cliente';

export default function Home({route}) {

    const [cliente, setCliente] = React.useState([]);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <RN.Button color='#190023' title='ADICIONAR' onPress={() => navigation.navigate('Add', {clientId2: route.params?.clientId})} />
        })
    },[navigation])

    React.useEffect(() => {
        const collectionRef = collection(database, 'cliente');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
          setCliente(
            querySnapshot.docs.map(doc => ({
                id: doc.id,
                emoji: doc.data().emoji,
                name: doc.data().name,
                price: doc.data().price,
                ativo: doc.data().ativo,
                createdAt: doc.data().createdAt,
                clientUID: doc.data().clientId,
            }))
          );
        });
    return unsubscribe;
    },[])

    return(
        <RN.View style={styles.container}>
            <RN.ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <RN.Text style={styles.title2}>Clientes</RN.Text>
                {cliente.map(cliente => <Cliente key={cliente.id} {...cliente} />)}
            </RN.ScrollView>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#190023',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16,
    },
    title2: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16,
        color: 'white'
    }
});