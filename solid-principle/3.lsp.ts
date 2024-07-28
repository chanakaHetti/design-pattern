/** ------------------------------------------------------
 * In this base class Bird has a Fly method.
 * Here, the Penguin subclass violates the LSP
 * because it overrides a method in way that breaks
 * the expected behavior as it doesn't fly
 * -------------------------------------------------------
 */
class Bird {
  fly(): void {
    console.log('Flying');
  }
}

class Sparrow extends Bird {
  // Sparrow can fly, so it inherits fly without any issues.
}

class Penguin extends Bird {
  // Penguin can't fly, so we ovverrid the fly method
  fly(): void {
    throw new Error('Penguins can not fly');
  }
}

const sparrow: Bird = new Sparrow();
sparrow.fly(); // Output: Flying

const penguin: Bird = new Penguin();
try {
  penguin.fly(); // Throws an error, violating LSP
} catch (error) {
  console.log(error); // Output: Penguins can not fly
}

/**
 * -----------------------------------------------------
 * Solution for the above violation of the LSP as bellow
 * -----------------------------------------------------
 */
// Base class for all birds
class Bird {
  constructor(public name: string) {}
}

// Interface for flying birds
interface FlyingBird {
  fly(): void;
}

// Sparrow class that can fly
class Sparrow extends Bird implements FlyingBird {
  fly(): void {
    console.log('Flying');
  }
}

// Penguin class that cannot fly
class Penguin extends Bird {
  swim(): void {
    console.log('Swimming');
  }
}

const sparrow: FlyingBird = new Sparrow('sparrow');
sparrow.fly();

const penguin: Penguin = new Penguin('penguin');
penguin.swim();
