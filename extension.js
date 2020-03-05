const Main = imports.ui.main

let Me = imports.misc.extensionUtils.getCurrentExtension()
const KeyManager = Me.imports.key_manager

function init() {
}

function toggle() {
    if (hidden) {
        show()
    } else {
        hide()
    }
}

function hide() {
    menu = Main.panel.statusArea.dateMenu
    menu.actor.set_opacity(0)
    hidden = true
}

function show() {
    menu = Main.panel.statusArea.dateMenu
    menu.actor.set_opacity(255)
    hidden = false
}

let key_manager = null
let hidden = false

function enable() {
    hide()

    key_manager = new KeyManager.KeyManager()
    key_manager.listenFor("<ctrl><alt><shift>c", function() {
        toggle()
    })
}

function disable() {
    key_manager.stopListening()
    key_manager = null

    show()
}
