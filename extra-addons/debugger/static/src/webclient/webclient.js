/** @odoo-module **/
import { WebClient } from "@web/webclient/webclient";
import { WebClientPanelComponent } from './components/webClientPanelComponent'

WebClient.prototype.constructor.components = {
    ...WebClient.components,
    WebClientPanelComponent,
}
