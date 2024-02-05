import { Config } from 'amo-widget-builder'
import * as path from 'path'
export const config: Config = {
  name: '[MS] Распределение сделок',
  description: 'в рамках ТЗ',
  shortDescription: 'для ТЗ',
  tourDescription: 'тур дескрипшн',
  advancedSettingsTitle: '[MS] Настройки Распределение сделок ',
  version: '1.0.0',
  fakeConfig: {
    required: false
  },
  locales: ['ru'],
  bundleDir: path.resolve(__dirname, '../dist'),
  outDir: path.resolve(__dirname, '..')
}