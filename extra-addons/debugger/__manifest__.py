# -*- coding: utf-8 -*-
# 2025
# 
{
    'name': 'debugger Panel',
    'version': '18.0.1.0.0',
    'summary': '',
    'description': """
    Debugger Panel
    """,
    'category': '',
    'depends': ['web'],
    'data': [],
    'assets': {
        'web.assets_backend': [
            ('include', 'web._assets_helpers'),
            ('include', 'web._assets_backend_helpers'),
            'debugger/static/src/webclient/**/*',
        ]
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
