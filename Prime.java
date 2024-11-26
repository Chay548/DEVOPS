import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        int num = 48;

        // Check if the number is prime
        if (isPrime(num)) {
            System.out.println(num + " is a prime number.");
        } else {
            System.out.println(num + " is not a prime number.");
        }
    }

    // Function to check if a number is prime
    public static boolean isPrime(int num) {
        // Handle edge cases
        if (num <= 1) {
            return false; // 0 and 1 are not prime numbers
        }

        // Only check for factors from 2 to the square root of the number
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false; // If divisible by any number, it's not prime
            }
        }

        return true; // If no divisors were found, it's prime
    }
}
