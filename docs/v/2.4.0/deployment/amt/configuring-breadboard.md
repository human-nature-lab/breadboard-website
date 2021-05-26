# Configuring breadboard for Amazon Mechanical Turk 
1. [Setting up a server](Setting-up-a-Server)
2. [Installing a SSL Certificate](Installing-a-SSL-Certificate)
3. [Create an AMT Requester Account](Creating-an-AMT-Requester-Account)
4. **[Configuring breadboard](Configuring-breadboard)**

At this point you should have a server configured with a domain name, created and installed a SSL certificate, and have a public and private key for an Amazon Web Services user. You are now ready to configure breadboard to use the SSL certificate and AWS credentials.

1. Install breadboard on the server 
  * Unzip breadboard into a directory on the server where you have write privileges (such as your home directory)
2. Edit the application-prod.conf file
  * Open the ```conf/application-prod.conf``` file in the breadboard directory using a text editor (nano, vi, emacs) 
    ```nano ~/breadboard-v2.3.X/conf/application-prod.conf```
  * Comment out the ```breadboard.rootUrl``` and ```breadboard.wsUrl``` lines under ```DEV http``` by prepending each line with ```#``` characters 
  * Uncomment the lines under ```PROD``` and change the domain name to your domain:
  ```
  # PROD
  breadboard.rootUrl="https://[YOUR DOMAIN NAME]:9443"
  breadboard.wsUrl="wss://[YOUR DOMAIN NAME]:9443/connect"
  ```
3. Edit the breadboard.sh file and add or change the following environment properties:
  * ```application.secret``` should be a string unique to each instance of breadboard 
  * ```https.port``` should be 9443 and ```http.port``` should be 9000
    * You can change these ports if you want to run two instances of breadboard on the same server, remember to open the ports in your server's firewall and change the ports for rootUrl and wsUrl in application-prod.conf as detailed above
  * ```https.keyStore``` should point to the location of your keystore file, for instance ```/home/[YOUR USER NAME]/.keystore``` 
  * ```https.keyStorePassword``` should be the password you provided when creating your SSL certificate
  * ```AMT_ACCESS_KEY``` should be the public key for your AWS user 
  * ```AMT_SECRET_KEY``` should be the secret key for your AWS user 
  * ```config.file``` should point to the location of the application-prod.conf file
  ```
  Example breadboard.sh:
    #!/bin/sh
    ./start -Dapplication.secret="changethis" -Dhttps.port=9443 -Dhttp.port=9000 -Dhttps.keyStore="/home/ubuntu/.keystore" -Dhttps.keyStorePassword="yourpasswordhere" -DAMT_ACCESS_KEY=AKIABCDEFGHIJKLMNOPQ -DAMT_SECRET_KEY=aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789 -Dconfig.file=application-prod.conf 
  ```
4. Launch breadboard using nohup so that it will continue running even when you close your shell session
  * ```nohup ./breadboard.sh &```
5. You can view the log of the running instance of breadboard with the following command:
  * ```tail -f nohup.out```
6. Go to https://[YOUR DOMAIN NAME]:9443 and log into breadboard
7. To terminate breadboard, run:
  * ```kill $(cat RUNNING_PID)```
