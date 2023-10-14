import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import {useRef, useState} from 'react'
import {Video} from 'expo-av'

const { height: heightScreen } = Dimensions.get("screen")

const FeedItem = ({data}) => {
    const video = useRef(null)

    const [status, setStatus] = useState({})

    const handlePlayer = () => {
        status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
    }

  return (
  <Pressable onPress={handlePlayer}>
    <View
     style={[styles.info, {bottom: 110}]} 
    >
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
    </View>
    <Video
     ref={video}
     style={{ width: '100%', height: heightScreen }}
     source={{ uri:data?.video }}
     resizeMode='cover'
     shouldPlay={false}
     isMuted={false}
     isLooping
     onPlaybackStatusUpdate={ status => setStatus(() => status) }
     />
     
  </Pressable>
  )
}
const styles = StyleSheet.create({
    info:{
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8,
    },
    name:{
        color: "#FFF",
        fontWeight: 'bold',
        marginBottom: 4,
        textShadowColor: 'rgba(0,0,0, 0.90)'
        
    },
    description:{
        color: "#FFF",
    }
})

export default FeedItem;
