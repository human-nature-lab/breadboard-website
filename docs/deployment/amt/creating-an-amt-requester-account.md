# Creating an AMT Requestor Account

In order to create Human Intelligence Tasks (HITs) using Amazon Mechanical Turk you need to create a Requester account. Additionally, you need to create an Amazon Web Services (AWS) account in order to grant permission for breadboard to access AMT via the API.

1. Go to [requester.mturk.com](https://requester.mturk.com) and sign up for a new Requester account
2. You also need an Amazon Web Services (AWS) account, [sign up here](https://aws-portal.amazon.com/gp/aws/developer/registration/index.html)
3. Log into your AWS account and click on "Identity & Access Management" under the Security & Identity category 
4. Click on Users and click the Add user button
5. Assign a user name and check "Programmatic access" for the Access type, click "Next: Permissions"
6. Select "Attach existing policies directly" and check the "AmazonMechanicalTurkFullAccess" policy, click "Next: Review"
7. Click "Create user"
8. Copy the Access key ID and Secret access key and keep them in a safe place, you will not be able to retrieve them later.
  **Important**: The Access key ID in combination with the Secret access key will allow anyone full access to your AMT Requester account, do not commit this key to public source code repositories or share with untrusted users
9. Proceed to [configuring breadboard](./configuring-breadboard.md)
