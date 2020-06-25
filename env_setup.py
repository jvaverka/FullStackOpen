"""
Desired Environment-
1) python3 - anaconda installed
2) vscode installed
3) full_stack_open directories created
4) git installed / ssh keys configured
5) full stack open git repository cloned
"""
import requests

conda_url = "https://repo.anaconda.com/archive/Anaconda3-2020.02-MacOSX-x86_64.pkg"
r = requests.get(conda_url)  # create HTTP response object
# send a HTTP request to the server and save
# the HTTP response in a response object called r
with open("~/Downloads/anaconda_download.pkg", 'wb') as f:
    # Saving received content in binary format
    # write the contents of the response (r.content)
    # to a new file in binary mode.
    f.write(r.content)
# run gui installer
