import { src, dest, parallel } from "gulp";
import LessAutoprefix from "less-plugin-autoprefix";
import less from "gulp-less";

function copyLess(toDir: string) {
  return function CopyLess() {
    return src("src/**/*.less").pipe(dest(toDir));
  };
}

function buildLess(toDir: string) {
  return function BuildLess() {
    return src("src/style/index.less")
      .pipe(
        less({
          plugins: [new LessAutoprefix({ browsers: ["last 2 versions"] })],
          javascriptEnabled: true,
        })
      )
      .pipe(dest(toDir));
  };
}

export default parallel(
  copyLess("lib"),
  copyLess("es"),
  buildLess("es"),
  buildLess("lib")
);
