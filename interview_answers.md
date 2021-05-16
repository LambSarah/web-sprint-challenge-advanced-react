# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
  
     Stateful components implement logic and state, but functional components only accept and display data.
     Stateful components use React lifecycle methods; these cannot be used with functional components.
     Also, stateful components use a render method, while functional components do not.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    componentWillMount is called just before the render method or just before a component mounts on the DOM. 
    componentWillUpdate is called whenver new props are passed to the component or state is changed, right before it renders.

3. Define stateful logic.

   Stateful logic refers to code that both stores logic values and performs logical operations.

4. What are the three step of creating a successful test? What is done in each phase?

  Arrange: this phase is where you set up the test case with inputs and targets
  Act:     this phase is where you perform an action on target and should cover the topic being tested
  Assert   this phase is where you declare what you expect the results to be