import { Button, StyleSheet, Text, View } from 'react-native'

//navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../App"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList,
'Details'>

import React from 'react'

const Details = ({route}: DetailsProps) => {
    const {productId} = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
    <View style={styles.container}>
      <Text>Details: {productId}</Text>
      <Button
      title='Go to Home'
    //   onPress={() => navigation.navigate("Home")}
         onPress={() => navigation.goBack()}
      />
      <Button
      title='Go back to first screen'
    //   onPress={() => navigation.pop(2)}
         onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})
