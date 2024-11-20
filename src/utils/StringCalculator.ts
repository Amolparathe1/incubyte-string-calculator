export function add(numbers: string): number {
    if (!numbers) return 0;

    let regex = /,|\n/;  // Default regex for comma and newline
    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n', 2);
        const customRegex = parts[0].slice(2).replace(/[\[\]]/g, ''); // Remove brackets for multi-character delimiters

        // Handle multi-character custom delimiter
        regex = new RegExp(customRegex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special characters

        numbers = parts[1];
    }

    // Split the string by the delimiter (either comma, newline, or custom delimiter)
    const numbersArr = numbers
        .split(regex)
        .map(item => item.trim()) // Remove extra spaces
        .filter(item => !isNaN(Number(item)) && item !== "") // Keep valid numbers only
        .map(Number);

    // Check if any negative number is present
    const negatives = numbersArr.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    // Return the sum of the valid numbers
    return numbersArr.reduce((sum, num) => sum + num, 0);
}
