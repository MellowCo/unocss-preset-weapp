import { defineBuildConfig } from 'unbuild'
import { isWindows } from 'std-env'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/theme',
    'src/utils',
    'src/rules',
    'src/colors',
    'src/variants',
    'src/transformer',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    },
  },
  failOnWarn: !isWindows,
})
