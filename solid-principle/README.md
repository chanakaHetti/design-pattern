# SOLID principle

If you're learning TypeScript/ Javascript, you've probably heard about the `SOLID` principles. These five principles help you write better, cleaner, and more manageable code.
`SOLID` principles are,

1. Single Responsibility Principle (SRP)
2. Open/Closed Principle (OCP)
3. Liskov Substitution Principle (LSP)
4. Interface Segregation Principle (ISP)
5. Dependency Inversion Principle (DIP)

Let's break them down into simple terms.

### 1. Single Responsibility Principle - SRP

`Every class should have one job or responsibility.`

When a class does only one thing, it’s easier to understand and maintain. If something changes in the program, you know exactly which class to look at. Otherwise class should have only one reason to change.

### 2. Open/Closed Principle - OCP

`Classes should be opened to extension but closed to modification`

You should be able to add new features to your classes withput changing the existing code. This avoids bug and keeps the system stable.

### 3. Liskov Substitution Principle - LSP

`Objects of a superclass should be replaceable with objects of a subclass without affecting the program's behavior.`

This ensure that your subclasses work as expected when used in place of their parent classes. It keeps your program predictable and reliable.

### 4. Interface Segregation Principle - ISP

`A class should not be forced to implement interfaces it doesn't use.`

By creating specific, small interfaces, you ensure that classes only have the methods they need. This makes your code more flexible and easier to manage.

### Dependency Inversion Principle - DIP

`High-level modules should not depend on low-level modules. Both should depend on abstractions (like interface)`

This principle decouples your code, making it easier to change and maintain. When high-level modules depend on abstracction, you can swap out low-level details without affecting the entire system.
