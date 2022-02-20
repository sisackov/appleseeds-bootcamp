````
alias aws-connect="ssh ubuntu@ec2-54-234-10-152.compute-1.amazonaws.com -i ~/.ssh/aws-ffc-key.pem"
````

````
aws-connect

    The authenticity of host 'ec2-3-86-92-246.compute-1.amazonaws.com (3.86.92.246)' can't be established.
    ED25519 key fingerprint is ..................................
    This key is not known by any other names
    Are you sure you want to continue connecting (yes/no/[fingerprint])? **yes**
    Warning: Permanently added 'ec2-3-86-92-246.compute-1.amazonaws.com' (ED25519) to the list of known hosts.

        __|  __|_  )
        _|  (     /   Amazon Linux 2 AMI
        ___|\___|___|

    https://aws.amazon.com/amazon-linux-2/
````

````
sudo -s
````

````
apt-get update
````

````
sudo apt install curl -y
````

````
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
````

````
apt-get install -y nodejs
````

````
npm -v
    8.4.1
````

````
node -e "console.log('Running Node.js ' + process.version)"
    Running Node.js v16.14.0
````

````
apt-get install git
````

````
ssh-keygen
    Generating public/private rsa key pair.
    Enter file in which to save the key (/root/.ssh/id_rsa): 
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /root/.ssh/id_rsa.
    Your public key has been saved in /root/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:.............
    The key's randomart image is:
    +---[RSA 2048]----+
    |                 |
    |   .             |
    |  o .            |
    | . + o .         |
    |  . @ = S        |
    |   = X *  .      |
    |  = B X  + . .   |
    |   O / .= E =    |
    |    @ ==o=.+.o   |
    +----[SHA256]-----+
````

````
eval `ssh-agent`
    Agent pid 5112
````

````
ssh-add /root/.ssh/id_rsa
    Identity added: /root/.ssh/id_rsa (/root/.ssh/id_rsa)
````

````
cat /root/.ssh/id_rsa.pub
    ssh-rsa AAAAB3N.....................

https://github.com/settings/keys

New SSH key
set title
copy the above output to key
````

````
git config --global user.name 'GITHUB_USERNAME'
git config --global user.email 'GITHUB_EMAIL'(check https://github.com/settings/emails)

git config --list
````

````
git clone GITHUB_REPO
cd CLONED_DIR
````

````
npm i
cd client
npm i
````


* * Set environment variables
````
export NODE_ENV=development
````

* * Run in background
````
npm start &
````

* * See all running processes
````
ps aux
````

````
apt-get install nginx
nano /etc/nginx/sites-enabled/default

    #Change the location section as follows

     location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                #  try_files $uri $uri/ =404;

                proxy_pass http://localhost:5000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;

        }

service nginx restart


mkdir /etc/nginx/ssl
openssl genrsa -out /etc/nginx/ssl/custom.key 4096
openssl genrsa -aes128 -passout pass:1qazxsw2 -out custom.key 4096
````

````
npm run server
npm run client
````