import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native';
import React, { useState } from "react";
import axios from "axios";
import styles from './styles.js';

export default function VeiculoForm() {
    //Variáveis state 
    const [placa, setPlaca] = useState("");
    const [ano,setAno] = useState("");
    const [mensalidade, setMensalidade] = useState("");

    //Função que Cadastra os dados utilizando a API 
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/veiculos", {
                placa: placa,
                ano: ano,
                mensalidade: mensalidade
            });
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>

                <Text style={styles.text}>Digite a Placa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a placa"
                    value={nome}
                    onChangeText={(texto) => setPlaca(texto)}
                />

                <Text style={styles.text}>Digite o Ano do Veículo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o ano do seu Veiculo"
                    value={ano}
                    onChangeText={(texto) => setAno(texto)}
                />
                <Text style={styles.text}>Digite a Mensalidade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a mensalidade"
                    value={ano}
                    onChangeText={(texto) => setMensalidade(texto)}
                />
            </View>
            <View style={styles.areaBtn}>
                <Pressable
                    style={[styles.botao, {
                        backgroundColor: "#1d75cd"
                    }]}
                    onPress={handleClick}
                >
                    <Text style={styles.botaoText}>Cadastrar</Text>
                </Pressable >
            </View>
        </SafeAreaView>
    )
}; 
