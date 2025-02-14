from odoo import api, fields, models, _, Command
class AccountAccount(models.Model):
    _inherit = "account.account"


    myfield = fields.Char()