import spur

shell = spur.SshShell(hostname='ringzer0team.com', port=12643, username='number', password='Z7IwIMRC2dc764L', missing_host_key=spur.ssh.MissingHostKey.accept)

result = shell.spawn(['1'])

print result.output
