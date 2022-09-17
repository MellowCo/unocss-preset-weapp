// 导入unocss
import UnoCSS from 'unocss/webpack'
// import transformWeClass from 'unplugin-transform-we-class/webpack'
// import { defaultAttributes, defaultIgnoreNonValuedAttributes, presetAttributifyWechat } from 'unplugin-unocss-attributify-wechat/webpack'

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
  outputRoot: `dist/${process.env.TARO_ENV}`,
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
      // https://github.com/unocss/unocss
      chain.plugin('unocss')
        .use(UnoCSS())

      // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
      // chain.plugin('presetAttributifyWechat').use(
      //   presetAttributifyWechat({
      //     attributes: [...defaultAttributes, 'my-attr'],
      //     ignoreNonValuedAttributes: [...defaultIgnoreNonValuedAttributes, 'my-ignore'],
      //     nonValuedAttribute: true,
      //     prefix: 'li-',
      //     prefixedOnly: false,
      //     transformRules,
      //   }))

      // https://github.com/MellowCo/unplugin-transform-we-class
      // chain
      //   .plugin('transformWeClass')
      //   .use(transformWeClass({
      //     rules: transformRules
      //   }))
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
      // https://github.com/unocss/unocss
      chain.plugin('unocss')
        .use(UnoCSS())

      // https://github.com/MellowCo/unplugin-unocss-attributify-wechat
      // chain.plugin('presetAttributifyWechat').use(
      //   presetAttributifyWechat({
      //     attributes: [...defaultAttributes, 'my-attr'],
      //     ignoreNonValuedAttributes: [...defaultIgnoreNonValuedAttributes, 'my-ignore'],
      //     nonValuedAttribute: true,
      //     prefix: 'li-',
      //     prefixedOnly: true,
      //   }))

      // https://github.com/MellowCo/unplugin-transform-we-class
      // chain
      //   .plugin('transformWeClass')
      //   .use(transformWeClass())
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
