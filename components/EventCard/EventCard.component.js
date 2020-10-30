import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../../components/Context.js';
import styles from './EventCard.styles';

const EventCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [context, setContext] = useContext(Context);
    
    return(
        <View>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Text> {props.org} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.link} </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text> {props.org} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.datePopUp}> {props.date} </Text>
                    <Text> {props.link} </Text>
                    <TouchableOpacity style={styles.btnPopUpRSVP}>
                        <Text style={styles.btnText} 
                        onPress={
                            () => {
                                Alert.alert("You successfully have registered for " + props.title + " on " + props.date + "!")
                                setContext([...context,props.title]);
                            }
                        }>RSVP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPopUpExit}>
                        <Text 
                            style={styles.btnText} 
                            onPress={() => {
                            setModalVisible(!isModalVisible)}}>
                                Exit
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default EventCard;