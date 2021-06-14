# AMT Dialog

**The AMT dialog allows you to approve submitted assignments and quickly apply earned bonuses.**

When breadboard is connected to your requestor AMT credentials you'll be able to view and make changes to all of the HITs and assignments the connected AMT account has created.

### Connecting your requestor account
1. Create an [AMT requestor account](../deployment/amt.md#creating-an-amt-requestor-account)
2. Run breadboard with your access and secret keys by adding them to*breadboard.sh*
	- Add `-DAMT_ACCESS_KEY={your access key}` and `-DAMT_SECRET_KEY={your secret key}` at the end of the *breadboard.sh* or *breadboard.bat* file

### Sandbox VS Production Mode
The the Sandbox mode shows HITs that were submitted to the *Developer Sandbox* and *Production Mode* shows any HITs that were submitted to the production site. The account balance for the *Developer Sandbox* will stay at $10,000 regardless of any actions taken on the account. It can take some time for the *Production Mode* account balance to reflect any changes made.

### Managing HITs
Once your requestor account credentials are connected correctly, there should be a list of HITs that have been submitted using the connected account. This list will be empty if you have not submitted any HITs yet. Each HIT shows the HIT Title, Creation Date, Reward and Assigment information. Clicking on a HIT shows the description and a detailed view of the assigments for that HIT. This detailed view allows you to approve and download assignments, apply bonuses and quickly mark assignments as completed.


### Creating HITs
An experiment will need to be running before you can create a HIT via the *Create HIT* tab. Breadboard will not create additional assignments to the number entered in *Max. Assignments* so additional assignments will need to be created if there are problems with assignments being reserved, but players not joining. A general rule of thumb is to request 150% of the minimum number of assignments desired.

Find out more details about [creating a HIT](../deployment/amt.md#creating-a-hit).

#### Allow repeat play
Breadboard has the option to prevent players from playing a single experiment multiple times OR prevent players from any experiments that have been run on this instance of breadboard.

#### HIT Lifetime
The HIT lifetime determines how long the the HIT will be available for workers to accept it. Generally, the majority of workers tend to reserve and join the game within the first few minutes of the HIT being available. After a few minutes the rate of players joining generally goes to zero.

### Creating Payment HITs
These are one-time HITs usually used to resolve some payment conflict with a worker. A Payment HIT is created via the *Create Payment HITs* tab and can be applied to multiple workers at the same time.
1. Enter each worker ID on separate lines in the *Worker IDs* textbox
2. Enter a reason for creating the Payment HIT
3. Enter a reward for the HIT in dollars
4. Click *Create Payment HITs*

One HIT will be created for each *Worker ID* that was placed in the *Worker IDs* textbox


After you have run an experiment using AMT workers open the AMT Assignments dialog. You will see a list of experiment instances, if the experiment instance has an associated HIT there will be a "Get Assignments" button. Press the button to view the currently submitted assignments. **Note: It may take a few minutes for your players to submit their assignments, particularly if you have provided them with a survey or comment box at the end of the game.**

The displayed Assignments table will provide the following information:

| Column                         | Description |
|--------------------------------|-------------|
| Assignment ID                  | This unique ID provided by AMT identifies the assignment and was also used by breadboard as the node ID. | 
| Worker ID                      | This is a unique ID that identifies the worker. This ID can be used to link workers who participated in multiple experiment instances. |
| Accept Time                    | The date and time when the worker accepted the assignment. |
| Submit Time                    | The date and time when the worker submitted the assignment. |
| Bonus                          | Click the "Grant Bonus" button to automatically grant the specified bonus to the worker. The amount is what you provided as the ```reward``` parameter to the [g.getSubmitForm](../scripting/language-reference.md#g-getsubmitform-player-bonus-reason-sandbox-comments) method. |
| Reason                         | This text label identifies how the worker completed the game. You can provide this as the ```reason``` parameter of the g.getSubmitForm method. |
| Status                         | Click the "Approve" button to pay the worker the assignment reward. Click the "Reject" button if the worker did not adequately complete the task. |
| Block Worker                   | A blocked worker will no longer be able to participate in ANY of your tasks. **Warning: Workers' reputations are negatively affected by being blocked. Use the Assignment Completed button and Disallow Previous Players to prevent repeat play.** |
| Assignment Completed?          | If you want to prevent this worker from repeating this task, click the "Mark Completed" button and then use the ```Only this game type``` or ```Any``` setting for the "Disallow Previous Players" setting for future experiments. |
