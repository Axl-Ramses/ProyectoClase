
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    type: "text" | "password" | "email" | "number";
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
};

export default function CustomInput({ type, placeholder, value, onChange }: Props) {

    return (
        <View>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />

            <TouchableOpacity>
                <Text>Icon Button</Text>
                <Ionicons name="eye" size={15} />

            </TouchableOpacity>

        </View>
    );
}