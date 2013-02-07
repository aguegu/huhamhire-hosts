#!/bin/sh

# Shell script to generate hosts files
# author: Weihong Guan (@aGuegu)

# upstream set to git://github.com/huhamhire/huhamhire-hosts.git
git fetch upstream
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

echo "# region adblock \n" > /tmp/adblock_mods.hosts.tmp.$$
cat /tmp/adblock_mods.hosts.$$ >> /tmp/adblock_mods.hosts.tmp.$$
echo "# endregion\n" >> /tmp/adblock_mods.hosts.tmp.$$
mv /tmp/adblock_mods.hosts.tmp.$$ /tmp/adblock_mods.hosts.$$

cat /tmp/header.hosts.$$ /tmp/share_mods.hosts.$$ /tmp/ipv4_mods.hosts.$$ /tmp/adblock_mods.hosts.$$ > downloads/hosts_ipv4
cat /tmp/header.hosts.$$ /tmp/share_mods.hosts.$$ /tmp/ipv6_mods.hosts.$$ /tmp/adblock_mods.hosts.$$ > downloads/hosts_ipv6

rm /tmp/*.$$

cd downloads

cp hosts_ipv4 hosts
tar -zcf hosts_ipv4.gz hosts

cp hosts_ipv6 hosts
tar -zcf hosts_ipv6.gz hosts

rm hosts
