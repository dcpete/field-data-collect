import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const ProjectRow = ({ name }) => (
  <RectButton
    style={styles.projectRow}
    onPress={() => console.log(`pressed ${name}`)}>
    <Text style={styles.textProjectRow}>
      {name}
    </Text>
  </RectButton>
)

const Projects = ({ isDarkMode, projects }) => {
  const renderProjectItem = ({ item }) => (
    <ProjectRow name={item.name} />
  )

  return (
    <SafeAreaView style={[styles.background, isDarkMode && styles.backgroundDarkMode]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : "#ffffff"} />
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item, itemIndex) => `projectRow${itemIndex}`}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListFooterComponent={() => (
          <>
            <View style={styles.separator} />
            <RectButton
              style={styles.projectRow}
              onPress={() => console.log(`pressed add new project`)}>
              <Text style={styles.textProjectRow}>Add new project</Text>
            </RectButton>
          </>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F3F3F3",
    padding: 10,
  },
  backgroundDarkMode: {
    backgroundColor: "#222",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  viewListFooter: {
    marginVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ccc"
  },
  projectRow: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  textProjectRow: {
    fontSize: 18,
  }
})

export default Projects
