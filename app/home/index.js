import React,{useContext, useEffect} from 'react';
import NavBar from '../../components/navbar';
import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import { homeStyle } from './styles';
import homeImage from '../../assets/4136942.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons/faPiggyBank'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple'
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine'
import { useRouter } from 'expo-router';
import { getAuth } from "firebase/auth";
import { AuthContext } from '../../components/authProvider';

export default function HomePage() {

    const router = useRouter();
    const goToFinanceManagement= () => router.navigate('/financeManagement')
    const goToPlanning = () => router.navigate('/planning')
    const goToInvestments = () => router.navigate('/investments')
    const goToStatistics = () => router.navigate('/statistics')

    const {user} = useContext(AuthContext)

    return (
        user && <View style={homeStyle.outerContainer}>
        <ScrollView contentContainerStyle={homeStyle.scrollView}>
            <View style={homeStyle.container}>

                <Image source={homeImage} 
                    style={homeStyle.homeImage}>
                </Image>
                
                <View style={homeStyle.buttonsContainer}>

                    <View style={homeStyle.row}>
                        <TouchableHighlight style={homeStyle.optionButton} onPress={goToFinanceManagement}>
                            <View style={homeStyle.buttonInnerContainer}>
                                <FontAwesomeIcon icon={faCoins} style={homeStyle.iconStyle} size={30}/>
                                <Text style={homeStyle.buttonText}>Organizar Finanças</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={homeStyle.optionButton} onPress={goToPlanning}>
                            <View style={homeStyle.buttonInnerContainer}>
                                <FontAwesomeIcon icon={faPiggyBank} style={homeStyle.iconStyle} size={30}/>
                                <Text style={homeStyle.buttonText}>Planejamento Econômico</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={homeStyle.row}>
                        <TouchableHighlight style={homeStyle.optionButton} onPress={goToStatistics}>
                            <View style={homeStyle.buttonInnerContainer}>
                                <FontAwesomeIcon icon={faChartSimple} style={homeStyle.iconStyle} size={30}/>
                                <Text style={homeStyle.buttonText}>Estatísticas</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={homeStyle.optionButton}>
                            <View style={homeStyle.buttonInnerContainer}>
                                <FontAwesomeIcon icon={faChartLine} style={homeStyle.iconStyle} size={30}/>
                                <Text style={homeStyle.buttonText}>Investimentos</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        </ScrollView>
        <NavBar />
    </View>

    )
}