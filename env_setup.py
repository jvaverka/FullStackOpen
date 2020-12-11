"""
Desired Environment-
1) python3 - anaconda installed
2) vscode installed
3) full_stack_open directories created
4) git installed / ssh keys configured
5) full stack open git repository cloned
"""
import socket

hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)

print(hostname, ip_address)
print("git change")
