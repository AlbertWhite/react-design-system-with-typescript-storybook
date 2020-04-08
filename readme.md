#### Description

React design system with typescript, storybook, styled component and styled system.

I have also written [an article](https://www.yuebaixu.com/designsystem/) about the implementation for it.

#### To develop

`npm run build` to compile project, `npm version 1.x.x` to create tags, `git push --follow-tags` to create new tag.

#### To use

In package.json of another project, import this project by `"exterior-ui-lib": "git+https://github.com/AlbertWhite/Styled-system-and-storybook.git#v1.0.11"`, then use the components by `import { Text, Link, Box } from 'exterior-ui-lib';`.

[Example](https://github.com/AlbertWhite/react-demos/blob/master/demo44-use-exterior-lib/src/App.js)

#### References:

https://github.com/microsoft/TypeScript-Babel-Starter

https://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6

https://stackoverflow.com/questions/25956937/how-to-build-minified-and-uncompressed-bundle-with-webpack

https://codesandbox.io/s/04w296kk6p?file=/src/index.tsx:270-315
