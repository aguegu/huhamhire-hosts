# -*- mode: python -*-
a = Analysis([os.path.join(HOMEPATH,'support\\_mountzlib.py'), os.path.join(HOMEPATH,'support\\useUnicode.py'), 'hosts_setup_OnL.py'],
             pathex=['F:\\\xcf\xee\xc4\xbf\\hosts_SDK\\pyHosts_OL\\pyinstaller-1.5.1'])
pyz = PYZ(a.pure)
exe = EXE( pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name=os.path.join('dist', 'hosts_setup_OL.exe'),
          debug=False,
          strip=False,
          upx=True,
          console=True , icon='icon\\icon.ico')
