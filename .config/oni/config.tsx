
import * as React from "react"
import * as Oni from "oni-api"

export const activate = (oni: Oni.Plugin.Api) => {
    console.log("config activated")

    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))

    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")

}

export const deactivate = (oni: Oni.Plugin.Api) => {
    console.log("config deactivated")
}

export const configuration = {
    //add custom config here, such as
    //

    "ui.colorscheme": "rdark",
      'colors.background': '#EEE8D5',
      'colors.editor.background': '#FDF6E3',
      'colors.highlight.mode.normal.background': '#268BD2',
      'colors.highlight.mode.visual.background': '#D33682',
      'colors.highlight.mode.insert.background': '#2AA198',
      'colors.highlight.mode.operator.background': '#CB4B16',
      'colors.editor.hover.title.background': '#FDF6E3',
      'colors.menu.background': '#EEE8D5',
      'colors.menu.foreground': '#586E75',
      'colors.toolTip.background': '#FDF6E3',
      'colors.sidebar.foreground': '#657B83',
      'colors.editor.hover.contents.background': '#3F4652',
      'colors.editor.hover.contents.foreground': '#B4BEBE',

    "ui.fontSize": "14px",
    "oni.hideMenu": "hidden",
    "sidebar.enabled": false,
    "statusbar.enabled": false,
    "autoClosingPairs.enabled": false,

    "tabs.mode": "hidden",

    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    "oni.loadInitVim": true,
    "editor.fontSize": "16px",
    "editor.renderer": "canvas",
    //"editor.fontFamily": "Monaco",

    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "none",
}
