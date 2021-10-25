import React from 'react';
import {StatusBar, View,StyleSheet} from "react-native";

const Screen = ({style, children}) => {

    return (
        <View style={[styles.container, style]}>
            <StatusBar
                animated={true}
                backgroundColor="#ff4759"
            />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})
export default Screen