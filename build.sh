#!/bin/sh

# Shell script to generate hosts files
# author: Weihong Guan (@aGuegu)

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

cat /tmp/header.hosts.$$ /tmp/share_mods.hosts.$$ /tmp/ipv4_mods.hosts.$$ /tmp/adblock_mods.hosts.$$ > tar/hosts_ipv4
cat /tmp/header.hosts.$$ /tmp/share_mods.hosts.$$ /tmp/ipv6_mods.hosts.$$ /tmp/adblock_mods.hosts.$$ > tar/hosts_ipv6

rm /tmp/*.$$

cd tar

tar -cf hosts_ipv4.tar hosts_ipv4
tar -cf hosts_ipv6.tar hosts_ipv6
