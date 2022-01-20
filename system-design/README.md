# Interview Extension: System Design

## Next Steps

Congrats in getting to the next step in the technical evaluation. The goal of this part is to exercise of system design skills.

You can take on one or both the exercises list below:

- Design a more performant chat/server design which will allow the users to exchange message in near real time. (Hint: Web sockets)

AND/OR

- Assuming that chat messages are going to persisted in a data store. As a design exercise, build a robust data pipeline which is able to:
  - perform aggregation of number of chat messages by user and by date.
  - perform sentiment analysis of the chat messages to give a score of +1 on positive, -1 on negative and 0 on unknown/unable to score.

## Output expected

Create the design using a markdown document. Feel free to use diagrams and make note of the assumptions you are making. Feel free to assume availability of third party library/services to perform complicated processing such socket management or sentiment analysis. Please make sure to highlight the dependencies in the design. Optionally, list out benefits and limitations of the design. For the data pipeline exercise, define schemas for input and output data so that they are easily consumable and queryable.

If you can think of more than one way, we encourage you to list them as alternatives.
