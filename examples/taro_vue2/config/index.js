// 导入unocss
const UnoCSS = require('unocss/webpack').default
const presetWxapp = require('unocss-preset-wxapp').default
const transformWxClass = require('unplugin-transform-wx-class/webpack')
const transformSelector = require('unplugin-transform-wx-class/transformSelector')

const config = {
  projectName: 'taro_vue2',
  date: '2022-7-9',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 合并webpack配置
    webpackChain(chain){
      chain.plugin('unocss')
        .use(UnoCSS({
          presets: [
            presetWxapp(),
          ],
          shortcuts: [
            {
              'border-base': 'border border-gray-500_10',
              'center': 'flex justify-center items-center',
            },
          ],
          postprocess: (css) => {
            css.selector = transformSelector(css.selector)
            return css
          },
        }))

      chain
        .plugin('transformWxClass')
        .use(transformWxClass())
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 合并webpack配置
    webpackChain(chain){
      chain.plugin('unocss')
        .use(UnoCSS({
          presets: [
            presetWxapp(),
          ],
          shortcuts: [
            {
              'border-base': 'border border-gray-500_10',
              'center': 'flex justify-center items-center',
            },
          ],
          postprocess: (css) => {
            css.selector = transformSelector(css.selector)
            return css
          },
        }))

      chain
        .plugin('transformWxClass')
        .use(transformWxClass())
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
