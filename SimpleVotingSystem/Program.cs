using System;

namespace SimpleVotingSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            
            string[] candidates = { "Donald Trump", "Kamala Harris"};
            int[] votes = new int[candidates.Length];
            int totalVotes = 0;

            Console.WriteLine("Welcome to the Voting System!\n");

            
            while (true)
            {
                Console.Clear(); 

                Console.WriteLine("Please select a candidate by number:");
                for (int i = 0; i < candidates.Length; i++)
                {
                    Console.WriteLine($"{i + 1}. {candidates[i]}");
                }

                Console.Write("Enter your choice (1 or 2): ");
                int choice;

                
                if (!int.TryParse(Console.ReadLine(), out choice))
                {
                    Console.WriteLine("Invalid input. Please enter a valid number.");
                    continue;
                }

                if (choice >= 1 && choice <= candidates.Length)
                {
                    votes[choice - 1]++; 
                    totalVotes++;

                    
                    Console.Clear(); 
                    Console.WriteLine("\nThank you for voting! Here are the current results:");

                    for (int i = 0; i < candidates.Length; i++)
                    {
                        double percentage = (double)votes[i] / totalVotes * 100;
                        Console.WriteLine($"{candidates[i]}: {percentage:F2}%");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid choice, please try again.\n");
                }

                Console.WriteLine("\nPress any key to continue...");
                Console.ReadKey(); 
            }

        }
    }
}
