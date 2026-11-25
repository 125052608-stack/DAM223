import {Stack} from "expo-router";

export default function RootLayout(){
    return (  
        <Stack>
            <Stack.Screen
            /* navegacion principal */
            name="(tabs)" 
            /* marca que navegacion stack no es la principal */
            options={{headerShown:false}}/>
            <Stack.Screen
                name="detalle"
                options={{title:"Detalle de usuario"}}
            />
            <Stack.Screen
                name="actualiza"
                options={{title:"Actualizar usuario"}}
            />
        </Stack>
    )
}