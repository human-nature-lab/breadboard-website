# Setting up a server

First, you will need a publicly accessible web server to host breadboard on:

1. Launch a Linux server 
  * You will need root access to a Linux server, we use Amazon EC2 servers but other providers such as Rackspace will work as well
  * Shared web hosting will not work
2. Register a domain name and configure it to point at the server 
  * You need to register a domain name prior to obtaining a SSL certificate 
  * You can register a domain name through any number of providers (name.com, register.com, godaddy.com, domains.google.com)
  * Refer to your registrar's documentation for details about how to point the domain name to the correct IP address
  * If you're using an EC2 server, make sure you assign an Elastic IP address, otherwise the address will change when you stop and relaunch the instance
3. Download and Install the Java SE Development Kit. Breadboard has been tested with versions 7, 8, and 9 so pick one of those versions.
  * You can download the latest version of the JDK8 [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
4. Open ports 9000 and 9443 in your server's firewall
  * For Amazon EC2 servers, edit your server's Security Group
5. Proceed to the steps for [installing an SSL certificate](./installing-an-ssl-certificate.md).