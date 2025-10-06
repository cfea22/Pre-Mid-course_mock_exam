const questions = [
  { q: "1. What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Utility"],
    answer: 1 },

  { q: "2. Which device is used for typing?",
    options: ["Mouse", "Keyboard", "Monitor", "Speaker"],
    answer: 1 },

  { q: "3. Which part of a computer shows the result?",
    options: ["CPU", "Monitor", "Keyboard", "Mouse"],
    answer: 1 },

  { q: "4. Which device is used to point and click?",
    options: ["Keyboard", "Mouse", "Printer", "CPU"],
    answer: 1 },

  { q: "5. Which is an example of an input device?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    answer: 1 },

  { q: "6. MS Word is a type of ____.",
    options: ["Hardware", "Application Software", "Operating System", "Programming Language"],
    answer: 1 },

  { q: "7. What does www stand for?",
    options: ["World Wide Web", "Wide World Web", "Web World Wide", "Wide Web World"],
    answer: 0 },

  { q: "8. Which device prints paper output?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: 1 },

  { q: "9. Which key is used to erase one character to the left?",
    options: ["Shift", "Delete", "Backspace", "Enter"],
    answer: 2 },

  { q: "10. Which of the following is an operating system?",
    options: ["MS Word", "Windows", "Photoshop", "Google Chrome"],
    answer: 1 },

  { q: "11. What is the full form of USB?",
    options: ["United Serial Bus", "Universal Serial Bus", "Uniform Service Bus", "Universal System Board"],
    answer: 1 },

  { q: "12. Which of the following stores data permanently?",
    options: ["RAM", "ROM", "Cache", "Register"],
    answer: 1 },

  { q: "13. Which one is not a hardware device?",
    options: ["Monitor", "Keyboard", "MS Excel", "Mouse"],
    answer: 2 },

  { q: "14. Which one is an output device?",
    options: ["Scanner", "Mouse", "Monitor", "Keyboard"],
    answer: 2 },

  { q: "15. The brain of the computer is the ____.",
    options: ["Monitor", "CPU", "Keyboard", "Mouse"],
    answer: 1 },

  { q: "16. What does GUI stand for?",
    options: ["Graphical User Interface", "Global User Internet", "Graphical Utility Input", "General User Interaction"],
    answer: 0 },

  { q: "17. Which company developed Windows OS?",
    options: ["Apple", "IBM", "Microsoft", "Google"],
    answer: 2 },

  { q: "18. What does the 'C' in ICT stand for?",
    options: ["Central", "Computer", "Communication", "Control"],
    answer: 2 },

  { q: "19. What is the shortcut to copy text?",
    options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
    answer: 1 },

  { q: "20. What is the shortcut to paste text?",
    options: ["Ctrl + V", "Ctrl + C", "Ctrl + P", "Ctrl + X"],
    answer: 0 },

  { q: "21. The main page of a website is called ____.",
    options: ["First page", "Index", "Home page", "Main file"],
    answer: 2 },

  { q: "22. Which one is used to record sound?",
    options: ["Speaker", "Microphone", "Monitor", "Scanner"],
    answer: 1 },

  { q: "23. Which software is used to browse the internet?",
    options: ["MS Word", "Google Chrome", "PowerPoint", "Windows"],
    answer: 1 },

  { q: "24. What is the full form of ISP?",
    options: ["Internet Service Provider", "International Service Provider", "Internal Software Program", "Internet Secure Program"],
    answer: 0 },

  { q: "25. Which unit is used to measure computer memory?",
    options: ["Kilogram", "Meter", "Byte", "Watt"],
    answer: 2 },

  { q: "26. A computer cannot work without ____.",
    options: ["Keyboard", "Software", "Mouse", "Scanner"],
    answer: 1 },

  { q: "27. Which of these is not an input device?",
    options: ["Mouse", "Keyboard", "Monitor", "Scanner"],
    answer: 2 },

  { q: "28. The small pictures on the desktop are called ____.",
    options: ["Icons", "Files", "Programs", "Documents"],
    answer: 0 },

  { q: "29. What does HTTP stand for?",
    options: ["Hyper Text Transfer Protocol", "High Text Transfer Program", "Hyper Transfer Text Program", "Hyperlink Text Transfer Program"],
    answer: 0 },

  { q: "30. What is the function of ALU?",
    options: ["Store data", "Perform calculations", "Display output", "Control memory"],
    answer: 1 },

  { q: "31. Which of these is a storage device?",
    options: ["Mouse", "Pendrive", "Monitor", "Keyboard"],
    answer: 1 },

  { q: "32. What type of computer is used at home?",
    options: ["Supercomputer", "Mainframe", "Personal Computer", "Mini Computer"],
    answer: 2 },

  { q: "33. Which of the following is an example of a web browser?",
    options: ["Google Chrome", "MS Word", "Excel", "Windows Media Player"],
    answer: 0 },

  { q: "34. The device that connects a computer to the internet is called ____.",
    options: ["Router", "CPU", "Switch", "Server"],
    answer: 0 },

  { q: "35. What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Ready Active Memory"],
    answer: 0 },

  { q: "36. Which one is an example of an application software?",
    options: ["MS Excel", "Windows", "Linux", "MacOS"],
    answer: 0 },

  { q: "37. What is used to move the cursor in a document?",
    options: ["Mouse", "Keyboard", "Monitor", "Printer"],
    answer: 1 },

  { q: "38. Which of the following is not an output device?",
    options: ["Monitor", "Printer", "Speaker", "Keyboard"],
    answer: 3 },

  { q: "39. A computer virus is a type of ____.",
    options: ["Hardware", "Software", "Memory", "Application"],
    answer: 1 },

  { q: "40. The full form of CD is ____.",
    options: ["Compact Disc", "Central Disc", "Computer Disk", "Compact Data"],
    answer: 0 },

  { q: "41. What is the shortcut key to print a document?",
    options: ["Ctrl + V", "Ctrl + C", "Ctrl + P", "Ctrl + X"],
    answer: 2 },

  { q: "42. A set of programs is known as ____.",
    options: ["Software", "Hardware", "Memory", "File"],
    answer: 0 },

  { q: "43. What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Retrieval Link", "Universal Routing Locator"],
    answer: 0 },

  { q: "44. Which device is used to scan images?",
    options: ["Mouse", "Printer", "Scanner", "Speaker"],
    answer: 2 },

  { q: "45. Which part of the computer stores data temporarily?",
    options: ["ROM", "RAM", "Hard Disk", "Monitor"],
    answer: 1 },

  { q: "46. The symbol used for saving a file in many programs looks like a ____.",
    options: ["CD", "Floppy Disk", "Folder", "Printer"],
    answer: 1 },

  { q: "47. Which one is used to start the computer?",
    options: ["Restart Button", "Power Button", "CPU", "Mouse"],
    answer: 1 },

  { q: "48. The full form of ICT is ____.",
    options: ["Information and Computer Technology", "Information and Communication Technology", "Internet and Communication Tool", "Internal Computer Technology"],
    answer: 1 },

  { q: "49. Which one is an example of an operating system?",
    options: ["MS Excel", "Windows 10", "MS Word", "Paint"],
    answer: 1 },

  { q: "50. What is the main function of a computer?",
    options: ["Playing", "Calculation and processing data", "Sleeping", "Cooking"],
    answer: 1 }
];
