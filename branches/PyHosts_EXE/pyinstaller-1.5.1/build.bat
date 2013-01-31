@echo off

title build

cd %~dp0

%~d0

Configure.py
makespec.py --onefile --console --icon=icon\icon.ico --name=hosts_setup_OL hosts_setup_OnL.py
build.py hosts_setup_OL\hosts_setup_OL.spec