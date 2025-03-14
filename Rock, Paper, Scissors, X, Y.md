# Rock, Paper, Scissors, X, Y
# Summary

In this project, we'll create an interactive JavaScript rock, paper, scissors game and put our own spin on the idea by adding two additional items to pit against one another (i.e. Rock, Paper, Scissors, Lizard, Spock).

Together, we'll use asynchronous programming to create a game that looks like a user is competing with a "thinking" computer. Eventually, we might even be able to give this computer opponent rudimentary intelligence so it can seem like an actual opponent.

# Part I: Rock, Paper, Scissors
___
![[rock-paper-scissors-graphic.png]]


For this part, we'll be designing several systems that work together to simulate the game of rock, paper, scissors. 

 - [ ] User Interface
	 - [ ] Have a "versus" pane where the user can see their currently selected item, and the selection of the CPU at the top.
	 - [ ] A label that announces the winner. *(i.e. "Scissors cut Paper, etc.)*
	 - [ ] Include 3 Buttons, one for each item. When the game is running, you should be able to "toggle" these buttons so they **stay down** when they are selected.
	 - [ ] Include labels for:
		 - [ ] How many wins the user has.
		 - [ ] How many losses/CPU wins there are.
		 - [ ] What game number is currently playing.
	 - [ ] Include additional menu options, like:
		 - [ ] Reset/New Game: Start the game over. *(You can also make this automatic)*.
		 - [ ] Clear: Clear the current win/loss/game tracking.
# Part II: X, Y
___
![[rock-paper-scissors-lizard-spock-graphic.png]]

For this part, create two additional office items to contend with our rock, paper, and scissors. Similar to Rock, Paper, Scissors, Lizard Spock.

Using two items that can be found in an office setting:
- [ ] Add X, something that can defeat rock and scissors, but is defeated by paper and Y.
- [ ] Add Y, something that can defeat paper and X, but is defeated by rock and scissors.

You can use any office item that you can think of, but be creative in its implementation. You also need win condition messages for each item.
# Part III: Asynchronous Design
___
For this part, we'll use the asynchronous design we've learned to make the CPU look like it's "thinking", when its really already selected a random outcome.

Add a timeout or delay between when the user selects an option, and the CPU ultimately chooses its selection. Even though this selection doesn't take much processing, it'll look more convincing for our users.

# Stretch Goal: Creating a "Smart" CPU Opponent
___
If you want to challenge yourself, once you complete the project, add this additional feature. We'll track some information to tweak our CPU and see if we can "guess" what the user will select as their next move.

This section has intentionally been left more vague because the design is less about meeting strict requirements, and more about producing expected behavior.

1. First, we'll need to add a few variables to check which option the user has selected over the course of a few games, one for each item.
2. Using these values, we'll start to add "weight" to our selections.
	1. For example, if the user keeps choosing rock over and over, we'll want to add weight to the items that defeat rock.
3. When the user makes their next move, when we randomly select an item, the counter-items should have a higher chance of appearing and defeating the user, forcing them to change strategy or become more unpredictable.

