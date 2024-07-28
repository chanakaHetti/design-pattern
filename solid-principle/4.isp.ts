/**
 * ---------------------------------------------------------
 * This IWorker interface that forces all implementing
 * classes to define methods that may not be relavant
 * to their specific role.
 *
 * Here, IWorker interface forces `Robot` to implement the
 * `eat` method which is not applicable to robots.
 * This violates ISP because the interface is too broad
 * ---------------------------------------------------------
 */
interface IWorker {
  work(): void;
  eat(): void;
}

class Manager implements IWorker {
  work(): void {
    console.log('Managing tasks');
  }

  eat(): void {
    console.log('Eating lunch');
  }
}

class Robot implements IWorker {
  work(): void {
    console.log('Executing task');
  }

  eat(): void {
    throw new Error('Robots do not eat');
  }
}

const manager = new Manager();
manager.work(); // Output: Managing tasks
manager.eat(); // Output: Eating lunch

const robot = new Robot();
robot.work(); // Output: Executing task
try {
  robot.eat(); // Throws an error, violating ISP
} catch (error) {
  console.log(error.message); // Robots do not eat
}

/**
 * -----------------------------------------------------
 * Solution for the above violation of the ISP as bellow
 * -----------------------------------------------------
 */
interface IWork {
  work(): void;
}

interface IEat {
  eat(): void;
}

class Manager implements IWork, IEat {
  work(): void {
    console.log('Managing tasks');
  }

  eat(): void {
    console.log('Eating lunch');
  }
}

class Robot implements IWork {
  work(): void {
    console.log('Executing task');
  }
}

const manager = new Manager();
manager.work(); // Output: Managing tasks
manager.eat(); // Output: Eating lunch

const robot = new Robot();
robot.work(); // Output: Executing task
