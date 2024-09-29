import { useWeatherStore } from '@/stores/weatherStore'
import { getTemperatura } from '@/helpers/getWeather'

//logica para conectar use con get

export const useWeather = async () => {
  const temperatura = await getTemperatura()
  const weatherStore = useWeatherStore()
  weatherStore.setTemperatura(temperatura)
}
