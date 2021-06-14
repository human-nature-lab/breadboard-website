# Installing an SSL certificate 

In order for Amazon Mechanical Turk workers to view your experiment without security errors you will have to provide them with a secure, https, connection to your instance of breadboard. To install a SSL certificate for use with breadboard, make sure you have [configured your server properly](./setting-up-a-server.md) with a domain name and then proceed with the following steps:

1. Create a Keystore file
	* Log into your server and run the following command:
    `keytool -genkey -alias [YOUR ALIAS] -keyalg RSA -keystore /home/[YOUR LOGIN NAME]/.keystore -keysize 2048`
	* Enter and re-enter a keystore password
	* Answer the following questions as accurately as possible providing your domain name as an answer to "What is your first and last name?"
	* When prompted for the password for the private key alias, press Enter
2. Generate a Certificate Signing Request (CSR)
	* Run the following command to generate a CSR file:
	  `keytool -certreq -keyalg RSA -alias [YOUR ALIAS] -file certreq.csr -keystore /home/[YOUR LOGIN NAME]/.keystore`
3. Purchase a SSL certificate for your domain name:
  * You can purchase a single domain certificate from a provider such as rapidssl.com
  * Provide the CSR, certreq.csr, to the signing authority when requested. You may be asked to open the CSR file in a text editor and copy and paste the certificate into a text area. 
  * Download the certificate in the PKCS #7 (.p7b) format
4. Install the SSL certificate 
  * Upload the certificate to your server
  * Import the certificate into the keystore with the following command:
    `keytool -import -keystore /home/[YOUR LOGIN NAME]/.keystore -alias [YOUR ALIAS] -file [YOUR CERTIFICATE FILE.p7b]`
  * Type 'yes' and hit enter when prompted
5. Proceed to [creating an AMT Requester account](./amt#creating-an-amt-requestor-account)