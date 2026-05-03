import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
}

export default function CustomButton({ title, onPress }: CustomButtonProps) {
    return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>);

}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        backgroundColor: 'navy',
        padding:12,
        width:150,
    },
    buttonText: {
        color: '#fff'

    }
})


