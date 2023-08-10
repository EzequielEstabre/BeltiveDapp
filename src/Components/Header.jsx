import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../Global/colors'


const Header = () => {
return (
    <View style = {styles.containerHeader}>
    <Text style = { styles.headerText}>Header</Text>
    </View>
)
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.blueBeltive,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 25,
        color: 'white'
    }
    
})