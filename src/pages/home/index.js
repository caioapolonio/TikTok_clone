import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, FlatList } from "react-native";
import FeedItem, {} from '../../components/FeedItem'
export function Home(){
    let feedItems = [
        {
            id: '1',
            video: 'https://i.imgur.com/gQuJkYi.mp4',
            name: '@apxlxnix',
            description: 'Teste TikTok'
        },
        {
            id: '2',
            video: 'https://i.imgur.com/BYDJRkF.mp4',
            name: '@Caio',
            description: 'Teste TikTok 2'
        },
        {
            id: '3',
            video: 'https://i.imgur.com/tNmHN0b.mp4',
            name: '@Vinicius',
            description: 'Teste TikTok 3'
        }
    ]
    return(
        <View style={styles.container}>
            <View style={styles.labels}>
                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: "#DDD" }]}>Seguindo</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: "#FFF" }]}>Para você</Text>
                    <View style={styles.indicator}></View>
                </TouchableOpacity>
            </View>
            <FlatList
                 data={feedItems}
                 renderItem={({item}) => <FeedItem data={item}/>}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000"
    },
    labels:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        position: 'absolute',
        top: 6,
        left: 0,
        right: 0,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight+10: 55,
        zIndex: 99,
    },
    labelText:{
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    indicator:{
        backgroundColor: "#FFF",
        width: 32,
        height: 2,
        alignSelf: 'center',
    }
})