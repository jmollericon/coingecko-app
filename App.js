import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const App = () => {
  const [coins, setCoins] = useState([])

  const loadData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    setCoins(res.data)
  }

  useEffect(() => {
    loadData()
  })
  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    flex: 1
  }
})

export default App
