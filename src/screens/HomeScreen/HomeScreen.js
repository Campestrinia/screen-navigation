import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='About' onPress={() => navigation.navigate('About')}>About</Button>
        </View>
    )
}