# Creating a HIT 
The Create HIT options can be found in the [AMT dialog](The-AMT-Assignments-Dialog). Before creating a HIT you will have to properly [configure breadboard](Configuring-breadboard) with your AMT credentials

Before submitting a HIT, make sure you have launched a new Experiment Instance using the Launch dialog. To submit a HIT to AMT fill out the form in the AMT dialog and click the "Create HIT" button:

#### Important Experiment Considerations

* You need to make sure that you have provided a Submit form at the end of the task; otherwise, the workers will be unable to submit their assignments for approval. See the documentation on the [g.getSubmitForm method](Language-Reference#getSubmitForm) for information on how to generate this form.
* You cannot guarantee that all workers will participate until the end of the task. Make sure you have implemented a procedure for dropping idle players. See the DropPlayerStep in the included PublicGoods game for an example.  
* If you do drop players or start the game before players are ready you will have to filter out those players as the game proceeds. In the example PublicGoods Experiment we set an ```active``` property of the nodes and filter out inactive players using the ```g.V.filter{it.active}``` method.


#### Details
| Parameter                        | Description |
|----------------------------------|-------------|
| Title                            | This should be a short (< 128 characters), descriptive, title to identify the task. | 
| Description                      | This is a general description of the HIT and should give the worker any information they need to know before accepting the HIT, including the approximate length of the task. |
| Reward                           | This is the amount, in US Dollars, that the workers will receive on completion of the task. This does NOT include any bonus you will apply based on the performance of the workers. |
| Max Assignments                  | This is the maximum number of workers allowed to accept your HIT. Keep in mind that you are not guaranteed a number of players equal to the Max Assignments parameter. You will have to over-recruit in order to obtain a specific number of players.|
| HIT lifetime (in seconds)        | This is the amount of time, in seconds, after you press the "Submit AMT Task" button that the workers will have to claim an assignment and join your game. |
| Tutorial time (in seconds)       | This is the additional time, after the HIT lifetime has expired, that you will allow players to complete the tutorial and comprehension test before the game begins. | 
| Assignment duration (in seconds) | This is the total time AMT will allow your players to participate in the task. If this timer expires before your experiment has finished, the game will end and your players will be unable to submit their assignments. | 
| Keywords (for HIT search)        | These is a comma separated list of terms workers can use to search for your HIT. |
| Allow repeat play?               | This option allows you to prevent repeat play. ```Block previous players of THIS experiment``` prevents players who have played this experiment before, ```Block previous players of ANY experiment``` prevents players who have participated in any experiments on your installation of breadboard, and ```Allow repeat play``` allows repeat play. |
| Start initStep automatically when HIT lifetime and tutorial time expire? | If this box is checked then breadboard will start your experiments InitStep automatically when the sum of Hit lifetime + Tutorial time elapses. breadboard will also set a global `startAt` variable with the timestamp when the InitStep will begin which can be used to display a countdown to your players. |
