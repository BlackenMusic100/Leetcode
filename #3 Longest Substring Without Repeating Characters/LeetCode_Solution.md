Intuition
To find the longest substring without repeating characters, we need to scan through the string and track what's been seen.
A brute-force approach would be too slow — but with a sliding window, we can get it done in linear time.


Use a hashmap seen to store the latest index of each character.
Maintain a window starting at start and scan with index i.
If the current character has been seen within the current window, shift the window's start.
Update the max_len at each step based on the current window size.
This approach ensures we never repeat characters inside the window, making it optimal and elegant.

Complexity
Time Complexity:

( O(n) ) — one pass through the string
Space Complexity:

( O(n) ) — in the worst case, we store all characters in the map