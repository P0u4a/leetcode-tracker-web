type Question = {
    tags: {
        name: string;
    }[];
    id: number;
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    timeElapsed: number;
    notes: string | null;
    dateCompleted: string;
};

export const mockQuestions: Question[] = [
    {
        id: 1,
        name: 'Fair Distribution of Cookies',
        difficulty: 'Medium',
        timeElapsed: 63000,
        notes: 'This works!!',
        tags: [
            { name: 'sorting' },
            { name: 'array' },
            { name: 'greedy' },
            { name: 'dynamic programming' },
            { name: 'bitmasking' },
        ],
        dateCompleted: '2023-01-15 09-22-03',
    },
    {
        id: 2,
        name: 'Valid Sudoku',
        difficulty: 'Medium',
        timeElapsed: 539000,
        notes: '',
        tags: [
            { name: 'array' },
            { name: 'backtracking' },
            { name: 'recursion' },
        ],
        dateCompleted: '2023-01-15 16-04-33',
    },
    {
        id: 3,
        name: 'Validate Binary Search Tree',
        difficulty: 'Medium',
        timeElapsed: 965000,
        notes: 'Cool solution.',
        tags: [
            { name: 'binary tree' },
            { name: 'depth first search' },
            { name: 'breadth first search' },
            { name: 'sorting' },
        ],
        dateCompleted: '2023-02-03 12-20-12',
    },
    {
        id: 4,
        name: 'Group Anagrams',
        difficulty: 'Medium',
        timeElapsed: 21000,
        notes: '',
        tags: [{ name: 'array' }, { name: 'string' }, { name: 'hashmap' }],
        dateCompleted: '2023-03-23',
    },
    {
        id: 5,
        name: 'Two Sum',
        difficulty: 'Easy',
        timeElapsed: 0,
        notes: 'Two sum very cool. This is a very long description that I am using to limit test the size of each row, hopefully it does not look too crazy otherwise I am going to have to do some styling to make it work which i do not want to do because styling things is kind of boring the logic of frontend stuff is wayyyy more interesting you know what I mean?',
        tags: [{ name: 'hashmap' }, { name: 'array' }],
        dateCompleted: '2023-03-24',
    },
    {
        id: 6,
        name: 'Merge Two Sorted Lists',
        difficulty: 'Hard',
        timeElapsed: 300020,
        notes: '',
        tags: [{ name: 'array' }, { name: 'sorting' }],
        dateCompleted: '2023-03-28',
    },
    {
        id: 7,
        name: 'New Question 1',
        difficulty: 'Easy',
        timeElapsed: 45000,
        notes: 'Some notes for this question.',
        tags: [{ name: 'array' }, { name: 'hashmap' }],
        dateCompleted: '2023-04-01 08-15-42',
    },
    {
        id: 8,
        name: 'New Question 2',
        difficulty: 'Hard',
        timeElapsed: 720000,
        notes: 'Notes for the second new question.',
        tags: [{ name: 'sorting' }, { name: 'greedy' }],
        dateCompleted: '2023-04-10 14-30-20',
    },
    // Add more entries to reach a total of 15
    {
        id: 9,
        name: 'New Question 3',
        difficulty: 'Medium',
        timeElapsed: 240000,
        notes: 'Notes for the third new question.',
        tags: [{ name: 'array' }, { name: 'recursion' }],
        dateCompleted: '2023-04-18 10-55-05',
    },
    {
        id: 10,
        name: 'New Question 4',
        difficulty: 'Medium',
        timeElapsed: 600000,
        notes: 'Notes for the fourth new question.',
        tags: [{ name: 'array' }, { name: 'backtracking' }],
        dateCompleted: '2023-04-22 19-12-34',
    },
    {
        id: 11,
        name: 'New Question 5',
        difficulty: 'Easy',
        timeElapsed: 15000,
        notes: 'Notes for the fifth new question.',
        tags: [{ name: 'hashmap' }, { name: 'array' }],
        dateCompleted: '2023-05-05 11-08-17',
    },
    {
        id: 12,
        name: 'New Question 6',
        difficulty: 'Medium',
        timeElapsed: 360000,
        notes: 'Notes for the sixth new question.',
        tags: [{ name: 'binary tree' }, { name: 'depth first search' }],
        dateCompleted: '2023-05-10 08-42-56',
    },
    {
        id: 13,
        name: 'New Question 7',
        difficulty: 'Hard',
        timeElapsed: 900000,
        notes: 'Notes for the seventh new question.',
        tags: [{ name: 'sorting' }, { name: 'dynamic programming' }],
        dateCompleted: '2023-05-18 16-25-30',
    },
    {
        id: 14,
        name: 'New Question 8',
        difficulty: 'Medium',
        timeElapsed: 420000,
        notes: 'Notes for the eighth new question.',
        tags: [{ name: 'array' }, { name: 'string' }],
        dateCompleted: '2023-05-23 14-19-48',
    },
    {
        id: 15,
        name: 'New Question 9',
        difficulty: 'Easy',
        timeElapsed: 30000,
        notes: 'Notes for the ninth new question.',
        tags: [{ name: 'hashmap' }, { name: 'recursion' }],
        dateCompleted: '2023-05-30 09-53-02',
    },
];
