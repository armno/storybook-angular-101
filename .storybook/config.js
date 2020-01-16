import { configure } from "@storybook/angular";

import "../src/styles.less";

// automatically import all the files with *.stories.ts
const req = require.context("../src/", true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
