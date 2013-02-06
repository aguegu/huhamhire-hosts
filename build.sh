#!/bin/sh

# Shell script to generate hosts files
# author: Weihong Guan (@aGuegu)

# upstream set to git://github.com/huhamhire/huhamhire-hosts.git
git checkout upstream/Hosts-Modules -- info.hosts localhost.hosts ipv4_mods/ ipv6_mods/ share_mods/

cat info.hosts > /tmp/header.hosts.$$
date +"# update timestamp: %s" >> /tmp/header.hosts.$$
cat localhost.hosts >> /tmp/header.hosts.$$

for folder in $(ls -d *_mods)
do
	>/tmp/$folder.hosts.$$
	for file in $(ls $folder/)
	do
		cat $folder/$file >> /tmp/$folder.hosts.$$
	done
done

cat /tmp/header.hosts.$$ /tmp/share_mods.hosts.$$ /tmp/ipv4_mods.hosts.$$ /tmp/adblock_mods.hosts.$$ > downloads/hosts_ipv4
cat /tmp/header.hosts.$$ /tmp/share_mods.hosts.$$ /tmp/ipv6_mods.hosts.$$ /tmp/adblock_mods.hosts.$$ > downloads/hosts_ipv6

rm /tmp/*.$$

cd downloads

cp hosts_ipv4 hosts
tar -cf hosts_ipv4.tar hosts

cp hosts_ipv6 hosts
tar -cf hosts_ipv6.tar hosts

rm hosts

gzip -f hosts_ipv4.tar
gzip -f hosts_ipv6.tar
