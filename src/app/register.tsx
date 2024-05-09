import { View, Image, StatusBar } from "react-native"
import { Input } from "@/components/input"
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { colors } from "@/styles/colors"
import { Button } from "@/components/button"

export default function Register() {

    return (
        <View className="flex-1 bg-green-500 items-center justify-center p-8">
            <StatusBar barStyle="light-content"/>
            <Image source={require("@/assets/logo.png")}
                className="h-16"
                resizeMode="contain"
            />

            <View className="w-full mt-12 gap-3">
                <Input>
                    <FontAwesome6
                        name="user-circle"
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder="Nome completo" />
                </Input>
                
                <Input>
                    <MaterialIcons
                        name="alternate-email"
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder="Email" keyboardType="email-address" />
                </Input>
           <Button title="Realizar Inscrição" />

           <Link href="/" 
           className="text-gray-100 text-base font-bold text-center mt-8">
           Já possui ingresso?
           </Link>
           
            </View>
        </View>
    )
}