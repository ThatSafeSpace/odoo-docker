/** @odoo-module **/
import { Component, onWillStart } from "@odoo/owl";

export class WebClientPanelComponent extends Component {
    static template = 'debugger.WebClientPanelComponent';
    static props = {}
    setup() {
        onWillStart(async () => {
            const appHeaders = new Headers();
            appHeaders.set("Sec-Fetch-Dest", "document");
            appHeaders.append("Sec-Fetch-Mode", "navigate");
            appHeaders.append( "Sec-Fetch-Site", 'none');
            appHeaders.append("Sec-Fetch-User", "?1");
            this.response = await fetch('http://localhost:8069/odoo/sales/7?debug=1', {
                headers: appHeaders
            }).then(function(response) {
                return (response.text());
            });
            console.log(this.response)
        });
    }
}
