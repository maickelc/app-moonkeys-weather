import AsyncStorage from "@react-native-async-storage/async-storage"

const STORAGE_KEY = '@my_weathers'

export const storeData = async (value: string[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value.join(','))
  } catch (e) {
    // saving error
  }
}

export const getData = async (): Promise<string[]> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    if(value !== null) {
      if (!value) {
        return [];
      }
      return value.split(',');
    }
  } catch(e) {
    // error reading value
  }
  return [];
}

