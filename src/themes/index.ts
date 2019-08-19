import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import { css, withStyles } from "react-with-styles";

import MyTheme from "./defaultTheme";

ThemedStyleSheet.registerTheme(MyTheme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemedStyleSheet };
