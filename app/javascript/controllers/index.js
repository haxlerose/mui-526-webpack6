import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"
window.Stimulus = Application.start()
Stimulus.debug = true
const context = require.context("controllers", true, /\.js*/)
Stimulus.load(definitionsFromContext(context))
