import os

def main():
    candidates = ["Bakir Izetbegovic", "Denis Becirovic"]
    votes = [0] * len(candidates)
    total_votes = 0
    print("Welcome to the Voting System!\n")
    
    while True:
        os.system('cls' if os.name == 'nt' else 'clear')  
        print("Please select a candidate by number:")
        for i, candidate in enumerate(candidates):
            print(f"{i + 1}. {candidate}")
        
        choice = input("Enter your choice (1 or 2): ")
        
        if not choice.isdigit() or not (1 <= int(choice) <= len(candidates)):
            print("Invalid input. Please enter a valid number.")
            input("\nPress Enter to continue...")
            continue
        
        choice = int(choice)
        votes[choice - 1] += 1
        total_votes += 1
        
        os.system('cls' if os.name == 'nt' else 'clear') 
        print("\nThank you for voting! Here are the current results:")
        
        for i, candidate in enumerate(candidates):
            percentage = (votes[i] / total_votes) * 100
            print(f"{candidate}: {percentage:.2f}%")
        
        input("\nPress any key to continue...")

if __name__ == "__main__":
    main()
