// Exam Data
const exams = {

"model":[


  {
    "q": "Which of the following is used to manage files and directories in OS?",
    "options": ["File System", "Memory Manager", "Process Scheduler", "Network Manager"],
    "answer": 0,
    "explanation": "File system manages files and directories on storage devices."
  },
  {
    "q": "Which scheduling algorithm selects the process with the smallest burst time next?",
    "options": ["First-Come-First-Serve", "Shortest Job Next", "Round Robin", "Priority Scheduling"],
    "answer": 1,
    "explanation": "Shortest Job Next (SJN) selects the process with the minimum burst time."
  },
  {
    "q": "Deadlock can occur in a system when which of the following conditions hold simultaneously?",
    "options": ["Mutual exclusion, Hold and wait, Circular wait, No preemption", "Mutual exclusion only", "Hold and wait only", "Circular wait only"],
    "answer": 0,
    "explanation": "All four conditions together (mutual exclusion, hold and wait, no preemption, circular wait) can cause deadlock."
  },
  {
    "q": "Which memory allocation technique divides memory into fixed-size partitions?",
    "options": ["Segmentation", "Paging", "Contiguous allocation", "Fixed partitioning"],
    "answer": 3,
    "explanation": "Fixed partitioning divides memory into fixed-size blocks."
  },
  {
    "q": "Which of the following is a page replacement algorithm?",
    "options": ["FIFO", "LRU", "Optimal", "All of the mentioned"],
    "answer": 3,
    "explanation": "FIFO, LRU, and Optimal are all page replacement algorithms."
  },
  {
    "q": "What is the main purpose of the process scheduler in an operating system?",
    "options": ["Manage memory allocation", "Manage file system", "Decide which process runs next", "Monitor network connections"],
    "answer": 2,
    "explanation": "The process scheduler decides the order in which processes access the CPU."
  },
  {
    "q": "Which of the following is not a type of operating system?",
    "options": ["Batch OS", "Multiprogramming OS", "Distributed OS", "Relational OS"],
    "answer": 3,
    "explanation": "Relational OS is not a recognized type of operating system."
  },
  {
    "q": "In virtual memory, which technique allows the execution of processes that are not completely in memory?",
    "options": ["Swapping", "Paging", "Segmentation", "Demand Paging"],
    "answer": 3,
    "explanation": "Demand paging brings pages into memory only when they are required."
  },
  {
    "q": "Which of the following is an example of a non-preemptive scheduling algorithm?",
    "options": ["Round Robin", "Shortest Job Next", "Priority Scheduling", "First-Come-First-Serve"],
    "answer": 3,
    "explanation": "FCFS is non-preemptive; once a process starts, it runs to completion."
  },
  {
    "q": "Which type of operating system allows multiple users to run programs simultaneously?",
    "options": ["Single-user OS", "Multi-user OS", "Real-time OS", "Batch OS"],
    "answer": 1,
    "explanation": "Multi-user OS supports multiple users executing programs concurrently."
  },
  {
    "q": "Which of the following is used to prevent unauthorized access to data in OS?",
    "options": ["Memory Manager", "File Permissions", "Process Scheduler", "CPU Registers"],
    "answer": 1,
    "explanation": "File permissions control access to files and directories."
  },
  {
    "q": "What is the main purpose of a device driver?",
    "options": ["Translate user commands", "Control hardware devices", "Manage memory", "Schedule processes"],
    "answer": 1,
    "explanation": "Device drivers allow the OS to communicate with hardware devices."
  },
  {
    "q": "Which type of operating system is used in embedded systems?",
    "options": ["Batch OS", "Real-time OS", "Distributed OS", "Time-sharing OS"],
    "answer": 1,
    "explanation": "Real-time OS is used in embedded systems for timely and predictable responses."
  },
  {
    "q": "Which system call is used to create a new process in UNIX/Linux?",
    "options": ["fork()", "exec()", "wait()", "exit()"],
    "answer": 0,
    "explanation": "fork() is used to create a new process."
  },
  {
    "q": "Which file allocation method stores file contents in contiguous blocks?",
    "options": ["Linked Allocation", "Indexed Allocation", "Contiguous Allocation", "Hashed Allocation"],
    "answer": 2,
    "explanation": "Contiguous allocation stores file blocks together sequentially."
  },
  {
    "q": "Which of the following is a critical section problem solution approach?",
    "options": ["Peterson’s Algorithm", "Semaphores", "Monitors", "All of the mentioned"],
    "answer": 3,
    "explanation": "Peterson’s Algorithm, Semaphores, and Monitors are all solutions to the critical section problem."
  },
  {
    "q": "Which of the following is a preemptive scheduling algorithm?",
    "options": ["Shortest Job Next", "Round Robin", "First-Come-First-Serve", "None of the mentioned"],
    "answer": 1,
    "explanation": "Round Robin is preemptive because each process gets a fixed time slice."
  },
  {
    "q": "Which page replacement algorithm replaces the page that will not be used for the longest period in the future?",
    "options": ["FIFO", "Optimal", "LRU", "Clock"],
    "answer": 1,
    "explanation": "Optimal page replacement replaces the page that will not be needed for the longest time."
  },
  {
    "q": "Which of the following is an advantage of multiprogramming?",
    "options": ["Efficient CPU utilization", "Simple design", "No context switching", "Predictable execution time"],
    "answer": 0,
    "explanation": "Multiprogramming improves CPU utilization by keeping it busy with multiple processes."
  },
  {
    "q": "Which of the following is not a CPU scheduling criterion?",
    "options": ["Throughput", "Turnaround time", "Response time", "Memory access time"],
    "answer": 3,
    "explanation": "Memory access time is not a CPU scheduling criterion."
  },
  {
    "q": "In a Unix/Linux system, which command displays all running processes?",
    "options": ["ps", "ls", "top", "kill"],
    "answer": 2,
    "explanation": "top displays all running processes dynamically."
  },
  {
    "q": "Which of the following is a deadlock prevention technique?",
    "options": ["Resource ordering", "Banker’s algorithm", "Wait-die scheme", "All of the mentioned"],
    "answer": 3,
    "explanation": "Resource ordering, Banker’s algorithm, and Wait-die are all deadlock prevention techniques."
  },
  {
    "q": "Which scheduling algorithm is suitable for time-sharing systems?",
    "options": ["FCFS", "SJN", "Round Robin", "Priority Scheduling"],
    "answer": 2,
    "explanation": "Round Robin is widely used in time-sharing systems to ensure fair CPU allocation."
  },
  {
    "q": "What is the purpose of a system call?",
    "options": ["Provide an interface to hardware", "Create user accounts", "Compile programs", "Encrypt files"],
    "answer": 0,
    "explanation": "System calls provide an interface between user programs and the OS to access hardware services."
  },
  {
    "q": "Which file system supports journaling to improve reliability?",
    "options": ["FAT32", "NTFS", "ext2", "ext3"],
    "answer": 3,
    "explanation": "ext3 uses journaling to improve reliability and recoverability."
  },
  {
    "q": "Which memory management technique allows non-contiguous allocation of processes?",
    "options": ["Segmentation", "Contiguous allocation", "Fixed partitioning", "Static allocation"],
    "answer": 0,
    "explanation": "Segmentation allows non-contiguous allocation by dividing programs into logical segments."
  },
  {
    "q": "Which of the following is not a type of OS interrupt?",
    "options": ["Hardware interrupt", "Software interrupt", "Program interrupt", "Network interrupt"],
    "answer": 3,
    "explanation": "Network interrupt is not a standard OS interrupt type."
  },
  {
    "q": "Which memory is fastest in the memory hierarchy?",
    "options": ["RAM", "Cache", "Registers", "Hard Disk"],
    "answer": 2,
    "explanation": "Registers inside the CPU are the fastest memory."
  },
  {
    "q": "Which of the following commands is used to terminate a process in Unix/Linux?",
    "options": ["kill", "exit", "stop", "end"],
    "answer": 0,
    "explanation": "The kill command is used to terminate processes."
  },
  {
    "q": "Which of the following is a disadvantage of contiguous file allocation?",
    "options": ["Simple access", "External fragmentation", "Easy to implement", "Fast sequential access"],
    "answer": 1,
    "explanation": "Contiguous allocation suffers from external fragmentation."
  },
  {
    "q": "Which of the following is a software layer between applications and hardware?",
    "options": ["Kernel", "Compiler", "Linker", "Assembler"],
    "answer": 0,
    "explanation": "The kernel acts as the core software layer managing hardware and applications."
  },
  {
    "q": "Which of the following scheduling criteria measures time from submission to completion?",
    "options": ["Turnaround time", "Waiting time", "Response time", "Throughput"],
    "answer": 0,
    "explanation": "Turnaround time is the total time from process submission to completion."
  },
  {
    "q": "Which of the following is a common method for handling page faults?",
    "options": ["Demand paging", "Swapping", "Segmentation", "All of the mentioned"],
    "answer": 3,
    "explanation": "Demand paging, swapping, and segmentation are methods to handle page faults."
  },
  {
    "q": "Which type of operating system is designed to respond immediately to input?",
    "options": ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"],
    "answer": 2,
    "explanation": "Real-time OS responds immediately to external events."
  },
  {
    "q": "Which of the following is not a typical function of an OS?",
    "options": ["Process management", "Memory management", "Compiling programs", "Device management"],
    "answer": 2,
    "explanation": "Compiling programs is done by compilers, not the operating system."
  },
  {
    "q": "Which of the following commands in Unix/Linux shows disk usage?",
    "options": ["df", "du", "ls", "free"],
    "answer": 1,
    "explanation": "du displays disk usage of files and directories."
  },
  {
    "q": "Which memory allocation problem can occur in contiguous allocation?",
    "options": ["Internal fragmentation", "External fragmentation", "Stack overflow", "Buffer overflow"],
    "answer": 1,
    "explanation": "External fragmentation occurs when free memory is divided into small blocks that cannot satisfy allocation requests."
  },
  {
    "q": "Which of the following is an advantage of virtual memory?",
    "options": ["Larger address space than physical memory", "Faster access than cache", "No need for memory management", "Simplifies CPU design"],
    "answer": 0,
    "explanation": "Virtual memory allows processes to use more memory than physically available."
  },
  {
    "q": "Which of the following commands is used to display running services in Unix/Linux?",
    "options": ["ps", "service --status-all", "top", "kill"],
    "answer": 1,
    "explanation": "service --status-all lists the status of all services."
  },
  {
    "q": "Which of the following algorithms ensures all processes get fair CPU time?",
    "options": ["FCFS", "Round Robin", "SJN", "Priority Scheduling"],
    "answer": 1,
    "explanation": "Round Robin allocates CPU time in a circular order ensuring fairness."
  },
  {
    "q": "Which of the following is used for inter-process communication?",
    "options": ["Signals", "Semaphores", "Pipes", "All of the mentioned"],
    "answer": 3,
    "explanation": "Signals, semaphores, and pipes are all used for inter-process communication."
  },







  

  {
    "q": "Which of the following is used to add styles and formatting to a webpage in CSS?",
    "options": ["Functions", "Variables", "Selectors", "Arrays"],
    "answer": 2,
    "explanation": "Selectors are used in CSS to select HTML elements and apply styles to them."
  },
  {
    "q": "Which one of the following techniques is not used in the Binary tree?",
    "options": ["Randomized traversal", "Preorder traversal", "Postorder traversal", "Inorder traversal"],
    "answer": 0,
    "explanation": "Randomized traversal is not a standard binary tree traversal technique."
  },
  {
    "q": "In IPv4 Addresses, classful addressing is replaced with ________",
    "options": ["Classful Addressing", "Classless Addressing", "Classful Advertising", "Classless Advertising"],
    "answer": 1,
    "explanation": "Classless addressing (CIDR) replaced classful addressing to improve IP address allocation."
  },
  {
    "q": "Which control statement is used for executing different blocks of code based on multiple conditions?",
    "options": ["While loop statement", "For loop statement", "If...else statement", "Switch statement"],
    "answer": 3,
    "explanation": "The switch statement executes different blocks of code based on the value of a variable."
  },
  {
    "q": "Which graph traversal algorithm is used to find the shortest path between two nodes?",
    "options": ["Dijkstra's Algorithm", "Depth-First Search (DFS)", "Kruskal's Algorithm", "Breadth-First Search (BFS)"],
    "answer": 0,
    "explanation": "Dijkstra's Algorithm finds the shortest path between nodes in a weighted graph."
  },
  {
    "q": "Consider sequential free memory blocks A=100 KB, B=200 KB, C=150 KB, D=300 KB, E=250 KB. Using First Fit, allocate P1=120 KB, P2=250 KB, P3=180 KB. Which process goes into which block?",
    "options": ["P1: Block B, P2: Block E, P3: Block A", "P1: Block D, P2: Block E, P3: will not be allocated", "P1: Block B, P2: Block D, P3: Block E", "P1: Block A, P2: Block D, P3: Block E"],
    "answer": 1,
    "explanation": "First Fit allocates the first block that fits: P1 fits Block D, P2 fits Block E, P3 cannot fit any remaining block."
  },
  {
    "q": "Employee (Emp_Id, Emp_name, emp_salary), here Employee is __________ and Emp_Id, Emp_name, emp_salary are _________.",
    "options": ["Tuple, Primary key", "Table, Attribute", "Attributes, Relation", "row, Column"],
    "answer": 1,
    "explanation": "Employee is a table (relation), and Emp_Id, Emp_name, emp_salary are attributes (columns)."
  },
  {
    "q": "Which one of the following search algorithms requires less memory?",
    "options": ["Linear Search", "Depth First Search", "Optimal Search", "Breadth-First Search"],
    "answer": 1,
    "explanation": "Depth-First Search uses less memory compared to Breadth-First Search because it stores only a single path from the root."
  },
  {
    "q": "A functional dependency is a relationship between/among ___________",
    "options": ["Rows", "Tables", "Attributes", "Entities"],
    "answer": 2,
    "explanation": "A functional dependency defines a relationship between attributes in a relation."
  },
  {
    "q": "___________ is a theoretical construct of Turing machine that can simulate any other Turing machine.",
    "options": ["Multi-tape Turing machine", "Universal Turing machine", "Multi track Turing machine", "Semi-infinite Tape"],
    "answer": 1,
    "explanation": "A Universal Turing Machine can simulate the behavior of any other Turing machine."
  },
  {
    "q": "What is the purpose of pipelining in computer architecture?",
    "options": ["To reduce the power consumption of the CPU", "To increase the speed of instruction execution", "To enhance the reliability of the system", "To improve the efficiency of memory access"],
    "answer": 1,
    "explanation": "Pipelining allows overlapping execution of instructions to increase CPU throughput."
  },
  {
    "q": "Push(A), Push(B), Pop(), Push(C), Pop(), Push(D), Push(E). How many elements are present in the stack after these operations?",
    "options": ["1", "2", "4", "3"],
    "answer": 3,
    "explanation": "After the sequence, the stack contains D and E, and C is removed, totaling 3 elements."
  },
  {
    "q": "What is the main function of the arithmetic logic unit (ALU) in a CPU?",
    "options": ["Fetch and decode instructions", "Perform arithmetic and logical operations", "Manage memory access", "Control the flow of execution"],
    "answer": 1,
    "explanation": "The ALU performs arithmetic and logical operations within the CPU."
  },
  {
    "q": "Which of the following is not a common network topology?",
    "options": ["Star topology", "Pyramid topology", "Bus topology", "Ring topology"],
    "answer": 1,
    "explanation": "Pyramid topology is not a standard network topology."
  },
  {
    "q": "Which of the following is a data link protocol?",
    "options": ["All of the mentioned", "HDLC", "Ethernet", "Point to Point Protocol"],
    "answer": 0,
    "explanation": "All listed protocols operate at the data link layer."
  },
  {
    "q": "Which of the following tasks is an example of unsupervised learning?",
    "options": ["Predicting house prices", "Customer segmentation based on behavior", "Predicting age from social media", "Classifying emails into spam/non-spam"],
    "answer": 1,
    "explanation": "Customer segmentation is unsupervised because it finds patterns without labeled output."
  },
  {
    "q": "What differs deep learning from traditional machine learning approaches?",
    "options": ["Deep learning is only suitable for classification tasks", "Deep learning is a subfield of AI", "Deep learning does not require labeled data", "Deep learning models have multiple layers for automatic feature extraction"],
    "answer": 3,
    "explanation": "Deep learning uses multiple layers to automatically learn feature representation from raw data."
  },
  {
    "q": "Which of the following is a characteristic of a non-deterministic finite automaton (NFA)?",
    "options": ["Requires a stack to store states", "Can only recognize regular languages", "Can have multiple possible transitions for a given input and state", "Can recognize context-free languages"],
    "answer": 2,
    "explanation": "NFAs can have multiple transitions for the same input in a given state, unlike DFAs."
  },
  {
    "q": "What is the main function of the branch prediction mechanism in a CPU?",
    "options": ["To improve the accuracy of branch instructions", "To enhance CPU performance", "To reduce the number of branch instructions", "To minimize the impact of branch mispredictions"],
    "answer": 3,
    "explanation": "Branch prediction aims to reduce delays caused by mispredicted branches."
  },
  {
    "q": "_________is the minimum number of steps that can be executed for given parameters?",
    "options": ["Worst case", "Average case", "Best case", "Time complexity"],
    "answer": 2,
    "explanation": "Best case refers to the minimum number of steps an algorithm will take."
  },
  {
    "q": "Which of the following is a characteristic of CISC architecture?",
    "options": ["Longer instruction execution time", "Fewer registers", "Simpler instruction set", "Variable-length instructions"],
    "answer": 3,
    "explanation": "CISC architectures often have variable-length instructions and complex instruction sets."
  },
  {
    "q": "Mr. Akubazgi explains a person who uses hacking tools without understanding underlying technology. This person is called?",
    "options": ["A script kiddy", "A white hat hacker", "A gray hat hacker", "A novice"],
    "answer": 0,
    "explanation": "A script kiddy uses pre-made tools without understanding how they work."
  },
  {
    "q": "Checkpoints are part of ____ measures.",
    "options": ["Concurrency", "Security", "Recovery", "Authorization"],
    "answer": 2,
    "explanation": "Checkpoints save system state to allow recovery after a failure."
  },
  {
    "q": "Which of the following is a key application of context-free grammars?",
    "options": ["Network security", "Natural language processing", "Image processing", "Database management"],
    "answer": 1,
    "explanation": "Context-free grammars are widely used in parsing languages in NLP."
  },
  {
    "q": "Which operator is used for assignment in C++?",
    "options": ["=", "+=", "==", "/="],
    "answer": 0,
    "explanation": "The '=' operator assigns values to variables."
  },
  {
    "q": "Which one of the following algorithms is not applicable for digital signature?",
    "options": ["RSA", "Elliptic Curve", "Diffie-Hellman", "DSS"],
    "answer": 2,
    "explanation": "Diffie-Hellman is a key exchange algorithm, not used for digital signatures."
  },
  {
    "q": "Three or more devices share a link in ________ connection.",
    "options": ["Multipoint", "Point to point", "Unipoint", "Simplex"],
    "answer": 0,
    "explanation": "Multipoint connections allow multiple devices to share the same communication link."
  },
  {
    "q": "How can you pass the value of a function by value in C++?",
    "options": ["Using the return statement", "Assigning to a global variable", "Passing directly as function argument", "Declaring a pointer as parameter"],
    "answer": 2,
    "explanation": "Passing by value sends a copy of the argument to the function."
  },
  {
    "q": "What is the purpose of an Intrusion Detection System (IDS) in computer security?",
    "options": ["Prevent unauthorized access", "Detect and alert on suspicious activities", "Recover data after failure", "Encrypt data during transmission"],
    "answer": 1,
    "explanation": "IDS monitors networks to detect and alert about potential intrusions."
  },
  {
    "q": "What is the main function of a network switch?",
    "options": ["Connect multiple network devices", "Provide internet access", "Enhance network security", "Manage network traffic"],
    "answer": 0,
    "explanation": "Switches connect multiple devices on a network and forward data between them efficiently."
  },
  {
    "q": "Most backup and recovery commands in _____ are executed by server sessions.",
    "options": ["Recovery Manager", "Backup Manager", "Backup and Recovery Manager", "Database Manager"],
    "answer": 0,
    "explanation": "Recovery Manager handles server-side execution of backup and recovery commands."
  },
  {
    "q": "Which loop statement is guaranteed to execute its body at least once?",
    "options": ["For loop statement", "Do...while statement", "If...else statement", "Switch statement"],
    "answer": 1,
    "explanation": "Do...while loops execute the body at least once before checking the condition."
  },
  {
    "q": "Which of the following is not a recovery technique?",
    "options": ["Deferred update", "Recovery management", "Two-phase commit", "Immediate update"],
    "answer": 1,
    "explanation": "Recovery management is a process, not a specific recovery technique."
  },
  {
    "q": "Merge sort is a stable algorithm. What does 'stable' mean?",
    "options": ["Predictable time complexity", "Maintains relative order of equal elements", "Guaranteed to terminate", "Efficient for large input"],
    "answer": 1,
    "explanation": "Stability means that equal elements retain their original relative order after sorting."
  },
  {
    "q": "If a link transmits 4000 frames/sec, each with 8 bits, what is the transmission rate using TDM?",
    "options": ["500 bps", "32 kbps", "32 bps", "500 kbps"],
    "answer": 1,
    "explanation": "4000 frames × 8 bits = 32,000 bps = 32 kbps."
  },
  {
    "q": "Which of the following is not a type of memory hierarchy in a computer system?",
    "options": ["Virtual memory", "Cache memory", "Magnetic tape", "Registers"],
    "answer": 2,
    "explanation": "Magnetic tape is secondary storage, not part of standard memory hierarchy."
  },
  {
    "q": "Which function is called in a pop() operation?",
    "options": ["IsFull()", "IsEmpty()"],
    "answer": 1,
    "explanation": "Pop() must check if the stack is empty before removing an element."
  },
  {
    "q": "What is the major characteristic of a computer virus?",
    "options": ["Steals data", "Encrypts files for ransom", "Spreads via email attachments", "Replicates by attaching to other files", "Spreads through network connections"],
    "answer": 3,
    "explanation": "A virus replicates itself by attaching to files or programs."
  },
  {
    "q": "The attacker using a network of compromised devices is known as _____________",
    "options": ["Internet", "Botnet", "Telnet", "D-net"],
    "answer": 1,
    "explanation": "A botnet is a network of compromised devices used to perform attacks."
  },
  {
    "q": "For finite automaton that accepts strings of the form 'ab^n', n>=0, which statement is false?",
    "options": ["Accepting state is q1", "Accepting state is q2", "None", "Initial state is q0"],
    "answer": 1,
    "explanation": "In the described FA, the accepting state is not q2; q1 is the correct accepting state."
  },
  {
    "q": "What is the purpose of system backups?",
    "options": ["Recover data after loss", "Encrypt data", "Prevent unauthorized access", "Develop software", "Monitor attacks"],
    "answer": 0,
    "explanation": "System backups allow recovery of data in case of data loss or system failure."
  },
  {
    "q": "What makes Naive Bayes 'naive'?",
    "options": ["Uses single-layer neural network", "Not suitable for classification", "Relies on labeled data", "Assumes all features are independent"],
    "answer": 3,
    "explanation": "Naive Bayes assumes feature independence, which is why it is called 'naive'."
  },
  {
    "q": "Which of the following is a network monitoring tool?",
    "options": ["All", "Nmap", "Nagios", "Wireshark"],
    "answer": 0,
    "explanation": "All listed tools are used for network monitoring and analysis."
  },
  {
    "q": "For patients waiting in a clinic, seriously sick patients should be served first. Which data structure is most appropriate?",
    "options": ["Queue", "Tree", "Priority Queue", "Stack"],
    "answer": 2,
    "explanation": "A priority queue serves elements based on priority rather than order of arrival."
  },
  {
    "q": "Equivalent recurrence relation for T(n)=T(n-1)+2n-1?",
    "options": ["T(n)=T(n-1)+O(n-1)", "T(n)=T(n-1)+O(2n)", "T(n)=T(n-1)+O(1)", "T(n)=T(n-1)+O(n)"],
    "answer": 3,
    "explanation": "2n-1 is O(n), so the recurrence can be expressed as T(n)=T(n-1)+O(n)."
  },
  {
    "q": "Which resource is typically time multiplexed in an operating system?",
    "options": ["Compact Disk", "Network", "CPU", "Memory"],
    "answer": 2,
    "explanation": "The CPU is time-multiplexed among processes to share processing time."
  },
  {
    "q": "What is the primary goal of a denial-of-service (DoS) attack?",
    "options": ["Modify data", "Disrupt service availability", "Gain unauthorized access", "Intercept data", "Steal data"],
    "answer": 1,
    "explanation": "DoS attacks aim to make services unavailable to legitimate users."
  },
  {
    "q": "Which concept allows you to store the memory address of a variable in C++?",
    "options": ["Strings", "Arrays", "Pointers", "Structures"],
    "answer": 2,
    "explanation": "Pointers store memory addresses of variables in C++."
  },
  {
    "q": "Which compiler runs on one machine and generates code for multiple machines?",
    "options": ["Onepass compiler", "Cross compiler", "Multipass compiler", "Optimizing compiler"],
    "answer": 1,
    "explanation": "A cross compiler generates executable code for a platform different from the one it runs on."
  },
  {
    "q": "Which of the following best describes the halting problem for Turing machines?",
    "options": ["Determine if TM will halt or run indefinitely", "Determine if TM can recognize context-free languages", "Determine if TM can simulate other models", "Determine if TM can solve any computational problem"],
    "answer": 0,
    "explanation": "The halting problem is deciding whether a Turing machine will eventually stop or run forever on a given input."
  },








  

  {
    "q": "Which of the following is not a type of computer network?",
    "options": ["LAN", "WAN", "PAN", "CANADA"],
    "answer": 3,
    "explanation": "LAN, WAN, and PAN are network types; CANADA is a country, not a network type."
  },
  {
    "q": "Which of the following is used to detect errors in data transmission?",
    "options": ["Parity Bit", "Multiplexer", "Demultiplexer", "Router"],
    "answer": 0,
    "explanation": "Parity bits are used for simple error detection in transmitted data."
  },
  {
    "q": "Which of the following is an advantage of Object-Oriented Programming?",
    "options": ["Code reusability", "Better memory management", "Faster execution", "None of the mentioned"],
    "answer": 0,
    "explanation": "OOP allows code reusability through inheritance and modular design."
  },
  {
    "q": "Which layer of OSI is responsible for reliable data transfer?",
    "options": ["Data Link Layer", "Transport Layer", "Network Layer", "Application Layer"],
    "answer": 1,
    "explanation": "Transport Layer ensures reliable end-to-end data delivery, error checking, and flow control."
  },
  {
    "q": "Which of the following is a dynamic data structure?",
    "options": ["Array", "Stack", "Queue", "Linked List"],
    "answer": 3,
    "explanation": "Linked lists are dynamic structures that can grow or shrink at runtime."
  },
  {
    "q": "Which of the following is not a feature of TCP?",
    "options": ["Reliable transmission", "Connection-oriented", "Packet sequencing", "Broadcasting"],
    "answer": 3,
    "explanation": "TCP provides reliable, connection-oriented transmission with sequencing; broadcasting is not supported."
  },
  {
    "q": "Which of the following is not a primary key requirement?",
    "options": ["Unique", "Not null", "Foreign key", "Single attribute or combination"],
    "answer": 2,
    "explanation": "Primary key must be unique and not null; it is not a foreign key."
  },
  {
    "q": "Which of the following is used in Internet addressing to identify devices uniquely?",
    "options": ["IP Address", "MAC Address", "Subnet Mask", "Gateway"],
    "answer": 0,
    "explanation": "IP addresses uniquely identify devices on a network; MAC addresses are hardware identifiers."
  },
  {
    "q": "Which of the following is not a type of loop in programming?",
    "options": ["For loop", "While loop", "Do-while loop", "If-else loop"],
    "answer": 3,
    "explanation": "If-else is a conditional statement, not a loop."
  },
  {
    "q": "Which of the following is a type of system software?",
    "options": ["Compiler", "Operating System", "Assembler", "All of the mentioned"],
    "answer": 3,
    "explanation": "System software includes compilers, operating systems, and assemblers."
  },
  {
    "q": "Which of the following memory is volatile?",
    "options": ["RAM", "ROM", "Flash", "Hard Disk"],
    "answer": 0,
    "explanation": "RAM loses its content when power is off, making it volatile."
  },
  {
    "q": "Which of the following is not a type of database query language?",
    "options": ["DML", "DDL", "DCL", "HTML"],
    "answer": 3,
    "explanation": "HTML is a markup language, not a database query language."
  },
  {
    "q": "Which of the following scheduling algorithms uses the shortest next CPU burst?",
    "options": ["First Come First Serve", "Shortest Job Next", "Round Robin", "Priority Scheduling"],
    "answer": 1,
    "explanation": "Shortest Job Next (or Shortest Job First) schedules the process with the smallest CPU burst next."
  },
  {
    "q": "Which of the following is not a characteristic of good software?",
    "options": ["Maintainability", "Reliability", "Correctness", "Randomness"],
    "answer": 3,
    "explanation": "Good software should be maintainable, reliable, and correct; randomness is not a feature."
  },
  {
    "q": "Which of the following is a symmetric key cryptography algorithm?",
    "options": ["RSA", "DSA", "AES", "Diffie-Hellman"],
    "answer": 2,
    "explanation": "AES is a symmetric key algorithm; RSA and DSA are asymmetric."
  },
  {
    "q": "Which of the following is a non-linear algorithm?",
    "options": ["Binary Search", "Linear Search", "Quick Sort", "Merge Sort"],
    "answer": 0,
    "explanation": "Binary search is a divide-and-conquer algorithm, making it non-linear; linear search is linear."
  },
  {
    "q": "Which of the following is a component of DBMS?",
    "options": ["Query Processor", "Storage Manager", "Transaction Manager", "All of the mentioned"],
    "answer": 3,
    "explanation": "All listed components are part of a database management system."
  },
  {
    "q": "Which of the following is a private IP address?",
    "options": ["192.168.0.1", "8.8.8.8", "172.15.0.1", "4.2.2.2"],
    "answer": 0,
    "explanation": "192.168.x.x is reserved for private networks."
  },
  {
    "q": "Which of the following is a part of the Control Unit in CPU?",
    "options": ["Instruction Register", "Program Counter", "Decoder", "All of the mentioned"],
    "answer": 3,
    "explanation": "All listed components are part of the CPU's control unit."
  },
  {
    "q": "Which of the following is used to convert high-level language to machine language?",
    "options": ["Compiler", "Interpreter", "Assembler", "Linker"],
    "answer": 0,
    "explanation": "A compiler translates the entire program into machine language."
  },
  {
    "q": "Which layer of the OSI model establishes, maintains, and terminates sessions?",
    "options": ["Transport Layer", "Session Layer", "Presentation Layer", "Application Layer"],
    "answer": 1,
    "explanation": "The Session Layer manages sessions between applications."
  },
  {
    "q": "Which of the following is used in operating system for deadlock avoidance?",
    "options": ["Banker's Algorithm", "Round Robin", "First Come First Serve", "Shortest Job First"],
    "answer": 0,
    "explanation": "Banker's Algorithm prevents deadlock by resource allocation checks."
  },
  {
    "q": "Which of the following protocols is used for sending email?",
    "options": ["SMTP", "HTTP", "FTP", "DNS"],
    "answer": 0,
    "explanation": "SMTP (Simple Mail Transfer Protocol) is used to send emails."
  },
  {
    "q": "Which of the following is not a type of RAID?",
    "options": ["RAID 0", "RAID 1", "RAID 5", "RAID 10X"],
    "answer": 3,
    "explanation": "RAID 10X does not exist; RAID 0, 1, and 5 are standard types."
  },
  {
    "q": "Which of the following is a characteristic of 5G networks?",
    "options": ["High latency", "Low speed", "High bandwidth", "Limited connectivity"],
    "answer": 2,
    "explanation": "5G offers high bandwidth, low latency, and supports massive connectivity."
  },
  {
    "q": "Which of the following is not a data type in C?",
    "options": ["int", "float", "string", "double"],
    "answer": 2,
    "explanation": "C does not have a string type; it uses char arrays for strings."
  },
  {
    "q": "Which of the following is a type of firewall?",
    "options": ["Packet Filtering", "Proxy", "Stateful Inspection", "All of the mentioned"],
    "answer": 3,
    "explanation": "All listed types are firewall techniques."
  },
  {
    "q": "Which type of database operation is used to retrieve data?",
    "options": ["SELECT", "INSERT", "UPDATE", "DELETE"],
    "answer": 0,
    "explanation": "SELECT is used to retrieve data from a database."
  },
  {
    "q": "Which of the following is used to prevent unauthorized access in a computer system?",
    "options": ["Authentication", "Encryption", "Backup", "Compression"],
    "answer": 0,
    "explanation": "Authentication ensures only authorized users can access the system."
  },
  {
    "q": "Which of the following is an example of non-volatile memory?",
    "options": ["RAM", "ROM", "Cache", "Register"],
    "answer": 1,
    "explanation": "ROM retains data even when power is off."
  },
  {
    "q": "Which of the following is not a Python data structure?",
    "options": ["List", "Tuple", "Dictionary", "ArrayList"],
    "answer": 3,
    "explanation": "ArrayList is used in Java, not Python."
  },
  {
    "q": "Which of the following is used to schedule processes in OS?",
    "options": ["CPU Scheduler", "Memory Manager", "File System", "Device Manager"],
    "answer": 0,
    "explanation": "CPU Scheduler decides which process runs next on the CPU."
  },
  {
    "q": "Which of the following is a markup language?",
    "options": ["HTML", "C++", "Java", "Python"],
    "answer": 0,
    "explanation": "HTML is a markup language, not a programming language."
  },
  {
    "q": "Which of the following is a version control system?",
    "options": ["Git", "Docker", "Jenkins", "Kubernetes"],
    "answer": 0,
    "explanation": "Git is used for version control; others are for CI/CD or containerization."
  },
  {
    "q": "Which of the following is not an OS process state?",
    "options": ["New", "Ready", "Running", "Compiling"],
    "answer": 3,
    "explanation": "Compiling is not a process state; it is an activity done by a process."
  },
  {
    "q": "Which protocol is used for secure browsing?",
    "options": ["HTTP", "HTTPS", "FTP", "SMTP"],
    "answer": 1,
    "explanation": "HTTPS encrypts data for secure web browsing."
  },
  {
    "q": "Which of the following is a key feature of Java?",
    "options": ["Platform independence", "Object orientation", "Automatic memory management", "All of the mentioned"],
    "answer": 3,
    "explanation": "Java supports platform independence, OOP, and automatic memory management."
  },
  {
    "q": "Which type of SQL command is used to change existing records?",
    "options": ["UPDATE", "DELETE", "INSERT", "SELECT"],
    "answer": 0,
    "explanation": "UPDATE modifies existing records in a table."
  },
  {
    "q": "Which of the following is not a valid IPv6 address?",
    "options": ["2001:0db8:85a3::8a2e:0370:7334", "2001::85a3::7334", "fe80::1", "::1"],
    "answer": 1,
    "explanation": "An IPv6 address cannot have two double colons (::) in the same address."
  },
  {
    "q": "Which of the following algorithms is used for searching in a sorted array?",
    "options": ["Linear Search", "Binary Search", "Bubble Search", "Quick Search"],
    "answer": 1,
    "explanation": "Binary Search efficiently finds elements in sorted arrays."
  },
  {
    "q": "Which of the following is a software development methodology?",
    "options": ["Agile", "Waterfall", "Scrum", "All of the mentioned"],
    "answer": 3,
    "explanation": "Agile, Waterfall, and Scrum are software development methodologies."
  },
  {
    "q": "Which of the following is not a type of computer virus?",
    "options": ["Trojan", "Worm", "Spyware", "Firewall"],
    "answer": 3,
    "explanation": "Firewall is a security mechanism, not a virus."
  },
  {
    "q": "Which of the following is used to prevent SQL injection?",
    "options": ["Parameterized Queries", "Dynamic SQL", "String Concatenation", "None of the mentioned"],
    "answer": 0,
    "explanation": "Parameterized queries safely handle user input to prevent SQL injection."
  },
  {
    "q": "Which of the following is used to manage files and directories in OS?",
    "options": ["File System", "Memory Manager", "Process Scheduler", "Network Manager"],
    "answer": 0,
    "explanation": "File system manages files and directories on storage devices."
  },




  

  {
    "q": "Which of the following is used to add styles and formatting to a webpage in CSS?",
    "options": ["Functions", "Variables", "Selectors", "Arrays"],
    "answer": 2,
    "explanation": "Selectors are used in CSS to apply styles to specific HTML elements."
  },
  {
    "q": "Which one of the following techniques is not used in the Binary tree?",
    "options": ["Randomized traversal", "Preorder traversal", "Postorder traversal", "Inorder traversal"],
    "answer": 0,
    "explanation": "Randomized traversal is not a standard method for traversing binary trees."
  },
  {
    "q": "In IPv4 Addresses, classful addressing is replaced with ________",
    "options": ["Classful Addressing", "Classless Addressing", "Classful Advertising", "Classless Advertising"],
    "answer": 1,
    "explanation": "Classless addressing (CIDR) replaced classful addressing to allow more efficient IP allocation."
  },
  {
    "q": "Which control statement is used for executing different blocks of code based on multiple conditions?",
    "options": ["While loop statement", "For loop statement", "If...else statement", "Switch statement"],
    "answer": 3,
    "explanation": "The switch statement allows branching to different blocks based on the value of a variable."
  },
  {
    "q": "Which graph traversal algorithm is used to find the shortest path between two nodes?",
    "options": ["Dijkstra's Algorithm", "Depth-First Search (DFS)", "Kruskal's Algorithm", "Breadth-First Search (BFS)"],
    "answer": 0,
    "explanation": "Dijkstra's algorithm finds the shortest path in weighted graphs."
  },
  {
    "q": "Consider the following sequential free memory block sizes: A=100 KB, B=200 KB, C=150 KB, D=300 KB, E=250 KB. Using First Fit, P1=120 KB, P2=250 KB, P3=180 KB. Which process goes into which memory block?",
    "options": ["P1: Block B, P2: Block E, P3: Block A", "P1: Block D, P2: Block E, P3: will not be allocated", "P1: Block B, P2: Block D, P3: Block E", "P1: Block A, P2: Block D, P3: Block E"],
    "answer": 2,
    "explanation": "First Fit allocates the first block that is large enough: P1 fits B, P2 fits D, P3 fits E."
  },
  {
    "q": "Employee (Emp_Id, Emp_name, emp_salary), here Employee is __________ and Emp_Id, Emp_name, emp_salary are _________.",
    "options": ["Tuple, Primary key", "Table, Attribute", "Attributes, Relation", "Row, Column"],
    "answer": 1,
    "explanation": "Employee represents a table and the columns (Emp_Id, Emp_name, emp_salary) are its attributes."
  },
  {
    "q": "Which one of the following search algorithms requires less memory?",
    "options": ["Linear Search", "Depth First Search", "Optimal Search", "Breadth-First Search"],
    "answer": 1,
    "explanation": "Depth First Search uses less memory than BFS because it only stores a path from root to a leaf."
  },
  {
    "q": "A functional dependency is a relationship between/among ___________",
    "options": ["Rows", "Tables", "Attributes", "Entities"],
    "answer": 2,
    "explanation": "A functional dependency expresses a relationship between attributes in a relational database."
  },
  {
    "q": "___________ is a theoretical construct of Turing machine that can simulate any other Turing machine.",
    "options": ["Multi-tape Turing machine", "Universal Turing machine", "Multi-track Turing machine", "Semi-infinite Tape"],
    "answer": 1,
    "explanation": "A Universal Turing Machine can simulate any other Turing Machine."
  },
  {
    "q": "Which of the following errors will be handled by the operating system?",
    "options": ["Lack of paper in printer", "Power failure", "Connection failure in the network", "All of the mentioned"],
    "answer": 3,
    "explanation": "The OS can handle errors like printer, power, and network failures through device and system management."
  },
  {
    "q": "Which of the following is not a type of database model?",
    "options": ["Hierarchical", "Network", "Relational", "Fragmented"],
    "answer": 3,
    "explanation": "Hierarchical, Network, and Relational are standard database models; Fragmented is not."
  },
  {
    "q": "Which layer in the OSI model provides reliable end-to-end delivery of data?",
    "options": ["Network Layer", "Transport Layer", "Session Layer", "Data Link Layer"],
    "answer": 1,
    "explanation": "The Transport Layer ensures reliable data delivery, error detection, and flow control."
  },
  {
    "q": "Which type of memory is non-volatile and used to store firmware?",
    "options": ["RAM", "ROM", "Cache", "Virtual Memory"],
    "answer": 1,
    "explanation": "ROM is non-volatile memory that stores firmware and system-level instructions."
  },
  {
    "q": "Which of the following is not a characteristic of object-oriented programming?",
    "options": ["Encapsulation", "Inheritance", "Polymorphism", "Sequential execution"],
    "answer": 3,
    "explanation": "Sequential execution is not a characteristic of OOP; encapsulation, inheritance, and polymorphism are."
  },
  {
    "q": "What is the primary purpose of DNS in networking?",
    "options": ["Routing packets", "Translating domain names to IP addresses", "Encrypting data", "Managing sessions"],
    "answer": 1,
    "explanation": "DNS translates human-readable domain names into IP addresses for routing."
  },
  {
    "q": "Which scheduling algorithm gives the highest response time to short processes?",
    "options": ["First Come First Serve", "Shortest Job First", "Round Robin", "Priority Scheduling"],
    "answer": 1,
    "explanation": "Shortest Job First favors shorter processes, giving them faster response time."
  },
  {
    "q": "Which of the following is a non-linear data structure?",
    "options": ["Array", "Linked List", "Stack", "Graph"],
    "answer": 3,
    "explanation": "Graphs are non-linear data structures; arrays, stacks, and linked lists are linear."
  },
  {
    "q": "Which Boolean algebra law states that A + 0 = A?",
    "options": ["Identity Law", "Null Law", "Complement Law", "Idempotent Law"],
    "answer": 0,
    "explanation": "The Identity Law states that adding 0 to a variable does not change its value."
  },
  {
    "q": "Which of the following is not a type of OS?",
    "options": ["Batch OS", "Multiprogramming OS", "Network OS", "Application OS"],
    "answer": 3,
    "explanation": "Batch, Multiprogramming, and Network are OS types; Application OS is not."
  },
  {
    "q": "Which data structure is used in implementing recursion?",
    "options": ["Queue", "Stack", "Linked List", "Graph"],
    "answer": 1,
    "explanation": "Recursion uses a stack to store function calls and return addresses."
  },
  {
    "q": "Which layer in TCP/IP corresponds to the OSI transport layer?",
    "options": ["Application Layer", "Network Layer", "Transport Layer", "Link Layer"],
    "answer": 2,
    "explanation": "The Transport Layer in TCP/IP handles end-to-end communication similar to OSI transport layer."
  },
  {
    "q": "Which type of database normalization removes multivalued dependencies?",
    "options": ["1NF", "2NF", "3NF", "4NF"],
    "answer": 3,
    "explanation": "Fourth Normal Form (4NF) removes multivalued dependencies from database tables."
  },
  {
    "q": "Which network topology requires the least amount of cabling?",
    "options": ["Star", "Bus", "Ring", "Mesh"],
    "answer": 1,
    "explanation": "Bus topology uses a single backbone cable connecting all devices, requiring the least cabling."
  },
  {
    "q": "Which of the following is not a feature of the Linux OS?",
    "options": ["Multitasking", "GUI support", "Virus-free", "Open-source"],
    "answer": 2,
    "explanation": "Linux is multitasking, GUI-supported, and open-source, but not inherently virus-free."
  },
  {
    "q": "Which of the following is a primary key constraint?",
    "options": ["Unique", "Not Null", "Both Unique and Not Null", "Foreign Key"],
    "answer": 2,
    "explanation": "A primary key must be both unique and not null."
  },
  {
    "q": "Which of the following sorting algorithms is stable?",
    "options": ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    "answer": 2,
    "explanation": "Merge Sort is a stable sorting algorithm; Quick Sort and Heap Sort are not."
  },
  {
    "q": "Which device is used to connect multiple networks together?",
    "options": ["Hub", "Switch", "Router", "Repeater"],
    "answer": 2,
    "explanation": "Routers connect different networks and manage traffic between them."
  },
  {
    "q": "Which type of malware restricts access to computer systems until a ransom is paid?",
    "options": ["Virus", "Worm", "Trojan", "Ransomware"],
    "answer": 3,
    "explanation": "Ransomware encrypts files or locks systems until a ransom is paid."
  },
  {
    "q": "Which of the following is not part of the CPU?",
    "options": ["ALU", "Control Unit", "Cache", "RAM"],
    "answer": 3,
    "explanation": "RAM is memory, not part of the CPU, while ALU, Control Unit, and Cache are inside CPU."
  },
  {
    "q": "Which network layer is responsible for path determination and logical addressing?",
    "options": ["Data Link Layer", "Network Layer", "Transport Layer", "Physical Layer"],
    "answer": 1,
    "explanation": "The Network Layer handles routing, addressing, and path determination."
  },
  {
    "q": "Which HTTP method is used to update an existing resource?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "answer": 2,
    "explanation": "PUT is used to update an existing resource on the server."
  },
  {
    "q": "Which of the following is not a SQL command?",
    "options": ["SELECT", "INSERT", "UPDATE", "CREATE TABLESPACE"],
    "answer": 3,
    "explanation": "CREATE TABLESPACE is Oracle-specific; standard SQL commands are SELECT, INSERT, UPDATE."
  },
  {
    "q": "Which type of memory is fastest for CPU access?",
    "options": ["RAM", "Cache", "ROM", "Hard Disk"],
    "answer": 1,
    "explanation": "CPU cache is the fastest memory, located very close to CPU cores."
  },
  {
    "q": "Which protocol is used to securely transfer files over the internet?",
    "options": ["FTP", "SFTP", "HTTP", "SMTP"],
    "answer": 1,
    "explanation": "SFTP (Secure File Transfer Protocol) encrypts file transfers over the network."
  },
  {
    "q": "Which method converts high-level code into machine code directly?",
    "options": ["Interpretation", "Compilation", "Linking", "Assembling"],
    "answer": 1,
    "explanation": "Compilation translates the entire program into machine code before execution."
  },
  {
    "q": "Which of the following is not a type of cloud computing service?",
    "options": ["IaaS", "PaaS", "SaaS", "DaaS"],
    "answer": 3,
    "explanation": "IaaS, PaaS, and SaaS are standard cloud services; DaaS (Desktop as a Service) is less common."
  },
  {
    "q": "Which TCP/IP layer corresponds to the OSI application, presentation, and session layers?",
    "options": ["Application Layer", "Transport Layer", "Network Layer", "Link Layer"],
    "answer": 0,
    "explanation": "TCP/IP Application Layer combines OSI's Application, Presentation, and Session layers."
  },
  {
    "q": "Which of the following is not a feature of Python?",
    "options": ["Interpreted", "Dynamic typing", "Object-oriented", "Compiled language"],
    "answer": 3,
    "explanation": "Python is interpreted, dynamically typed, and supports OOP; it is not compiled."
  },
  {
    "q": "Which method in HTTP is used to remove a resource?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "answer": 3,
    "explanation": "DELETE method requests the server to remove the specified resource."
  },
  {
    "q": "Which of the following is an example of a NoSQL database?",
    "options": ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
    "answer": 1,
    "explanation": "MongoDB is a NoSQL database; others are relational databases."
  },
  {
    "q": "Which of the following is not a computer language?",
    "options": ["Python", "HTML", "CSS", "Photoshop"],
    "answer": 3,
    "explanation": "Photoshop is software, not a programming or markup language."
  },
  {
    "q": "Which algorithm is used for minimum spanning tree?",
    "options": ["Dijkstra", "Prim", "KMP", "Bubble Sort"],
    "answer": 1,
    "explanation": "Prim's algorithm finds a minimum spanning tree of a weighted graph."
  },
  {
    "q": "Which OSI layer converts data into electrical signals?",
    "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    "answer": 0,
    "explanation": "Physical Layer handles transmission of bits as electrical/optical signals."
  },
  {
    "q": "Which technique is used to avoid deadlock in operating systems?",
    "options": ["Mutual Exclusion", "Hold and Wait", "Resource Allocation Graph", "Deadlock Ignoring"],
    "answer": 2,
    "explanation": "Resource Allocation Graph and algorithms help detect and avoid deadlocks."
  },
  {
    "q": "Which of the following sorting algorithms has the best average-case performance?",
    "options": ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
    "answer": 1,
    "explanation": "Quick Sort has O(n log n) average-case time complexity, better than other simple sorts."
  },
  {
    "q": "Which type of cloud is dedicated to a single organization?",
    "options": ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    "answer": 1,
    "explanation": "Private Cloud is used exclusively by a single organization."
  },
  {
    "q": "Which one of the following is not an OS process state?",
    "options": ["Ready", "Waiting", "Running", "Compiling"],
    "answer": 3,
    "explanation": "Compiling is an activity, not a standard process state in OS."
  },
  {
    "q": "Which of the following is a logical operator in C?",
    "options": ["&", "|", "&&", "!=", "=="],
    "answer": 2,
    "explanation": "&& is the logical AND operator in C; & is bitwise AND."
  },
  {
    "q": "Which of the following is an example of a programming paradigm?",
    "options": ["Object-oriented", "Procedural", "Functional", "All of the mentioned"],
    "answer": 3,
    "explanation": "All mentioned are programming paradigms."
  },
  {
    "q": "Which of the following is a valid IPv4 address?",
    "options": ["192.168.1.1", "256.100.50.25", "192.300.1.1", "10.0.0.256"],
    "answer": 0,
    "explanation": "192.168.1.1 is a valid IPv4 address; octets must be 0–255."
  },
  {
    "q": "Which of the following techniques is used in cryptography for secure communication?",
    "options": ["Symmetric encryption", "Asymmetric encryption", "Hashing", "All of the mentioned"],
    "answer": 3,
    "explanation": "All mentioned techniques are used in cryptography to secure data."
  },
  {
    "q": "Which of the following is true about RAID 5?",
    "options": ["No redundancy", "Mirroring only", "Striping with parity", "Single disk storage"],
    "answer": 2,
    "explanation": "RAID 5 uses striping with parity to provide redundancy and improve performance."
  },
  {
    "q": "Which one of the following is a feature of Java?",
    "options": ["Platform independent", "Object-oriented", "Automatic memory management", "All of the mentioned"],
    "answer": 3,
    "explanation": "Java supports all mentioned features."
  },
  {
    "q": "Which of the following is a primary function of the OS?",
    "options": ["Manage hardware", "Provide interface to users", "Resource allocation", "All of the mentioned"],
    "answer": 3,
    "explanation": "OS manages hardware, provides user interface, and allocates resources."
  }















  

  ],

  







  
"RVU":[

  {
    "q": "Which of the following errors will be handled by the operating system?",
    "options": ["Lack of paper in printer", "Power failure", "Connection failure in the network", "All of the mentioned"],
    "answer": 3,
    "explanation": "The OS can handle errors like printer, power, and network failures through device and system management."
  },
  {
    "q": "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    "options": ["Merge Sort", "Heap Sort", "Quick Sort", "Insertion Sort"],
    "answer": 0,
    "explanation": "Merge Sort is ideal for linked lists due to sequential access and O(n log n) complexity."
  },
  {
    "q": "A combinational circuit that receives 2ⁿ inputs and directs it to a single output line is called?",
    "options": ["Decoder", "Encoder", "Multiplexer", "Flip-flop"],
    "answer": 2,
    "explanation": "A multiplexer selects one input from many and sends it to a single output."
  },
  {
    "q": "Which of the following is true about stack memory allocation?",
    "options": [
      "Memory is allocated at runtime in the heap",
      "Memory is allocated in LIFO order",
      "Memory cannot be automatically released",
      "Memory allocation is random"
    ],
    "answer": 1,
    "explanation": "Stack memory is allocated and deallocated in Last-In-First-Out (LIFO) order."
  },
  {
    "q": "Which of the following is not a type of database backup?",
    "options": ["Full backup", "Incremental backup", "Differential backup", "Transactional backup"],
    "answer": 3,
    "explanation": "Transactional backup is not a standard backup type; the main types are full, incremental, and differential."
  },
  {
    "q": "Which of the following is not a layer in the OSI model?",
    "options": ["Application", "Transport", "Session", "Transmission"],
    "answer": 3,
    "explanation": "The OSI model has a Physical layer, not a Transmission layer."
  },
  {
    "q": "Which of the following is a disadvantage of linked lists over arrays?",
    "options": [
      "Dynamic memory allocation",
      "Memory overhead due to pointers",
      "Ease of insertion/deletion",
      "Flexible size"
    ],
    "answer": 1,
    "explanation": "Linked lists require extra memory for pointers, unlike arrays."
  },
  {
    "q": "Which of the following is true about TCP/IP model?",
    "options": [
      "It has 7 layers like OSI",
      "It has 4 layers",
      "It has 5 layers",
      "It has 6 layers"
    ],
    "answer": 1,
    "explanation": "The TCP/IP model consists of 4 layers: Application, Transport, Internet, and Network Access."
  },
  {
    "q": "Which of the following is not an advantage of using arrays?",
    "options": [
      "Random access of elements",
      "Fixed memory size",
      "Efficient indexing",
      "Ease of inserting elements in the middle"
    ],
    "answer": 3,
    "explanation": "Arrays are inefficient for insertion in the middle as it requires shifting elements."
  },
  {
    "q": "Which of the following is the correct syntax to define a class in C++?",
    "options": [
      "class MyClass {}", 
      "class MyClass []", 
      "MyClass class {}", 
      "define class MyClass {}"
    ],
    "answer": 0,
    "explanation": "In C++, a class is defined using the 'class' keyword followed by the class name and braces."
  },
  {
    "q": "Which of the following is true about pointers in C++?",
    "options": [
      "Pointers store memory addresses",
      "Pointers can point to any data type",
      "Pointers can be incremented or decremented",
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "All statements are true: pointers store addresses, can point to different types, and can be incremented/decremented."
  },
  {
    "q": "Which of the following is true about a binary search tree?",
    "options": [
      "Left child > parent", 
      "Right child < parent", 
      "Left child < parent and Right child > parent", 
      "None of the mentioned"
    ],
    "answer": 2,
    "explanation": "In a binary search tree, the left child is less than the parent and the right child is greater."
  },
  {
    "q": "Which of the following is not true about deadlock in operating systems?",
    "options": [
      "Occurs when two processes wait indefinitely", 
      "Resources are held by processes", 
      "Can be resolved automatically without intervention", 
      "It is a state of permanent blocking"
    ],
    "answer": 2,
    "explanation": "Deadlocks cannot be resolved automatically without intervention; they require prevention, avoidance, or recovery methods."
  },
  {
    "q": "Which of the following is used to uniquely identify a process in operating system?",
    "options": ["PID", "TID", "UID", "GID"],
    "answer": 0,
    "explanation": "A Process ID (PID) uniquely identifies a process in the operating system."
  },
  {
    "q": "Which of the following is not a type of database model?",
    "options": ["Hierarchical", "Network", "Relational", "Procedural"],
    "answer": 3,
    "explanation": "Procedural is a programming paradigm, not a database model."
  },
  {
    "q": "Which of the following is true about recursion?",
    "options": [
      "Recursion consumes more memory due to call stack",
      "Recursion can be replaced by iteration",
      "Recursion simplifies problem-solving",
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "All statements are correct: recursion uses stack memory, can be converted to iteration, and simplifies some problems."
  },
  {
    "q": "Which of the following is true about DNS?",
    "options": [
      "Translates IP addresses to domain names", 
      "Translates domain names to IP addresses", 
      "Both A and B", 
      "None"
    ],
    "answer": 2,
    "explanation": "DNS maps domain names to IP addresses and vice versa."
  },
  {
    "q": "Which of the following is an example of non-volatile memory?",
    "options": ["RAM", "Cache", "ROM", "Registers"],
    "answer": 2,
    "explanation": "ROM retains data even when the power is turned off; RAM and cache are volatile."
  },
  {
    "q": "Which of the following is a component of CPU?",
    "options": ["ALU", "Control Unit", "Registers", "All of the mentioned"],
    "answer": 3,
    "explanation": "CPU consists of Arithmetic Logic Unit (ALU), Control Unit, and registers."
  },
  {
    "q": "Which of the following is true about deadlock prevention?",
    "options": [
      "It ensures that at least one of the necessary conditions for deadlock cannot hold", 
      "It allows circular wait", 
      "It guarantees deadlocks will occur", 
      "None"
    ],
    "answer": 0,
    "explanation": "Deadlock prevention works by breaking one of the four necessary conditions, such as circular wait."
  },
  {
    "q": "Which of the following is a characteristic of RISC architecture?",
    "options": [
      "Large number of complex instructions", 
      "Fewer instructions executed per cycle", 
      "Simple instructions executed in a single cycle", 
      "Microprogrammed control"
    ],
    "answer": 2,
    "explanation": "RISC architectures have simple instructions that execute in a single clock cycle."
  },
  {
    "q": "Which of the following is true about multiplexing?",
    "options": [
      "It allows multiple signals to share a single communication channel", 
      "It improves bandwidth utilization", 
      "It reduces cost", 
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "Multiplexing shares a channel among multiple signals, improving utilization and reducing cost."
  },
  {
    "q": "Which of the following is true about cloud computing?",
    "options": [
      "Provides on-demand network access to resources", 
      "Resources are easily scalable", 
      "Users pay for what they use", 
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "Cloud computing provides on-demand resources, scalability, and pay-per-use pricing."
  },
  {
    "q": "Which of the following is true about symmetric encryption?",
    "options": [
      "Same key used for encryption and decryption", 
      "Faster than asymmetric encryption", 
      "Key must be shared securely", 
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "Symmetric encryption uses one key, is fast, and requires secure key sharing."
  },
  {
    "q": "Which of the following is true about a compiler?",
    "options": [
      "Translates high-level language to machine code", 
      "Executes program line by line", 
      "Requires source code at runtime", 
      "None"
    ],
    "answer": 0,
    "explanation": "A compiler translates the entire program into machine code before execution."
  },
  {
    "q": "Which of the following sorting algorithms is stable?",
    "options": ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    "answer": 2,
    "explanation": "Merge Sort is stable because it maintains the relative order of equal elements."
  },
  {
    "q": "Which of the following is true about deadlock avoidance?",
    "options": [
      "It requires advance knowledge of resource requests", 
      "It dynamically ensures safe state", 
      "It avoids circular wait", 
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "Deadlock avoidance uses knowledge of resource requests to keep the system in a safe state."
  },
  {
    "q": "Which of the following is an example of a non-linear data structure?",
    "options": ["Array", "Queue", "Stack", "Graph"],
    "answer": 3,
    "explanation": "Graph is a non-linear data structure; arrays, stacks, and queues are linear."
  },
  {
    "q": "Which of the following is true about RAID 1?",
    "options": [
      "Mirroring of disks", 
      "Striping of disks", 
      "Parity-based", 
      "Combines striping and parity"
    ],
    "answer": 0,
    "explanation": "RAID 1 duplicates data on two disks for redundancy (mirroring)."
  },
  {
    "q": "Which of the following is not a type of operating system?",
    "options": ["Batch OS", "Distributed OS", "Embedded OS", "Oracle OS"],
    "answer": 3,
    "explanation": "Oracle OS is not a recognized type of operating system."
  },
  {
    "q": "Which of the following is true about a TCP connection?",
    "options": [
      "Connectionless", 
      "Reliable data transfer", 
      "No error detection", 
      "Unreliable"
    ],
    "answer": 1,
    "explanation": "TCP is connection-oriented and provides reliable data transfer with error detection."
  },
  {
    "q": "Which of the following is true about a deadlock?",
    "options": [
      "Occurs when processes wait indefinitely for resources", 
      "Occurs only in single-threaded systems", 
      "Is easily resolved automatically", 
      "None"
    ],
    "answer": 0,
    "explanation": "Deadlock occurs when processes wait indefinitely for resources held by each other."
  },
  {
    "q": "Which of the following is true about DHCP?",
    "options": [
      "Automatically assigns IP addresses", 
      "Reduces administrative overhead", 
      "Uses lease mechanism", 
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "DHCP automates IP assignment, reduces admin work, and leases addresses temporarily."
  },
  {
    "q": "Which of the following is true about an algorithm?",
    "options": [
      "Well-defined steps", 
      "Finite number of steps", 
      "Input and output defined", 
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "An algorithm is well-defined, finite, and has defined inputs and outputs."
  },
  {
    "q": "Which of the following is true about a stack?",
    "options": [
      "Follows LIFO", 
      "Supports push and pop", 
      "Used in recursion", 
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "A stack follows LIFO, supports push/pop, and is commonly used in recursion."
  },










  
  {
    "q": "Which of the following is used to add styles and formatting to a webpage in CSS?",
    "options": ["Functions", "Variables", "Selectors", "Arrays"],
    "answer": 2,
    "explanation": "Selectors in CSS are used to target HTML elements and apply styles to them."
  },
  {
    "q": "Which one of the following techniques is not used in the Binary tree?",
    "options": ["Randomized traversal", "Preorder traversal", "Postorder traversal", "Inorder traversal"],
    "answer": 0,
    "explanation": "Binary trees commonly use preorder, postorder, and inorder traversals. Randomized traversal is not standard."
  },
  {
    "q": "Which of the following principles does Queue use?",
    "options": ["LIFO principle", "FIFO principle", "Linear tree", "Ordered array"],
    "answer": 1,
    "explanation": "A queue operates on First In First Out (FIFO) principle; the first element added is the first removed."
  },
  {
    "q": "Which of the following is not considered as a peripheral device?",
    "options": ["CPU", "Keyboard", "Monitor", "All of the above"],
    "answer": 0,
    "explanation": "The CPU is the central processing unit, part of the main system, not a peripheral device."
  },
  {
    "q": "Which recovery technique uses the undo/redo approach?",
    "options": ["Immediate Update", "Deferred Update", "ARIES Algorithm", "None"],
    "answer": 0,
    "explanation": "Immediate update recovery uses undo and redo operations to maintain database consistency."
  },
  {
    "q": "Which of the following statements is false about classes of language in automaton theory?",
    "options": [
      "Context-free language is a subset of context-sensitive language",
      "Regular language is a subset of context-sensitive language",
      "Recursively enumerable language is the superset of regular language",
      "Context-sensitive language is a subset of context-free language"
    ],
    "answer": 3,
    "explanation": "Context-sensitive languages are more powerful than context-free languages, so they are not a subset of context-free languages."
  },
  {
    "q": "Where are the list of processes that are prepared to be executed and waiting placed?",
    "options": ["Job queue", "Ready queue", "Execution queue", "Process queue"],
    "answer": 1,
    "explanation": "The ready queue holds processes that are ready to execute and waiting for CPU allocation."
  },
  {
    "q": "Which one of the following statements is not true about the application of micro-operations?",
    "options": [
      "Selective set operation is implemented using OR micro-operation",
      "Selective clear operation clears to zero the bit in the first operand only where there are corresponding 1's in the logical operand",
      "Clear operation is implemented using Exclusive-OR Micro-operation",
      "None of the above"
    ],
    "answer": 3,
    "explanation": "All statements about micro-operations are correct, so 'None of the above' is the correct choice."
  },
  {
    "q": "Based on the function prototype MY_AGENT(PERCEPT), the instruction updates the state of the environment if necessary. What is its purpose?",
    "options": [
      "Modify the state of the environment if necessary",
      "Update the state information to be like the one after executing the best action chosen",
      "Update the environment so that the agent can perceive the next percept",
      "Modify the state of the environment once the decision of which action to choose is made"
    ],
    "answer": 0,
    "explanation": "The function updates the environment state based on the percept, allowing the agent to respond correctly."
  },
  {
    "q": "The process of recovering the original message without the detailed knowledge of the secret information is called:",
    "options": ["Decryption", "Decipher", "Cryptanalysis", "A and B"],
    "answer": 2,
    "explanation": "Cryptanalysis is the study of analyzing and breaking ciphers without knowing the key."
  },
  {
    "q": "Both the CISC and RISC architectures have been developed to reduce the ______",
    "options": ["Time delay", "Semantic gap", "Cost", "All of the mentioned"],
    "answer": 1,
    "explanation": "Both architectures aim to reduce the semantic gap between high-level instructions and hardware execution."
  },
  {
    "q": "All of the following are disadvantages of using DHCP services EXCEPT?",
    "options": [
      "Fault on the DHCP server can affect the whole network",
      "It is not a secured way of assigning IP addresses",
      "Static IP address assignment can't be used",
      "It minimizes the load of network admin"
    ],
    "answer": 3,
    "explanation": "DHCP reduces admin workload, which is an advantage, not a disadvantage."
  },
  {
    "q": "CPU scheduling is the basis of ___________",
    "options": [
      "Multiprogramming operating systems",
      "Larger memory-sized systems",
      "Multiprocessor systems",
      "None of the mentioned"
    ],
    "answer": 0,
    "explanation": "CPU scheduling allows multiple programs to share the CPU effectively in multiprogramming OS."
  },
  {
    "q": "What is the bottom-up parsing method also known as?",
    "options": [
      "Recursive descent parsing",
      "Predictive parsing",
      "Shift-reduce parsing",
      "All of them"
    ],
    "answer": 2,
    "explanation": "Bottom-up parsers construct a parse tree from leaves to root using shift-reduce operations."
  },
  {
    "q": "On the basis of the general search methods, which simple strategy results in greedy best search?",
    "options": [
      "Append newly generated nodes at the beginning of the open list",
      "Append newly generated nodes at the end of the open list",
      "Insert newly generated nodes in the open list according to their path cost (lowest values first)",
      "Insert newly generated nodes in the open list according to their evaluation function (lowest values first)"
    ],
    "answer": 3,
    "explanation": "Greedy best-first search selects nodes based on evaluation function (e.g., heuristic) to find optimal path faster."
  },
  {
    "q": "What is the main goal of data compression while it paths in different network layers?",
    "options": [
      "Securing data",
      "Minimize the size of data",
      "Select the best path of destination devices",
      "All of the above"
    ],
    "answer": 1,
    "explanation": "Data compression reduces the size of data to save bandwidth and improve transmission efficiency."
  },
  {
    "q": "The _________ statement causes a loop to terminate immediately.",
    "options": ["Continue", "Goto", "Break", "Jump"],
    "answer": 2,
    "explanation": "The 'break' statement terminates the current loop immediately."
  },
  {
    "q": "Which of the following can be a heuristic for grouping objects into subsystems?",
    "options": [
      "Assign objects identified in one use case into the same subsystem",
      "Create a dedicated subsystem for objects used for moving data among subsystems",
      "Minimize the number of associations crossing subsystem boundaries",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "All three rules are used as heuristics to create efficient, modular subsystems."
  },
  {
    "q": "The term Push and Pop is related to______________",
    "options": ["Queue", "Stack", "Both", "None"],
    "answer": 1,
    "explanation": "Push adds an item to the stack and Pop removes an item, following LIFO principle."
  },
  {
    "q": "Which one of the following statements is false?",
    "options": [
      "A sentence is said to be invalid iff it is unsatisfiable",
      "A sentence is valid if it is satisfiable",
      "A sentence which is not invalid is satisfiable",
      "A sentence is unsatisfiable if it is false in all models"
    ],
    "answer": 1,
    "explanation": "A valid sentence is true in all models, not just satisfiable in some."
  },
  {
    "q": "Which of the following PHP code snippets is used to retrieve data from a MySQL database?",
    "options": [
      "$result = mysql_query(\"SELECT * FROM users WHERE id = 1\")",
      "$result = mysqliquery(conn, \"SELECT * FROM users WHERE id = 1\")",
      "$result = $pdo->query(\"SELECT * FROM users WHERE id = 1\")",
      "$result = pg_query(\"SELECT * FROM users WHERE id = 1\")"
    ],
    "answer": 1,
    "explanation": "The correct PHP mysqli syntax uses 'mysqliquery' to execute SQL queries on MySQL."
  },
  {
    "q": "Which of the following JavaScript code snippets is used to add a new element to an HTML document?",
    "options": [
      "element.appendChild(document.createTextNode(\"Hello, world!\"))",
      "var element = document.createElement(\"div\")",
      "document.body.appendChild(element)",
      "document.getElementById(\"container\").appendChild(element)"
    ],
    "answer": 1,
    "explanation": "document.createElement(\"div\") creates a new HTML element which can then be appended."
  },
  {
    "q": "Based on the prototype MY_AGENT(PERCEPT), MY_AGENT is ____________ type of agent.",
    "options": ["Goal based", "Model based reflex", "Simple reflex", "Utility based"],
    "answer": 3,
    "explanation": "It uses a utility-based approach, evaluating actions based on state to choose the best one."
  },
  {
    "q": "Which of the following statements is true about crackers?",
    "options": [
      "They attempt to break the system without permissions",
      "They are legally employed to break into the system",
      "They reveal the information after breaking into the system",
      "All"
    ],
    "answer": 0,
    "explanation": "Crackers break systems illegally, without permission, unlike ethical hackers."
  },
  {
    "q": "Which one of the following is not the application of the stack data structure?",
    "options": ["String reversal", "Recursion", "Backtracking", "Asynchronous data transfer"],
    "answer": 3,
    "explanation": "Stacks are used for LIFO operations, not for asynchronous data transfer."
  },
  {
    "q": "Which of the following is false about subsystems?",
    "options": [
      "A physical and replaceable part of the system",
      "It reduces the complexity of the application domain",
      "Decompose a system into simpler parts",
      "Well-defined interfaces that encapsulate the state and behavior of its contained classes"
    ],
    "answer": 1,
    "explanation": "Subsystems help manage complexity but do not directly reduce the complexity of the application domain itself."
  },
  {
    "q": "Suppose you are asked to construct a DFA for the strings ending with an 'n' length substring. How many minimal states may the DFA require?",
    "options": ["n", "n+1", "n+2", "n*2"],
    "answer": 1,
    "explanation": "A DFA for strings of length n needs n+1 states to distinguish all suffixes of length ≤ n."
  },
  {
    "q": "Which type of firewall can filter incoming signals based on port numbers and protocol?",
    "options": ["Packet Filtering", "Proxy Service", "Stateful Inspection", "Threat-Focused NGFW"],
    "answer": 2,
    "explanation": "Stateful Inspection firewalls examine packets, including ports and protocol, before allowing them."
  },
  {
    "q": "Which of the following is an example of Usability requirements?",
    "options": ["User interface", "Robustness", "Mean time to failure", "Adaptability"],
    "answer": 0,
    "explanation": "Usability requirements focus on how user-friendly the system is, including UI design."
  },
  {
    "q": "____________ is an alternative to log-based recovery.",
    "options": ["Disk recovery", "Shadow paging", "Disk shadowing", "Crash recovery"],
    "answer": 1,
    "explanation": "Shadow paging keeps a copy of database pages to recover without using logs."
  },
  {
    "q": "To test the IP stack on your local host, which IP address would you ping?",
    "options": ["127.0.0.1", "1.0.0.127", "127.0.0.0", "127.0.0.255"],
    "answer": 0,
    "explanation": "127.0.0.1 is the loopback address used to test networking on the local machine."
  },
  {
    "q": "Why is determining the run time of a program exactly difficult in terms of algorithm performance?",
    "options": ["Processor speed", "Current processor load", "Input size of the given algorithm", "All"],
    "answer": 3,
    "explanation": "All these factors affect program runtime, making exact measurement difficult."
  },
  {
    "q": "Which one of the following is not the purpose of the super keyword?",
    "options": [
      "Refer to the current object",
      "Call superclass constructor",
      "Access hidden variables",
      "Invoke superclass method with the same name as the subclass method"
    ],
    "answer": 0,
    "explanation": "The 'super' keyword refers to the superclass, not the current object (that's 'this')."
  },
  {
    "q": "What will be the encrypted message if the message 'ATTACK' is encrypted by Caesar's cipher with key = 25?",
    "options": ["ZSSZBJ", "ZGGZXP", "ZTTZAK", "BGGBDL"],
    "answer": 0,
    "explanation": "A Caesar cipher with key 25 shifts each letter one position backward in the alphabet."
  },
  {
    "q": "A translator that translates a single-line instruction at a time is:",
    "options": ["Compiler", "Assembler", "Interpreter", "Linker"],
    "answer": 2,
    "explanation": "An interpreter executes instructions line by line, unlike a compiler which translates the entire program."
  },
  {
    "q": "What is an operating system?",
    "options": [
      "Interface between the hardware and application programs",
      "Collection of programs that manages hardware resources",
      "System service provider to the application programs",
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "An OS performs all these functions to manage hardware and provide services to applications."
  },
  {
    "q": "Most of the time, it is recommended to apply a Hardware RAID into your system in terms of system performance. Why?",
    "options": [
      "A physical storage device that is built into a system",
      "Can appear as a single hard disk in the system",
      "There is no difference between regular hardware and the RAID devices",
      "Can use its own resources"
    ],
    "answer": 3,
    "explanation": "Hardware RAID uses dedicated resources for better performance, offloading processing from the CPU."
  },
  {
    "q": "A conceptual level refers to:",
    "options": [
      "Describes the represents global view of the entire database",
      "Describes the part of the database that a particular user group views of the data environment",
      "Describes how data is actually stored on disk",
      "Describes the physical storage structure of the database"
    ],
    "answer": 0,
    "explanation": "The conceptual level shows a global logical view of the entire database, independent of physical storage."
  },
  {
    "q": "Which of the following protocols in MTA enables users to access mail data/information from the MDA?",
    "options": ["POP3", "IMAP", "SMTP", "Both POP3 and IMAP"],
    "answer": 3,
    "explanation": "Both POP3 and IMAP allow clients to retrieve emails from the mail server (MDA)."
  },
  {
    "q": "Which one of the following has the same name as the class name?",
    "options": ["Method", "Variable", "Constructor", "Package name"],
    "answer": 2,
    "explanation": "Constructors have the same name as the class to initialize objects."
  },
  {
    "q": "An AI agent acts upon the environment using _______________.",
    "options": ["Sensors", "Effectors", "Actuators", "Manipulators"],
    "answer": 0,
    "explanation": "Agents perceive the environment using sensors; effectors/actuators act upon it."
  },
  {
    "q": "Which of the following is used to include an external JavaScript file in an HTML document?",
    "options": [
      "<script href=\"file.js\"></script>",
      "<link rel=\"stylesheet\" href=\"file.js\">",
      "<script type=\"text/javascript\" src=\"file.js\"></script>",
      "<link rel=\"stylesheet\" type=\"text/javascript\" href=\"file.js\">"
    ],
    "answer": 2,
    "explanation": "External JavaScript files are linked using <script> with the src attribute."
  },
  {
    "q": "How many tokens are there in the following C++ statement? for (int i =0; i <= 10; i++)",
    "options": ["4", "5", "9", "10"],
    "answer": 2,
    "explanation": "Tokens are syntactic units; here we have: for, (, int, i, =, 0, ;, i, <=, 10, ;, i++, ) → 9 tokens if counting operators and identifiers."
  },
  {
    "q": "Which of the following is not correct about a finite Automaton?",
    "options": [
      "Finite automaton accept a string or word by final state",
      "Finite Automaton has at least one final state",
      "Finite Automaton has at least one initial state",
      "Deterministic Finite Automaton has a single transition"
    ],
    "answer": 3,
    "explanation": "In DFA, each state must have exactly one transition for each input symbol; the statement is ambiguous."
  },
  {
    "q": "Which of the following is the main function of a network firewall?",
    "options": [
      "Monitoring incoming and outgoing network traffic",
      "Filtering unauthorized access",
      "Protecting against malware attacks",
      "All of the mentioned"
    ],
    "answer": 3,
    "explanation": "Firewalls monitor and filter network traffic to block unauthorized access and protect systems."
  },
  {
    "q": "Which of the following is true about the TCP protocol?",
    "options": [
      "TCP is connection-oriented",
      "TCP provides reliable delivery",
      "TCP ensures data integrity with checksums",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "TCP is connection-oriented, reliable, and provides integrity checks."
  },
  {
    "q": "Which of the following is used for disk scheduling?",
    "options": ["FCFS", "SSTF", "SCAN", "All of the mentioned"],
    "answer": 3,
    "explanation": "All listed algorithms (FCFS, SSTF, SCAN) are used for disk scheduling."
  },
  {
    "q": "Which of the following techniques is used for error detection in networking?",
    "options": ["Parity Check", "Checksum", "CRC", "All of the mentioned"],
    "answer": 3,
    "explanation": "All these techniques detect errors in transmitted data."
  },
  {
    "q": "Which is the best-suited algorithm to sort a linked list?",
    "options": ["Quick Sort", "Heap Sort", "Merge Sort", "Insertion Sort"],
    "answer": 2,
    "explanation": "Merge Sort works efficiently for linked lists because it doesn't require random access."
  },
  {
    "q": "Which of the following is not a relational database management system?",
    "options": ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
    "answer": 2,
    "explanation": "MongoDB is a NoSQL database; others are relational."
  },





  {
    "q": "_________ is one of the basic principles of object oriented programming that uses one object in multiple forms.",
    "options": ["Inheritance", "Interface", "Encapsulation", "None of the above"],
    "correct": 3,
    "explanation": "The principle described is Polymorphism, which allows one object to take many forms. None of the listed options directly represents Polymorphism."
  },
  {
    "q": "Which is a correct way to create an object in Java for the given Student class?",
    "options": ["Student stud = Student(3983,20);", "Student stud;", "Student stud = new Student();", "Student stud = new Student(3983,2);"],
    "correct": 2,
    "explanation": "In Java, objects are created using the 'new' keyword with the class constructor. Student stud = new Student(); correctly creates an object."
  },
  {
    "q": "To measure space efficiency of an algorithm, we count:",
    "options": ["Maximum memory required", "Average memory required", "Minimum memory required", "Maximum disk space needed"],
    "correct": 0,
    "explanation": "Space efficiency considers the maximum memory the algorithm may require during execution."
  },
  {
    "q": "Two main measures for algorithm efficiency are:",
    "options": ["Processor and memory", "Data and space", "Complexity and capacity", "Time and space"],
    "correct": 3,
    "explanation": "Algorithm efficiency is measured using time complexity (execution time) and space complexity (memory usage)."
  },
  {
    "q": "Best time complexity to precompute all-pairs shortest paths in a weighted graph:",
    "options": ["O(n^2)", "O(n^3)", "O(n)", "O(n^4)"],
    "correct": 1,
    "explanation": "Floyd-Warshall algorithm computes all-pairs shortest paths in O(n^3) time."
  },
  {
    "q": "Time complexity of optimal binary search tree (OBST):",
    "options": ["O(n)", "O(n^2)", "O(log n)", "O(n!)"],
    "correct": 2,
    "explanation": "Searching in a binary search tree takes O(log n) time in the optimal case."
  },
  {
    "q": "Space complexity of a recursive algorithm with n levels of recursion and O(1) space per level:",
    "options": ["O(n^2)", "O(n)", "O(1)", "O(log n)"],
    "correct": 3,
    "explanation": "Recursive calls require stack space. For n levels with O(1) per level, the total space is O(n). If tail recursion is optimized, it can be O(log n)."
  },
  {
    "q": "Best case time complexity of linear search algorithm:",
    "options": ["O(n^2)", "O(n)", "O(1)", "O(log n)"],
    "correct": 2,
    "explanation": "If the element is found at the first position, only one comparison is needed. Hence O(1)."
  },
  {
    "q": "If elements '1','2','3','4' are inserted in a queue, order for removal is:",
    "options": ["4321", "3241", "1234", "None of the above"],
    "correct": 2,
    "explanation": "Queue follows FIFO (First-In-First-Out), so elements are removed in the order 1,2,3,4."
  },
  {
    "q": "Disadvantage of array data structure:",
    "options": ["Memory must be known beforehand", "Elements can be accessed in constant time", "Elements are stored contiguously", "Other structures can be implemented using arrays"],
    "correct": 0,
    "explanation": "Static arrays require size to be declared before use, which may waste or limit memory."
  },
  {
    "q": "Maximum number of swaps in Selection Sort algorithm:",
    "options": ["n - 1", "1", "n", "n - 2"],
    "correct": 0,
    "explanation": "Selection sort always swaps the minimum element into the correct position at most n-1 times."
  },
  {
    "q": "Time complexity to insert an element at the end of a linked list (head pointer known):",
    "options": ["O(1)", "O(nlog n)", "O(n)", "O(log n)"],
    "correct": 0,
    "explanation": "If a tail pointer is maintained, insertion at the end is O(1); otherwise O(n) to traverse."
  },
  {
    "q": "Data structure required to convert infix to prefix notation:",
    "options": ["Stack", "Queue", "Binary Tree", "Linked List"],
    "correct": 0,
    "explanation": "Stack is used to hold operators while converting infix expressions to prefix or postfix."
  },
  {
    "q": "Process of inserting an element in the stack is called:",
    "options": ["Insert", "Add", "Push", "None of the above"],
    "correct": 2,
    "explanation": "Push operation inserts (pushes) an element onto the top of the stack."
  },
  {
    "q": "Which of the following is a Divide and Conquer algorithm?",
    "options": ["Merge Sort", "Heap Sort", "Selection Sort", "Bubble Sort"],
    "correct": 0,
    "explanation": "Merge Sort divides the array recursively and merges sorted parts, hence divide and conquer."
  },
  {
    "q": "A collection of multiple logically related databases distributed over a network is called:",
    "options": ["Data Fragmentation", "Distributed Database", "Data Allocation", "Data Replication"],
    "correct": 1,
    "explanation": "A Distributed Database stores parts of the database on different networked computers."
  },
  {
    "q": "Transaction must execute exactly once completely or not at all:",
    "options": ["Consistency", "Durability", "Isolation", "Atomicity"],
    "correct": 3,
    "explanation": "Atomicity ensures that either all operations in a transaction are performed or none."
  },
  {
    "q": "Language used to formulate database schema:",
    "options": ["Data Manipulation Language", "Data Definition Language", "Transaction Control Language", "Data Control Language"],
    "correct": 1,
    "explanation": "DDL (Data Definition Language) defines the schema (tables, fields, relationships) in a database."
  },
  {
    "q": "A table can have only one:",
    "options": ["Unique Key", "Candidate Key", "Primary Key", "Foreign Key"],
    "correct": 2,
    "explanation": "A primary key uniquely identifies each row in a table and there can be only one primary key."
  },
  {
    "q": "Checkpoints are part of:",
    "options": ["Recovery measures", "Concurrency measures", "Authorization measures", "Security measures"],
    "correct": 0,
    "explanation": "Checkpoints are used to recover the database system to a consistent state after a failure."
  },
  {
    "q": "Foreign key constraint requires that:",
    "options": ["Domain Integrity", "Referential Integrity", "Transitive Dependency", "Entity Integrity"],
    "correct": 1,
    "explanation": "Referential Integrity ensures foreign key values exist as primary key values in the referenced table."
  },
  {
    "q": "Which is NOT a feature of DBMS?",
    "options": ["Support ACID Property", "Single-user Access only", "High Level Security", "Minimum Duplication and Redundancy"],
    "correct": 1,
    "explanation": "DBMS is designed for multi-user access. Single-user access only is not a feature."
  },
  {
    "q": "Which is NOT a function of a database?",
    "options": ["Analyzing code", "Provide backup and recovery", "Manipulate data", "Manage stored data"],
    "correct": 0,
    "explanation": "Databases store and manage data, manipulate data, and provide recovery. Analyzing code is unrelated."
  },
  {
    "q": "Which is NOT a recovery technique?",
    "options": ["ARIES Algorithm", "Two-phase commit", "Immediate update", "Deferred update"],
    "correct": 1,
    "explanation": "Two-phase commit is a concurrency control technique, not a recovery method."
  },
  {
    "q": "Which is NOT true about OODBMS?",
    "options": ["Key concept is objects", "Object is persistent", "Key concept is relation", "Object identity is unchangeable"],
    "correct": 2,
    "explanation": "OODBMS is object-oriented; the key concept is objects, not relations (which is for RDBMS)."
  },
  {
    "q": "Query optimization technique that uses ordering of operations:",
    "options": ["Semantic Query", "Heuristic-based", "Cost estimation", "Exhaustive search"],
    "correct": 1,
    "explanation": "Heuristic-based optimization uses rules to order operations efficiently without exhaustive cost calculation."
  },
  {
    "q": "Relationship MANY TO ONE example:",
    "options": ["Building – Location", "Employee – Department", "Hospital – Patient", "Author – Book"],
    "correct": 1,
    "explanation": "Many employees can belong to one department (MANY TO ONE)."
  },
  {
    "q": "During system design, decomposition is influenced by all except:",
    "options": ["Coupling", "System functionality", "Cohesion", "User's thinking"],
    "correct": 3,
    "explanation": "System decomposition depends on functionality, coupling, cohesion, but not directly on user thinking."
  },
  {
    "q": "Functional model is graphically represented by:",
    "options": ["Use case diagram", "State transition diagram", "Class diagram", "Object diagram"],
    "correct": 0,
    "explanation": "Use case diagrams represent functional requirements and interactions with actors."
  },
  {
    "q": "False statement about software engineering concepts:",
    "options": ["System Analysis focuses on user's view", "Design focuses on developer's view", "Result of system analysis includes subsystem decomposition", "Requirements elicitation focuses only on user's view"],
    "correct": 2,
    "explanation": "System analysis models user needs. Subsystem decomposition is part of design, not analysis."
  },
  {
    "q": "Heuristic NOT used to identify entity objects:",
    "options": ["Real-world entities", "Real-world activities", "Forms", "Data sources"],
    "correct": 2,
    "explanation": "Forms are not considered entities; entities come from real-world objects, activities, or data sources."
  },
  {
    "q": "System with heat sensor detecting intrusion is providing:",
    "options": ["Functional Requirement", "Non-Functional", "Constraints", "Known Requirement"],
    "correct": 0,
    "explanation": "The system performs a specific function (detect and alert), so it's a functional requirement."
  },
  {
    "q": "To identify actors in a system, we ask:",
    "options": ["Dependencies among use cases", "Information actor accesses", "Which user groups execute system functions", "Tasks actor wants system to perform"],
    "correct": 2,
    "explanation": "Actors are identified by which user groups interact with the system's main functions."
  },
  {
    "q": "PHP function to establish secure MySQL connection using SSL:",
    "options": ["mysqli_ssl_connect()", "pdo_connect_ssl()", "mysql_ssl_connect()", "secure_connect()"],
    "correct": 0,
    "explanation": "mysqli_ssl_connect() establishes a secure connection to MySQL using SSL."
  },
  {
    "q": "JavaScript function to display alert dialog:",
    "options": ["console.log()", "confirm()", "alert()", "prompt()"],
    "correct": 2,
    "explanation": "alert() displays a dialog box with a message."
  },
  {
    "q": "JavaScript method to select HTML element by ID:",
    "options": ["getElementById()", "getElementByTag()", "getElementByName()", "getElementByClass()"],
    "correct": 0,
    "explanation": "getElementById('id') returns the element with the specified ID."
  },
  {
    "q": "Language for interactivity and dynamic behavior in web pages:",
    "options": ["HTML", "PHP", "CSS", "JavaScript"],
    "correct": 3,
    "explanation": "JavaScript is used for client-side interactivity."
  },
  {
    "q": "Language primarily defining structure and content of web page:",
    "options": ["HTML", "JavaScript", "PHP", "CSS"],
    "correct": 0,
    "explanation": "HTML defines the structure and content of web pages."
  },
  {
    "q": "PHP function to check if a file/directory exists:",
    "options": ["file_exists()", "file_exists_check()", "is_file()", "file_check()"],
    "correct": 0,
    "explanation": "file_exists() returns true if a file or directory exists."
  },
  {
    "q": "PHP function to retrieve number of rows affected by SQL query:",
    "options": ["num_rows()", "row_count()", "get_affected_rows()", "affected_rows()"],
    "correct": 3,
    "explanation": "affected_rows() returns the number of rows affected by the last query."
  },
  {
    "q": "PHP superglobal array to get server and execution environment info:",
    "options": ["$_POST", "$_SESSION", "$_GET", "$_SERVER"],
    "correct": 3,
    "explanation": "$_SERVER contains information about headers, paths, and script locations."
  },
  {
    "q": "PHP superglobal array to retrieve POSTed form data:",
    "options": ["$_REQUEST", "$_GET", "$_POST", "$_SERVER"],
    "correct": 2,
    "explanation": "$_POST contains data sent from a form using the POST method."
  },
  {
    "q": "AI agent with condition-action rules and memory to track current state:",
    "options": ["Simple reflex", "Model-based reflex", "Goal-based", "Utility-based"],
    "correct": 1,
    "explanation": "Model-based reflex agents use memory of the world to decide actions based on conditions."
  },
  {
    "q": "Machine learning technique to group existing higher education institutions as first, second, third generation:",
    "options": ["Reinforcement Learning", "Regression", "Classification", "Clustering"],
    "correct": 3,
    "explanation": "Clustering groups data without predefined labels, suitable for unsupervised categorization."
  },
  {
    "q": "AI is: 'Design software that solves problems by identifying best action sequence to achieve goal.'",
    "options": ["Acts humanly", "Thinks humanly", "Acts rationally", "Thinks rationally"],
    "correct": 2,
    "explanation": "The system acts rationally to achieve goals efficiently; focus is on correct actions rather than mimicking humans."
  },
  {
    "q": "Completeness of search algorithm:",
    "options": ["Finds best goal if multiple exist", "Estimates memory required", "Estimates search steps", "Will find solution if one exists"],
    "correct": 3,
    "explanation": "Completeness means the algorithm is guaranteed to find a solution if one exists."
  },
  {
    "q": "AI view concerned with thought processing:",
    "options": ["Autonomous system", "System that thinks humanly or rationally", "System acts humanly or rationally", "System acts omnisciently"],
    "correct": 1,
    "explanation": "This view focuses on replicating human or rational thought processes."
  },
  {
    "q": "False statement about AI validation:",
    "options": ["Turing test validates acting humanly", "Performance validates acting rationally", "Validating thinking humanly is impossible", "Reasoning validates thinking rationally"],
    "correct": 2,
    "explanation": "Validating AI that thinks humanly is theoretically impossible, since we cannot fully measure human thought internally."
  },
  {
    "q": "A context-free grammar is ambiguous if there exists a string that can have:",
    "options": ["Only one parse tree", "No parse tree", "Partial parse tree", "More than one parse tree"],
    "correct": 3,
    "explanation": "Ambiguity occurs if a string can be parsed in multiple valid ways."
  },
  {
    "q": "Context-free grammar S->aS / ε is equivalent to regular expression:",
    "options": ["a*", "(a+b)*", "a(a+b)*", "a+"],
    "correct": 0,
    "explanation": "S -> aS | ε generates any number of 'a's, which is represented by a*."
  },
  {
    "q": "Pushdown automaton uses which data structure?",
    "options": ["Linked List", "Stack", "Hash Table", "Queue"],
    "correct": 1,
    "explanation": "PDA uses a stack to store symbols while processing the input string."
  },
  {
    "q": "Machine equivalent for regular grammar:",
    "options": ["Pushdown automata", "Linear bounded automata", "Finite state automata", "Turing Machine"],
    "correct": 2,
    "explanation": "Regular grammars are recognized by finite state automata."
  },











  
  {
    "q": "Assume that p, x, y, and z are int variables with x = 1, y = 10, z = -3. Which of the following is true after the statement p = (x++ * y--) + ++z?",
    "options": ["p = 22", "p = 17", "p = 16", "p = 8"],
    "correct": 3,
    "explanation": "x++ uses the current value of x (1), y-- uses current value of y (10), so 1*10 = 10. ++z increments z from -3 to -2. Sum: 10 + (-2) = 8."
  },
  {
    "q": "What will happen in the following C++ code snippet? int a = 100, b = 200; int *p = &a, *q = &b; p = q;",
    "options": ["p now points to b", "a is assigned to b", "b is assigned to a", "q now points to a"],
    "correct": 0,
    "explanation": "The assignment p = q makes pointer p point to the same address as q, which is b. The values of a or b are not changed."
  },
  {
    "q": "Which of the following best describes the statement “C++ is a case sensitive programming language”?",
    "options": ["All variables in C++ are identifiers", "Every C++ statement should include the header file iostream.h", "ExitExam and exitExam are distinct in C++", "Every statement in C++ ends with semicolon"],
    "correct": 2,
    "explanation": "C++ distinguishes between uppercase and lowercase letters. ExitExam and exitExam refer to two different identifiers."
  },
  {
    "q": "Which of the following is true about the statement a = b;",
    "options": ["The value of a and b are equal", "The value of b is assigned to variable a and later change on b affects a", "The value of a is assigned to b and b to a", "The value of b is assigned to variable a and later change on b does not affect a"],
    "correct": 3,
    "explanation": "The value of b is copied into a. Later changes to b do not affect a, as assignment copies the value, not the reference."
  },
  {
    "q": "Which one of the following is true statement about an algorithm?",
    "options": ["Ambiguous steps are allowed in an algorithm", "Complex problems cannot have an algorithm", "An algorithm may not have a beginning and an end", "An algorithm should take finite amount of time to compute"],
    "correct": 3,
    "explanation": "A correct algorithm must have a finite number of steps and terminate after a finite time."
  },
  {
    "q": "Which of the following will NOT increase an integer variable 'i' by 1?",
    "options": ["i+=1;", "i=i+1;", "i=i+i;", "++i;", "i++"],
    "correct": 2,
    "explanation": "i = i + i doubles the value of i. All other options increment i by exactly 1."
  },
  {
    "q": "Given three classes A, B and C, where class C is derived from class B, which is derived from class A. If those classes are public and in different packages, then a class C object can access:",
    "options": ["Any data in C and only protected and public data in A and B", "Protected, default and public data only in C and B", "Any data in C and only public data in A and B", "Protected, default and public data only in C"],
    "correct": 0,
    "explanation": "A public subclass can access its own data and any public/protected data in its superclass even if they are in different packages. Default members are package-private and not accessible."
  },
  {
    "q": "If the method is not static; how to invoke in Java?",
    "options": ["Methodname()", "Classname.methodname()", "Objectname.methodname()", "Variablename.methodname"],
    "correct": 2,
    "explanation": "Non-static methods belong to an object instance, so they are invoked using the object reference: objectName.methodName()."
  },
  {
    "q": "Which of the following statement is correct, when an overridden method is called from within a subclass?",
    "options": ["The Compiler will choose randomly the method to execute", "It will always refer to the version of that method defined by the subclass", "Compile time error will occur", "It will always refer to the version of that method defined by the superclass"],
    "correct": 1,
    "explanation": "In Java, overridden methods are resolved at runtime (dynamic binding), and the subclass version is called."
  },
  {
    "q": "Which of the following statements is NOT true?",
    "options": ["A private member of a class cannot be accessed by the methods of the same class", "A public member of a class can be accessed in all the packages", "A private member of a class cannot be accessed from its derived class", "A protected member of a class can be accessed from its derived class"],
    "correct": 0,
    "explanation": "Private members CAN be accessed by methods of the same class. So the first statement is false."
  }










  

  ],











  
"MOE":[


  {
    "q": "Which of the following is a mechanism for reliable data delivery in a connectionless protocol?",
    "options": ["TCP", "UDP", "IP", "ICMP"],
    "correct": 0,
    "explanation": "TCP provides reliable data delivery, even though UDP is connectionless."
  },
  {
    "q": "What is the main purpose of ARP in a network?",
    "options": ["Maps IP to MAC address", "Maps MAC to IP address", "Filters network packets", "Assigns IP dynamically"],
    "correct": 0,
    "explanation": "ARP resolves IP addresses to their corresponding MAC addresses for communication within a LAN."
  },
  {
    "q": "Which of the following is used to store user-specific temporary data on a web server?",
    "options": ["Cookie", "Session", "Database", "Cache"],
    "correct": 1,
    "explanation": "Sessions temporarily store server-side data unique to each user across web pages."
  },
  {
    "q": "Which protocol is connection-oriented and ensures error-free data transmission?",
    "options": ["TCP", "UDP", "HTTP", "SMTP"],
    "correct": 0,
    "explanation": "TCP is connection-oriented and uses acknowledgments to guarantee delivery."
  },
  {
    "q": "Which transmission medium is suitable for long-distance sky broadcasting?",
    "options": ["Radio Wave", "Infrared", "Microwave", "Fiber Optic"],
    "correct": 0,
    "explanation": "Radio waves propagate through the air and are used for long-distance broadcasting."
  },
  {
    "q": "Which OSPF packet type is used to discover neighbors?",
    "options": ["Hello Packet", "Link-State Update", "Database Description", "Acknowledgment"],
    "correct": 0,
    "explanation": "Hello packets are used to discover neighbors and establish OSPF adjacency."
  },
  {
    "q": "Which property of the reference monitor ensures every access is checked against security policy?",
    "options": ["Complete mediation", "Isolation", "Verifiability", "No read up"],
    "correct": 0,
    "explanation": "Complete mediation ensures that every access to every object is checked for compliance."
  },
  {
    "q": "Which OOP principle binds together code and data while keeping both safe from outside interference?",
    "options": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    "correct": 2,
    "explanation": "Encapsulation hides the internal representation of an object and allows controlled access."
  },
  {
    "q": "Which cardinality represents that one entity in set A maps to at most one entity in set B and vice versa?",
    "options": ["One-to-many", "Many-to-one", "One-to-one", "Many-to-many"],
    "correct": 2,
    "explanation": "One-to-one cardinality restricts associations to a single match in both sets."
  },
  {
    "q": "Which PHP function removes all global session variables?",
    "options": ["session_unset()", "session_destroy()", "session_close()", "session_delete()", "A and B"],
    "correct": 4,
    "explanation": "Both session_unset() and session_destroy() clear session data and destroy the session."
  },
  {
    "q": "Which of the following statements about Access Control Matrix (ACM) is incorrect?",
    "options": [
      "Subjects & objects are represented by rows and columns respectively",
      "Matrix has many empty entries",
      "ACL is decomposition by rows; Capability List is decomposition by columns",
      "ACM drawback can be fixed using ACL"
    ],
    "correct": 2,
    "explanation": "ACLs decompose the matrix by columns, not rows; Capability Lists use rows."
  },
  {
    "q": "Which state defines creating a new instance of the MediaPlayer class?",
    "options": ["Prepared state", "Initialization state", "Idle state", "Completed state"],
    "correct": 2,
    "explanation": "Idle state occurs when the MediaPlayer object is newly created and not yet initialized."
  },
  {
    "q": "Which Android mechanism is preferred to access smartphone camera from an app?",
    "options": ["Service", "Intent", "Broadcast receiver", "View"],
    "correct": 1,
    "explanation": "Intents are used to launch the camera app and get the captured photo."
  },
  {
    "q": "Which attribute type can be calculated from other related attributes?",
    "options": ["Simple", "Derived", "Multi-valued", "Composite"],
    "correct": 1,
    "explanation": "Derived attributes are computed from one or more other attributes."
  },
  {
    "q": "Which type of DBMS stores data in tree-like structures similar to filing cabinets?",
    "options": ["Object-oriented", "Relational", "Network", "Hierarchical"],
    "correct": 3,
    "explanation": "Hierarchical DBMS organizes data in a parent-child tree structure."
  },
  {
    "q": "Which is not true about immediate update in databases?",
    "options": [
      "Changes made by that transaction are not recorded",
      "New data is recorded in the database itself",
      "On restart, redo committed changes from log",
      "All",
      "None"
    ],
    "correct": 0,
    "explanation": "Immediate update writes changes to the database immediately, so statement 0 is false."
  },
  {
    "q": "Which UML concept describes an event that starts a use case?",
    "options": ["Precondition", "Postcondition", "Trigger", "None"],
    "correct": 2,
    "explanation": "A trigger is an event that initiates a use case."
  },
  {
    "q": "Which UML diagram shows physical architecture including processors, devices, and software components?",
    "options": ["State", "Component", "Sequence", "Deployment", "Communication"],
    "correct": 3,
    "explanation": "Deployment diagrams depict the physical hardware and software deployment."
  },
  {
    "q": "Which of the following is used to define and manage all the work required for project success?",
    "options": ["Time management", "Scope management", "Cost management", "Risk management"],
    "correct": 1,
    "explanation": "Project Scope Management defines and controls all project work."
  },
  {
    "q": "Which steps occur when establishing a TCP connection using sockets?",
    "options": [
      "Server creates ServerSocket with port number",
      "Server calls accept() to wait for client",
      "Client creates Socket to connect to server",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All steps are required to establish a TCP connection using sockets."
  },
  {
    "q": "Which project goals define success excluding planning?",
    "options": ["Meet budget", "Finish on schedule", "Generate deliverables", "All except planning", "All except C"],
    "correct": 3,
    "explanation": "Project success includes budget, schedule, and deliverables, but planning is a process, not a goal."
  },
  {
    "q": "Which parameter is mandatory when creating a cookie with setcookie() in PHP?",
    "options": ["Name", "Value", "Expire", "Path", "Domain", "Secure"],
    "correct": 0,
    "explanation": "The 'Name' parameter is required; all other parameters are optional."
  },
  {
    "q": "Which software or hardware filters all data packets coming through a network?",
    "options": ["Antivirus", "Firewall", "Cookies", "Malware"],
    "correct": 1,
    "explanation": "A firewall monitors and controls network traffic based on security rules."
  },
  {
    "q": "Which is the correct way to refer to an image in Android's drawable directory?",
    "options": ["R.drawable.R.File_name", "File_name.R.drawable", "R.File_name.drawable", "R.drawable.File_name"],
    "correct": 3,
    "explanation": "Images in drawable folder are accessed using R.drawable.File_name in Android."
  },
  {
    "q": "RAID is commonly used for which purpose?",
    "options": ["ARIES", "RAID", "Two-phase commit", "All", "None"],
    "correct": 1,
    "explanation": "RAID provides reliability and performance by combining multiple disks."
  },
  {
    "q": "What is a buffer in main memory?",
    "options": ["Track", "Block", "Buffer", "All", "None"],
    "correct": 2,
    "explanation": "A buffer temporarily stores disk blocks in main memory for faster access."
  },
  {
    "q": "Which Java class represents a message that can arrive out of order and may be lost?",
    "options": ["DatagramPacket", "DatagramSocket", "Both A & B", "None"],
    "correct": 0,
    "explanation": "DatagramPacket is used in UDP, which is unreliable and connectionless."
  },








 
  {
    "q": "Hosts devices on a network are located by their IP address, but network interface card do not have IP addresses, it has MAC addresses instead so if you need to associate the IP address to a MAC address which protocol can be used?",
    "options": ["ARP", "SMTP", "UDP", "POP"],
    "correct": 0,
    "explanation": "ARP (Address Resolution Protocol) maps an IP address to a MAC address."
  },
  {
    "q": "_________is used to temporarily store data on the server so that it can be utilized on a variety of different websites.",
    "options": ["Cookie", "Session", "Array", "Structure"],
    "correct": 1,
    "explanation": "Session stores temporary server-side data accessible across multiple pages for a user."
  },
  {
    "q": "For which knowledge category/area does Work breakdown structures (WBS) Requirements analyses and Gantt chart tools and techniques used respectively?",
    "options": ["Integration management and time management", "Project scope management and Time management", "Communication management and Risk management", "Cost management and Quality management"],
    "correct": 1,
    "explanation": "WBS is used in Project Scope Management; Gantt charts are tools in Time Management."
  },
  {
    "q": "Which one is correct about Data Provider?",
    "options": [
      "Data provider enable to get access for the appropriate database",
      "System.Data.SqlClient allow us to get access for sql server database",
      "Data provider provide data from the file somewhere it is located",
      "System.Data.OleDb allow us to get access for OleDb database"
    ],
    "correct": 2,
    "explanation": "A data provider delivers data from a source, e.g., files, databases, or external systems."
  },
  {
    "q": "Identify the wrong statement/s about Access Control Model",
    "options": [
      "In Access Control Matrix (ACM), Subject & object are represented by row and column respectively",
      "ACM has a drawback as matrix have many empty entries (take more space)",
      "ACM’s drawback can be fixed by using Access Control Lists, as each object maintains a list of access rights of subjects.",
      "Access Control List is just decomposition of the matrix by rows while Capability List is decomposition of the matrix by column"
    ],
    "correct": 3,
    "explanation": "ACLs decompose the matrix by columns, not rows; Capability Lists decompose by rows."
  },
  {
    "q": "Which one of the following is true statement about inheritance?",
    "options": [
      "A sub class can inherit all non-private members of its parent.",
      "A parent class can inherit all non-private members of its subclass.",
      "A sub class can have two or more immediate parent classes.",
      "A parent class cannot have two or more sub classes."
    ],
    "correct": 2,
    "explanation": "Some languages (like C++) support multiple inheritance, so a subclass can have multiple parent classes."
  },
  {
    "q": "Among reference monitor properties which one aimed to enforce security rules on every access.",
    "options": ["Complete mediation", "Isolation", "Verifiability", "No read up"],
    "correct": 0,
    "explanation": "Complete mediation ensures every access to a resource is checked against security policy."
  },
  {
    "q": "Question missing context (answer is 19)",
    "options": ["10", "20", "19", "9"],
    "correct": 2,
    "explanation": "No context provided, but the correct answer according to the source is 19."
  },
  {
    "q": "When the communication between two remote points is required to be established before sending actual data and error-checking mechanism is required for your communication which network protocol you will use?",
    "options": ["UDP", "TCP", "HTTP", "FTP"],
    "correct": 1,
    "explanation": "TCP provides reliable, connection-oriented communication with error checking."
  },
  {
    "q": "If you want media that propagate in the sky for travel signals for long distances broadcasting which transmission media will you use?",
    "options": ["Radio Wave", "Microwaves", "Infrared", "All"],
    "correct": 0,
    "explanation": "Radio waves are suitable for long-distance wireless broadcasting."
  },
  {
    "q": "What command would be used to determine if a routing protocol-initiated relationship had been made with an adjacent router?",
    "options": ["ping", "show ip ospf neighbor", "show ip interface brief", "show ip protocols"],
    "correct": 1,
    "explanation": "OSPF 'show ip ospf neighbor' displays neighbor relationships and adjacency status."
  },
  {
    "q": "_________________ is commonly used to perform an immediate action when clicked.",
    "options": ["Exit", "Close", "End", "Button control"],
    "correct": 3,
    "explanation": "Button controls trigger immediate actions when clicked in GUI applications."
  },
  {
    "q": "Assume you are a system developer, you develop such a good system but after deploying it, the users are not that much happy in the developed system. which activity of testing is missed according to this scenario?",
    "options": ["System testing", "Unit testing", "Acceptance testing", "Installation testing"],
    "correct": 2,
    "explanation": "Acceptance testing checks whether the system meets user expectations and requirements."
  },
  {
    "q": "How constructor can be used for a servlet?",
    "options": ["Initialization", "Constructor function", "Initialization and Constructor function", "Setup() method"],
    "correct": 2,
    "explanation": "Servlet constructors can initialize objects; initialization methods are also used for setup."
  },
  {
    "q": "In the Project management knowledge area, one of the following is used to define and manage all the work required to complete the project successfully, which is it?",
    "options": ["Project time management", "Project scope management", "Project cost management", "Project risk management"],
    "correct": 1,
    "explanation": "Project Scope Management defines and controls all work required for project completion."
  },
  {
    "q": "Which steps occur when establishing a TCP connection between two computers using sockets?",
    "options": [
      "The server instantiates a ServerSocket object, denoting which port number communication is to occur on",
      "The server invokes the accept() method of the ServerSocket class. This method waits until a client connects to the server on the given port",
      "After the server is waiting, a client instantiates a Socket object, specifying the server name and port number to connect to",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All listed steps occur sequentially to establish a TCP connection using sockets."
  },
  {
    "q": "Identify the three goals of a project in project management.",
    "options": ["Meet the budget", "Finish on schedule", "Generate deliverables that satisfy the client", "Planning", "all except D", "all except C"],
    "correct": 4,
    "explanation": "Project goals include meeting budget, schedule, and delivering client satisfaction, excluding planning."
  },
  {
    "q": "A cookie is created using the setcookie() function. Which parameter is mandatory.",
    "options": ["Name", "Value", "Expire", "Path", "Domain", "Secure"],
    "correct": 0,
    "explanation": "The 'Name' parameter is mandatory when creating a cookie with setcookie()."
  },
  {
    "q": "It can be a software program or a hardware device that filters all data packets coming through the internet, a network, etc. it is known as the_______:",
    "options": ["Antivirus", "Firewall", "Cookies", "Malware"],
    "correct": 1,
    "explanation": "A firewall monitors and filters network traffic to protect systems."
  },
  {
    "q": "One of the following is the correct way for referring multimedia graphics such as image that exists in drawable directory.",
    "options": ["R.drawable.R.File_name", "File_name.R.drawable", "R.File_name.drawable", "R.drawable.File_name"],
    "correct": 3,
    "explanation": "In Android, images in the drawable folder are referenced as R.drawable.File_name."
  },
  {
    "q": "_______is a data storage system architecture that is commonly used in large organizations for better reliability and performance.",
    "options": ["ARIES", "RAID", "Two-phase commit", "All", "None"],
    "correct": 1,
    "explanation": "RAID (Redundant Array of Independent Disks) improves performance and reliability of storage."
  },
  {
    "q": "_______is a contiguous reserved area in main memory available for storage of copies of disk blocks.",
    "options": ["Track", "Block", "Buffer", "All", "None"],
    "correct": 2,
    "explanation": "A buffer temporarily stores disk block data in main memory for faster access."
  },
  {
    "q": "If you need your app to take photos using the integrated smart phone camera, which one of the following way is preferred to use this feature?",
    "options": ["Service", "Intent", "Broadcast receiver", "View"],
    "correct": 1,
    "explanation": "Intents are used in Android to launch external apps such as the camera."
  },
  {
    "q": "Which one of the following state defines creating new instance of the MediaPlayer class?",
    "options": ["Prepared state", "Initialization state", "Idle state", "Completed state"],
    "correct": 2,
    "explanation": "Idle state is when a MediaPlayer object is newly created but not yet initialized."
  },
  {
    "q": "In which of the following attribute type the attribute value can be calculated from other related attribute?",
    "options": ["Simple Attribute", "Derived Attribute", "Multi-valued Attribute", "Composite Attribute"],
    "correct": 1,
    "explanation": "Derived attributes are computed from other attribute values."
  },
  {
    "q": "The traditional storage of data organized by the customer, stored in separate folders in filing cabinets is an example of ______________ type of ‘database’ management system.",
    "options": [
      "Object-oriented database management system",
      "Relational database management system",
      "Network database management system",
      "Hierarchical database management system"
    ],
    "correct": 3,
    "explanation": "Hierarchical DBMS stores data in tree-like structures similar to folders."
  },
  {
    "q": "Which one of the following is not true about immediate update?",
    "options": [
      "Changes made by that transaction are not recorded in the database.",
      "The new data is recorded in the database itself.",
      "On a system restart after a failure, redo committed changes from log.",
      "All",
      "None"
    ],
    "correct": 0,
    "explanation": "In immediate update, changes are recorded immediately in the database; statement 0 is false."
  },
  {
    "q": "Which of these statements is truly acceptable?",
    "options": [
      "A precondition is an assertion guaranteed to be true when the activity or operation finishes",
      "A postcondition is an assertion guaranteed to be true when the activity or operation begins",
      "Trigger is an event that causes a use case to begin",
      "None"
    ],
    "correct": 2,
    "explanation": "A trigger initiates a use case in UML modeling."
  },
  {
    "q": "___________ diagram describes the physical architecture of the hardware and software in the system and depicts software components, processors, and devices that make up the systems architecture?",
    "options": ["State", "Component", "Sequence", "Deployment", "Communication"],
    "correct": 3,
    "explanation": "Deployment diagrams show hardware and software mapping in UML."
  },
  {
    "q": "What is the function of OSPF hello packets?",
    "options": [
      "To send specifically requested link-state records",
      "To discover neighbors and build adjacencies between them",
      "To ensure database synchronization between routers",
      "To request specific link-state records from neighbor routers"
    ],
    "correct": 1,
    "explanation": "Hello packets are used to discover OSPF neighbors and establish adjacency."
  },
  {
    "q": "Which principle object oriented programming is the mechanism that binds together code and the data it manipulates and keeps both safe from outside interference and misuse?",
    "options": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    "correct": 2,
    "explanation": "Encapsulation hides data and provides controlled access via methods."
  },
  {
    "q": "In which one of the following cardinality, an occurrence in entity set A is associated with at most one occurrence in an entity set B, and an occurrence in B is associated with at most one occurrence in A.?",
    "options": ["One-to-many", "Many-to-one", "One-to-one", "Many-to-many"],
    "correct": 2,
    "explanation": "One-to-one cardinality restricts each entity in both sets to a single association."
  },
  {
    "q": "One project is successful if the project is",
    "options": [
      "Met scope, time, and cost goals",
      "Satisfied the customer/sponsor.",
      "The results of the project met its main objective, such as making or saving a certain amount of money, providing a good return on investment, or simply making the sponsors happy",
      "All"
    ],
    "correct": 3,
    "explanation": "All listed conditions define project success."
  },
  {
    "q": "To remove all global session variables and destroy the session, we use function called____",
    "options": ["session_unset()", "session_destroy()", "session_close()", "session_delete()", "A and B"],
    "correct": 4,
    "explanation": "Both session_unset() and session_destroy() are used to clear and destroy sessions in PHP."
  },
  {
    "q": "Which class is message that can be sent or received. If you send multiple packet, it may arrive in any order, Moreover, packet delivery is not guaranteed?",
    "options": ["DatagramPacket", "DatagramSocket", "Both A & B", "None of the above"],
    "correct": 0,
    "explanation": "DatagramPacket represents individual packets in UDP, which are unordered and unreliable."
  }


 



  ],


  
"OBU":[

  {
    "q": "Which one of the following is an operating system peripheral regarding security?",
    "options": ["Linux operating system", "UNIX Operating System", "Windows operating system", "A and C"],
    "correct": 3,
    "explanation": "Both Linux and Windows OS have security mechanisms and management tools."
  },
  {
    "q": "Which one of the following security policies safeguards sensitive traffic data from being exploited?",
    "options": ["Authentication", "Encryption", "Authorization", "Logging"],
    "correct": 1,
    "explanation": "Encryption protects data in transit from unauthorized access."
  },
  {
    "q": "Which algorithm uses the backtracking method recursively?",
    "options": ["Randomized algorithms", "Divide and conquer algorithms", "Greedy algorithms", "Dynamic programming"],
    "correct": 3,
    "explanation": "Dynamic programming can involve recursive methods, especially in solving optimization problems."
  },
  {
    "q": "Computer architecture refers to______?",
    "options": ["The operational units of computer system", "The operation of each individual component as part of the structure", "Attributes that impact logical execution of a program", "The way computer components are interrelated"],
    "correct": 3,
    "explanation": "Computer architecture studies how components are organized and interact logically."
  },
  {
    "q": "Which of these is not applicable for IP protocol?",
    "options": ["Offer reliable service", "Offer unreliable service", "Does not offer error reporting", "Connectionless"],
    "correct": 0,
    "explanation": "IP protocol is connectionless and provides unreliable service; reliability is handled by higher layers like TCP."
  },
  {
    "q": "Training is provided to a machine with unlabeled data. Which algorithm restructures the input into new features or object groups?",
    "options": ["Unsupervised learning", "Reinforcement learning", "B and C", "Supervised learning"],
    "correct": 0,
    "explanation": "Unsupervised learning discovers patterns or clusters in unlabeled data."
  },
  {
    "q": "Which of the following routers use packet filtering?",
    "options": ["IP enabled firewall", "Packet filtering firewall", "Router enhance firewall", "Application Layer firewall"],
    "correct": 1,
    "explanation": "Packet filtering firewalls control network traffic by inspecting packet headers."
  },
  {
    "q": "Which statement describes fragmentation in operating systems?",
    "options": ["Occurs in dynamic memory when free blocks are too small to satisfy requests", "All", "Occurs when memory is divided into fixed-sized blocks", "Occurs when processes cannot fit in blocks and some memory remains unused"],
    "correct": 1,
    "explanation": "Fragmentation includes all these scenarios, so 'All' is correct."
  },
  {
    "q": "Which of the following is odd about constructor and method?",
    "options": ["Constructor has no return type, whereas a method has", "Like method, constructor has access or visibility modifier", "Constructor is a special type of method in the class", "In Java, method overloading is possible but constructor overloading is not"],
    "correct": 3,
    "explanation": "Constructor overloading is allowed in Java; statement 4 is false."
  },
  {
    "q": "______ paradigm expresses computation by stepwise manipulation of named data?",
    "options": ["Applicative programming", "Object-oriented programming", "Procedural programming", "Functional programming"],
    "correct": 2,
    "explanation": "Procedural programming defines stepwise instructions and named data manipulations."
  },
  {
    "q": "Which header file is used for reading and writing to a file in C++?",
    "options": ["#include<file>", "#include<fe>", "#include<iostream>", "#include<fstream>"],
    "correct": 3,
    "explanation": "<fstream> provides file stream classes for file I/O."
  },
  {
    "q": "Which is true about scheduling in operating systems?",
    "options": ["All", "Round Robin gives each process a time slice", "FCFS serves the job waiting longest next", "Shortest Job First is non-preemptive"],
    "correct": 0,
    "explanation": "All listed statements are correct scheduling behaviors."
  },
  {
    "q": "In a relational database, the rule 'A Gender field can hold only values M or F' is an example of___?",
    "options": ["Domain integrity constraint", "Not Null integrity constraint", "Referential integrity constraint", "Entity integrity constraint"],
    "correct": 0,
    "explanation": "Domain integrity restricts column values to a defined set or type."
  },
  {
    "q": "Which one of the following is a role of system administrator?",
    "options": ["User administration and monitor system performance", "Implement backup and recovery policies", "Ensure efficient system operation for users", "All"],
    "correct": 3,
    "explanation": "System administrators perform all of these tasks."
  },
  {
    "q": "A hypothetical computer stores real numbers in 16-bit floating-point format. Number 34.25 in base-2 is?",
    "options": ["0 1010110 10001001", "0 1100110 10001001", "0 1000110 10001001", "0 1010110 10001000"],
    "correct": 0,
    "explanation": "Binary representation for 34.25 in 16-bit floating-point format is 0 1010110 10001001."
  },
  {
    "q": "Which of the following is not a notion of Context Free Grammars?",
    "options": ["Derivations", "Recursive Inference", "All of the mentioned", "Sentential forms"],
    "correct": 2,
    "explanation": "Derivations, recursive inference, and sentential forms are all parts of CFG; 'All' is not."
  },
  {
    "q": "What is the purpose of using Node.js?",
    "options": ["General purpose applications", "All", "Distributed systems", "Real-time web applications"],
    "correct": 3,
    "explanation": "Node.js is commonly used for server-side and real-time web applications."
  },
  {
    "q": "The best example of recursive relationships in DBMS is?",
    "options": ["A course taken by students per semester", "A student assigned for departments", "An employee who manages other employees", "An employee who manages a department"],
    "correct": 2,
    "explanation": "An employee managing other employees is a classic recursive relationship in a database."
  },
  {
    "q": "If you wanted 12 subnets with a Class C network ID, which subnet mask would you use?",
    "options": ["255.255.255.252", "255.255.255.240", "255.255.255.248", "255.255.255.255"],
    "correct": 2,
    "explanation": "255.255.255.248 provides 8 addresses per subnet, enough for 12 subnets."
  },
  {
    "q": "Which tag is used to add rows in an HTML table?",
    "options": ["None", "<th> and </th>", "<tr> and </tr>", "<td> and </td>"],
    "correct": 2,
    "explanation": "<tr> defines table rows in HTML."
  },
  {
    "q": "A digital computer has a common bus system for 16 registers of 32 bits each. How many selection inputs are there in each multiplexer?",
    "options": ["4", "5", "3", "6"],
    "correct": 0,
    "explanation": "16 registers require log2(16)=4 selection inputs for the multiplexer."
  },
  {
    "q": "Output of the following C++ program? #include <iostream> void *p = &n; int *pi = static_cast<int*>(p); cout<<*pi << endl;",
    "options": ["Compile time error", "Runtime error", "5", "6"],
    "correct": 2,
    "explanation": "The pointer is correctly cast to int*, so output is the value of n, which is 5."
  },
  {
    "q": "Which is an application of stack?",
    "options": ["Tower of Hanoi", "All of the above", "Finding factorial", "Infix to postfix conversion"],
    "correct": 1,
    "explanation": "All listed examples (Tower of Hanoi, factorial, infix-to-postfix conversion) can use stacks."
  },
  {
    "q": "Among major structural components, which controls operations of the computer?",
    "options": ["Input/output", "Central Processing Unit", "System interconnection", "Main Memory"],
    "correct": 1,
    "explanation": "CPU is responsible for controlling computer operations."
  },
  {
    "q": "Polymorphism in OOP allows many forms. Static polymorphism is achieved using?",
    "options": ["Method calling", "A & C", "Method overloading", "Method overriding"],
    "correct": 2,
    "explanation": "Static polymorphism is implemented using method overloading at compile-time."
  },
  {
    "q": "Which statement is true about dynamic websites?",
    "options": ["Content can be changed at runtime", "Content is regenerated each visit", "Content is predefined and unchangeable", "A and C"],
    "correct": 1,
    "explanation": "Dynamic websites regenerate content and allow runtime modifications."
  },
  {
    "q": "Basic principles of computer programming include?",
    "options": ["Document your code", "Minimize coupling", "Keep it simple", "All of the above"],
    "correct": 3,
    "explanation": "All listed principles are considered best practices in programming."
  },
  {
    "q": "_______ agents try to maximize their own expected happiness?",
    "options": ["Goal-based", "Utility-based", "Model-based reflex", "Simple reflex"],
    "correct": 1,
    "explanation": "Utility-based agents act to maximize expected utility."
  },
  {
    "q": "Which approach addresses AI behavior?",
    "options": ["The Turing Test Approach", "The 'Laws of Thought' Approach", "All", "The Cognitive Modeling Approach"],
    "correct": 2,
    "explanation": "All listed approaches contribute to modeling AI behavior."
  },
  {
    "q": "An employee familiar only with database interface, operating the system to pay/transfer money, is a category of_____?",
    "options": ["Naive users", "Sophisticated users", "Casual users", "Advanced users"],
    "correct": 0,
    "explanation": "Users familiar only with the interface are considered naive users."
  },
  {
    "q": "A DPDA is a PDA in which_____?",
    "options": ["None of the mentioned", "More than one state can have two or more outgoing transitions", "No state p has two outgoing transitions", "At least one state has more than one transition"],
    "correct": 2,
    "explanation": "A deterministic PDA (DPDA) cannot have a state with two outgoing transitions on the same input symbol."
  },
  {
    "q": "Most government organizations using Microsoft Excel and Word for records is an example of ____?",
    "options": ["Manual approach", "DBMS approach", "File based approach", "Database approach"],
    "correct": 1,
    "explanation": "Using DBMS software like Excel or Word for structured records is considered a DBMS approach."
  },
  {
    "q": "In OOP, inheritance is achieved using which keyword for interface class?",
    "options": ["Extends", "Implements", "Interfaces", "Inherits"],
    "correct": 1,
    "explanation": "In Java, 'implements' is used for classes implementing an interface."
  },
  {
    "q": "For network management and service provision, which OS is most suitable?",
    "options": ["Client side OS", "Network operating systems", "Desktop OS", "Real Time OS"],
    "correct": 1,
    "explanation": "Network operating systems provide centralized management and services."
  },
  {
    "q": "_______ Algorithm operates using a single current node and moves to neighbors only?",
    "options": ["Simulated annealing", "None", "MinMax", "Recursive best first search"],
    "correct": 3,
    "explanation": "Recursive best-first search explores paths from current node to neighbors for search problems."
  },
  {
    "q": "When an unauthorized director modifies own salary in payroll DB, which security objective is violated?",
    "options": ["Integrity", "Confidentiality", "Availability", "Modification"],
    "correct": 0,
    "explanation": "Integrity ensures data is not improperly altered; modifying salary violates integrity."
  },
  {
    "q": "Cracking a classmate’s username/password via social engineering compromises?",
    "options": ["Confidentiality and Integrity", "Confidentiality", "Integrity", "Availability"],
    "correct": 1,
    "explanation": "Unauthorized access compromises confidentiality of the account."
  },
  {
    "q": "In which phases of a unified process are project scope and boundary conditions established?",
    "options": ["Inception", "Elaboration", "Construction", "Transition"],
    "correct": 0,
    "explanation": "Inception phase defines the project scope and boundaries."
  },
  {
    "q": "Which OSI layer is responsible for Logical Addressing and Routing?",
    "options": ["Transport Layer", "Network Layer", "Data Link Layer", "Physical Layer"],
    "correct": 1,
    "explanation": "Network layer handles logical addressing and routing packets."
  },
  {
    "q": "Which method provides dedicated communication channel between two stations?",
    "options": ["None of the above", "Packet switching", "Switch network", "Circuit switching"],
    "correct": 3,
    "explanation": "Circuit switching establishes a dedicated path for communication."
  },
  {
    "q": "Logical or mathematical model of a particular organization of data is called?",
    "options": ["Data configuration", "Data structure", "Data arrangement", "Data formation"],
    "correct": 1,
    "explanation": "Data structure is a logical model organizing data elements."
  },
  {
    "q": "Which is more advantageous about POST method over GET?",
    "options": ["Can send ASCII and binary data", "No restriction on data size", "All", "Security depends on HTTP protocol"],
    "correct": 2,
    "explanation": "POST supports sending large data, ASCII/binary, and avoids URL size limits."
  },
  {
    "q": "A _______ is a technique for finding a particular value in a sorted list?",
    "options": ["Quicksort algorithm", "Merge sort algorithm", "Selection sort algorithm", "Binary search algorithm"],
    "correct": 3,
    "explanation": "Binary search efficiently finds values in sorted lists."
  },
  {
    "q": "Which of the following is a countermeasure of computer security vulnerabilities?",
    "options": ["Environmental monitoring and cryptographic techniques", "Access control and security-awareness training", "Web proxies and security policies", "All"],
    "correct": 3,
    "explanation": "All listed measures help prevent security vulnerabilities."
  },
  {
    "q": "Why are external style sheets preferred?",
    "options": ["All", "Single file controls multiple documents", "Selectors and grouping are easy", "Classes reusable multiple times"],
    "correct": 0,
    "explanation": "External stylesheets allow centralized styling for multiple documents, easy maintenance, and reusable classes."
  },
  {
    "q": "Which Linux command creates a directory inside another directory?",
    "options": ["$mkdir dir_name1/dir_name2", "$mkdir{ dir_name1, dir_name2, dir_name3}", "$mkdir –p dir_name1/dir_name2", "$mkdir dir_name"],
    "correct": 2,
    "explanation": "-p option allows creating nested directories."
  },
  {
    "q": "Which traversal technique processes the root node first?",
    "options": ["Level order traversal", "Preorder traversal", "In-order traversal", "Post-order traversal"],
    "correct": 1,
    "explanation": "Preorder traversal visits root, then left and right subtrees."
  },
  {
    "q": "Restoring a database to a correct state after failure is known as_____?",
    "options": ["Transaction", "Database backup", "Database Recovery", "Concurrency control"],
    "correct": 2,
    "explanation": "Database recovery restores integrity after failures."
  },
  {
    "q": "Which statement is true about forward chaining algorithm?",
    "options": ["Goal is broken into sub-goals to prove facts", "Starts with goal and chains through rules to find known facts", "Top-down approach", "Data driven algorithm"],
    "correct": 3,
    "explanation": "Forward chaining is a data-driven inference algorithm."
  },
  {
    "q": "Which of the functions can a Turing machine not perform?",
    "options": ["Accepting a palindrome", "Deleting a symbol", "Copying a string", "Inserting a symbol"],
    "correct": 0,
    "explanation": "Turing machines can perform all listed operations; cannot decide some languages, but palindromes are decidable. Context may vary; depends on the phrasing."
  },
  {
    "q": "IP address 172.16.13.5 with subnet mask 255.255.255.128: class, subnet, broadcast?",
    "options": ["Class B, Subnet 172.16.0.0, Broadcast 172.16.255.255", "Class B, Subnet 172.16.13.0, Broadcast 172.16.13.127", "Class B, Subnet 172.16.13.0, Broadcast 172.16.13.255", "Class A, Subnet 172.16.13.0, Broadcast 172.16.13.127"],
    "correct": 1,
    "explanation": "Subnet mask /25 divides 172.16.13.x into subnets, subnet 172.16.13.0–127, broadcast 172.16.13.127."
  },
  {
    "q": "Which exception handling mechanism uses two-block code writing format?",
    "options": ["All", "Throw", "Try and catch", "Finally"],
    "correct": 2,
    "explanation": "Try-catch blocks are written in pairs: try for code, catch for exception handling."
  },






  
  {
    "q": "_______ are used for serial transfer of data?",
    "options": ["Logic micro-operations", "Register transfer micro-operations", "Shift micro-operations", "Arithmetic micro-operations"],
    "correct": 2,
    "explanation": "Shift micro-operations are used to move data serially within registers."
  },
  {
    "q": "Syntax-directed translation rules use______?",
    "options": ["Lexical values of nodes", "A & B", "Constants & attributes associated with the non-terminals in their definitions.", "None of the mentioned"],
    "correct": 2,
    "explanation": "Syntax-directed translation uses attributes of non-terminals to define translation rules."
  },
  {
    "q": "If the input of the Prim's algorithm is a weighted connected graph G= (V, E) then its output is given by?",
    "options": ["Set of edges comprising a connected graph", "Set of edges comprising a MST", "Set of vertices comprising a MST", "Set of edges comprising a binary tree"],
    "correct": 1,
    "explanation": "Prim’s algorithm outputs the Minimum Spanning Tree (MST) edges of a connected weighted graph."
  },
  {
    "q": "Which of the following is a condition that causes deadlock?",
    "options": ["Hold and wait", "Mutual exclusion", "All", "Circular wait and No preemption"],
    "correct": 2,
    "explanation": "Deadlock occurs when all four conditions are present: mutual exclusion, hold and wait, no preemption, circular wait."
  },
  {
    "q": "Which one of the following is the best backup strategy for a large database with data supporting online sales?",
    "options": ["Mirrored hard disks", "Daily full backup", "Weekly full backup with daily incremental backup", "Clustered servers"],
    "correct": 2,
    "explanation": "Weekly full backup with daily incremental backup balances efficiency and reliability for large databases."
  },
  {
    "q": "Turing machine operates over____?",
    "options": ["None of the mentioned", "Depends on the algorithm", "Infinite memory tape", "Finite memory tape"],
    "correct": 2,
    "explanation": "A Turing machine conceptually has an infinite tape for computation."
  },
  {
    "q": "Which HTML tag target attribute opens the document in the same window or tab as it is clicked?",
    "options": ["_blank", "_self", "_parent", "_top"],
    "correct": 1,
    "explanation": "_self opens the link in the same window/tab."
  },
  {
    "q": "Which of the following errors can a compiler check?",
    "options": ["Logical Error", "Both Logical and Syntax Error", "Compiler cannot check errors", "Syntax Error"],
    "correct": 3,
    "explanation": "Compilers can check syntax errors but cannot detect logical errors."
  },
  {
    "q": "Consider the following requirement for software: “The operator must be able to add new games without modifications to the existing system.” Which one of the following types of requirements is this?",
    "options": ["Reliability Requirement", "Performance Requirement", "Usability Requirement", "Supportability Requirement"],
    "correct": 3,
    "explanation": "This describes a supportability requirement: the system should allow modifications without breaking existing functionality."
  },
  {
    "q": "Calculate the First(S) and Follow(A) functions for the given grammar- S → AaAb / BbBa A → ε B → ε",
    "options": ["First(S)={ε, ε} and Follow(A)={a, b}", "First(S)={a, b} and Follow(A)={a, b}", "First(S)={a, ε} and Follow(A)={a, b}", "First(S)={a, b} and Follow(A)={a, ε}"],
    "correct": 1,
    "explanation": "First(S) includes 'a' and 'b' from productions; Follow(A) includes symbols that can follow A in derivations."
  },
  {
    "q": "The grammar A -> AA |( A)| ε is not suitable for predictive-parsing because the grammar is __________?",
    "options": ["Right-recursive", "Left-recursive", "An operator-grammar", "Ambiguous"],
    "correct": 1,
    "explanation": "Predictive parsers cannot handle left-recursive grammars."
  },
  {
    "q": "The grammar S → aSa | bS | c is_____?",
    "options": ["LR(1) but not LR(1)", "LL(1) but not LR(1)", "None of the mentioned", "Both LL(1) but not LR(1) & LR(1) but not LR(1)"],
    "correct": 2,
    "explanation": "This grammar is not suitable for standard LL(1) or LR(1) parsing due to ambiguity in derivations."
  },
  {
    "q": "In OOP approach to solve a problem, all computations are carried out on_______?",
    "options": ["Class", "Attribute", "Object", "Method"],
    "correct": 2,
    "explanation": "In OOP, computations are performed on objects which encapsulate attributes and methods."
  },
  {
    "q": "Which malware spreads through user interaction via downloading and running an executable file from the Internet?",
    "options": ["Trojans", "Spyware", "Worms", "Viruses"],
    "correct": 0,
    "explanation": "Trojans require user action to install and execute."
  },
  {
    "q": "Which is not true about Operating system?",
    "options": ["Collection of programs that manages hardware resources", "A program that acts as an intermediary between the user and the computer hardware", "Application software that performs all basic tasks of a computer system.", "System service provider to the application programs"],
    "correct": 2,
    "explanation": "Operating system is system software, not application software."
  },
  {
    "q": "Which part of memory can a computer’s microprocessor access more quickly?",
    "options": ["Cache memory", "Physical Memory", "Virtual memory", "None"],
    "correct": 0,
    "explanation": "Cache memory is the fastest accessible memory for the CPU."
  },
  {
    "q": "Which of the following correctly declares an array in C++?",
    "options": ["array{10};", "int array;", "int array[10];", "array array[10];"],
    "correct": 2,
    "explanation": "int array[10]; declares an array of 10 integers in C++."
  },
  {
    "q": "The subsystem in a good software design should have which of the following characteristics?",
    "options": ["High cohesion, low coupling", "Low cohesion, high coupling", "High cohesion, high coupling", "Low cohesion, low coupling"],
    "correct": 0,
    "explanation": "High cohesion and low coupling improve modularity and maintainability."
  },
  {
    "q": "Which of the following is false about package?",
    "options": ["It is common to write package command as the first statement in a Java source", "A program can be created and compiled without package", "If the source code has no specified package name, the class names are put into the default package", "None"],
    "correct": 3,
    "explanation": "All statements are true; thus, None is false."
  },
  {
    "q": "_______ works by recursively breaking down a problem into two or more subproblems of the same type, until these become simple enough to be solved directly?",
    "options": ["Greedy algorithms", "Backtracking algorithms", "Divide and conquer technique", "Dynamic programming"],
    "correct": 2,
    "explanation": "Divide and conquer solves problems by breaking them into simpler subproblems."
  },






  

  {
    "q": "Which of the following is not an example of finite state machine system?",
    "options": ["Control Mechanism of an elevator", "Combinational Locks", "Traffic Lights", "Digital Watches"],
    "correct": 1,
    "explanation": "Combinational locks do not maintain state; they only compute output from current input."
  },
  {
    "q": "The activities involved in retrieving data from the database is _____?",
    "options": ["Query Optimization", "Materialization", "Query Processing", "Pipelining"],
    "correct": 2,
    "explanation": "Query processing includes retrieving data and executing queries against the database."
  },
  {
    "q": "Suppose x=7, y=8, z=6, k=x+z*y/z%x-z then what will be the value of k after expression is evaluated?",
    "options": ["9", "8", "2", "7"],
    "correct": 0,
    "explanation": "Evaluating step by step: k = 7 + 6*8/6%7 - 6 = 9."
  },
  {
    "q": "Which Objects are in charge of realizing use cases?",
    "options": ["Control objects", "Boundary object", "A & B", "Entity objects"],
    "correct": 2,
    "explanation": "Both control and boundary objects can participate in realizing use cases in UML."
  },
  {
    "q": "If every non-key attribute is functionally dependent on primary key, then the relation will be in which normal form?",
    "options": ["Third Normal Form(3NF)", "Second Normal Form (2NF)", "First Normal Form (1NF)", "Fourth Normal Form (4NF)"],
    "correct": 0,
    "explanation": "3NF requires every non-key attribute to be fully functionally dependent on the primary key."
  },
  {
    "q": "Purchasing insurance cover can be considered to be an example of which one of the following risk handling strategies?",
    "options": ["Mitigation", "Avoidance", "Acceptance", "Transfer"],
    "correct": 3,
    "explanation": "Insurance transfers financial risk from the insured to the insurer."
  },
  {
    "q": "The effect of a successfully completed (committed) transaction are permanently recorded in the database and must not be lost because of subsequent failure indicates?",
    "options": ["Consistency", "Atomicity", "Isolation", "Durability"],
    "correct": 3,
    "explanation": "Durability ensures that committed transactions are permanently recorded even after failures."
  },
  {
    "q": "Which of the following data structure is linear type?",
    "options": ["Graphs", "Tree", "Array", "Hierarchy"],
    "correct": 2,
    "explanation": "Arrays are linear data structures as their elements are stored sequentially."
  },
  {
    "q": "The size of virtual memory is based on which of the following?",
    "options": ["Address bus", "CPU", "RAM", "Data bus"],
    "correct": 0,
    "explanation": "Virtual memory size is determined by the width of the address bus."
  },
  {
    "q": "A list which displays the relationship of adjacency between elements is said to be?",
    "options": ["Nonlinear", "Trees", "Linked list", "Linear"],
    "correct": 2,
    "explanation": "A linked list maintains adjacency of elements using pointers; it is a linear structure."
  },
  {
    "q": "A core command or language of DBMS used by end-users and programmers to store, retrieve, and access the data in the database is ___?",
    "options": ["Data Control Language (DCL)", "Data Definition Language (DDL)", "Data Transaction Language (DTL)", "Data Manipulation Language (DML)"],
    "correct": 3,
    "explanation": "DML includes commands like SELECT, INSERT, UPDATE, DELETE for manipulating data."
  },
  {
    "q": "The characteristics of knowledge based system that corresponds to the ability of manipulating the representational structures to produce new knowledge corresponding to existing structure is?",
    "options": ["Acquisitional efficiency", "Inferential Efficiency", "Representational Accuracy", "Inferential Adequacy"],
    "correct": 3,
    "explanation": "Inferential adequacy refers to the system’s ability to derive new knowledge from existing knowledge structures."
  },
  {
    "q": "The feature by which one object can interact with another object in object oriented database is?",
    "options": ["Message Passing", "Data Binding", "Data Transfer", "Message reading"],
    "correct": 0,
    "explanation": "Message passing allows objects to communicate and invoke behaviors of other objects."
  },
  {
    "q": "Assume we use the Caesar cipher encryption mechanism to encrypt each alphabet letter, by encryption key of 17, thus, identifies M cipher text?",
    "options": ["C", "F", "W", "D"],
    "correct": 2,
    "explanation": "Applying Caesar cipher shift of 17 to 'M' results in 'W'."
  },
  {
    "q": "The time complexity of quick sort is_______?",
    "options": ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
    "correct": 3,
    "explanation": "The average case time complexity of Quick Sort is O(n log n)."
  },
  {
    "q": "Which one is False about PHP?",
    "options": ["PHP is an object-oriented language", "None", "PHP is a server-side scripting language and manage the dynamic content of the website", "PHP can’t be directly embedded into HTML"],
    "correct": 3,
    "explanation": "PHP can be embedded directly into HTML using <?php ... ?> tags."
  },
  {
    "q": "In a priority queue, insertion and deletion takes place at_________?",
    "options": ["Only at front end", "Any position", "Front, rear end", "Only at rear end"],
    "correct": 1,
    "explanation": "In a priority queue, elements can be inserted/deleted based on priority, not just front/rear."
  },
  {
    "q": "______ attempts not only to find a solution, but to find the ideal solution to any given problem.",
    "options": ["Dynamic programming", "Branch and bound algorithms", "Randomized algorithms", "Greedy algorithms"],
    "correct": 1,
    "explanation": "Branch and bound algorithms explore the solution space and prune non-optimal solutions to find the ideal solution."
  },
  {
    "q": "_____ describes inheritance relationship in the world of objects?",
    "options": ["Dependency", "Realization", "Association", "Generalization"],
    "correct": 3,
    "explanation": "Generalization represents an 'is-a' inheritance relationship between objects."
  },
  {
    "q": "How is an input–output instruction different from a register-reference instruction?",
    "options": ["A and C", "An input–output instruction does not need a reference to memory, whereas a register-reference instruction needs a reference to memory.", "An input–output instruction is recognized by the operation code 111 with a 1 in the leftmost bit of the instruction, whereas a register-reference instruction recognized by the operation code 111 with a 0 in the leftmost.", "An input–output instruction does not need operand from memory, whereas a register-reference instruction needs operand from memory"],
    "correct": 1,
    "explanation": "I/O instructions operate on devices, not memory, whereas register-reference instructions may reference memory."
  }



    


],



"AUTOMATA":[


    {
      "q": "The lexical analysis for a modern computer language such as Java needs the power of which one of the following machine models in a necessary and sufficient sense?",
      "options": ["Finite state automata", "Deterministic pushdown automata", "Non-Deterministic pushdown automata", "Turing machines"],
      "correct": 0,
      "explanation": "Lexical analysis only needs to recognize regular patterns like keywords and identifiers, which finite state automata can handle."
    },
    {
      "q": "In a compiler, keywords of a language are recognized during?",
      "options": ["Parsing of the program", "The lexical analysis of the program", "The code generation", "Data flow analysis"],
      "correct": 1,
      "explanation": "Keywords are identified as tokens by the lexical analyzer before parsing starts."
    },
    {
      "q": "Which one of the following pairs has different expressive power?",
      "options": ["DFA and NFA", "DPDA and NPDA", "Deterministic single-tape TM and Non-deterministic single-tape TM", "Single-tape TM and multi-tape TM"],
      "correct": 1,
      "explanation": "DPDA cannot recognize all languages recognized by NPDA; their expressive powers are different."
    },
    {
      "q": "Which one of the following problems is decidable?",
      "options": ["1,2,3,4", "2,3,4", "1,2", "3,4"],
      "correct": 3,
      "explanation": "Regular and recursive language properties (3 and 4) are decidable; others may be undecidable."
    },
    {
      "q": "Given the language L={ab,aa,baa}, which one of the following strings are in L?",
      "options": ["1,2 and 3", "1,2 and 4", "2,3 and 4", "1,3 and 4"],
      "correct": 3,
      "explanation": "Strings 1,3,4 can be formed by concatenating elements of L."
    },
    {
      "q": "What is the language generated by the grammar S → aSb, S → A, A → aA?",
      "options": ["ambm", "∅", "anbm", "am+1bm"],
      "correct": 3,
      "explanation": "Grammar generates strings with one more 'a' than 'b', giving am+1bm."
    },
    {
      "q": "(a, b)+ means?",
      "options": ["Any combination of a, b including null", "Any combination of a, b excluding null", "Combination of a, b, but 'a' will come first", "None of these"],
      "correct": 1,
      "explanation": "The '+' operator means one or more occurrences (null is excluded)."
    },
    {
      "q": "What is the highest type number to the grammar given by S → Aa, A → c|Ba, B → abc?",
      "options": ["Zero", "One", "Two", "Three"],
      "correct": 2,
      "explanation": "This grammar is context-free (Type-2) because each production has a single non-terminal on the left."
    },
    {
      "q": "The transitional function of an NFA is?",
      "options": ["Q × Σ → Q", "Q × Σ → 2^Q", "Q × Σ → 2^n", "Q × Σ → Q^n"],
      "correct": 1,
      "explanation": "An NFA maps a state and input symbol to a set of next states: Q × Σ → 2^Q."
    },
    {
      "q": "The language accepted by the given FA is?",
      "options": ["(ab)*", "bb*a", "b(ba*a)", "Null"],
      "correct": 0,
      "explanation": "The FA accepts strings with zero or more repetitions of 'ab'."
    },
    {
      "q": "Which of the strings do not belong to the regular expression (ba + baa)*aaba?",
      "options": ["Baaaba", "Babaabaaaba", "babababa", "baaaaba"],
      "correct": 2,
      "explanation": "Only 'babababa' does not match the pattern ending with 'aaba'."
    },
    {
      "q": "Which regular expression best describes the language accepted by the following non-deterministic automaton?",
      "options": ["(a + b)* a(a + b)b", "(abb)*", "(a + b)*a(a + b)*b", "(a + b)*"],
      "correct": 2,
      "explanation": "The automaton accepts any string with 'a' somewhere before a 'b'; this is captured by (a+b)*a(a+b)*b."
    },
    {
      "q": "For the language L = {ab, c} over the set B = {a, b, c}, L^-2 is?",
      "options": ["all -2 word sequences in L", "all 2 word sequences in L", "{λ}", "none of the above"],
      "correct": 2,
      "explanation": "L^-2 contains sequences of length -2, which is undefined; by definition, it returns the empty string {λ}."
    },
    {
      "q": "Consider the problem X: 'Given a TM M over input alphabet Σ, a state q of M, and a word w ∈ Σ*, does M visit state q on w?'",
      "options": ["X is decidable", "X is undecidable but partially decidable", "X is undecidable and not partially decidable", "X is not a decision problem"],
      "correct": 1,
      "explanation": "This is similar to the Halting problem; it is undecidable but semi-decidable."
    },
    {
      "q": "Halting problem/language is more described as?",
      "options": ["RE as well as recursive", "Recursive and NP", "RE but not recursive", "Neither recursive nor RE"],
      "correct": 2,
      "explanation": "The halting problem is recursively enumerable but not recursive (undecidable)."
    },
    {
      "q": "Automata theory, computability theory, and complexity theory are topics of computation theory. Main objective of complexity theory?",
      "options": ["To classify problems as easy and hard", "To classify problems as solvable or not", "To define mathematical models of computation", "All"],
      "correct": 0,
      "explanation": "Complexity theory classifies problems by their computational difficulty (easy vs hard)."
    },
    {
      "q": "Language and grammar accepted by pushdown automata?",
      "options": ["Regular language and Type-3 grammar", "Context-free language and Type-2 grammar", "Context-free language and Type-3 grammar", "Context-sensitive language and Type-1 grammar"],
      "correct": 1,
      "explanation": "Pushdown automata accept context-free languages, which are Type-2 in Chomsky hierarchy."
    },
    {
      "q": "Mechanism for simplifying context-free grammar?",
      "options": ["Eliminating useless symbols", "Eliminating ε-productions", "Eliminating unit productions", "All"],
      "correct": 3,
      "explanation": "All of these are standard simplification methods for CFGs."
    },
    {
      "q": "Language over {0,1} described by regex (0+1)*0(0+1)*0(0+1)*?",
      "options": ["All strings containing substring 00", "All strings containing at most two 0's", "All strings containing at least two 0's", "All strings that begin and end with 0 or 1"],
      "correct": 2,
      "explanation": "The regex ensures at least two 0's appear in the string."
    },
    {
      "q": "In computational complexity, NP-complete means a problem is both in NP and NP-hard. What does NP mean?",
      "options": ["Non polynomial time", "Non-deterministic polynomial time", "Non-deterministic probabilistic", "Non-probabilistic time"],
      "correct": 1,
      "explanation": "NP problems are solvable by a non-deterministic Turing machine in polynomial time."
    },
  

    {
      "q": "The grammar production: A → aB refers to which of the following forms?",
      "options": ["Greibach Normal Form", "Chomsky Normal Form", "Backus Naur Form/CFG", "None"],
      "correct": 0,
      "explanation": "Greibach Normal Form requires productions of the form A → aα, where 'a' is a terminal and α is a string of non-terminals."
    },
    {
      "q": "How many FAs exist that have 2 states and accept an empty string?",
      "options": ["One", "Two", "Three", "Many"],
      "correct": 0,
      "explanation": "Only one finite automaton with 2 states can accept ε: initial state is also final."
    },
    {
      "q": "Language which can be defined by FA is?",
      "options": ["Regular Language", "Non-regular language", "May be regular or non-regular", "Context free language"],
      "correct": 0,
      "explanation": "Finite automata define exactly the class of regular languages."
    },
    {
      "q": "What is the main goal of a compiler?",
      "options": ["Execution of programs", "Translation of programs", "Optimization of programs", "Debugging of programs"],
      "correct": 1,
      "explanation": "The main goal of a compiler is to translate source code into machine/object code."
    },
    {
      "q": "Regular expression for all strings starting with 'ab' and ending with 'bba' is?",
      "options": ["aba*b*bba", "ab(ab)*bba", "ab(a+b)*bba", "aba*(ab)*bba"],
      "correct": 2,
      "explanation": "ab(a+b)*bba allows any sequence of a's and b's between the fixed start and end."
    },
    {
      "q": "Which of the following is not an example of finite state machine system?",
      "options": ["Mechanism of an elevator", "Signal lights", "Digital watches", "Microwave ovens"],
      "correct": 3,
      "explanation": "Microwave ovens involve timers and memory beyond simple state transitions; not pure FSM."
    },
    {
      "q": "A grammar with more than one parse tree is called?",
      "options": ["Unambiguous", "Ambiguous", "Regular", "Non Regular"],
      "correct": 1,
      "explanation": "Ambiguous grammars generate multiple parse trees for at least one string."
    },
    {
      "q": "The production of the form nonterminal → one nonterminal is called?",
      "options": ["Null production", "Nullable production", "Unit production", "Both B and C"],
      "correct": 2,
      "explanation": "A unit production has a single non-terminal on the right-hand side."
    },
    {
      "q": "If there is a CFG for language L with no λ-productions, then there is also a CFG?",
      "options": ["Having λ-production and no unit production", "No λ-production but have unit production", "No λ-production and no unit production", "Both B and C"],
      "correct": 3,
      "explanation": "You can construct an equivalent CFG with no λ-productions and no unit productions."
    },
    {
      "q": "A production in CFG consists of?",
      "options": ["One terminal", "More than one terminal", "One non-terminal", "Terminals and non-terminals"],
      "correct": 3,
      "explanation": "CFG productions map a non-terminal to a string of terminals and non-terminals."
    },
    {
      "q": "A pushdown automaton employs which data structure?",
      "options": ["Stack", "Queue", "Linked List", "Hash Table"],
      "correct": 0,
      "explanation": "Pushdown automata use a stack to handle context-free languages."
    },
    {
      "q": "Problems that can be solved in polynomial time are known as?",
      "options": ["Intractable", "Tractable", "Decision", "Complete"],
      "correct": 1,
      "explanation": "Tractable problems are solvable in polynomial time."
    },
    {
      "q": "Halting problem is an example of?",
      "options": ["Decidable problem", "Complete problem", "Undecidable problem", "Trackable problem"],
      "correct": 2,
      "explanation": "The halting problem is undecidable; no algorithm can solve it for all inputs."
    },
    {
      "q": "Which tool is used for grouping characters in tokens in a compiler?",
      "options": ["Parser", "Code optimizer", "Code generator", "Scanner"],
      "correct": 3,
      "explanation": "Scanner or lexical analyzer groups characters into tokens."
    },
    {
      "q": "Which derivation is generated by a bottom-up parser?",
      "options": ["Right-most derivation in reverse", "Left-most derivation in reverse", "Right-most derivation", "Left-most derivation"],
      "correct": 0,
      "explanation": "Bottom-up parsers reconstruct the right-most derivation in reverse."
    },
    {
      "q": "The output of the lexical analyzer is?",
      "options": ["String character", "A syntax tree", "A set of RE", "A set of tokens"],
      "correct": 3,
      "explanation": "Lexical analyzer outputs tokens for use by the parser."
    },
    {
      "q": "If a grammar produces more than one leftmost derivation for a sentence, it is called?",
      "options": ["Ambiguous grammar", "Perfect grammar", "Associative grammar", "Precedence grammar"],
      "correct": 0,
      "explanation": "Multiple leftmost derivations indicate ambiguity."
    },
    {
      "q": "The intersection of a context-free language and a regular language is?",
      "options": ["Context-free", "Neither context-free nor regular", "Regular but not context-free", "Both regular and context-free"],
      "correct": 0,
      "explanation": "Intersection of a CFL and regular language is always context-free."
    },
    {
      "q": "Which one of the following is not part of Turing machine?",
      "options": ["Finite control", "Input", "Tape", "Head"],
      "correct": 1,
      "explanation": "Input itself is not a part of TM structure; TM processes input via tape."
    },
    {
      "q": "Which of the following production rules is correct for L(G) = {bnan+1 : n ≥ 0}?",
      "options": ["S->Ab, S->aSb, A->ε", "S->Aa, S->bSa, A->ε", "S->Ab, A->bS, A->a", "S->Aa, A->aS, A->a"],
      "correct": 0,
      "explanation": "This production correctly generates the language pattern."
    },
    {
      "q": "All strings of 0’s and 1’s starting with 0 and ending with 1 is?",
      "options": ["0(0+1)*1", "0(0+1*)1", "0(01)*1", "0(01*)1"],
      "correct": 0,
      "explanation": "0(0+1)*1 correctly represents strings starting with 0 and ending with 1."
    },
    {
      "q": "True methods for resolving ambiguity in grammar?",
      "options": ["Rewrite grammar explicitly", "Add meta-rule using precedence and associativity", "Redesign language", "All"],
      "correct": 3,
      "explanation": "All listed methods are valid ways to resolve ambiguous grammars."
    },
    {
      "q": "TM is a mathematical model with an infinite tape divided into cells on which input is given. This is?",
      "options": ["Automata Machine", "Push down Automata", "Turing Machine", "Recursively enumerable"],
      "correct": 2,
      "explanation": "This defines a Turing machine."
    },
    {
      "q": "An abstract model of a digital computer that is self-operating is?",
      "options": ["Language", "Grammar", "Automata", "Recursively enumerable"],
      "correct": 2,
      "explanation": "Automata theory models abstract computers."
    },
    {
      "q": "Which of the following statements is incorrect?",
      "options": ["Context free grammar is subset of Regular grammar", "Regular grammar helps to generate regular sets", "Turing machine is a type of automata", "A language is regular if an automaton accepts it"],
      "correct": 0,
      "explanation": "Regular grammar is a subset of context-free grammar, not the other way."
    },
    {
      "q": "The set of all strings over {a,b} having exactly 3 b’s is represented by?",
      "options": ["a*ba*ba*ba*", "ba*ba*b", "a*ba*ba*b", "a*bbb"],
      "correct": 0,
      "explanation": "a*ba*ba*ba* allows exactly 3 occurrences of 'b' anywhere in the string."
    },
    {
      "q": "Which of the following is false about context-free grammar?",
      "options": ["Left and right linear grammar are context-free grammars", "Regular grammar is not context-free grammar", "Simple grammar is context-free grammar", "Linear grammar is context-free grammar"],
      "correct": 1,
      "explanation": "Regular grammars are a subset of context-free grammars, so statement B is false."
    },
    {
      "q": "The function nil(abab) is equal to?",
      "options": ["abba", "abab", "λ", "nilabab"],
      "correct": 2,
      "explanation": "nil returns the empty string λ."
    },
    {
      "q": "_____ is a theoretical construct of Turing machine that can simulate any other Turing machine?",
      "options": ["Multi-tape Turing machine", "Universal Turing machine", "Multi-track Turing machine", "Semi-infinite Tape"],
      "correct": 1,
      "explanation": "A Universal Turing Machine can simulate any other Turing machine."
    },
    {
      "q": "Characteristic of a non-deterministic finite automaton (NFA)?",
      "options": ["Requires a stack", "Can only recognize regular languages", "Can have multiple possible transitions for a given input", "Can recognize context-free languages"],
      "correct": 2,
      "explanation": "NFAs allow multiple transitions for the same input and current state."
    },
    {
      "q": "Halting problem for Turing machines is?",
      "options": ["Determining whether a TM halts on a specific input", "Determining whether a TM recognizes CFLs", "Determining whether a TM simulates other models", "Determining whether a TM can solve any problem"],
      "correct": 0,
      "explanation": "The halting problem asks whether a TM stops on a given input."
    },
    {
      "q": "Regular expression that accepts strings over {0,1} with at least one '0' and one '1'?",
      "options": ["0+1", "0+1+", "0*10*", "0*1*"],
      "correct": 2,
      "explanation": "0*10* ensures at least one '0'; combined with patterns, it ensures at least one '1' exists as well."
    },
    {
      "q": "Turing machine's transition function specifies?",
      "options": ["Initial state", "Number of steps before halting", "Input symbols accepted", "Rules for state and tape updates"],
      "correct": 3,
      "explanation": "Transition function defines how TM changes state and tape based on current state and input."
    },
    {
      "q": "Type of Turing machine with two tapes, one read-only, one read-write?",
      "options": ["Multi-dimensional Turing Machine", "Multi-head Turing Machine", "Offline Turing machine", "Non-deterministic Turing machine"],
      "correct": 2,
      "explanation": "An offline Turing machine has one read-only input tape and one read-write work tape."
    },
    {
      "q": "Represents problems at least as hard as hardest in NP?",
      "options": ["PSPACE", "NP Complete", "EXP", "NP Hard"],
      "correct": 3,
      "explanation": "NP-hard problems are as hard or harder than all NP problems."
    },
    {
      "q": "What is the Turing Test in AI?",
      "options": ["Measures machine processing power", "Evaluates speed of AI algorithms", "Measures machine's ability to exhibit human-like intelligence", "Test for hardware performance"],
      "correct": 2,
      "explanation": "Turing Test evaluates if a machine's behavior is indistinguishable from a human's."
    },
    {
      "q": "f(x) = x+2 over N is?",
      "options": ["Total", "Partial", "Recursive", "Both total and partial"],
      "correct": 0,
      "explanation": "f(x) is defined for all natural numbers, hence total."
    },
    {
      "q": "Concerned with meaning of sentences in knowledge representation?",
      "options": ["Structure", "Syntax", "Semantic", "Computational aspect"],
      "correct": 2,
      "explanation": "Semantics deals with meaning of sentences."
    },
    {
      "q": "Given input alphabet E={a,b,c,d} and empty string λ, which is not in E+?",
      "options": ["b", "abbccdd", "λ", "cd"],
      "correct": 2,
      "explanation": "E+ contains strings of length ≥1; λ is excluded."
    },
    {
      "q": "One of the following grammars is correctly matched?",
      "options": ["S→S1ab, S1→S1ab|S2, S2→a is CFG", "S→S1ab, S1→S1ab|S2, S2→a is Regular", "S→S1ab, S1→S1ab|S2, S2→a is left-linear", "A and B"],
      "correct": 0,
      "explanation": "The given productions follow context-free grammar rules."
    },
    {
      "q": "How many languages are over the alphabet R?",
      "options": ["Countably infinite", "Countably finite", "Uncountable finite", "Uncountable infinite"],
      "correct": 3,
      "explanation": "The set of all languages over an alphabet is uncountably infinite."
    },
    {
      "q": "There are ______ tuples in a finite state machine?",
      "options": ["4", "5", "6", "Unlimited"],
      "correct": 1,
      "explanation": "FSM is defined by 5-tuple: (Q, Σ, δ, q0, F)."
    },
    {
      "q": "Assume R is a relation on set A, aRb is partially ordered such that a and b are?",
      "options": ["Reflexive", "Transitive", "Symmetric", "Reflexive and transitive"],
      "correct": 3,
      "explanation": "Partial orders require reflexivity and transitivity (and antisymmetry)."
    },
    {
      "q": "Minimum number of states to recognize octal numbers divisible by 3?",
      "options": ["1", "3", "5", "7"],
      "correct": 1,
      "explanation": "Three states suffice to track remainder modulo 3."
    },
    {
      "q": "Initial state of NFA is initial state of DFA. Final state of DFA will be every combination of final states of NFA. Correct?",
      "options": ["Statement 1 and 2 true", "Statement 1 true, 2 false", "Statement 1 can be true, 2 true", "Both false"],
      "correct": 0,
      "explanation": "Subset construction guarantees this for NFA → DFA conversion."
    },
    {
      "q": "An automaton that presents output based on previous state or current input?",
      "options": ["Acceptor", "Classifier", "Transducer", "None of the mentioned"],
      "correct": 2,
      "explanation": "A transducer produces output based on states and/or input."
    },
    {
      "q": "Which one of the following is false about role of parser in compiling process?",
      "options": ["Parser attempts to correct or recover few errors", "Parser cannot perform context-free syntax analysis", "Parser builds the parse tree", "Parser produces appropriate error messages"],
      "correct": 1,
      "explanation": "Parser does perform context-free syntax analysis; statement is false."
    },





    

  ],

"Jimmaa University":[

{
q: "Which of the following operating system functions contributes to efficient utilization of system resources by preventing conflicts and bottlenecks?",
options: ["Security and protection", "Device management", "Process management and memory management", "Inter-process communication"],
answer: 2,
explanation: "Process and memory management ensures that system resources are allocated efficiently and processes do not interfere with each other."
},
{
q: "Which function of a contemporary OS contributes most to its ability to evolve and adapt?",
options: ["Providing a user-friendly GUI", "Efficient process and memory management", "Centralized software installation", "Modular design with hardware abstraction layers"],
answer: 3,
explanation: "Modular design allows new components to be added or replaced without affecting the whole system, enhancing adaptability."
},
{
q: "Why can the Hold and Wait condition lead to deadlock?",
options: ["Processes can't make progress", "Resources are acquired in order", "Processes never release unneeded resources", "Forces indefinite wait"],
answer: 3,
explanation: "Hold and Wait occurs when a process holds resources while waiting for others, which can cause indefinite waiting and deadlock."
},
{
q: "Primary advantage of non-preemptive scheduling over preemptive algorithms?",
options: ["Improved real-time performance", "Reduced task starvation", "Simpler implementation and reduced overhead", "Better support for dynamic workloads"],
answer: 2,
explanation: "Non-preemptive scheduling is simpler to implement and has lower runtime overhead since tasks run to completion."
},
{
q: "Most important factor when evaluating scheduling algorithms for real-time systems?",
options: ["Fairness in allocation", "Responsiveness and ability to meet deadlines", "Simplicity of implementation", "Overall system throughput"],
answer: 1,
explanation: "Real-time systems prioritize meeting deadlines; responsiveness is critical."
},
{
q: "Which file system is commonly used in Windows OS?",
options: ["NTFS", "FAT32", "HFS+", "Ext4", "exFAT"],
answer: 0,
explanation: "NTFS is the default file system for modern Windows OS, supporting security, large files, and journaling."
},
{
q: "Regarding class hierarchy with interfaces and abstract classes, which statement is correct?",
options: ["All concrete subclasses must override abstract methods", "Interfaces define abstract methods, abstract classes can have concrete implementations", "Polymorphism is only method overloading", "Interfaces promote tight coupling"],
answer: 1,
explanation: "Interfaces provide abstract methods; abstract classes can have both abstract and concrete methods, supporting polymorphism."
},
{
q: "Key design principle for maintainable, scalable systems with multiple interacting objects?",
options: ["Loose coupling with well-defined interfaces", "Code duplication", "Tight coupling", "Global variables"],
answer: 0,
explanation: "Loose coupling reduces dependencies, making the system easier to maintain and scale."
},
{
q: "Feature of OOP indicated by: class Topper extends Student { ... }",
options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
answer: 0,
explanation: "Topper inherits properties and methods from Student, demonstrating inheritance."
},
{
q: "Output of Java program: int a=5; int b=6; c=(a>b)?a:b;?",
options: ["5", "4", "7", "6"],
answer: 3,
explanation: "Since a>b is false, c takes the value of b, which is 6."
},
{
q: "Which handles exceptions in Java when catch is not used?",
options: ["Finally", "throw handler", "Default handler", "Java runtime system"],
answer: 3,
explanation: "Java runtime system handles uncaught exceptions, typically terminating the program."
},
{
q: "Which statement is INCORRECT about the Final keyword in Java?",
options: ["A Final variable value can't change", "A Final method can't be inherited", "A Final method can't be overridden", "A Final class can't be extended"],
answer: 1,
explanation: "A Final method cannot be overridden, but it can still be inherited; saying it can't be inherited is incorrect."
},
{
q: "First step in database design?",
options: ["Identifying entities and attributes", "Defining database requirements", "Creating a conceptual schema", "Choosing DBMS"],
answer: 1,
explanation: "Database design starts by understanding requirements before modeling entities."
},
{
q: "Database concept for tracking books, borrowers, and borrowings?",
options: ["Big data", "OLTP", "Normalization", "Data warehousing"],
answer: 1,
explanation: "OLTP systems handle transactional data like loans, inserts, updates, and deletions."
},
{
q: "Database concept to calculate employee pay based on hours worked?",
options: ["Triggers", "Functions", "Views", "Stored Procedures"],
answer: 3,
explanation: "Stored procedures encapsulate business logic for calculations in the database."
},
{
q: "SQL join to identify which products sell well together?",
options: ["Inner join", "Outer join", "Left join", "Right join"],
answer: 0,
explanation: "Inner join combines only matching rows from two tables, useful for analyzing product combinations."
},
{
q: "SQL operation to track employee performance by department and job title?",
options: ["SELECT", "FROM", "JOIN", "GROUP BY"],
answer: 3,
explanation: "GROUP BY allows aggregation of performance data by department and job title."
},
{
q: "Precedence graphs help find a:",
options: ["Recoverable schedule", "Deadlock-free schedule", "Serializable schedule", "Cascade-less schedule"],
answer: 2,
explanation: "Precedence graphs are used to check if a schedule is conflict-serializable in databases."
},
{
q: "SQL statement: select * from R, S is equivalent to?",
options: ["Select * from R natural join S", "Select * from R cross join S", "Select * from R union join S", "Select * from R inner join S"],
answer: 1,
explanation: "Using multiple tables without join condition defaults to a cross join."
},
{
q: "Relational algebra query to find customers with balance > 1000?",
options: [
"σ Customer_name( Π balance >1000(Deposit))",
"Π Customer_name( σ balance >1000(Borrow))",
"Π Customer_name( σ balance >1000(Deposit))",
"σ Customer_"
],
answer: 2,
explanation: "First select rows with balance > 1000, then project the customer_name column."
},
{
q: "Transaction: Commit; Rollback; What does Rollback do?",
options: ["Undoes transactions before commit", "Clears all transactions", "Redoes transactions", "No action"],
answer: 0,
explanation: "Rollback undoes all uncommitted changes to maintain database consistency."
},
{
q: "In an E-R, Y is dominant and X is subordinate. Which is incorrect?",
options: ["If Y is deleted, so is X", "Existence is dependent on Y", "If X is deleted, so is Y", "Operationally, if X is deleted"],
answer: 2,
explanation: "The subordinate entity X depends on Y; deleting X does not delete Y."
},
{
q: "In DDBMS, which component receives and processes application requests?",
options: ["Data processor", "Transaction processor", "DDBMS protocol", "Workstations"],
answer: 1,
explanation: "Transaction processors handle requests and ensure ACID properties in distributed databases."
},
{
q: "Which operation retrieves only certain columns of a table?",
options: ["PROJECTION", "SELECTION", "UNION", "JOIN"],
answer: 0,
explanation: "Projection selects specific columns from a relation, while selection filters rows."
},
{
q: "Used by lexical analyzers to define patterns for tokens?",
options: ["Parse Tree", "Symbol Table", "Regular Expressions", "Abstract Syntax Tree"],
answer: 2,
explanation: "Regular expressions define token patterns like identifiers, numbers, and keywords."
},
{
q: "Role of a type system in type-checking?",
options: ["Defines syntax rules", "Specifies valid tokens", "Determines type of expressions and enforces rules", "Generates machine code"],
answer: 2,
explanation: "Type systems check that operations are applied to compatible data types."
},
{
q: "Compiler principle ensuring efficient generated code?",
options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Optimization"],
answer: 3,
explanation: "Code optimization improves runtime performance of compiled code."
},
{
q: "NOT a role of lexer in compiler?",
options: ["Identifying tokens", "Performing semantic analysis", "Ignoring whitespace/comments", "Generating errors for invalid tokens"],
answer: 1,
explanation: "Semantic analysis is handled after lexical and syntax analysis, not by the lexer."
},
{
q: "Parsing technique using predictive approach and handles recursive descent without backtracking?",
options: ["LR Parsing", "LL(1) Parsing", "Bottom-Up Parsing", "Top-Down Parsing"],
answer: 1,
explanation: "LL(1) parsing uses one-token lookahead to predict rules without backtracking."
},
{
q: "Phase in which undeclared variable error is detected?",
options: ["Lexical", "Syntax", "Semantic", "Code generation"],
answer: 2,
explanation: "Semantic analysis checks for variable declarations, type compatibility, and meaning correctness."
},
{
q: "Output of C++ code: int a=5,b=6,c=(a>b)?a:b; cout<<c;",
options: ["5", "4", "7", "6"],
answer: 3,
explanation: "Since a>b is false, c = b = 6."
},
{
q: "Times executed by loop: int i=0; while(i<5){ cout<<i; i+=2; }",
options: ["2", "3", "6", "5"],
answer: 1,
explanation: "Loop executes i=0,2,4 → 3 times."
},
{
q: "Purpose of a function prototype in C++?",
options: ["Define function body", "Declare existence", "Specify return type", "Provide parameters"],
answer: 1,
explanation: "Function prototypes inform the compiler about a function before its definition."
},
{
q: "Loop structure suitable when iterations are known in advance?",
options: ["for loop", "while loop", "do-while loop", "switch statement"],
answer: 0,
explanation: "A for loop is ideal when the number of iterations is predetermined."
},
{
q: "Output of C++ code: int x=10; int& ref=x; int* ptr=&ref; *ptr=20; cout<<x;",
options: ["10", "20", "Pointer address", "Compilation error"],
answer: 1,
explanation: "Pointer modifies the original variable via reference; x becomes 20."
},
{
q: "Output of function printing even numbers from array {1,2,3,4,5,6}?",
options: ["1 3 5", "2 4 6", "1 2 3 4 5 6", "0 0 0"],
answer: 1,
explanation: "Function prints numbers divisible by 2 → 2 4 6."
},
{
q: "Role of instruction decode (ID) stage in pipelining?",
options: ["Execute instruction", "Write result back", "Fetch instruction", "Translate into signals for other stages"],
answer: 3,
explanation: "ID stage decodes instructions and prepares control signals for execution."
},
{
q: "Characteristic of a hardwired control unit?",
options: ["Flexibility", "Ease of modification", "Faster execution", "Complex design"],
answer: 2,
explanation: "Hardwired control units are fast but less flexible and more rigid than microprogrammed units."
},
{
q: "Primary function of memory management unit in computer system?",
options: ["Map physical to cache address", "Store recent translations", "Map logical to physical addresses", "All of the above"],
answer: 3,
explanation: "The MMU handles mapping logical addresses to physical memory, caching translations, and access management."
},
{
q: "Key difference between serial and parallel interfaces?",
options: ["Serial transmits 1 bit at a time, parallel multiple bits", "Serial faster", "Serial input, parallel output", "Both A and C"],
answer: 0,
explanation: "Serial interfaces send one bit sequentially, while parallel sends multiple bits at once."
},
{
q: "Which register facilitates communication between CPU and memory?",
options: ["Memory Data Register", "Program Counter", "Memory Address Register", "A and C"],
answer: 3,
explanation: "MAR holds address, MDR holds data; together they facilitate CPU-memory communication."
},
{
q: "How does CPU's control unit coordinate execution?",
options: ["Manages virtual memory translation", "Retrieves, interprets, and executes instructions", "Integrates components", "Manages I/O operations"],
answer: 1,
explanation: "Control unit orchestrates instruction fetch, decode, execution, and result storage."
},
{
q: "Example of propositional logic statement?",
options: ["All cats are mammals", "If it rains, streets will be wet", "A and B are both true", "John is taller than Mary"],
answer: 2,
explanation: "Propositional logic uses statements that are either true or false."
},
{
q: "Agent that chooses actions based on desirability of outcomes?",
options: ["Model-based", "Simple reflex", "Utility-based", "Goal-based"],
answer: 2,
explanation: "Utility-based agents select actions maximizing a utility function."
},
{
q: "Search type using heuristic search algorithm?",
options: ["BFS", "A* search", "DFS", "Binary search"],
answer: 1,
explanation: "A* search uses heuristics to find the shortest path efficiently."
},
{
q: "Social media platform uses Logistic Regression to predict advertisement engagement. Primary objective?",
options: ["Forecast demographics", "Predict past clicks", "Anticipate engagement", "Cluster users"],
answer: 2,
explanation: "Logistic regression predicts probability of future engagement based on historical data."
},
{
q: "Algorithm commonly used for classification tasks?",
options: ["Linear regression", "Logistic Regression", "K-means clustering", "Association mining"],
answer: 1,
explanation: "Logistic regression is a standard algorithm for binary or multi-class classification."
},
{
q: "Situation using reinforcement learning?",
options: ["Chatbot training", "Customer segmentation", "Robot navigating maze", "Grouping news articles"],
answer: 2,
explanation: "Reinforcement learning involves agents learning by trial-and-error to maximize rewards."
},
{
q: "Sorting algorithm preferred when swap operation is costly?",
options: ["Quick sort", "Merge sort", "Bubble sort", "Shell sort"],
answer: 1,
explanation: "Merge sort minimizes swaps because it primarily uses copying rather than swapping elements."
},
{
q: "For linked list queue, where are enqueue and dequeue performed?",
options: ["Enqueue front, dequeue front", "Enqueue last, dequeue last", "Enqueue last, dequeue first", "Enqueue front, dequeue last"],
answer: 2,
explanation: "Enqueue adds at the tail, dequeue removes from the head to maintain FIFO order."
},
{
q: "Most efficient data structure for a priority queue?",
options: ["Binary search tree", "Hash table", "Binary heap", "Linked list"],
answer: 2,
explanation: "Binary heaps allow efficient insertion and extraction of minimum/maximum elements for priority queues."
},
{
q: "If T(n) = Ω(g(n)), which statement is true?",
options: [
"T(n) <= c*g(n) for n>=n0",
"T(n) >= c*g(n) for n>=n0",
"T(n) = c*g(n) for n>=n0",
"T(n) > c*g(n) for n>=n0"
],
answer: 1,
explanation: "Ω(g(n)) defines a lower bound: T(n) is at least proportional to g(n) for large n."
},
{
q: "Time complexity of code: for(i=0;i<n;i++){for(j=1;j<n;j*=2){...}}?",
options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
answer: 1,
explanation: "Outer loop runs n times; inner loop doubles j each iteration → log n iterations → O(n log n)."
},
{
q: "Sorting algorithm with same average and worst-case bounds as heapsort?",
options: ["Insertion sort", "Merge sort", "Quicksort", "Shell sort"],
answer: 1,
explanation: "Merge sort guarantees O(n log n) for both average and worst case."
},
{
q: "Sorting algorithm of divide-and-conquer type?",
options: ["Bubble sort", "Insertion sort", "Quick sort", "Selection sort"],
answer: 2,
explanation: "Quick sort recursively partitions arrays and sorts subarrays, using divide-and-conquer."
},
{
q: "Big-O complexity of O(n log n)?",
options: ["O(1)", "O(n)", "O(n^2)", "O(n log n)"],
answer: 3,
explanation: "O(n log n) indicates algorithms like merge sort or heap sort."
},
{
q: "Relationship between formal languages, grammars, and automata?",
options: [
"Formal languages are subsets of grammars",
"Automata generate languages, grammars define rules",
"Languages build automata, grammars translate",
"Grammars define language rules, automata recognize strings"
],
answer: 3,
explanation: "Formal grammars define syntax rules for languages; automata can recognize strings generated by those grammars."
},
{
q: "Most powerful type of machine?",
options: ["Deterministic finite automata", "Non-deterministic FA", "Turing machine", "Pushdown automata"],
answer: 2,
explanation: "Turing machines can simulate any algorithm and are more powerful than finite automata or pushdown automata."
},
{
q: "Kleene star '*' in regular expressions represents:",
options: ["Concatenation", "Union", "One or more repetitions", "Zero or more repetitions"],
answer: 3,
explanation: "Kleene star denotes zero or more repetitions of the preceding element."
},
{
q: "Regex for strings starting with 01 and ending with 110?",
options: ["010*1*110", "01(01)*110", "01(0+1)*110", "01110"],
answer: 2,
explanation: "01(0+1)*110 matches any string starting with 01, ending with 110, with any combination of 0 and 1 in between."
},
{
q: "Phase of software development: translating requirements to structured design?",
options: ["Analysis", "Design", "Implementation", "Testing"],
answer: 1,
explanation: "Design transforms requirements into architecture, modules, interfaces, and data models."
},
{
q: "Purpose of UML use case diagrams?",
options: ["Define class attributes", "Show interaction between users and system", "Generate code", "Perform testing"],
answer: 1,
explanation: "Use case diagrams model functional requirements and interactions between actors and system."
},
{
q: "Difference between class and object in OOP?",
options: ["Class is blueprint; object is instance", "Object is blueprint; class is instance", "Both are same", "Class is method; object is variable"],
answer: 0,
explanation: "Class defines structure and behavior; object is a concrete instance of the class."
},
{
q: "In AI, which search is uninformed?",
options: ["A* search", "DFS", "Greedy search", "Hill climbing"],
answer: 1,
explanation: "DFS does not use heuristic information; it blindly explores branches."
},
{
q: "In computer networks, which protocol is connectionless?",
options: ["TCP", "UDP", "HTTP", "FTP"],
answer: 1,
explanation: "UDP is connectionless and does not guarantee delivery, ordering, or error checking."
},
{
q: "OSI layer responsible for routing packets?",
options: ["Transport", "Network", "Data Link", "Application"],
answer: 1,
explanation: "The network layer determines paths for data transmission across networks."
},
{
q: "IP address class with 192.168.x.x?",
options: ["Class A", "Class B", "Class C", "Class D"],
answer: 2,
explanation: "192.168.x.x belongs to Class C (private addresses)."
},
{
q: "What is subnet mask 255.255.255.0 equivalent to?",
options: ["/24", "/16", "/8", "/32"],
answer: 0,
explanation: "255.255.255.0 represents a /24 subnet (24 bits for network)."
},
{
q: "In distributed systems, consistency model ensuring all nodes see same order of writes?",
options: ["Eventual consistency", "Strong consistency", "Causal consistency", "Weak consistency"],
answer: 1,
explanation: "Strong consistency guarantees that all nodes immediately reflect writes in the same order."
},
{
q: "Replication improves:",
options: ["Performance and fault tolerance", "Security", "Only security", "None"],
answer: 0,
explanation: "Replication creates multiple copies to enhance system reliability and access speed."
},
{
q: "In distributed systems, fault tolerance is achieved by:",
options: ["Replication", "Redundancy", "Checkpointing", "All of the above"],
answer: 3,
explanation: "Combining replication, redundancy, and checkpointing enables fault-tolerant systems."
},
{
q: "CAP theorem states:",
options: ["Consistency, Availability, Partition tolerance—cannot achieve all simultaneously", "Consistency, Accuracy, Performance", "Correctness, Availability, Performance", "Cache, Availability, Partition"],
answer: 0,
explanation: "CAP theorem states a distributed system can only guarantee two of three: consistency, availability, and partition tolerance."
},
{
q: "Which database model is suitable for distributed systems?",
options: ["Relational", "NoSQL", "Hierarchical", "Network"],
answer: 1,
explanation: "NoSQL databases scale better horizontally and handle distributed environments efficiently."
},









  

  {
    q: "Which type of attack involves an attacker intercepting and modifying communication between two parties?",
    options: ["Denial of Service (DoS)", "Man-in-the-Middle (MitM)", "Phishing", "Trojan Horse"],
    answer: 1,
    explanation: "A Man-in-the-Middle (MitM) attack occurs when an attacker secretly intercepts and alters communication between two parties."
  },
  {
    q: "Which cryptographic technique is used to ensure the integrity and authenticity of a message?",
    options: ["Encryption", "Hashing", "Steganography", "Digital Signature"],
    answer: 3,
    explanation: "Digital signatures provide integrity and authenticity by allowing the recipient to verify that the message has not been altered and is from the claimed sender."
  },
  {
    q: "Which authentication factor requires something the user knows?",
    options: ["Something you are", "Something you have", "Something you do", "Something you know"],
    answer: 3,
    explanation: "Authentication factors include knowledge (something you know), possession (something you have), and inherence (something you are)."
  },
  {
    q: "Which principle of cyber security restricts how privileges are initiated whenever any object or subject accesses a resource?",
    options: ["Least Privilege", "Fail-Safe Defaults", "Economy of Mechanism", "Complete Mediation"],
    answer: 0,
    explanation: "The principle of Least Privilege ensures that users and programs operate using the minimum privileges necessary to perform their tasks."
  },
  {
    q: "Which of the following is a common method used by attackers to exploit buffer overflow vulnerabilities?",
    options: ["Injecting malicious code into input fields", "Sending large amounts of data to overrun a buffer's boundary", "Manipulating URLs to execute unauthorized commands", "Intercepting communication between two parties"],
    answer: 1,
    explanation: "Buffer overflow exploits typically involve sending more data than a buffer can hold, which can overwrite memory and allow execution of malicious code."
  },
  {
    q: "Which type of vulnerability occurs when software developers unintentionally expose sensitive information in error messages?",
    options: ["Buffer Overflow", "Information Disclosure", "Cross-Site Scripting (XSS)", "Privilege Escalation"],
    answer: 1,
    explanation: "Information Disclosure vulnerabilities happen when applications reveal sensitive data (e.g., database info, passwords) in errors or logs."
  },
  {
    q: "You are creating a use case model for an online library system. Which is the MOST appropriate use case description for the 'Borrow a Book' functionality?",
    options: [
      "The user logs in to the system and searches for a book. They then click on the 'Borrow' button and the book is borrowed.",
      "The system verifies user credentials, retrieves book information, updates loan status, and sends a confirmation email.",
      "The user selects a book they want to borrow and the system handles the loan process.",
      "The system interacts with the database to update borrowing information and generates a loan receipt."
    ],
    answer: 2,
    explanation: "A use case should describe the user's interaction with the system from the user's perspective, not the internal system details."
  },
  {
    q: "When creating requirements using use case modeling concepts, which activity involves identifying the actors, their goals, and interactions between them and the system?",
    options: [
      "Writing detailed pseudocode for system functionalities",
      "Defining the database schema for data storage",
      "Developing test cases for system validation",
      "Creating use case diagrams to depict system functionality"
    ],
    answer: 3,
    explanation: "Use case modeling focuses on capturing the interactions between actors and the system to understand functional requirements."
  },
  {
    q: "What is the main difference between Agile and Waterfall development methodologies?",
    options: [
      "Agile is faster and more iterative, while Waterfall is more linear and plan-driven.",
      "Agile focuses on user interface design, while Waterfall prioritizes code quality.",
      "Agile requires extensive documentation, while Waterfall is more flexible.",
      "Agile is only for small projects, and Waterfall is better for large-scale systems."
    ],
    answer: 0,
    explanation: "Agile uses iterative development with frequent feedback, whereas Waterfall is linear with defined sequential phases."
  },
  {
    q: "You are analyzing user requirements for a new e-commerce platform. Which technique is most relevant to gather user feedback?",
    options: [
      "Reviewing existing code from similar platforms",
      "Conducting user interviews to understand their needs and shopping habits",
      "Directly coding the core functionalities based on assumptions",
      "Analyzing competitor websites' user interfaces"
    ],
    answer: 1,
    explanation: "User interviews allow gathering direct feedback from end users to understand their needs and improve system design."
  },
  {
    q: "After implementing a new software update, you notice an increase in user complaints about bugs. What is the MOST appropriate course of action?",
    options: [
      "Ignore the complaints and wait for user feedback to stabilize",
      "Release a new update with completely different functionalities",
      "Delete the update and revert to the previous version of the software",
      "Analyze the complaints, identify the bugs, and release a hotfix update"
    ],
    answer: 3,
    explanation: "Identifying the issues and releasing a targeted hotfix addresses the problem without discarding valid improvements in the update."
  },
  {
    q: "A software system experiences performance issues during peak usage times. How can you analyze the problem to identify the root cause?",
    options: [
      "Identify bottlenecks in the code and optimize resource usage",
      "Change the user interface to a simpler design",
      "Increase the hardware specifications of the system without further analysis",
      "Rewrite the entire system from scratch using a different programming language"
    ],
    answer: 0,
    explanation: "Performance issues are best solved by profiling the system, identifying bottlenecks, and optimizing resource-intensive parts."
  },
  {
    q: "The recurrence relation for the Merge Sort algorithm is:",
    options: [
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = 2T(n/2) + O(1)",
      "T(n) = T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)"
    ],
    answer: 0,
    explanation: "Merge Sort divides the array in half recursively (2T(n/2)) and combines sorted halves in O(n) time."
  },
  {
    q: "Which of the following is true about the dynamic programming approach?",
    options: [
      "It always uses recursion",
      "It solves each sub-problem only once and stores the result",
      "It is always more efficient than greedy algorithms",
      "It is used only for optimization problems"
    ],
    answer: 1,
    explanation: "Dynamic programming stores the results of solved subproblems to avoid redundant calculations, optimizing efficiency."
  },
  {
    q: "Which of the following problems can be solved using the greedy algorithm approach?",
    options: [
      "Longest Common Subsequence",
      "Traveling Salesman Problem",
      "Fractional Knapsack Problem",
      "Matrix Chain Multiplication"
    ],
    answer: 2,
    explanation: "The fractional knapsack problem can be solved optimally using a greedy strategy by taking items with the highest value-to-weight ratio first."
  },
  {
    q: "Which technique is used in dynamic programming to solve optimization problems?",
    options: [
      "Divide and Conquer",
      "Greedy Approach",
      "Memoization",
      "Heuristics"
    ],
    answer: 2,
    explanation: "Memoization is storing results of subproblems to avoid repeated computation, a key technique in dynamic programming."
  },
  {
    q: "The main idea behind the divide-and-conquer algorithm is to:",
    options: [
      "Break the problem into smaller subproblems, solve them independently, and combine their solutions",
      "Solve the problem directly without dividing",
      "Use a single loop to find the solution",
      "Use dynamic programming to store results of subproblems"
    ],
    answer: 0,
    explanation: "Divide-and-conquer splits a complex problem into smaller, manageable subproblems, solves them recursively, and combines the results."
  },
  {
    q: "What is the time complexity of Kruskal's algorithm for finding the minimum spanning tree?",
    options: ["O(n^2)", "O(E log E)", "O(V^2)", "O(V log V)"],
    answer: 1,
    explanation: "Kruskal's algorithm sorts edges by weight (O(E log E)) and adds them without forming cycles to build the MST."
  },
  {
    q: "What is the primary function of the Data Link Layer in the OSI model?",
    options: [
      "Routing packets across networks",
      "Ensuring reliable transmission of data across a physical link",
      "Providing end-to-end communication between devices",
      "Establishing and maintaining communication sessions"
    ],
    answer: 1,
    explanation: "The Data Link Layer ensures error-free transmission between two nodes on the same network and manages physical addressing."
  },
  {
    q: "Which layer of the OSI model converts data packets from the Network layer into electrical signals for transmission?",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    answer: 0,
    explanation: "The Physical Layer handles the transmission of raw bitstreams over a physical medium (electrical, optical, or radio signals)."
  },
  {
    q: "What is the primary function of the ARP (Address Resolution Protocol)?",
    options: [
      "Translates domain names to IP addresses",
      "Determines the MAC address of a device based on its IP address",
      "Routes packets between different networks",
      "Establishes a secure connection between client and server"
    ],
    answer: 1,
    explanation: "ARP maps an IP address to the corresponding hardware MAC address on a local network."
  },
  {
    q: "How many host addresses are available in a subnet with a subnet mask of 255.255.255.248 (/29)?",
    options: ["2", "6", "14", "30"],
    answer: 1,
    explanation: "A /29 subnet provides 8 addresses, of which 2 are reserved for network and broadcast addresses, leaving 6 usable host addresses."
  },
  {
    q: "Which wireless technology is commonly used for local area networking and internet access within buildings?",
    options: ["Bluetooth", "Cellular", "Wi-Fi", "NFC (Near Field Communication)"],
    answer: 2,
    explanation: "Wi-Fi is a common wireless technology for LANs and provides internet access in buildings."
  },
  {
    q: "What is the broadcast address in a subnet with the address range 192.168.1.0 - 192.168.1.31?",
    options: ["192.168.1.0", "192.168.1.31", "192.168.1.255", "192.168.0.255"],
    answer: 1,
    explanation: "The broadcast address is the last address in a subnet range, used to send messages to all hosts in the subnet."
  },
  {
    q: "Which principle ensures that critical systems remain operational in case of hardware failure?",
    options: ["Load balancing", "Failover", "Data normalization", "Denial of Service (DoS) prevention"],
    answer: 1,
    explanation: "Failover provides redundancy so that if one system fails, another system automatically takes over to maintain operation."
  }









  
  
],










  

"Finfinnee":[

  {
    q: "What is the purpose of using heuristics in game tree search algorithms?",
    options: [
      "To guarantee a win in every game.",
      "To eliminate the need for search algorithms.",
      "To reduce the search space and improve efficiency.",
      "To ensure a systematic exploration of the search tree."
    ],
    answer: 2,
    explanation: "Heuristics in game tree search algorithms help reduce the search space by guiding the search towards more promising moves, improving the efficiency of the algorithm."
  },
  {
    q: "Which heuristic evaluates a game state by considering the number of pieces or territories controlled by each player?",
    options: [
      "Material heuristic",
      "Mobility heuristic",
      "Distance heuristic",
      "Tactical heuristic"
    ],
    answer: 0,
    explanation: "The material heuristic evaluates a game state based on the number and quality of pieces or territories controlled by each player."
  },
  {
    q: "Which heuristic evaluates a game state by considering the available moves and options for each player?",
    options: [
      "Material heuristic",
      "Mobility heuristic",
      "Distance heuristic",
      "Tactical heuristic"
    ],
    answer: 1,
    explanation: "The mobility heuristic evaluates a game state based on the available moves and options for each player, considering their flexibility and potential for future moves."
  },
  {
    q: "What is the main objective of an operating system?",
    options: [
      "To provide an interface for users to interact with the hardware",
      "To manage and allocate system resources efficiently",
      "To ensure data security and protection",
      "To optimize program execution speed"
    ],
    answer: 1,
    explanation: "The primary objective of an operating system is to manage system resources, such as CPU, memory, and peripherals, efficiently to ensure smooth and reliable operation of computer systems."
  },
  {
    q: "Which of the following is not a function of an operating system?",
    options: [
      "Process management",
      "File management",
      "Network management",
      "Application development"
    ],
    answer: 3,
    explanation: "Application development is not a direct function of an operating system. It is the responsibility of software developers to create applications using programming languages and tools provided by the operating system."
  },
  {
    q: "What is the purpose of memory management in an operating system?",
    options: [
      "To provide an interface for users to interact with the computer system",
      "To manage the execution of multiple processes simultaneously",
      "To allocate and deallocate memory for processes and data",
      "To ensure data integrity and security"
    ],
    answer: 2,
    explanation: "Memory management in an operating system involves allocating and deallocating memory resources for processes and data, ensuring efficient utilization of available memory."
  },
  {
    q: "Which component of an operating system is responsible for managing input and output operations?",
    options: [
      "Kernel",
      "Scheduler",
      "File system",
      "Device drivers"
    ],
    answer: 3,
    explanation: "Device drivers are responsible for managing input and output operations of hardware devices, such as keyboards, mice, printers, and disks, in an operating system."
  },
  {
    q: "What is the role of the file system in an operating system?",
    options: [
      "To manage system resources and allocate them to processes",
      "To provide a user interface for interacting with the computer system",
      "To store and organize files on secondary storage devices",
      "To schedule and prioritize the execution of processes"
    ],
    answer: 2,
    explanation: "The file system in an operating system is responsible for managing the storage and organization of files on secondary storage devices, such as hard drives and solid-state drives."
  },
  {
    q: "Which scheduling algorithm is based on assigning a fixed time slice to each process in a round-robin manner?",
    options: [
      "First-Come, First-Served (FCFS) scheduling",
      "Shortest Job Next (SJN) scheduling",
      "Priority scheduling",
      "Round-Robin scheduling"
    ],
    answer: 3,
    explanation: "Round-Robin scheduling is a CPU scheduling algorithm that assigns a fixed time slice, called a time quantum, to each process in a cyclic manner."
  },
  {
    q: "What is the primary goal of file system security in an operating system?",
    options: [
      "To ensure the availability of files for authorized users",
      "To prevent unauthorized access to files and data",
      "To optimize file storage and retrieval performance",
      "To minimize the impact of system failures on file operations"
    ],
    answer: 1,
    explanation: "The primary goal of file system security is to prevent unauthorized access to files and data, ensuring the confidentiality and integrity of the stored information."
  },
  {
    q: "What is the purpose of virtual memory in an operating system?",
    options: [
      "To provide a virtualized environment for running multiple operating systems",
      "To increase the physical memory capacity of a computer system",
      "To allow the execution of programs without any memory constraints",
      "To create a separate memory space for each running process"
    ],
    answer: 1,
    explanation: "Virtual memory is a technique used by operating systems to increase the effective physical memory capacity by utilizing secondary storage as an extension of main memory."
  },
  {
    q: "What is the role of the shell in an operating system?",
    options: [
      "To manage and allocate system resources",
      "To provide a graphical user interface for interacting with the system",
      "To act as an interface between the user and the operating system kernel",
      "To schedule and prioritize the execution of processes"
    ],
    answer: 2,
    explanation: "The shell is a command-line interface that acts as an intermediary between the user and the operating system kernel, allowing users to interact with the system and execute commands."
  },
  {
    q: "What is the primary purpose of process synchronization in an operating system?",
    options: [
      "To prevent deadlock situations",
      "To ensure fair allocation of system resources",
      "To enable parallel execution of multiple processes",
      "To facilitate inter-process communication"
    ],
    answer: 0,
    explanation: "Process synchronization in an operating system involves coordinating and controlling the execution of multiple processes to prevent deadlock situations, where processes are unable to proceed due to resource conflicts."
  },
  {
    q: "What is the main function of an operating system in terms of convenience?",
    options: [
      "Providing an easy-to-use graphical user interface",
      "Optimizing program execution speed",
      "Managing system resources efficiently",
      "Ensuring data security and protection"
    ],
    answer: 0,
    explanation: "The operating system provides a user-friendly interface, such as a graphical user interface (GUI), to make it convenient for users to interact with the computer system."
  },
  {
    q: "How does an operating system improve efficiency in a computer system?",
    options: [
      "By allocating system resources to processes effectively",
      "By providing a wide range of software applications",
      "By supporting multiple programming languages",
      "By ensuring data integrity and security"
    ],
    answer: 0,
    explanation: "The operating system manages system resources, such as CPU, memory, and peripherals, to ensure their efficient allocation and utilization, thereby improving system efficiency."
  },
  {
    q: "What does it mean for an operating system to have the ability to evolve?",
    options: [
      "It can adapt to changing hardware configurations",
      "It can support multiple operating systems simultaneously",
      "It can run legacy software without compatibility issues",
      "It can automatically update itself with new features and bug fixes"
    ],
    answer: 0,
    explanation: "An operating system with the ability to evolve can adapt to new hardware technologies and configurations, ensuring compatibility and efficient utilization of available resources."
  },
  {
    q: "How does an operating system enhance convenience in terms of file management?",
    options: [
      "By providing advanced encryption techniques for file security",
      "By allowing users to organize files in a hierarchical structure",
      "By automatically backing up files to remote servers",
      "By optimizing file storage to maximize disk space utilization"
    ],
    answer: 1,
    explanation: "An operating system provides file management features that allow users to organize files in directories or folders, providing a convenient way to access and manage files."
  },
  {
    q: "What is the role of device drivers in an operating system's convenience factor?",
    options: [
      "They allow users to customize the appearance of the graphical user interface.",
      "They provide compatibility with a wide range of hardware devices.",
      "They optimize system performance for resource-intensive applications.",
      "They enhance data security and encryption for sensitive files."
    ],
    answer: 1,
    explanation: "Device drivers in an operating system enable compatibility with various hardware devices, ensuring convenience for users by allowing them to connect and use different peripherals without compatibility issues."
  },





  

  {
    q: "What is the purpose of security incident response in network and system administration?",
    options: [
      "Preventing security incidents from occurring",
      "Recovering data after a security breach",
      "Analyzing network performance",
      "Detecting and responding to security incidents"
    ],
    answer: 3,
    explanation: "Security incident response involves detecting, analyzing, and responding to security incidents to minimize their impact and prevent future occurrences."
  },
  {
    q: "What is the role of encryption in network and system security?",
    options: [
      "Preventing unauthorized access to the network",
      "Monitoring network traffic for anomalies",
      "Protecting data confidentiality and integrity",
      "Performing system backups"
    ],
    answer: 2,
    explanation: "Encryption protects the confidentiality and integrity of data by converting it into a form that can only be deciphered with the correct decryption key."
  },
  {
    q: "Which of the following is an example of a security control measure?",
    options: [
      "Data backup and recovery procedures",
      "User account creation",
      "Network device configuration",
      "Network traffic analysis"
    ],
    answer: 0,
    explanation: "Data backup and recovery procedures ensure data availability and mitigate the impact of data loss or system failures."
  },
  {
    q: "What is the purpose of a security incident report in network and system administration?",
    options: [
      "Documenting security policy violations",
      "Sharing threat intelligence with other organizations",
      "Investigating network performance issues",
      "Identifying system vulnerabilities"
    ],
    answer: 0,
    explanation: "Security incident reports document security policy violations, including details of the incident, its impact, and the actions taken to resolve it."
  },
  {
    q: "Which of the following is a common troubleshooting technique in network administration?",
    options: [
      "Rebooting the system",
      "Performing a software update",
      "Resetting network configurations",
      "Conducting a network scan"
    ],
    answer: 0,
    explanation: "Rebooting the system can resolve temporary software or configuration issues."
  },
  {
    q: "What is the purpose of log analysis in troubleshooting network and system issues?",
    options: [
      "Identifying potential security breaches",
      "Monitoring network performance",
      "Configuring firewall rules",
      "Encrypting network communications"
    ],
    answer: 0,
    explanation: "Log analysis involves reviewing system and network logs to identify potential security breaches or abnormal activities."
  },
  {
    q: "Which of the following is a common troubleshooting tool in network administration?",
    options: ["Ping", "VPN", "FTP", "DNS"],
    answer: 0,
    explanation: "Ping tests network connectivity and determines the round-trip time between source and destination IP addresses."
  },
  {
    q: "What is the purpose of network monitoring in system administration?",
    options: [
      "Identifying security vulnerabilities",
      "Tracking network bandwidth usage",
      "Configuring user access controls",
      "Performing system backups"
    ],
    answer: 1,
    explanation: "Network monitoring tools track bandwidth usage, identify performance bottlenecks, and ensure optimal network performance."
  },
  {
    q: "Which of the following is a common network troubleshooting approach?",
    options: ["Divide and conquer", "Trial and error", "Random testing", "Full system restore"],
    answer: 0,
    explanation: "Divide and conquer breaks down complex network issues into smaller parts to isolate and resolve the problem step by step."
  },
  {
    q: "What is the purpose of a network diagram in troubleshooting network issues?",
    options: [
      "Documenting network configurations",
      "Identifying security vulnerabilities",
      "Monitoring network performance",
      "Configuring network devices"
    ],
    answer: 0,
    explanation: "Network diagrams visually represent the network infrastructure to aid in troubleshooting and documentation."
  },
  {
    q: "Which of the following is an example of a network security control measure?",
    options: ["Intrusion Detection System (IDS)", "User authentication", "Data encryption", "Network traffic analysis"],
    answer: 0,
    explanation: "IDS monitor network traffic and detect suspicious or malicious activities."
  },
  {
    q: "What is the purpose of network segmentation in network security?",
    options: [
      "Controlling user access to resources",
      "Encrypting network communications",
      "Isolating network segments for security purposes",
      "Monitoring network traffic"
    ],
    answer: 2,
    explanation: "Network segmentation divides a network into smaller segments to isolate different parts and control access."
  },
  {
    q: "What is the role of a Network Access Control (NAC) system in network security?",
    options: [
      "Managing user account credentials",
      "Monitoring network bandwidth",
      "Detecting and blocking unauthorized devices",
      "Auditing network activity"
    ],
    answer: 2,
    explanation: "NAC systems enforce security policies by detecting and blocking unauthorized devices."
  },
  {
    q: "Which of the following is a common technique for troubleshooting network connectivity issues?",
    options: [
      "Checking physical cable connections",
      "Updating antivirus software",
      "Configuring firewall rules",
      "Performing system backups"
    ],
    answer: 0,
    explanation: "Checking cable connections ensures proper network connectivity, especially in wired networks."
  },
  {
    q: "Which scripting language is commonly used for system administration tasks?",
    options: ["Java", "C++", "Python", "HTML"],
    answer: 2,
    explanation: "Python is widely used for system administration due to its simplicity and powerful libraries."
  },
  {
    q: "What is the primary advantage of using scripts for system administration tasks?",
    options: [
      "Faster execution compared to compiled programs",
      "Ability to automate repetitive tasks",
      "Greater control over system resources",
      "Enhanced security and encryption features"
    ],
    answer: 1,
    explanation: "Scripts allow admins to automate repetitive tasks, saving time and effort."
  },
  {
    q: "Which command is commonly used in scripting to execute system commands or programs?",
    options: ["echo", "ifconfig", "grep", "subprocess"],
    answer: 3,
    explanation: "The subprocess module in Python allows executing system commands from within scripts."
  },
  {
    q: "Which scripting feature is useful for handling errors and exceptions?",
    options: ["Looping constructs", "Conditional statements", "Exception handling", "Function definitions"],
    answer: 2,
    explanation: "Exception handling allows graceful management of errors during system administration tasks."
  },
  {
    q: "Which scripting concept is useful for reading and manipulating configuration files?",
    options: ["File input/output", "Regular expressions", "String manipulation", "Variable assignment"],
    answer: 0,
    explanation: "File I/O allows admins to read and modify configuration files programmatically."
  },
  {
    q: "Which scripting technique is commonly used for system log analysis and monitoring?",
    options: ["Database integration", "File compression", "Log rotation", "Regular expression matching"],
    answer: 3,
    explanation: "Regular expressions are used to parse and analyze logs efficiently."
  },
  {
    q: "Which scripting language feature allows passing command-line arguments to a script?",
    options: ["Functions", "Modules", "Classes", "Command-line parsing"],
    answer: 3,
    explanation: "Command-line parsing allows scripts to accept input parameters for flexible execution."
  },
  {
    q: "Which scripting technique is commonly used for automating system backup and restore tasks?",
    options: ["File compression", "Version control", "Scheduling", "Event logging"],
    answer: 2,
    explanation: "Scheduling scripts to run at intervals automates backup and restore processes."
  },
  {
    q: "Which scripting concept is useful for securely storing sensitive information, such as passwords?",
    options: ["Environment variables", "Encryption algorithms", "Hashing functions", "Configuration files"],
    answer: 1,
    explanation: "Encryption algorithms securely store sensitive data for system administration scripts."
  },
  {
    q: "Which scripting technique is commonly used for monitoring system resources like CPU and memory?",
    options: ["Log parsing", "System calls", "Signal handling", "Performance counters"],
    answer: 1,
    explanation: "System calls allow scripts to directly interact with the OS to monitor resources."
  },
  {
    q: "Which of the following is the primary goal of artificial intelligence?",
    options: [
      "Emulating human intelligence",
      "Creating machines that can think and learn",
      "Developing advanced algorithms",
      "Enhancing computer processing power"
    ],
    answer: 1,
    explanation: "AI aims to create machines that can think, learn, and make decisions like humans."
  },
  {
    q: "What is knowledge representation in AI?",
    options: [
      "The process of storing information in a computer",
      "The ability of machines to reason and make decisions",
      "The study of how humans acquire knowledge",
      "The process of encoding knowledge for machine use"
    ],
    answer: 3,
    explanation: "Knowledge representation encodes information in a form usable by intelligent systems."
  },
  {
    q: "Which knowledge representation technique uses logical rules and inference mechanisms?",
    options: ["Semantic networks", "Neural networks", "Production systems", "Bayesian networks"],
    answer: 2,
    explanation: "Production systems use rules and inference to enable reasoning and decision-making."
  },
  {
    q: "Which reasoning technique involves drawing conclusions from specific observations or examples?",
    options: ["Deductive reasoning", "Inductive reasoning", "Abductive reasoning", "Probabilistic reasoning"],
    answer: 1,
    explanation: "Inductive reasoning generalizes conclusions from specific observations."
  },
  {
    q: "Which learning technique is commonly used in supervised machine learning?",
    options: ["Reinforcement learning", "Unsupervised learning", "Deep learning", "Decision tree learning"],
    answer: 3,
    explanation: "Decision tree learning is a common supervised learning technique using labeled data."
  },
  {
    q: "What is the primary objective of natural language processing (NLP) in AI?",
    options: [
      "Understanding and generating human language by machines",
      "Analyzing and processing large datasets",
      "Enhancing computer hardware capabilities",
      "Simulating human-like decision-making"
    ],
    answer: 0,
    explanation: "NLP enables machines to understand, interpret, and generate human language."
  },
  {
    q: "Which technique is used to make predictions or decisions based on probabilistic models?",
    options: ["Decision trees", "Markov models", "Support vector machines", "Reinforcement learning"],
    answer: 1,
    explanation: "Markov models use probabilistic transitions to make predictions based on current and past states."
  },
  {
    q: "Which technique involves teaching a machine to improve its performance through trial and error?",
    options: ["Reinforcement learning", "Unsupervised learning", "Deep learning", "Genetic algorithms"],
    answer: 0,
    explanation: "Reinforcement learning involves agents learning from feedback to improve performance."
  },
  {
    q: "Which type of learning algorithm aims to mimic the structure and function of the human brain?",
    options: ["Supervised learning", "Unsupervised learning", "Deep learning", "Reinforcement learning"],
    answer: 2,
    explanation: "Deep learning uses artificial neural networks to model human brain functions."
  },
  {
    q: "What is the primary purpose of expert systems in AI?",
    options: [
      "Emulate human expertise in a specific domain",
      "Perform complex mathematical calculations",
      "Process and analyze large datasets",
      "Optimize computer hardware performance"
    ],
    answer: 0,
    explanation: "Expert systems emulate human experts to provide intelligent solutions in a domain."
  },
  {
    q: "What is the primary objective of AI in gaining insight into intelligence and perception?",
    options: [
      "Replicate human intelligence and perception",
      "Enhance computer processing power",
      "Analyze large datasets efficiently",
      "Improve natural language processing"
    ],
    answer: 0,
    explanation: "AI aims to replicate human intelligence to understand reasoning and perception."
  },
  {
    q: "Which AI technique focuses on understanding and mimicking human thought processes?",
    options: ["Machine learning", "Natural language processing", "Cognitive computing", "Robotics"],
    answer: 2,
    explanation: "Cognitive computing simulates human thought, reasoning, and problem-solving processes."
  },
  {
    q: "Which area of AI research focuses on understanding and replicating human vision?",
    options: ["Natural language processing", "Computer vision", "Robotics", "Expert systems"],
    answer: 1,
    explanation: "Computer vision enables machines to interpret and process visual information like humans."
  },
  {
    q: "Which AI technique is used to extract insights and patterns from large datasets?",
    options: ["Natural language processing", "Machine learning", "Expert systems", "Robotics"],
    answer: 1,
    explanation: "Machine learning analyzes data to identify patterns and make predictions without explicit programming."
  },
  {
    q: "Which concept in AI refers to the ability of machines to understand and interpret human language?",
    options: ["Natural language processing", "Machine learning", "Expert systems", "Robotics"],
    answer: 0,
    explanation: "NLP allows machines to understand, interpret, and generate human language."
  },
  {
    q: "Which AI technique is used to simulate human-like conversation and interaction?",
    options: ["Machine learning", "Natural language processing", "Robotics", "Expert systems"],
    answer: 1,
    explanation: "NLP is used in chatbots and virtual assistants to simulate human conversation."
  },
  {
    q: "How does AI contribute to gaining insights into intelligence and perception?",
    options: [
      "By analyzing human brain activity",
      "By replicating human thought processes",
      "By conducting psychological experiments",
      "By improving computer hardware capabilities"
    ],
    answer: 1,
    explanation: "AI replicates human thought processes to gain insights into intelligence and perception."
  },
  {
    q: "Which field of AI focuses on developing intelligent machines that can autonomously perform tasks?",
    options: ["Machine learning", "Robotics", "Natural language processing", "Expert systems"],
    answer: 1,
    explanation: "Robotics integrates AI with mechanical systems to perform tasks autonomously."
  },
  {
    q: "How does AI contribute to gaining insights into human perception?",
    options: [
      "By simulating human sensory organs",
      "By analyzing human brain waves",
      "By replicating human perceptual processes",
      "By conducting psychological experiments"
    ],
    answer: 2,
    explanation: "AI replicates human perceptual processes like vision and hearing for understanding perception."
  },
  {
    q: "Which AI technique involves creating computer programs that exhibit human-like intelligence and problem-solving skills?",
    options: ["Machine learning", "Expert systems", "Natural language processing", "Robotics"],
    answer: 1,
    explanation: "Expert systems use knowledge and rules to emulate human problem-solving in a domain."
  },
  {
    q: "What is a heuristic in the context of AI?",
    options: [
      "A predefined set of rules for decision making",
      "A mathematical model used to solve search problems",
      "An intelligent agent capable of learning from experience",
      "A strategy or rule of thumb used to guide problem-solving"
    ],
    answer: 3,
    explanation: "Heuristics guide problem-solving by providing strategies or rules of thumb to reach solutions."
  },
  {
    q: "How are heuristics useful in search problems?",
    options: [
      "They guarantee finding the optimal solution",
      "They reduce the search space and speed up the search process",
      "They eliminate the need for search algorithms",
      "They ensure a systematic exploration of the search space"
    ],
    answer: 1,
    explanation: "Heuristics guide searches toward the most promising paths, reducing search space and speeding up problem-solving."
  },
  {
    q: "Which type of heuristic uses problem-specific knowledge to estimate the cost or value of each potential action?",
    options: ["Admissible heuristic", "Consistent heuristic", "Informed heuristic", "Dominance heuristic"],
    answer: 2,
    explanation: "Informed heuristics use domain knowledge to estimate the cost or value of actions."
  },
  {
    q: "Which heuristic is guaranteed to never overestimate the cost to reach the goal?",
    options: ["Admissible heuristic", "Consistent heuristic", "Informed heuristic", "Dominance heuristic"],
    answer: 0,
    explanation: "Admissible heuristics provide a lower bound and never overestimate the actual cost."
  },
  {
    q: "Which algorithm combines the use of heuristics and backward search to solve problems?",
    options: ["Depth-first search", "Breadth-first search", "A* search algorithm", "Hill climbing algorithm"],
    answer: 2,
    explanation: "A* search algorithm uses heuristics with backward search to efficiently find optimal paths."
  },
  {
    q: "What is the main advantage of using heuristics in game-playing AI systems?",
    options: [
      "They guarantee victory in every game",
      "They make the game unpredictable and exciting",
      "They allow the AI to learn from its opponents",
      "They improve the AI's decision-making and gameplay"
    ],
    answer: 3,
    explanation: "Heuristics help AI evaluate moves and improve decision-making in games."
  },
  {
    q: "Which technique in game-playing AI involves evaluating the desirability of a game state based on heuristics?",
    options: ["Minimax algorithm", "Alpha-beta pruning", "Monte Carlo simulation", "Evaluation function"],
    answer: 3,
    explanation: "Evaluation functions use heuristics to assign desirability scores to game states."
  },





  

  {
    q: "Which of the following is NOT an OOP concept?",
    options: ["Encapsulation", "Polymorphism", "Exception", "Abstraction"],
    answer: 2,
    explanation: "Exception handling is not a core OOP principle."
  },
  {
    q: "Runtime polymorphism feature in Java is:",
    options: ["Method overriding", "Operator overloading", "Method overloading", "Constructor overloading"],
    answer: 0,
    explanation: "Runtime polymorphism is achieved through method overriding."
  },
  {
    q: "Prim’s algorithm initializes with:",
    options: [
      "A vertex",
      "An edge",
      "A vertex with the smallest edge",
      "A forest"
    ],
    answer: 0,
    explanation: "Prim’s algorithm starts from a single vertex."
  },
  {
    q: "Worst-case time complexity of Prim’s algorithm using adjacency matrix is:",
    options: ["O(log V)", "O(V²)", "O(E²)", "O(V log E)"],
    answer: 1,
    explanation: "Using adjacency matrix, Prim’s algorithm runs in O(V²)."
  },
  {
    q: "Which algorithm should be used when a vertex is fully explored before backtracking?",
    options: ["Depth First Search", "Breadth First Search", "Prim’s algorithm", "Kruskal’s algorithm"],
    answer: 0,
    explanation: "DFS explores deeply before backtracking."
  },
  {
    q: "Using Kruskal’s algorithm, which edge is selected first?",
    options: ["GF", "BE", "DE", "BG"],
    answer: 0,
    explanation: "Kruskal selects the edge with the smallest weight first."
  },
  {
    q: "Which OSI layer ensures ordered delivery of packets?",
    options: ["Presentation Layer", "Network Layer", "Data Link Layer", "Transport Layer"],
    answer: 3,
    explanation: "Transport layer ensures sequencing and reliability."
  },
  {
    q: "Correct IEEE 802 layer ordering is:",
    options: [
      "MAC, LLC, IP, TCP, Application",
      "LLC, MAC, TCP, IP, Application",
      "LLC, MAC, IP, TCP, Application",
      "MAC, LLC, TCP, IP, Application"
    ],
    answer: 2,
    explanation: "Correct order is LLC → MAC → IP → TCP → Application."
  },
  {
    q: "Which subnet mask supports at least 300 hosts per subnet?",
    options: [
      "255.255.254.0",
      "255.255.224.0",
      "255.255.255.0",
      "255.255.255.128"
    ],
    answer: 0,
    explanation: "255.255.254.0 supports 510 hosts."
  },
  {
    q: "Which wires are swapped in a crossover cable?",
    options: [
      "Wires 1 & 2 with wires 3 & 6",
      "Wires 1 & 2 with wires 3 & 4",
      "Wires 1 & 2 with wires 6 & 8",
      "Wires 2 & 3 with wires 3 & 6"
    ],
    answer: 0,
    explanation: "Crossover cable swaps transmit and receive pairs."
  },
  {
    q: "New subnet mask for breaking Class C network into 20 subnets is:",
    options: [
      "255.255.255.0",
      "255.255.248.0",
      "255.255.224.0",
      "255.255.255.248"
    ],
    answer: 3,
    explanation: "255.255.255.248 provides 32 subnets."
  },
  {
    q: "A person who hacks using tools without understanding is called:",
    options: ["Script kiddy", "Novice", "Gray hat hacker", "White hat hacker"],
    answer: 0,
    explanation: "Script kiddies rely on pre-made tools."
  },
  {
    q: "Which is an attack on availability?",
    options: ["Spoofing", "Delay", "Masquerading", "Snooping"],
    answer: 1,
    explanation: "Delay attacks reduce system availability."
  },
  {
    q: "Which algorithm is NOT used for digital signatures?",
    options: ["RSA", "Diffie-Hellman", "Elliptic Curve", "DSS"],
    answer: 1,
    explanation: "Diffie-Hellman is for key exchange, not signatures."
  },
  {
    q: "Which is a violation of confidentiality?",
    options: [
      "Azeb copies Abebe's homework",
      "Bekele crashes Tulu's system",
      "Bekele changes Abebech’s check amount",
      "Domain name hijacking"
    ],
    answer: 0,
    explanation: "Unauthorized access to information violates confidentiality."
  },
  {
    q: "Key logger is a type of:",
    options: ["Virus", "Trojan horse", "Buffer overflow", "Spyware"],
    answer: 3,
    explanation: "Keyloggers secretly collect user input."
  },
  {
    q: "Rule of access control is:",
    options: [
      "Grant most access possible",
      "Grant least access required",
      "Grant standard access to all",
      "Strictly limit all users"
    ],
    answer: 1,
    explanation: "Principle of least privilege."
  },
  {
    q: "Which is NOT a common user management task?",
    options: [
      "Creating user accounts",
      "Deleting user accounts",
      "Modifying accounts",
      "Installing software for users"
    ],
    answer: 3,
    explanation: "Software installation is not user management."
  },
  {
    q: "Purpose of creating groups in OS is:",
    options: [
      "Increase performance",
      "Limit access",
      "Organize users by roles",
      "None of the above"
    ],
    answer: 2,
    explanation: "Groups simplify permission management."
  },
  {
    q: "Key function of a domain controller is:",
    options: [
      "Provide internet",
      "Manage hardware",
      "Monitor traffic",
      "Manage authentication"
    ],
    answer: 3,
    explanation: "Domain controllers manage users and authentication."
  },
  {
    q: "Active Directory Sites and Services enables:",
    options: [
      "Centralized device control",
      "Traffic monitoring",
      "Replication between sites",
      "Remote access"
    ],
    answer: 2,
    explanation: "It manages AD replication across sites."
  },
  {
    q: "Biggest security challenge for system administrators:",
    options: [
      "Evolving threats",
      "Employee compliance",
      "Complex security tools",
      "Balancing access and security"
    ],
    answer: 0,
    explanation: "Threats constantly evolve."
  },
  {
    q: "Active Directory container used for organizing users is:",
    options: ["User Units", "Organizational Units", "Container object", "Leaf object"],
    answer: 1,
    explanation: "OUs organize users and resources logically."
  },
  {
    q: "If an agent knows the exact state, the problem type is:",
    options: ["Single-state", "Exploration", "Conformant", "Contingency"],
    answer: 0,
    explanation: "Exact knowledge implies single-state problem."
  },
  {
    q: "Which sorting algorithm uses pivot and partition?",
    options: ["Merge", "Quick", "Shell", "Selection"],
    answer: 1,
    explanation: "Quick sort uses pivot-based partitioning."
  },
  {
    q: "The sequence of steps to solve a problem is called:",
    options: ["Data Structure", "Algorithm", "Information", "Data Processing"],
    answer: 1,
    explanation: "An algorithm defines problem-solving steps."
  },



  

  {
    q: "From the library management system classes, which relationship is NOT true?",
    options: [
      "The relationship between library and books is aggregation",
      "The relationship between library and student is aggregation",
      "The relationship between library and books is composition",
      "The relationship between books and student is association"
    ],
    answer: 2,
    explanation: "Books can exist independently of a library, so composition is incorrect."
  },
  {
    q: "Which objects are Entity objects in the file system GUI scenario?",
    options: [
      "File, Folder, and Pointer",
      "Icon, TrashCan, and Pointer",
      "File, Folder, and Disk",
      "File, Folder, Disk, and TrashCan"
    ],
    answer: 3,
    explanation: "Entity objects represent persistent data such as files, folders, disks, and trash."
  },
  {
    q: "Which statement about coupling and cohesion is incorrect?",
    options: [
      "High cohesion subsystem contains related objects performing similar tasks",
      "In weakly coupled systems, changes to one subsystem affect others",
      "Low cohesion subsystem contains unrelated objects",
      "In strongly coupled systems, changes to one subsystem affect others"
    ],
    answer: 1,
    explanation: "Weak coupling minimizes the impact of changes between subsystems."
  },
  {
    q: "Which software process model is described when modules are delivered incrementally?",
    options: [
      "Agile model",
      "Waterfall model",
      "Incremental model",
      "Iterative model"
    ],
    answer: 2,
    explanation: "The system is built and delivered module by module using the Incremental model."
  },
  {
    q: "Which project type involves redesigning an existing system using new technology?",
    options: [
      "Green field project",
      "Interface engineering project",
      "Re-engineering project",
      "None of the above"
    ],
    answer: 2,
    explanation: "Re-engineering focuses on improving or rebuilding existing systems."
  },
  {
    q: "Which is the correct mitigation strategy for slow middleware performance?",
    options: [
      "Plan for a performance evaluation prototype",
      "Develop alternate interface",
      "Assign key developers",
      "Increase task priority"
    ],
    answer: 0,
    explanation: "Prototyping helps evaluate performance risks early."
  },
  {
    q: "What does the CSS rule p.class1 { text-align: center; } mean?",
    options: [
      "All paragraphs are centered",
      "Paragraphs with class1 are centered",
      "All elements inside paragraphs are centered",
      "All elements with class1 are centered"
    ],
    answer: 1,
    explanation: "Only <p> elements with class='class1' are affected."
  },
  {
    q: "Which JavaScript method changes the content of HTML elements?",
    options: [
      "innerHTML",
      "document.write()",
      "console.log()",
      "window.alert()"
    ],
    answer: 0,
    explanation: "innerHTML modifies the content inside an HTML element."
  },
  {
    q: "Which statement about JavaScript variables is true?",
    options: [
      "Const declares read-only global variables",
      "Let declares block-scoped local variables",
      "Var declares block-scoped variables",
      "All of the above"
    ],
    answer: 1,
    explanation: "let provides block-level scope."
  },
  {
    q: "What is the output of: for(x in obj) console.log(obj);",
    options: [
      "No output",
      "XYZ",
      "name",
      "Object is printed"
    ],
    answer: 3,
    explanation: "The entire object is printed for each property."
  },
  {
    q: "Which PHP statement attaches one file to another?",
    options: [
      "include(\"file2.php\")",
      "import(\"file2.php\")",
      "attach(\"file2.php\")",
      "None of the above"
    ],
    answer: 0,
    explanation: "include() inserts another PHP file."
  },
  {
    q: "Which statement about cookies and sessions is correct?",
    options: [
      "Cookies can be disabled but sessions cannot",
      "Sessions are stored on server, cookies on client",
      "Cookies stay until expiry",
      "All of the above"
    ],
    answer: 3,
    explanation: "All statements correctly describe cookies and sessions."
  },
  {
    q: "Which HTML form method is used to send binary data?",
    options: [
      "POST",
      "GET",
      "HTTP",
      "None of the above"
    ],
    answer: 0,
    explanation: "POST supports binary data transmission."
  },
  {
    q: "Which is the correct way to set a cookie with key 'Location' and value 'AA'?",
    options: [
      "setcookie(\"AA\",\"Location\")",
      "setcookie(\"Location\",\"AA\")",
      "setcookie(time()+60,\"Location\",\"AA\")",
      "setcookie(\"Location\",time()+60,\"AA\")"
    ],
    answer: 1,
    explanation: "Correct syntax is setcookie(name, value)."
  },
  {
    q: "Which statement is false?",
    options: [
      "A web browser runs on a server",
      "A user agent renders resources",
      "A website is a collection of resources",
      "A web page is a basic unit of WWW"
    ],
    answer: 0,
    explanation: "Web browsers run on client machines."
  },
  {
    q: "What is information about data called?",
    options: [
      "Hyper data",
      "Metadata",
      "Teradata",
      "Relations"
    ],
    answer: 1,
    explanation: "Metadata describes other data."
  },
  {
    q: "An RDBMS consists of:",
    options: [
      "Records",
      "Tables",
      "Keys",
      "Fields"
    ],
    answer: 1,
    explanation: "Relational databases store data in tables."
  },
  {
    q: "Which language allows inserting, deleting, and updating data?",
    options: [
      "TCL",
      "DCL",
      "DDL",
      "DML"
    ],
    answer: 3,
    explanation: "DML handles data manipulation."
  },
  {
    q: "What happens when data is stored in two places?",
    options: [
      "Storage is wasted and inconsistency occurs",
      "Only inconsistency occurs",
      "Access becomes easier",
      "Only storage is wasted"
    ],
    answer: 0,
    explanation: "Data redundancy causes inconsistency and wastes storage."
  },
  {
    q: "Derived attributes in ER diagrams are represented by:",
    options: [
      "Ellipse",
      "Dashed ellipse",
      "Rectangle",
      "Triangle"
    ],
    answer: 1,
    explanation: "Derived attributes use dashed ellipses."
  },











  

{
  q: "Which OSI layer performs error detection, error correction, and flow control?",
  options: [
    "Application",
    "Transport",
    "Network",
    "Data Link",
    "Physical"
  ],
  answer: 3,
  explanation: "The Data Link layer is responsible for error detection, correction, and flow control."
},
{
  q: "Which OSI layer is responsible for routing?",
  options: [
    "Physical",
    "Data Link",
    "Network",
    "Transport"
  ],
  answer: 2,
  explanation: "The Network layer determines routing paths between hosts."
},
{
  q: "Which MAC protocol is used by IEEE 802.11 WLAN?",
  options: [
    "ALOHA",
    "CSMA/CA",
    "Token Passing",
    "FDMA",
    "CSMA/CD"
  ],
  answer: 1,
  explanation: "Wireless LAN uses CSMA/CA to avoid collisions."
},
{
  q: "Which network device operates on all OSI layers?",
  options: [
    "Hub",
    "Switch",
    "Router",
    "Gateway",
    "Bridge"
  ],
  answer: 3,
  explanation: "A gateway can operate across all OSI layers."
},
{
  q: "Which IP address can be assigned to a LAN host?",
  options: [
    "127.0.0.0",
    "9.0.0.1",
    "192.168.1.256",
    "172.16.1.27",
    "All"
  ],
  answer: 3,
  explanation: "172.16.1.27 is a valid private Class B address."
},
{
  q: "Which linked-list operation can be done in O(1) time with only a start pointer?",
  options: [
    "Insert at front",
    "Insert at end",
    "Delete last node",
    "Traverse list",
    "A and C"
  ],
  answer: 0,
  explanation: "Insertion at the front only updates the head pointer."
},
{
  q: "What is the time complexity of a loop that doubles i each iteration?",
  options: [
    "O(n)",
    "O(n log n)",
    "O(log n)",
    "O(n²)"
  ],
  answer: 2,
  explanation: "The loop runs log₂(n) times."
},
{
  q: "Which data structure best represents a heap?",
  options: [
    "2D array",
    "Doubly linked list",
    "Linear array",
    "Singly linked list"
  ],
  answer: 2,
  explanation: "Heaps are efficiently stored in linear arrays."
},
{
  q: "Linear search is inefficient compared to binary search when dealing with?",
  options: [
    "Small unsorted arrays",
    "Large sorted arrays",
    "Small sorted arrays",
    "Large unsorted arrays"
  ],
  answer: 1,
  explanation: "Binary search works efficiently on large sorted arrays."
},
{
  q: "Which data structure is used in BFS?",
  options: [
    "Stack",
    "Array",
    "Linked List",
    "Queue"
  ],
  answer: 3,
  explanation: "BFS explores nodes level by level using a queue."
},
{
  q: "Which data structure is used in DFS?",
  options: [
    "Stack",
    "Queue",
    "Array",
    "Linked List"
  ],
  answer: 0,
  explanation: "DFS uses a stack (explicitly or via recursion)."
},
{
  q: "Recursion solves a problem by breaking it into?",
  options: [
    "Larger subproblems",
    "Smaller instances of the same problem",
    "Different problems",
    "Independent problems"
  ],
  answer: 1,
  explanation: "Recursion depends on smaller instances of the same problem."
},
{
  q: "What stops a recursive function from infinite calls?",
  options: [
    "Worst case",
    "Best case",
    "Base case",
    "Loop condition"
  ],
  answer: 2,
  explanation: "The base case terminates recursion."
},
{
  q: "Which property allows optimal solutions from optimal subproblems?",
  options: [
    "Overlapping subproblems",
    "Optimal substructure",
    "Memoization",
    "Greedy choice"
  ],
  answer: 1,
  explanation: "Optimal substructure is required for dynamic programming."
},
{
  q: "Which algorithm is used in game-tree decision making?",
  options: [
    "DFS",
    "BFS",
    "Heuristic search",
    "Minimax",
    "Greedy"
  ],
  answer: 3,
  explanation: "Minimax is used for win/lose decisions in game trees."
},



  
{
  q: "Consider a relation R(A,B,C,D) with F={C→D, C→B, B→C}. Which statement is true?",
  options: [
    "The relation R is in second normal form",
    "The relation R is in third normal form",
    "The candidate key for R is BC",
    "The relation R is in second normal form",
    "None"
  ],
  answer: 1,
  explanation: "C is a candidate key and all dependencies are non-transitive, so R is in 3NF."
},
{
  q: "Which schema of the three-schema architecture describes the structure of the whole database?",
  options: ["Internal schema", "Conceptual schema", "External schema", "Schema"],
  answer: 1,
  explanation: "The conceptual schema represents the overall logical structure of the database."
},
{
  q: "Which of the following is a disadvantage of a database approach?",
  options: [
    "Data consistency",
    "Sharing of data",
    "Improved data integrity",
    "Increased concurrency",
    "Enforcement of standards",
    "Complexity",
    "None"
  ],
  answer: 5,
  explanation: "Database systems introduce complexity in design, cost, and management."
},
{
  q: "Which statements are correct about a relation?",
  options: [
    "Values of each column are repeating groups",
    "Values in a column can be from different domains",
    "A relation is in 1NF",
    "Two rows can be identical",
    "Order of rows and columns is insignificant",
    "None"
  ],
  answer: 4,
  explanation: "In relations, row/column order is irrelevant and duplicate rows are not allowed."
},
{
  q: "Which database security measure hides detailed data but allows aggregate access?",
  options: [
    "Inference control",
    "Access control",
    "Integrity control",
    "Encryption",
    "None"
  ],
  answer: 0,
  explanation: "Inference control prevents users from deducing sensitive information."
},
{
  q: "Which query optimization technique modifies the internal representation of a query?",
  options: [
    "Systematic estimation",
    "Semantic query optimization",
    "Cost estimation",
    "Heuristic rules",
    "A and C"
  ],
  answer: 3,
  explanation: "Heuristic rules rewrite queries into more efficient forms."
},
{
  q: "Which statement about locks is NOT true?",
  options: [
    "Large granularity locks are easier to manage",
    "Small granularity locks cause more conflicts",
    "Large granularity locks reduce tracking overhead",
    "Locks can be table-level",
    "Locks can be database-level"
  ],
  answer: 1,
  explanation: "Small granularity locks reduce conflicts but increase overhead."
},
{
  q: "If all operations of a transaction execute consecutively, the schedule is called?",
  options: [
    "Cascaded schedule",
    "Serial schedule",
    "Cascadeless schedule",
    "Recoverable schedule",
    "None"
  ],
  answer: 1,
  explanation: "A serial schedule executes transactions one after another."
},
{
  q: "Which transaction property ensures committed changes persist?",
  options: [
    "Isolation",
    "Durability",
    "Atomicity",
    "Consistency",
    "None"
  ],
  answer: 1,
  explanation: "Durability guarantees data persistence after commit."
},
{
  q: "If a transaction modifies the database only after commit, it uses which technique?",
  options: [
    "Undo",
    "Late-modification",
    "Immediate-modification",
    "Deferred-modification"
  ],
  answer: 3,
  explanation: "Deferred modification delays writes until commit."
},
{
  q: "Which statement is false?",
  options: [
    "Object-oriented DB stores data in tables",
    "Relational DB uses tables",
    "OODB supports object identification",
    "OODB supports reusability",
    "None"
  ],
  answer: 0,
  explanation: "Tables are used in relational, not object-oriented databases."
},
{
  q: "Which diagram models software functionality?",
  options: [
    "Use case diagram",
    "Class diagram",
    "ER diagram",
    "Deployment diagram"
  ],
  answer: 0,
  explanation: "Use case diagrams describe system functionality."
},
{
  q: "Which process model is least suitable for changes?",
  options: ["Waterfall", "Scrum", "RAD", "Agile"],
  answer: 0,
  explanation: "Waterfall is rigid and does not handle changes well."
},
{
  q: "Which SDLC phase aims to find errors?",
  options: ["Requirement analysis", "Design", "Testing", "None"],
  answer: 2,
  explanation: "Testing detects defects in software."
},
{
  q: "Which candidate is best suited to be static?",
  options: [
    "PI field of a circle class",
    "Employee salary display method",
    "Hypotenuse calculation method",
    "Student name field",
    "All except B"
  ],
  answer: 4,
  explanation: "Static members belong to the class, not instances."
},
{
  q: "Which property is required for dynamic polymorphism?",
  options: [
    "Polymorphic variable",
    "Method overriding",
    "Inheritance",
    "All of the above"
  ],
  answer: 3,
  explanation: "Dynamic polymorphism requires all three."
},
{
  q: "In computers, subtraction is generally carried out using?",
  options: [
    "1's complement",
    "2's complement",
    "Signed magnitude",
    "BCD subtraction"
  ],
  answer: 1,
  explanation: "2's complement is efficient for subtraction."
},
{
  q: "Which device bypasses CPU for data transfer?",
  options: [
    "Software interrupt",
    "Interrupt-driven I/O",
    "Polled I/O",
    "DMA"
  ],
  answer: 3,
  explanation: "DMA transfers data directly between memory and devices."
},
{
  q: "Which bus is bidirectional?",
  options: ["Address bus", "Control bus", "Data bus", "None"],
  answer: 2,
  explanation: "Data bus carries data both ways."
},
{
  q: "Which algorithm is used in game trees?",
  options: [
    "DFS",
    "BFS",
    "Heuristic search",
    "Minimax",
    "Greedy"
  ],
  answer: 3,
  explanation: "Minimax evaluates win/lose decisions."
},







{
  q: "What are the values of A, B, C and D after executing the given C++ code?",
  options: ["5, 9, -4, 0", "6, 8, -3, 6", "6, 9, -3, 5", "8, 6, -3, 6"],
  answer: 1,
  explanation: "++A makes A=6, B-- makes B=8 after use, so C=-3 and D=6."
},
{
  q: "What will be the value of count and sum if x = 7.2?",
  options: ["0, 10.2", "10.2, 10.2", "0, 3", "None of the above"],
  answer: 3,
  explanation: "Condition fails, sum stays 3, count becomes 3 → none matches."
},
{
  q: "How many times is 'Hello' printed?",
  options: ["0", "6", "3", "9"],
  answer: 1,
  explanation: "Inner loop runs 6 times total."
},
{
  q: "What does cout << *t print?",
  options: ["Address of x", "3", "7", "None"],
  answer: 1,
  explanation: "*t dereferences pointer t, which points to x=3."
},
{
  q: "What is the output of the struct copy code?",
  options: ["25 25", "25 30", "30 30", "Compilation error", "None"],
  answer: 1,
  explanation: "p2 is a copy; changing p2 does not affect p1."
},
{
  q: "What is the output of the enum loop code?",
  options: ["Month names", "1–12", "12", "13", "None"],
  answer: 3,
  explanation: "mon increments twice per loop, ending at 13."
},
{
  q: "Which function returns the current file output pointer position?",
  options: ["tellg()", "tellp()", "seekg()", "seekp()", "None"],
  answer: 1,
  explanation: "tellp() gives output file pointer position."
},

/* ===================== Database Systems ===================== */
{
  q: "Primary purpose of concurrency control?",
  options: ["Increase speed", "Guarantee serializability", "Reduce redundancy", "Security"],
  answer: 1,
  explanation: "Concurrency control ensures serializability."
},
{
  q: "What is a deadlock?",
  options: ["Transactions wait on each other", "Busy lock", "Rollback conflict", "Commit rollback"],
  answer: 0,
  explanation: "Circular waiting for locks."
},
{
  q: "Which GRANT allows no propagation?",
  options: ["WITH GRANT OPTION", "Normal GRANT", "REVOKE OPTION", "ALLOW OPTION"],
  answer: 1,
  explanation: "Without GRANT OPTION prevents propagation."
},
{
  q: "Correct statement about recovery?",
  options: ["Force simplifies recovery", "No-steal flushes early", "Steal prevents flushing", "No-force lowers I/O"],
  answer: 0,
  explanation: "Force writes data at commit, simplifying recovery."
},
{
  q: "Effect of coarse granularity?",
  options: ["More concurrency", "No locks", "Less concurrency", "No effect"],
  answer: 2,
  explanation: "Larger items reduce concurrency."
},
{
  q: "Lock required for delete?",
  options: ["Shared", "Intention", "Write", "Read"],
  answer: 2,
  explanation: "Delete modifies data → write lock."
},
{
  q: "Which backup copies only changes since last backup?",
  options: ["Full", "Incremental", "Differential", "Snapshot"],
  answer: 1,
  explanation: "Incremental stores changes only."
},
{
  q: "Purpose of recovery?",
  options: ["Speed", "Reduce redundancy", "Security", "Restore consistency"],
  answer: 3,
  explanation: "Recovery restores last consistent state."
},
{
  q: "RBAC principle?",
  options: ["Users get permissions", "Roles get permissions", "Admin assigns per request", "Auto assign"],
  answer: 1,
  explanation: "Permissions are assigned to roles."
},
{
  q: "Contemporaneous principle means?",
  options: ["Recorded at time of action", "Attributable", "Readable", "Original"],
  answer: 0,
  explanation: "Data recorded immediately."
},
{
  q: "If owner revokes privilege?",
  options: ["Remain active", "Automatically revoked", "Transferred", "Read-only"],
  answer: 1,
  explanation: "Cascade revoke occurs."
},
{
  q: "Purpose of savepoints?",
  options: ["Encrypt data", "Rollback point", "Compress data", "Duplicate"],
  answer: 1,
  explanation: "Savepoints allow partial rollback."
},
{
  q: "Unique feature of OODB?",
  options: ["SQL", "Large data", "Objects & classes", "Rows"],
  answer: 2,
  explanation: "Stores objects."
},
{
  q: "Advantage of RDB?",
  options: ["SQL usage", "NoSQL", "Complex types", "Hierarchy"],
  answer: 0,
  explanation: "SQL is simple and standard."
},

/* ===================== OOP ===================== */
{
  q: "Correct 2D array initialization?",
  options: ["Flat list", "Uneven rows with zeros", "Missing commas", "Jagged array"],
  answer: 3,
  explanation: "Jagged arrays allow different row sizes."
},
{
  q: "Good static candidate?",
  options: ["PI field", "Employee salary display", "Hypotenuse calc", "Student name", "All except B"],
  answer: 4,
  explanation: "Statics belong to class, not object."
},
{
  q: "Access modifier rule?",
  options: ["Must be public/private", "Optional, only two", "Optional, many choices", "Depends on return", "All"],
  answer: 2,
  explanation: "Java allows several modifiers or none."
},
{
  q: "Output of inheritance code?",
  options: ["4", "25", "12", "20"],
  answer: 1,
  explanation: "num becomes 25, assigned to num1."
},
{
  q: "Dynamic polymorphism requires?",
  options: ["Variable", "Overriding", "Inheritance", "All"],
  answer: 3,
  explanation: "All are required."
},
{
  q: "Non-abstract child must?",
  options: ["Override abstract", "Different return", "Not define", "Define abstract", "All"],
  answer: 0,
  explanation: "Must implement abstract methods."
},
{
  q: "Correct inheritance rule?",
  options: ["Extend OR implement", "One parent one interface", "One parent many interfaces", "Many parents"],
  answer: 2,
  explanation: "Java allows one class, many interfaces."
},

/* ===================== COA ===================== */
{
  q: "CPU involvement in I/O?",
  options: ["PIO wastes, DMA minimal", "Same time", "Interrupt wastes more", "All same"],
  answer: 0,
  explanation: "DMA reduces CPU involvement."
},
{
  q: "Memory-mapped I/O uses?",
  options: ["Load/store", "Separate space", "Special instr", "Extra pin", "No DMA"],
  answer: 0,
  explanation: "Uses memory instructions."
},
{
  q: "Block transfer without CPU?",
  options: ["Busy wait", "Interrupt", "DMA", "Polling"],
  answer: 2,
  explanation: "DMA transfers directly."
},
{
  q: "RISC vs CISC?",
  options: ["RISC complex", "Same cycles", "Fixed vs variable", "RISC uses microcode"],
  answer: 2,
  explanation: "RISC uses simple fixed-length instructions."
},
{
  q: "Purpose of cache?",
  options: ["Store files", "Printer buffer", "Fast access", "BIOS"],
  answer: 2,
  explanation: "Cache speeds up access."
},
{
  q: "Fetch cycle sequence?",
  options: ["PC→MAR", "PC→IR", "IR→MDR", "MAR→PC"],
  answer: 0,
  explanation: "Correct fetch sequence."
},
{
  q: "ADD R1,R2,R3 means?",
  options: ["R2=R1+R3", "R1=R2+R3", "Memory op", "Stack"],
  answer: 1,
  explanation: "ALU adds R2 and R3 into R1."
},

/* ===================== Networking ===================== */
{
  q: "Hosts in /27 subnet?",
  options: ["14", "15", "30", "62"],
  answer: 2,
  explanation: "32 addresses − 2 = 30."
},
{
  q: "Incorrect physical layer task?",
  options: ["Media interaction", "Logical channels", "Signal creation", "Direction flow", "None"],
  answer: 1,
  explanation: "Logical channels belong to data link layer."
},
{
  q: "Not data link layer task?",
  options: ["Framing", "Flow control", "Channel coding", "Error control", "None"],
  answer: 2,
  explanation: "Channel coding is physical layer."
},
{
  q: "Valid host address?",
  options: ["191.254.0.32", "191.254.1.29", "191.254.1.64", "191.254.0.96"],
  answer: 1,
  explanation: "Valid subnet and host range."
},
{
  q: "Best medium against interference?",
  options: ["UTP", "Optical fiber", "Coaxial", "Microwave", "Copper"],
  answer: 1,
  explanation: "Fiber is immune to EMI."
},





  
{
  q: "Which scheduling algorithm may cause starvation?",
  options: ["FCFS", "Round Robin", "Priority Scheduling", "FIFO"],
  answer: 2,
  explanation: "Priority scheduling may cause starvation if low-priority processes never get CPU time."
},
{
  q: "Which layer of the OSI model is responsible for encryption?",
  options: ["Session layer", "Presentation layer", "Transport layer", "Network layer"],
  answer: 1,
  explanation: "The Presentation layer handles encryption, compression, and translation."
},
{
  q: "Which of the following is NOT a function of the operating system?",
  options: ["Memory management", "Process scheduling", "Compiler design", "File management"],
  answer: 2,
  explanation: "Compiler design is handled by programming tools, not the OS."
},
{
  q: "Which data structure is used in Breadth First Search (BFS)?",
  options: ["Stack", "Queue", "Tree", "Graph"],
  answer: 1,
  explanation: "BFS uses a queue to explore nodes level by level."
},
{
  q: "Which protocol is used to send email?",
  options: ["HTTP", "FTP", "SMTP", "SNMP"],
  answer: 2,
  explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails."
},
{
  q: "Which type of memory is volatile?",
  options: ["ROM", "Hard Disk", "RAM", "Flash memory"],
  answer: 2,
  explanation: "RAM is volatile and loses data when power is turned off."
},
{
  q: "Which normal form removes transitive dependency?",
  options: ["1NF", "2NF", "3NF", "BCNF"],
  answer: 2,
  explanation: "Third Normal Form (3NF) removes transitive dependency."
},
{
  q: "Which algorithm is used to find the shortest path in a graph?",
  options: ["Prim’s algorithm", "Kruskal’s algorithm", "Dijkstra’s algorithm", "DFS"],
  answer: 2,
  explanation: "Dijkstra’s algorithm finds the shortest path from a source node."
},
{
  q: "Which command is used to remove a directory in Linux?",
  options: ["rm", "rmdir", "del", "erase"],
  answer: 1,
  explanation: "The rmdir command removes empty directories in Linux."
},
{
  q: "Which software development model is best suited for large projects with well-defined requirements?",
  options: ["Agile", "Spiral", "Waterfall", "RAD"],
  answer: 2,
  explanation: "The Waterfall model is suitable when requirements are clear and fixed."
},
{
  q: "Which device connects two different networks?",
  options: ["Hub", "Switch", "Router", "Repeater"],
  answer: 2,
  explanation: "A router connects and routes data between different networks."
},
{
  q: "Which key uniquely identifies a record in a database table?",
  options: ["Foreign key", "Candidate key", "Primary key", "Composite key"],
  answer: 2,
  explanation: "A primary key uniquely identifies each record in a table."
},
{
  q: "Which programming paradigm focuses on objects and classes?",
  options: ["Procedural", "Functional", "Object-Oriented", "Logical"],
  answer: 2,
  explanation: "Object-Oriented Programming is based on objects and classes."
},
{
  q: "Which type of attack listens to network traffic?",
  options: ["Phishing", "Sniffing", "Spoofing", "DoS"],
  answer: 1,
  explanation: "Sniffing captures and analyzes network traffic."
},
{
  q: "Which sorting algorithm has the best average-case time complexity?",
  options: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
  answer: 2,
  explanation: "Merge sort has O(n log n) average-case time complexity."
},
{
  q: "Which SQL command is used to remove a table?",
  options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
  answer: 2,
  explanation: "DROP removes the table structure and its data."
},
{
  q: "Which topology uses a central device?",
  options: ["Bus", "Ring", "Star", "Mesh"],
  answer: 2,
  explanation: "Star topology uses a central hub or switch."
},
{
  q: "Which process state comes after running?",
  options: ["Ready", "Waiting", "Terminated", "New"],
  answer: 2,
  explanation: "After execution completes, a process enters the terminated state."
},
{
  q: "Which language is mainly used for system programming?",
  options: ["Java", "Python", "C", "HTML"],
  answer: 2,
  explanation: "C is widely used for system and low-level programming."
},
{
  q: "Which factor affects CPU performance the most?",
  options: ["Clock speed", "Monitor size", "Keyboard type", "Mouse sensitivity"],
  answer: 0,
  explanation: "Higher clock speed allows the CPU to execute instructions faster."
},





  {
  q: "Which addressing mode uses the actual value in the instruction?",
  options: ["Immediate", "Direct", "Indirect", "Register"],
  answer: 0,
  explanation: "Immediate addressing mode contains the actual operand value within the instruction itself."
},
{
  q: "Which component of a computer performs arithmetic and logical operations?",
  options: ["Control Unit", "ALU", "Register", "Cache"],
  answer: 1,
  explanation: "The Arithmetic Logic Unit (ALU) performs arithmetic and logical operations."
},
{
  q: "Which protocol is used for secure web communication?",
  options: ["HTTP", "FTP", "HTTPS", "SMTP"],
  answer: 2,
  explanation: "HTTPS secures HTTP communication using SSL/TLS encryption."
},
{
  q: "Which type of software is an operating system?",
  options: ["Application software", "System software", "Utility software", "Programming software"],
  answer: 1,
  explanation: "An operating system is system software that manages hardware and software resources."
},
{
  q: "Which of the following is a non-relational database?",
  options: ["MySQL", "Oracle", "PostgreSQL", "MongoDB"],
  answer: 3,
  explanation: "MongoDB is a NoSQL (non-relational) database."
},
{
  q: "Which algorithm is used for deadlock avoidance?",
  options: ["Round Robin", "Banker’s algorithm", "FCFS", "Priority scheduling"],
  answer: 1,
  explanation: "Banker’s algorithm avoids deadlock by ensuring safe resource allocation."
},
{
  q: "Which network device operates at the Data Link layer?",
  options: ["Router", "Switch", "Gateway", "Modem"],
  answer: 1,
  explanation: "A switch operates at the Data Link layer (Layer 2) of the OSI model."
},
{
  q: "Which SDLC phase involves coding and unit testing?",
  options: ["Requirement analysis", "Design", "Implementation", "Maintenance"],
  answer: 2,
  explanation: "The implementation phase includes coding and unit testing of the system."
},
{
  q: "Which programming language is primarily used for artificial intelligence?",
  options: ["C", "Python", "HTML", "Assembly"],
  answer: 1,
  explanation: "Python is widely used in AI due to its simplicity and rich libraries."
},
{
  q: "Which type of memory is fastest?",
  options: ["RAM", "Cache", "Hard Disk", "ROM"],
  answer: 1,
  explanation: "Cache memory is the fastest memory, located closest to the CPU."
},
{
  q: "Which key is used to link two tables in a database?",
  options: ["Primary key", "Candidate key", "Foreign key", "Composite key"],
  answer: 2,
  explanation: "A foreign key links records between two database tables."
},
{
  q: "Which OS concept allows multiple programs to run simultaneously?",
  options: ["Multithreading", "Multiprogramming", "Batch processing", "Spooling"],
  answer: 1,
  explanation: "Multiprogramming allows multiple programs to reside in memory and execute concurrently."
},
{
  q: "Which data structure follows LIFO principle?",
  options: ["Queue", "Array", "Stack", "Linked list"],
  answer: 2,
  explanation: "Stack follows the Last In, First Out (LIFO) principle."
},
{
  q: "Which software testing ensures the system meets user requirements?",
  options: ["Unit testing", "Integration testing", "System testing", "Acceptance testing"],
  answer: 3,
  explanation: "Acceptance testing verifies the system meets user requirements."
},
{
  q: "Which command is used to view IP configuration in Windows?",
  options: ["ping", "ifconfig", "ipconfig", "netstat"],
  answer: 2,
  explanation: "The ipconfig command displays IP configuration in Windows."
}




  

  ],










  


  
"Arbaminch":[

  
{
  q: "Which type of attack tricks users into revealing sensitive information via fake websites or emails?",
  options: ["Phishing", "DDoS", "MITM", "Trojan"],
  answer: 0,
  explanation: "Phishing attacks deceive users into providing confidential information, often through fake emails or websites."
},
{
  q: "What does SSL/TLS provide in network communication?",
  options: ["Encryption and secure data transfer", "IP assignment", "Firewall protection", "Virus scanning"],
  answer: 0,
  explanation: "SSL/TLS encrypts data in transit to ensure confidentiality and integrity between client and server."
},
{
  q: "Which type of malware encrypts a user's files and demands payment for decryption?",
  options: ["Ransomware", "Spyware", "Virus", "Worm"],
  answer: 0,
  explanation: "Ransomware locks or encrypts files and demands a ransom for restoring access."
},
{
  q: "What is the purpose of multi-factor authentication (MFA)?",
  options: ["To require multiple methods of identity verification", "To encrypt all data", "To prevent viruses", "To monitor network traffic"],
  answer: 0,
  explanation: "MFA increases security by requiring two or more verification factors, such as a password and OTP."
},
{
  q: "Which protocol is used to securely transfer files over a network using encryption?",
  options: ["SFTP", "FTP", "HTTP", "SMTP"],
  answer: 0,
  explanation: "SFTP (Secure File Transfer Protocol) encrypts file transfers, unlike FTP which is unencrypted."
},
{
  q: "What type of attack exploits vulnerabilities in web applications by injecting malicious SQL statements?",
  options: ["SQL injection", "XSS", "MITM", "Brute-force"],
  answer: 0,
  explanation: "SQL injection allows attackers to manipulate databases by injecting harmful SQL queries."
},
{
  q: "Which layer of network security is responsible for protecting data in transit?",
  options: ["Application layer", "Network layer", "Physical layer", "Data link layer"],
  answer: 1,
  explanation: "The network layer protects data during transmission, often using protocols like IPsec for encryption."
},
{
  q: "What is the main purpose of antivirus software?",
  options: ["Detect and remove malicious software", "Assign IP addresses", "Encrypt data", "Monitor network traffic"],
  answer: 0,
  explanation: "Antivirus software scans for, detects, and removes malware to protect systems."
},
{
  q: "Which term refers to ensuring data is only accessible by authorized users?",
  options: ["Integrity", "Confidentiality", "Availability", "Authentication"],
  answer: 1,
  explanation: "Confidentiality ensures sensitive information is accessed only by authorized individuals."
},
{
  q: "What is social engineering in cybersecurity?",
  options: ["Manipulating people to gain confidential information", "Encrypting data", "Scanning for vulnerabilities", "Blocking network traffic"],
  answer: 0,
  explanation: "Social engineering exploits human psychology rather than technical weaknesses to gain sensitive information."
},
{
  q: "Which network device filters traffic based on rules to protect the network?",
  options: ["Router", "Switch", "Firewall", "Hub"],
  answer: 2,
  explanation: "A firewall monitors and filters network traffic according to security policies."
},
{
  q: "Which type of malware spreads automatically without user intervention?",
  options: ["Worm", "Trojan", "Virus", "Spyware"],
  answer: 0,
  explanation: "A worm can replicate and spread across networks without requiring user action."
},
{
  q: "What is the primary goal of penetration testing?",
  options: ["Identify vulnerabilities before attackers do", "Encrypt network traffic", "Install antivirus", "Monitor user activity"],
  answer: 0,
  explanation: "Penetration testing simulates attacks to find and fix security weaknesses proactively."
},
{
  q: "Which security mechanism ensures non-repudiation of digital communication?",
  options: ["Encryption", "Digital signature", "Firewall", "Authentication"],
  answer: 1,
  explanation: "Digital signatures provide non-repudiation by verifying the sender and preventing denial of sending."
},
{
  q: "Which type of attack involves overwhelming a network with traffic from multiple sources?",
  options: ["DDoS", "Phishing", "MITM", "Brute-force"],
  answer: 0,
  explanation: "Distributed Denial-of-Service (DDoS) attacks use multiple systems to flood a target network, causing disruption."
},
{
  q: "Which of the following is a common method of securing wireless networks?",
  options: ["WEP", "WPA2", "FTP", "HTTP"],
  answer: 1,
  explanation: "WPA2 is a strong encryption protocol used to secure Wi-Fi networks."
},
{
  q: "What is the purpose of a honeypot in network security?",
  options: ["Attract and study attackers", "Encrypt data", "Assign IP addresses", "Block viruses"],
  answer: 0,
  explanation: "A honeypot is a decoy system designed to lure attackers and study their techniques."
},
{
  q: "Which attack involves modifying data in transit between two communicating parties?",
  options: ["MITM", "Phishing", "DDoS", "SQL injection"],
  answer: 0,
  explanation: "Man-in-the-middle attacks intercept and potentially alter communications between parties."
},
{
  q: "Which of the following is a preventive security measure?",
  options: ["Firewall", "Log analysis", "Intrusion detection", "Incident response"],
  answer: 0,
  explanation: "Firewalls prevent unauthorized access by filtering network traffic before it reaches the system."
},
{
  q: "What is the primary purpose of encryption?",
  options: ["Protect data confidentiality", "Assign IP addresses", "Monitor network", "Verify identity"],
  answer: 0,
  explanation: "Encryption converts data into unreadable form to protect confidentiality from unauthorized access."
},
{
  q: "Which type of malware records user activities without their knowledge?",
  options: ["Spyware", "Ransomware", "Trojan", "Worm"],
  answer: 0,
  explanation: "Spyware secretly monitors user activity to collect information."
},
{
  q: "Which cybersecurity practice involves regularly updating software to fix vulnerabilities?",
  options: ["Patch management", "Encryption", "Penetration testing", "Network monitoring"],
  answer: 0,
  explanation: "Patch management ensures software vulnerabilities are fixed by applying updates."
},
{
  q: "Which security principle ensures that authorized users can access systems when needed?",
  options: ["Integrity", "Confidentiality", "Availability", "Authentication"],
  answer: 2,
  explanation: "Availability ensures that systems and data are accessible to authorized users when required."
},
{
  q: "Which protocol is used to securely browse websites?",
  options: ["HTTP", "HTTPS", "FTP", "SMTP"],
  answer: 1,
  explanation: "HTTPS encrypts web traffic using SSL/TLS, providing secure browsing."
},
{
  q: "Which type of malware can replicate by attaching itself to other programs?",
  options: ["Virus", "Worm", "Trojan", "Spyware"],
  answer: 0,
  explanation: "A virus requires a host program to spread and execute malicious actions."
},
{
  q: "Which security method verifies the identity of a user before granting access?",
  options: ["Encryption", "Authentication", "Authorization", "Hashing"],
  answer: 1,
  explanation: "Authentication verifies user identity before access is granted."
},
{
  q: "Which type of attack injects malicious scripts into web pages to target users?",
  options: ["XSS", "SQL injection", "DDoS", "Phishing"],
  answer: 0,
  explanation: "Cross-site scripting (XSS) allows attackers to run malicious scripts in users’ browsers."
},
{
  q: "What is the purpose of hashing in cybersecurity?",
  options: ["Verify data integrity", "Encrypt data", "Authenticate users", "Assign IP addresses"],
  answer: 0,
  explanation: "Hashing creates a fixed-length value to verify data integrity, detecting changes."
},
{
  q: "Which security control involves monitoring and logging system activity to detect threats?",
  options: ["Preventive", "Detective", "Corrective", "Physical"],
  answer: 1,
  explanation: "Detective controls, such as logs and intrusion detection systems, help identify potential security incidents."
},
{
  q: "Which type of attack uses repeated attempts to guess passwords?",
  options: ["Brute-force", "MITM", "DDoS", "SQL injection"],
  answer: 0,
  explanation: "Brute-force attacks systematically try all possible passwords to gain unauthorized access."
},
{
  q: "Which principle ensures that data cannot be repudiated after sending or receiving?",
  options: ["Authentication", "Authorization", "Non-repudiation", "Confidentiality"],
  answer: 2,
  explanation: "Non-repudiation prevents parties from denying their involvement in digital communications."
},
{
  q: "Which of the following is a form of physical security?",
  options: ["Locked doors", "Firewall", "Encryption", "Access control lists"],
  answer: 0,
  explanation: "Physical security protects systems by controlling physical access, such as locked doors or security guards."
},



  
{
  q: "Which authentication method uses something the user knows?",
  options: ["Biometric", "Password", "Token", "Smart card"],
  answer: 1,
  explanation: "Password authentication relies on something the user knows to verify identity."
},
{
  q: "What type of attack floods a network or server with excessive requests to make it unavailable?",
  options: ["DoS attack", "Phishing attack", "Man-in-the-middle attack", "SQL injection"],
  answer: 0,
  explanation: "A Denial-of-Service (DoS) attack overwhelms a system to prevent legitimate access."
},
{
  q: "Which encryption method uses a pair of public and private keys?",
  options: ["AES", "RSA", "MD5", "DES"],
  answer: 1,
  explanation: "RSA is an asymmetric encryption algorithm using a public and private key pair."
},
{
  q: "Which security principle ensures that data is not altered or tampered with?",
  options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
  answer: 1,
  explanation: "Integrity ensures that data remains accurate and unmodified during storage or transmission."
},
{
  q: "Which type of malware pretends to be legitimate software but performs malicious actions?",
  options: ["Virus", "Trojan", "Worm", "Spyware"],
  answer: 1,
  explanation: "A Trojan disguises itself as legitimate software to trick users while performing malicious actions."
},
{
  q: "What is the purpose of a VPN?",
  options: ["To provide a secure connection over the internet", "To assign IP addresses", "To detect malware", "To monitor network traffic"],
  answer: 0,
  explanation: "A VPN (Virtual Private Network) encrypts traffic to provide secure communication over an untrusted network."
},
{
  q: "Which attack allows an attacker to intercept and possibly modify communication between two parties?",
  options: ["Man-in-the-middle attack", "Phishing", "Brute-force attack", "SQL injection"],
  answer: 0,
  explanation: "A man-in-the-middle (MITM) attack intercepts communication, potentially modifying or eavesdropping on data."
},
{
  q: "Which type of malware can record keystrokes to steal sensitive information?",
  options: ["Keylogger", "Ransomware", "Spyware", "Rootkit"],
  answer: 0,
  explanation: "Keyloggers monitor and record keystrokes to capture sensitive information like passwords."
},
{
  q: "Which security concept ensures that only authorized users can access certain resources?",
  options: ["Authentication", "Authorization", "Encryption", "Non-repudiation"],
  answer: 1,
  explanation: "Authorization defines what actions or resources a verified user is allowed to access."
},
{
  q: "Which hashing algorithm is commonly used to verify data integrity?",
  options: ["SHA-256", "AES", "RSA", "DES"],
  answer: 0,
  explanation: "SHA-256 is a cryptographic hash function used to verify data integrity by producing a unique hash."
},




  
{
  q: "Which type of malware can spread automatically without user intervention?",
  options: ["Worm", "Trojan", "Virus", "Adware"],
  answer: 0,
  explanation: "A worm is a self-replicating malware that spreads without needing to attach to files or user action."
},
{
  q: "Which security mechanism ensures that a user is who they claim to be?",
  options: ["Authentication", "Authorization", "Encryption", "Hashing"],
  answer: 0,
  explanation: "Authentication verifies the identity of a user before granting access to resources."
},
{
  q: "What is the main purpose of a firewall?",
  options: ["To prevent unauthorized access to or from a network", "To encrypt files", "To assign IP addresses", "To perform hashing"],
  answer: 0,
  explanation: "A firewall monitors and controls incoming and outgoing network traffic based on security rules."
},
{
  q: "Which attack involves tricking users into revealing sensitive information by pretending to be a trustworthy entity?",
  options: ["Phishing", "SQL Injection", "Brute-force attack", "Man-in-the-middle attack"],
  answer: 0,
  explanation: "Phishing attacks deceive users into giving sensitive information like passwords or credit card numbers."
},
{
  q: "Which of the following is a symmetric encryption algorithm?",
  options: ["AES", "RSA", "DSA", "Diffie-Hellman"],
  answer: 0,
  explanation: "AES (Advanced Encryption Standard) is a symmetric encryption algorithm that uses the same key for encryption and decryption."
},
{
  q: "Which type of attack exploits a website’s trust in a user’s browser?",
  options: ["SQL Injection", "Cross-site scripting (XSS)", "Buffer overflow", "DoS attack"],
  answer: 1,
  explanation: "XSS attacks inject malicious scripts into web pages viewed by other users, exploiting the website’s trust in the client."
},
{
  q: "Which protocol is commonly used to securely transfer files over the internet?",
  options: ["FTP", "SFTP", "HTTP", "Telnet"],
  answer: 1,
  explanation: "SFTP (Secure File Transfer Protocol) encrypts the data during transfer, unlike plain FTP."
},
{
  q: "What is the main purpose of intrusion detection systems (IDS)?",
  options: ["To encrypt data", "To detect unauthorized or suspicious activity", "To assign IP addresses", "To manage network hardware"],
  answer: 1,
  explanation: "IDS monitors network or system activities to detect malicious activities or policy violations."
},
{
  q: "Which type of malware hides its presence and activities from users and security software?",
  options: ["Rootkit", "Trojan", "Virus", "Adware"],
  answer: 0,
  explanation: "Rootkits are designed to hide their presence, giving attackers control over the system without detection."
},
{
  q: "Which of the following is NOT a goal of computer security?",
  options: ["Confidentiality", "Integrity", "Availability", "Replication"],
  answer: 3,
  explanation: "Replication is related to data storage or distributed systems, not a primary goal of computer security."
},





  
{
  q: "Which of the following is a type of malware that replicates itself to spread to other computers?",
  options: ["Virus", "Firewall", "VPN", "Encryption"],
  answer: 0,
  explanation: "A virus is malware that replicates itself and spreads to other computers, often damaging files or systems."
},
{
  q: "What is the main purpose of a VPN (Virtual Private Network)?",
  options: ["To prevent malware infection", "To encrypt data and provide secure remote access", "To assign IP addresses", "To monitor network traffic"],
  answer: 1,
  explanation: "A VPN encrypts data and provides secure remote access over the internet."
},
{
  q: "Which of the following is a common method to prevent SQL injection attacks?",
  options: ["Using parameterized queries", "Using weak passwords", "Disabling encryption", "Installing antivirus software"],
  answer: 0,
  explanation: "Parameterized queries ensure user input is treated as data, preventing SQL injection attacks."
},
{
  q: "Which type of attack intercepts communication between two parties without their knowledge?",
  options: ["Phishing attack", "Man-in-the-middle attack", "Brute-force attack", "Denial-of-Service attack"],
  answer: 1,
  explanation: "A man-in-the-middle (MITM) attack intercepts and possibly alters communication between two parties."
},
{
  q: "What is the purpose of hashing in computer security?",
  options: ["To encrypt data for secure transmission", "To convert data into a fixed-length value for integrity checking", "To hide data in images", "To assign IP addresses dynamically"],
  answer: 1,
  explanation: "Hashing converts data into a fixed-length value to check data integrity, detect tampering, or store passwords securely."
},
{
  q: "Which security principle ensures that data is not altered or tampered with by unauthorized users?",
  options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
  answer: 1,
  explanation: "Integrity ensures that data remains accurate and unaltered by unauthorized parties."
},
{
  q: "Which type of attack overwhelms a system with excessive requests to make it unavailable?",
  options: ["Phishing", "Denial-of-Service (DoS)", "SQL Injection", "XSS"],
  answer: 1,
  explanation: "A DoS attack floods a system with requests, causing service disruption or unavailability."
},
{
  q: "Which security measure restricts access to resources based on user identity and permissions?",
  options: ["Encryption", "Access control", "Input validation", "Firewall"],
  answer: 1,
  explanation: "Access control restricts resources based on user identity and defined permissions."
},
{
  q: "What is the process of converting ciphertext back into plaintext called?",
  options: ["Encryption", "Decryption", "Hashing", "Steganography"],
  answer: 1,
  explanation: "Decryption converts unreadable ciphertext back into readable plaintext using a key."
},
{
  q: "Which type of malware disguises itself as legitimate software to trick users into installing it?",
  options: ["Trojan", "Worm", "Virus", "Rootkit"],
  answer: 0,
  explanation: "A Trojan appears as legitimate software but contains malicious code that can damage systems or steal data."
},





  
{
  q: "Which layer of the OSI reference model is responsible for establishing and terminating sessions between applications?",
  options: ["Presentation layer", "Session layer", "Transport layer", "Application layer"],
  answer: 1,
  explanation: "The session layer is responsible for establishing and terminating sessions between applications. It manages the dialogue and coordination between applications and provides synchronization and recovery mechanisms."
},
{
  q: "Which protocol is used for transferring files between computers over a network?",
  options: ["SMTP", "HTTP", "FTP", "TCP"],
  answer: 2,
  explanation: "FTP is a protocol used for transferring files between computers over a network. It provides functions for file upload, download, and directory listing."
},
{
  q: "Which layer of the OSI reference model is responsible for providing services directly to the end-user applications?",
  options: ["Presentation layer", "Session layer", "Transport layer", "Application layer"],
  answer: 3,
  explanation: "The application layer is the topmost layer of the OSI reference model. It provides services directly to end-user applications, such as email, web browsing, and file transfer."
},
{
  q: "Which subnet mask represents a Class C network?",
  options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
  answer: 2,
  explanation: "A Class C network uses a subnet mask of 255.255.255.0, allowing for 254 host addresses."
},
{
  q: "What is the maximum number of hosts in a subnet with a subnet mask of 255.255.255.224?",
  options: ["8", "16", "30", "62"],
  answer: 2,
  explanation: "With a subnet mask of 255.255.255.224, there are 5 host bits. Number of hosts = 2^5 - 2 = 30 usable hosts."
},
{
  q: "Which IP address belongs to the loopback network?",
  options: ["127.0.0.1", "192.168.0.1", "10.0.0.1", "172.16.0.1"],
  answer: 0,
  explanation: "The loopback network is represented by the IP address range 127.0.0.0/8, used for testing network connectivity on the local machine."
},
{
  q: "How many subnets can be created from a Class B network with a subnet mask of 255.255.240.0?",
  options: ["8", "16", "32", "64"],
  answer: 1,
  explanation: "With 4 subnet bits, the number of subnets = 2^4 = 16."
},
{
  q: "What is the default subnet mask for a Class A network?",
  options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
  answer: 0,
  explanation: "A Class A network uses a default subnet mask of 255.0.0.0."
},
{
  q: "Which subnet mask is used for a point-to-point link?",
  options: ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.252"],
  answer: 3,
  explanation: "A point-to-point link only requires 2 usable IP addresses; a mask of 255.255.255.252 provides 2 hosts."
},
{
  q: "How many bits are in the host portion of an IPv4 address with a subnet mask of 255.255.255.192?",
  options: ["6", "8", "10", "14"],
  answer: 0,
  explanation: "With 255.255.255.192, there are 6 host bits, representing 2^6 - 2 = 62 usable hosts."
},
{
  q: "What is the network address for the IP address 192.168.10.25/28?",
  options: ["192.168.10.0", "192.168.10.16", "192.168.10.24", "192.168.10.25"],
  answer: 0,
  explanation: "A /28 subnet mask (255.255.255.240) gives a network address of 192.168.10.0."
},
{
  q: "How many usable host addresses are available in a subnet with a subnet mask of 255.255.255.224?",
  options: ["6", "14", "30", "62"],
  answer: 2,
  explanation: "Subnet mask 255.255.255.224 provides 5 host bits; usable hosts = 2^5 - 2 = 30."
},
{
  q: "Which type of IP address is used for communication within a local network?",
  options: ["Public IP address", "Private IP address", "Reserved IP address", "Dynamic IP address"],
  answer: 1,
  explanation: "Private IP addresses are used for communication within a local network and are not routable over the Internet."
},
{
  q: "Which of the following is not a valid IP address?",
  options: ["192.168.0.1", "10.0.0.256", "172.16.0.0", "255.255.255.0"],
  answer: 1,
  explanation: "Each octet must be in the range 0–255; 10.0.0.256 is invalid."
},
{
  q: "What is the default subnet mask for a Class B IP address?",
  options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
  answer: 1,
  explanation: "Class B uses 255.255.0.0 as the default subnet mask."
},
{
  q: "How many bits are used for the host portion of an IP address with a subnet mask of 255.255.255.0?",
  options: ["8 bits", "16 bits", "24 bits", "32 bits"],
  answer: 0,
  explanation: "Subnet mask 255.255.255.0 leaves 8 bits for hosts."
},
{
  q: "Given a subnet mask of 255.255.255.224, how many host addresses are available in each subnet?",
  options: ["6", "14", "30", "62"],
  answer: 2,
  explanation: "Subnet mask 255.255.255.224 has 5 host bits; usable hosts = 2^5 - 2 = 30."
},
{
  q: "What is the network address for the IP address 192.168.1.65/26?",
  options: ["192.168.1.0", "192.168.1.64", "192.168.1.65", "192.168.1.128"],
  answer: 1,
  explanation: "With a /26 subnet mask (255.255.255.192), the network address is 192.168.1.64."
},
{
  q: "How many subnets can be created from a Class C network with a subnet mask of 255.255.255.192?",
  options: ["2", "4", "8", "16"],
  answer: 2,
  explanation: "Subnet mask 255.255.255.192 provides 2 subnet bits; number of subnets = 2^2 = 4."
},
{
  q: "What is the maximum number of IP addresses that can be assigned to hosts in a subnet with a /27 subnet mask?",
  options: ["14", "30", "62", "126"],
  answer: 1,
  explanation: "/27 provides 5 host bits; usable hosts = 2^5 - 2 = 30."
},
{
  q: "Which IP address range is reserved for Automatic Private IP Addressing (APIPA)?",
  options: ["10.0.0.0 - 10.255.255.255", "127.0.0.0 - 127.255.255.255", "169.254.0.0 - 169.254.255.255", "192.168.0.0 - 192.168.255.255"],
  answer: 2,
  explanation: "APIPA assigns IPs automatically when DHCP fails; range is 169.254.0.0 - 169.254.255.255."
},
{
  q: "What is the purpose of Network Address Translation (NAT) in computer networking?",
  options: ["To encrypt network traffic for secure communication", "To assign unique IP addresses to hosts", "To provide a firewall for network security", "To translate private IP addresses to public IP addresses"],
  answer: 3,
  explanation: "NAT translates private IP addresses to public IP addresses, allowing multiple devices to share a single public IP."
},
{
  q: "Which of the following protocols is responsible for assigning IP addresses to hosts dynamically?",
  options: ["DNS", "DHCP", "HTTP", "FTP"],
  answer: 1,
  explanation: "DHCP dynamically assigns IP addresses and other network parameters to hosts."
},
{
  q: "What is the primary goal of computer security?",
  options: ["Confidentiality", "Integrity", "Availability", "All of the above"],
  answer: 3,
  explanation: "Computer security aims to ensure confidentiality, integrity, and availability (CIA) of systems and data."
},
{
  q: "What is the term used for a software program that attempts to gain unauthorized access to computer systems?",
  options: ["Firewall", "Malware", "Encryption", "VPN"],
  answer: 1,
  explanation: "Malware is malicious software designed to disrupt, damage, or gain unauthorized access to systems."
},
{
  q: "What is the practice of hiding confidential data within other data called?",
  options: ["Encryption", "Decryption", "Steganography", "Intrusion detection"],
  answer: 2,
  explanation: "Steganography conceals information within other non-secret data, e.g., hiding text in images."
},
{
  q: "Which of the following authentication methods verifies a user's identity based on a unique physical characteristic?",
  options: ["Password authentication", "Biometric authentication", "Token authentication", "Two-factor authentication"],
  answer: 1,
  explanation: "Biometric authentication uses unique physical traits like fingerprints or iris scans."
},
{
  q: "What is the process of converting plaintext into ciphertext called?",
  options: ["Encryption", "Decryption", "Hashing", "Key exchange"],
  answer: 0,
  explanation: "Encryption converts readable plaintext into unreadable ciphertext using algorithms and keys."
},
{
  q: "What is the term for a software vulnerability that allows an attacker to execute arbitrary code on a target system?",
  options: ["Phishing", "Buffer overflow", "SQL injection", "Cross-site scripting"],
  answer: 1,
  explanation: "Buffer overflow vulnerabilities allow attackers to overwrite memory and execute arbitrary code."
},
{
  q: "Which of the following is an example of a social engineering attack?",
  options: ["Denial-of-Service (DoS) attack", "Distributed Denial-of-Service (DDoS) attack", "Phishing attack", "Brute-force attack"],
  answer: 2,
  explanation: "Phishing tricks users into revealing sensitive info, such as passwords, via deceptive emails or sites."
},
{
  q: "What is the purpose of a firewall in computer security?",
  options: ["To encrypt network traffic", "To monitor and control network traffic", "To detect and remove malware", "To authenticate users"],
  answer: 1,
  explanation: "A firewall monitors and controls incoming/outgoing network traffic based on security rules."
},
{
  q: "Which of the following is a common authentication factor used in two-factor authentication?",
  options: ["Username", "Password", "Security question", "One-time password (OTP)"],
  answer: 3,
  explanation: "Two-factor authentication combines two factors, often a password and a one-time password (OTP)."
},
{
  q: "What is the term for a malicious activity where an attacker tries all possible combinations of passwords to gain unauthorized access?",
  options: ["Brute-force attack", "Denial-of-Service (DoS) attack", "SQL injection", "Man-in-the-middle (MITM) attack"],
  answer: 0,
  explanation: "Brute-force attacks systematically attempt all possible password combinations to gain access."
},
{
  q: "What is a buffer overflow vulnerability?",
  options: ["A vulnerability that allows unauthorized access to a system's memory", "A vulnerability that allows attackers to intercept network traffic", "A vulnerability that allows attackers to execute arbitrary code", "A vulnerability that allows unauthorized access to a system's files"],
  answer: 2,
  explanation: "Buffer overflows occur when data exceeds allocated memory, allowing attackers to execute code."
},
{
  q: "What is SQL injection?",
  options: ["A vulnerability that allows attackers to intercept network traffic", "A vulnerability that allows attackers to execute arbitrary code", "A vulnerability that allows unauthorized access to a system's memory", "A vulnerability that allows unauthorized access to a database"],
  answer: 3,
  explanation: "SQL injection allows attackers to inject malicious SQL into queries to manipulate or access the database."
},
{
  q: "What is cross-site scripting (XSS)?",
  options: ["A vulnerability that allows unauthorized access to a system's memory", "A vulnerability that allows attackers to execute arbitrary code", "A vulnerability that allows attackers to manipulate web page content", "A vulnerability that allows unauthorized access to a database"],
  answer: 2,
  explanation: "XSS allows attackers to inject malicious scripts into web pages to manipulate content or steal info."
},
{
  q: "What is the purpose of input validation in program security?",
  options: ["To ensure the confidentiality of data", "To prevent unauthorized access to a system", "To detect and block malicious input", "To encrypt sensitive data during transmission"],
  answer: 2,
  explanation: "Input validation checks user input against criteria to prevent execution of malicious commands."
},
{
  q: "What is the role of secure coding practices in program security?",
  options: ["To prevent code duplication and improve program efficiency", "To ensure compliance with industry standards and regulations", "To minimize the number of bugs and vulnerabilities in code", "To facilitate code collaboration among developers"],
  answer: 2,
  explanation: "Secure coding reduces vulnerabilities by following standards, defensive coding, and best practices."
},
{
  q: "What is the purpose of access control mechanisms in program security?",
  options: ["To prevent unauthorized access to sensitive resources", "To monitor and log system activities for auditing purposes", "To encrypt data during storage and transmission", "To protect against malware and viruses"],
  answer: 0,
  explanation: "Access control mechanisms prevent unauthorized users from accessing sensitive resources."
},








  

  {
    q: "Which one of the following is asynchronous in message communication?",
    options: ["Blocking receive", "Blocking send", "Direct message", "Non-block receive"],
    answer: 3,
    explanation: "Non-blocking receive allows the process to continue without waiting, making it asynchronous."
  },
  {
    q: "What is the purpose of an opcode in an instruction?",
    options: ["It determines the operation to be done", "It holds the next instruction reference", "It holds the destination address of an operand", "It holds the source address of an operand"],
    answer: 0,
    explanation: "Opcode specifies which operation the CPU should perform."
  },
  {
    q: "Which layer uses port number to identify applications?",
    options: ["Transport layer", "Application layer", "Network layer", "Physical layer"],
    answer: 0,
    explanation: "Port numbers are used at the transport layer to identify processes or applications."
  },
  {
    q: "Which asymptotic notation describes average case analysis?",
    options: ["Big-O", "Theta (Θ)", "Big-Omega (Ω)", "Little Omega (ω)"],
    answer: 1,
    explanation: "Theta notation (Θ) represents both upper and lower bounds, often used for average case."
  },
  {
    q: "At which layer of the OSI model are devices such as bridges, switches, and NICs used?",
    options: ["Physical layer", "Network layer", "Data link layer", "Application layer"],
    answer: 2,
    explanation: "Bridges, switches, and NICs operate at the data link layer for frame-level communication."
  },
  {
    q: "A computer expert wants to know the number of processes completed per hour. Which metric is this?",
    options: ["Turnaround time", "System throughput", "Waiting time", "Response time"],
    answer: 1,
    explanation: "System throughput measures the number of processes completed in a given period."
  },
  {
    q: "What will be the output of the JavaScript statement Math.sqrt(36)?",
    options: ["6", "3", "36", "1"],
    answer: 0,
    explanation: "The square root of 36 is 6."
  },
  {
    q: "Which is correct about human role in system administration?",
    options: ["Ethics is not required", "Organizational skills not needed", "Requires patience, understanding, and knowledge", "Skills and confidence not expected"],
    answer: 2,
    explanation: "System administration requires technical knowledge, patience, and organizational skills."
  },
  {
    q: "Which is valid regarding PHP variables?",
    options: ["$test = \"This is 'Computer science'\";", "test = 5;", "$test = 9.5", "$test = \"Computer;"],
    answer: 0,
    explanation: "PHP variables start with $ and can store strings correctly enclosed in quotes."
  },
  {
    q: "Which is NOT correct about POP3 and SMTP?",
    options: ["Both are application layer protocols", "A sender can send email using SMTP", "A sender can receive emails using POP3", "Both are network layer protocols"],
    answer: 3,
    explanation: "POP3 and SMTP operate at the application layer, not network layer."
  },
  {
    q: "A problem occurs when a transaction updates a database item, fails, and another transaction accesses it before restoration. What is this?",
    options: ["Lost update problem", "Incorrect summary problem", "Dirty read", "Temporary read problem"],
    answer: 2,
    explanation: "Dirty read happens when a transaction reads uncommitted changes from another transaction."
  },
  {
    q: "Which quantifier can be used for some portion of the universe?",
    options: ["→", "∃", "∧", "∀"],
    answer: 1,
    explanation: "The existential quantifier ∃ indicates that 'there exists' at least one element."
  },
  {
    q: "Output of Math.floor(5.9) in JavaScript?",
    options: ["9", "5", "11.8", "6"],
    answer: 1,
    explanation: "Math.floor() rounds a number down to the nearest integer."
  },
  {
    q: "Attackers motivated by financial gain and performing sabotage/IP theft are called:",
    options: ["Stealer", "Competitor", "Activist", "Hacktivist"],
    answer: 1,
    explanation: "Competitors may attack rivals for financial advantage or theft of secrets."
  },
  {
    q: "_____ is the whole thing that an agent has observed concerning the environment.",
    options: ["Performance measure", "Knowledge", "Action", "Perception"],
    answer: 3,
    explanation: "Perception is the information an agent obtains from the environment."
  },
  {
    q: "Which phase comes before semantic analysis in compiling?",
    options: ["Syntax analysis", "Code optimization", "Code generation", "Intermediate code generation"],
    answer: 0,
    explanation: "Syntax analysis (parsing) occurs before semantic analysis."
  },
  {
    q: "False statement about universal hashing technique:",
    options: ["Single fixed hash function is better than universal hashing for collisions", "Universal hashing reduces chance of collision", "Hash function selected independently of keys", "Hash function selected randomly for each key"],
    answer: 0,
    explanation: "Using a single fixed hash function is more prone to collisions than universal hashing."
  },
  {
    q: "True about functions in JavaScript:",
    options: ["Function names can contain spaces", "Function names can begin with digits", "Function names are not case-sensitive", "No limit to number of function parameters"],
    answer: 3,
    explanation: "JavaScript functions can have any number of parameters; names cannot contain spaces or start with digits."
  },
  {
    q: "Phase of software development that refers to modifying software for changing requirements:",
    options: ["Validation", "Development", "Specification", "Evolution"],
    answer: 3,
    explanation: "Software evolution modifies existing software to meet new requirements."
  },
  {
    q: "True about pop() operation in Stack:",
    options: ["Inserts new element at bottom", "Removes end/top element", "Returns top element without deleting", "Inserts at middle"],
    answer: 1,
    explanation: "pop() removes and returns the element at the top of the stack."
  },
  {
    q: "False about programming language generations:",
    options: ["Assembly language is machine independent", "Assembly needs translation to machine code", "Machine language can execute without translation", "Fifth generation languages need very powerful hardware"],
    answer: 0,
    explanation: "Assembly language is machine dependent, not independent."
  },
  {
    q: "Responsible for shielding machines from attacks:",
    options: ["Switch", "Firewall", "Router", "Network OS"],
    answer: 1,
    explanation: "Firewalls block unauthorized access and protect networked machines."
  },
  {
    q: "Two-level cache with internal and external caches:",
    options: ["Multilevel cache", "Single-level cache", "Unified cache", "Split cache"],
    answer: 0,
    explanation: "Multilevel cache uses L1 (internal) and L2 (external) caches."
  },
  {
    q: "Patients in a clinic with seriously sick first – which data structure?",
    options: ["Stack", "Priority Queue", "Queue", "Tree"],
    answer: 1,
    explanation: "Priority queues allow higher-priority elements to be processed first."
  },
  {
    q: "False about computer architecture and organization:",
    options: ["Organization lasts as long as architecture", "Architecture can be used across different computer models", "Architecture remains long, organization can change", "Manufacturers offer same architecture but different organization"],
    answer: 0,
    explanation: "Organization can change while architecture remains the same; it does not last as long as architecture."
  },
  {
    q: "Optimization problem on a weighted graph:",
    options: ["Is vertex P reachable from Q", "Find minimum spanning tree", "Traverse all vertices", "Count cycles"],
    answer: 1,
    explanation: "Finding a minimum spanning tree is an optimization problem."
  },
  {
    q: "False about transaction failure:",
    options: ["Catastrophes cause failure", "Disk blocks losing data cause failure", "Concurrency control avoids failure", "Logical errors cause failure"],
    answer: 2,
    explanation: "Concurrency control prevents inconsistent data but does not guarantee prevention of transaction failure."
  },
  {
    q: "False about packet vs circuit switching:",
    options: ["Packet more efficient", "Circuit has dedicated channel", "Packet requires end-to-end connection", "Packets sent in small blocks"],
    answer: 2,
    explanation: "Packet switching does NOT require a dedicated end-to-end connection, unlike circuit switching."
  },
  {
    q: "Not an example of scripting language:",
    options: ["PHP", "Perl", "C++", "Python"],
    answer: 2,
    explanation: "C++ is a compiled language, not a scripting language."
  },
  {
    q: "Node with no parent node in a tree is:",
    options: ["Root node", "Parent node", "Internal node", "External node"],
    answer: 0,
    explanation: "The root node has no parent."
  },
  {
    q: "Network architecture characteristic allowing quick expansion:",
    options: ["Fault tolerance", "Quality of service", "Scalability", "Security"],
    answer: 2,
    explanation: "Scalability allows networks to expand without significant performance degradation."
  },
  {
    q: "Deadlock prevention mechanism that doesn’t require timestamp:",
    options: ["Wound-wait", "Wait-die", "No-wait", "Wait-wait"],
    answer: 2,
    explanation: "No-wait protocol prevents waiting, avoiding the need for timestamps."
  },
  {
    q: "Hardest environment for an agent:",
    options: ["Sequential, non-deterministic, dynamic", "Partially observable, static, continuous", "Fully observable, sequential, deterministic", "Deterministic, fully observable, static"],
    answer: 0,
    explanation: "Sequential, non-deterministic, dynamic environments are hardest because the agent must handle uncertainty and changes."
  },
  {
    q: "Program data independence in DBMS means:",
    options: ["Application may be affected by data changes", "Data and applications are defined separately", "Both program and data defined together", "Programs can create redundant data independently"],
    answer: 1,
    explanation: "Data and applications are defined separately to allow changes in data without affecting programs."
  },
  {
    q: "Output of Java fragment: n=6, m=15, p=3; n-=m; n*=p; System.out.print(n);",
    options: ["-27", "27", "3", "24"],
    answer: 0,
    explanation: "n = 6-15 = -9; then n*-9*3 = -27."
  },
  {
    q: "Time complexity of Quick sort algorithm:",
    options: ["O(n²)", "O(2^n)", "O(n)", "O(n log n)"],
    answer: 3,
    explanation: "Average time complexity of Quick sort is O(n log n)."
  },
  {
    q: "Smallest HTML heading tag:",
    options: ["<H3>", "<H1>", "<H4>", "<H6>"],
    answer: 3,
    explanation: "<H6> is the smallest heading tag."
  },
  {
    q: "Software test done by clients to check if system satisfies requirements:",
    options: ["Unit testing", "Integration testing", "System testing", "Acceptance testing"],
    answer: 3,
    explanation: "Acceptance testing is done by clients to validate the system meets requirements."
  },




  {
    q: "Which measure ensures information systems' availability, integrity, authentication, and confidentiality?",
    options: ["Interception", "Information assurance", "Information security", "Wiretapping"],
    answer: 1,
    explanation: "Information assurance focuses on protecting information and information systems."
  },
  {
    q: "Which network type is the largest?",
    options: ["Metropolitan Area Network", "The Internet", "Wide Area Network", "Local Area Network"],
    answer: 1,
    explanation: "The Internet is the largest network globally, connecting multiple WANs and LANs."
  },
  {
    q: "Depth First Traversal algorithm uses which data structure?",
    options: ["Tree", "Priority queue", "Queue", "Stack"],
    answer: 3,
    explanation: "DFS uses a stack (explicit or via recursion) to track the next node to visit."
  },
  {
    q: "Branch that studies whether a problem can be solved regardless of resources?",
    options: ["Automata theory", "Set theory", "Computability theory", "Complexity theory"],
    answer: 2,
    explanation: "Computability theory deals with what can be computed in principle."
  },
  {
    q: "Algorithm to extract Minimum Spanning Tree from a graph:",
    options: ["Huffman encoding", "Prim's algorithm", "Merge sort", "Dijkstra's algorithm"],
    answer: 1,
    explanation: "Prim's algorithm is used to find a minimum spanning tree in weighted graphs."
  },
  {
    q: "University LANs and WANs used by staff and students are best described as:",
    options: ["Metropolitan Area Network", "Local Area Network", "Wide Area Network", "The Internet"],
    answer: 2,
    explanation: "A wide area network (WAN) connects multiple local area networks (LANs) across locations."
  },
  {
    q: "Which is not a single-level ordered index?",
    options: ["Multilevel index", "Primary index", "Clustering index", "Secondary index"],
    answer: 0,
    explanation: "A multilevel index has more than one level, so it is not single-level."
  },
  {
    q: "SQL to delete publisher named 'xWZ' from PUBLISHER table?",
    options: ["DELETE FROM PUBLISHER WHERE Address = 'XWZ'", "DELETE FROM BOOK WHERE Name = 'XWZ'", "DELETE FROM BOOK_AUTHOR WHERE Address = 'xWZ'", "DELETE FROM PUBLISHER WHERE Name = 'XWZ'"],
    answer: 3,
    explanation: "DELETE FROM PUBLISHER WHERE Name='xWZ' correctly removes the row by name."
  },
  {
    q: "Method to obtain meaning of encrypted information without secret key?",
    options: ["Decryption", "Cryptanalysis", "Encryption", "Cryptography"],
    answer: 1,
    explanation: "Cryptanalysis attempts to break encryption without the key."
  },
  {
    q: "Used for syntax analysis in compiling process:",
    options: ["Loader", "Scanner", "Linker", "Parser"],
    answer: 3,
    explanation: "Parser performs syntax analysis by checking grammatical structure of code."
  },
  {
    q: "Program to decode scrambled messages sent by a friend:",
    options: ["Secret key", "Encryption program", "Ciphertext", "Decryption program"],
    answer: 3,
    explanation: "Decryption program converts scrambled text (ciphertext) back to readable form."
  },
  {
    q: "Most secure computer compared to others?",
    options: ["Connected with latest antivirus", "Connected with strong IDS", "Connected with latest firewall", "Not connected to Internet"],
    answer: 3,
    explanation: "A computer not connected to the Internet is least vulnerable to attacks."
  },
  {
    q: "Not true about fan trap in ERD:",
    options: ["Resolved by readjusting model", "Occurs with ambiguous pathway", "Occurs when no pathway exists", "Occurs when multiple 1:N relationships fan out"],
    answer: 2,
    explanation: "Fan trap occurs due to multiple 1:N relationships, not absence of pathway."
  },
  {
    q: "False about arrays in C++:",
    options: ["Collection of similar data objects", "Size must be constant at declaration", "Use [] brackets to access", "Access elements without index"],
    answer: 3,
    explanation: "Array elements cannot be accessed without using index numbers."
  },
  {
    q: "When is DBMS costly and not recommended?",
    options: ["To control redundancy", "Embedded systems with small storage", "Multiple users accessing database", "To deny unauthorized access"],
    answer: 1,
    explanation: "Embedded systems with limited storage may not efficiently support a full DBMS."
  },
  {
    q: "Data update method where modified items are written after transaction ends?",
    options: ["In-place update", "Immediate update", "Shadow update", "Deferred update"],
    answer: 3,
    explanation: "Deferred update writes changes at the end of the transaction or after multiple transactions."
  },
  {
    q: "True about Java and JavaScript:",
    options: ["JavaScript used in sophisticated apps", "JavaScript is compiled and interpreted in source form", "Both are object-oriented", "JavaScript has more features than Java"],
    answer: 2,
    explanation: "Both Java and JavaScript support object-oriented programming concepts."
  },
  {
    q: "Step in problem solving listing actions and states for goal:",
    options: ["Search", "Problem formulation", "Execute", "Goal formulation"],
    answer: 1,
    explanation: "Problem formulation defines the state space and actions to achieve the goal."
  },
  {
    q: "Set of attributes affecting logical execution of a program:",
    options: ["Arrangement", "Architecture", "Organization", "Flow control"],
    answer: 1,
    explanation: "Architecture defines the structure and attributes of a system."
  },
  {
    q: "Turing machine with two tapes, one read-only, one read-write:",
    options: ["Multi-dimensional TM", "Off-line TM", "Non-deterministic TM", "Multi-head TM"],
    answer: 1,
    explanation: "Offline Turing machines have one read-only input tape and one read/write tape."
  },
  {
    q: "Testing modified software to ensure no new errors introduced:",
    options: ["Regression testing", "Dynamic testing", "Beta testing", "Static testing"],
    answer: 0,
    explanation: "Regression testing checks that new changes haven't introduced bugs."
  },
  {
    q: "Does not show non-functional requirements:",
    options: ["Displaying information", "Memory requirement", "Reliability", "Response time"],
    answer: 0,
    explanation: "Displaying information is a functional requirement, not non-functional."
  },
  {
    q: "Access modifier allowing subclass but not non-subclass access in C++:",
    options: ["Private", "Default", "Public", "Protected"],
    answer: 3,
    explanation: "Protected members are accessible in subclasses but not in unrelated classes."
  },
  {
    q: "Register that holds address of next instruction to fetch:",
    options: ["Memory buffer register", "Instruction buffer register", "Memory address register", "Program counter"],
    answer: 3,
    explanation: "Program counter stores the memory address of the next instruction."
  },
  {
    q: "Linked list data structure type:",
    options: ["Dynamic", "Non-linear", "Static", "Fixed size"],
    answer: 0,
    explanation: "Linked lists are dynamic because nodes can be allocated and deallocated at runtime."
  },
  {
    q: "Interface transferring multiple bits simultaneously:",
    options: ["Serial interface", "Parallel interface", "Bus interface", "One line"],
    answer: 1,
    explanation: "Parallel interfaces allow multiple bits to be transferred at once."
  },
  {
    q: "PHP array: $list = array(20,12,23,19,18); Index of value 19?",
    options: ["3", "2", "1", "0"],
    answer: 0,
    explanation: "Arrays are 0-indexed; value 19 is at index 3."
  },
  {
    q: "Final phase of compiling process:",
    options: ["Code optimization", "Code generation", "Semantic analysis", "Intermediate code generation"],
    answer: 1,
    explanation: "Code generation produces the final machine code executable."
  },
  {
    q: "False about threads:",
    options: ["Threads have program counters", "Threads are a group of processes", "Threads have registers for working memory", "Threads are scheduled entities on CPU"],
    answer: 1,
    explanation: "Threads are not groups of processes; they are lightweight units of execution within a process."
  },
  {
    q: "False about project planning stage:",
    options: ["Project planning is one-time task", "Cost estimation done", "Prepare time schedule done", "Risk analysis done"],
    answer: 0,
    explanation: "Project planning is ongoing; it's not a one-time task."
  },
  {
    q: "Variable accessible throughout C++ program:",
    options: ["Static", "Local", "Global", "Automatic"],
    answer: 2,
    explanation: "Global variables can be accessed anywhere in the program."
  },
  {
    q: "Concept referring to extending specialized classes from generalized classes:",
    options: ["Inheritance", "Overriding", "Overloading", "Encapsulation"],
    answer: 0,
    explanation: "Inheritance allows classes to inherit properties and methods from other classes."
  },
  {
    q: "Self-driving car sensors can detect environment but not all aspects. Which environment?",
    options: ["Fully observable", "Discrete", "Partially observable", "Stochastic"],
    answer: 2,
    explanation: "Partially observable environments provide incomplete information to the agent."
  },
  {
    q: "False about resource wait dependencies in question 27's figure:",
    options: ["P0 waits for resource held by P1", "P1 waits for resource held by P2", "P2 cannot execute until P1 finishes", "B cannot execute until P4 finishes"],
    answer: 3,
    explanation: "Assuming the figure, B’s dependency on P4 is incorrect or unrelated."
  },
  {
    q: "Correct way to create String object in Java:",
    options: ["String m = 'Computer Science'", "String m = 'H' 'e' 'l' 'l' 'o'", "String m = new String('Technology')", "String m = new String(\"Exit Exam\")"],
    answer: 3,
    explanation: "String objects in Java can be created using new String(\"...\")."
  },
  {
    q: "True about frames in HTML:",
    options: ["Frames allow parts to remain stationary while others scroll", "All browsers support frames", "Server load not affected by many frames", "Frames are not difficult for search engines"],
    answer: 0,
    explanation: "Frames allow static content in one section while scrolling other sections."
  },
  {
    q: "False about String in Java:",
    options: ["String can be created from char array", "Content can be changed once created", "String literal creation possible", "String is an object"],
    answer: 1,
    explanation: "Strings in Java are immutable; their content cannot be changed once created."
  },
  {
    q: "DBMS component to control locks:",
    options: ["Query Processor", "Lock Manager", "Lock Table", "Query Optimizer"],
    answer: 1,
    explanation: "Lock manager handles concurrency control by managing locks."
  },
  {
    q: "Evaluates degrees of success of an agent:",
    options: ["Action", "Perception", "Performance measure", "Knowledge"],
    answer: 2,
    explanation: "Performance measure evaluates how well an agent achieves its goals."
  },
  {
    q: "Security service to protect information disclosure from unauthorized entities:",
    options: ["Integrity", "Confidentiality", "Availability", "Authentication"],
    answer: 1,
    explanation: "Confidentiality ensures that sensitive information is not disclosed to unauthorized users."
  },




  

  {
    q: "False statement regarding Direct Address Table and Hash Table?",
    options: [
      "Direct Address Table doesn't use hash function",
      "If universe U is very large, Hash table is better",
      "Hash table allocates one slot per key in universe U",
      "One-to-one correspondence exists between keys and slots in Direct Address table"
    ],
    answer: 2,
    explanation: "Hash tables do not allocate one slot for every possible key; they use hashing to map keys to slots."
  },
  {
    q: "Network security issue showing weakness in networks and devices?",
    options: ["Availability", "Vulnerability", "Attack", "Threat"],
    answer: 1,
    explanation: "Vulnerability represents weaknesses that could be exploited by attacks."
  },
  {
    q: "Time complexity of binary search algorithm?",
    options: ["O(1)", "O(n)", "O(n³)", "O(log2n)"],
    answer: 3,
    explanation: "Binary search divides the search space in half each step, giving O(log n) complexity."
  },
  {
    q: "Software requires major architectural changes. Strategy to apply?",
    options: ["Architectural transformation", "Preventative maintenance", "Software reengineering", "Software maintenance"],
    answer: 0,
    explanation: "Architectural transformation involves modifying the system's architecture."
  },
  {
    q: "Variable accessible throughout C++ program scope?",
    options: ["Static", "Local", "Global", "Automatic"],
    answer: 2,
    explanation: "Global variables are accessible anywhere in the program."
  },
  {
    q: "Correct way to create String object in Java?",
    options: [
      "String m = 'Computer Science'",
      "String m = 'H' 'e' 'l' 'l' 'o'",
      "String m = new String('Technology')",
      "String m = new String(\"Exit Exam\")"
    ],
    answer: 3,
    explanation: "Java String objects can be created using new String(\"...\")."
  },
  {
    q: "Command to check if a computer upstairs is connected to network?",
    options: ["Traceroute", "Ping", "DHCP Discover", "Nslookup"],
    answer: 1,
    explanation: "Ping sends ICMP requests to check connectivity of a host on the network."
  },
  {
    q: "Which element is NOT part of the language L generated from Grammar G (S→aSb, S→ε)?",
    options: ["a", "aabb", "ab", "ε"],
    answer: 0,
    explanation: "Single 'a' cannot be generated; the language requires balanced 'a's and 'b's or empty string."
  },
  {
    q: "Algorithm to reduce size of large data files?",
    options: ["Merge sort", "Heap sort", "Prim's algorithm", "Huffman encoding"],
    answer: 3,
    explanation: "Huffman encoding is a compression algorithm that reduces file size by encoding frequent symbols with fewer bits."
  },
  {
    q: "Asymptotic notation describing worst case analysis?",
    options: ["f(n) little-oh", "f(n) little-omega", "f(n) theta", "f(n) big-omega"],
    answer: 3,
    explanation: "Big-Omega (Ω) is commonly used for best-case; Big-O (O) is for worst-case, but in this context Big-Omega can represent lower bounds; careful interpretation needed."
  },
  {
    q: "Different from others based on role in network?",
    options: ["Wireless access point", "Network printer", "Routers", "Hubs"],
    answer: 1,
    explanation: "A network printer is an end device, others manage network traffic."
  },
  {
    q: "Wrongly coupled generation of operating system and advancement?",
    options: [
      "Fourth generation -> Real time systems",
      "First generation -> Single user",
      "Second generation -> Multiprogramming",
      "Third generation -> Batch system"
    ],
    answer: 3,
    explanation: "Third generation OS were multiprogramming, batch systems were earlier (first or second generation)."
  },
  {
    q: "Best description of a Database Management System (DBMS)?",
    options: [
      "Helps manage computer's activity",
      "Assists process images",
      "Creates and maintains a database",
      "Processes documents"
    ],
    answer: 2,
    explanation: "A DBMS manages and organizes databases for efficient access and control."
  },
  {
    q: "Process terminated due to reference to non-existing memory is called?",
    options: ["Fatal exit", "Normal exit", "Error exit", "Terminated by another process"],
    answer: 0,
    explanation: "Fatal exit occurs when a process accesses invalid memory, causing termination."
  },
  {
    q: "Two transactions interleaved causing incorrect database value is?",
    options: ["Dirty read", "Lost update", "Temporary read", "Incorrect summary"],
    answer: 1,
    explanation: "Lost update occurs when concurrent transactions overwrite each other's updates."
  },
  {
    q: "Question 96 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 96."
  },
  {
    q: "Question 97 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 97."
  },
  {
    q: "Question 98 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 98."
  },
  {
    q: "Question 99 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 99."
  },
  {
    q: "Question 100 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 100."
  },
  {
    q: "Question 101 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 101."
  }








  
  
],






  
"exit exam":[

  {
    q: "Which one of the following is a step in problem solving that lists the actions and states that the agent has to consider provided a goal?",
    options: ["Goal formulation", "Search", "Problem formulation", "Execute"],
    answer: 2,
    explanation: "Problem formulation defines the state space, initial state, actions, and goal state for an agent to solve a problem."
  },
  {
    q: "A process is terminated by the operating system due to a reference to non-existing memory. Which one of the following best explains the process termination?",
    options: ["Normal exit", "Terminated by another process", "Fatal exit", "Error exit"],
    answer: 3,
    explanation: "Error exit occurs when a process encounters an error such as referencing non-existing memory."
  },
  {
    q: "What is the output of the following C++ fragment code? int a, b; a = 13; b = 9; while((20 && 0) && (a > b)) { cout << \"Plants are our life\"; }",
    options: [
      "It displays message 'Plants are our life' infinitely",
      "It displays message 'Plants are Our Life' 4 times",
      "No message will be displayed",
      "It displays message 'Plants are our life' 20 times"
    ],
    answer: 2,
    explanation: "The condition (20 && 0) evaluates to false (0), so the loop body is never executed."
  },
  {
    q: "Which one of the following is not correct about POP3 and SMTP?",
    options: [
      "Both are application layer protocols",
      "A sender can receive emails using POP3",
      "Both are network layer protocols",
      "A sender can send email using SMTP"
    ],
    answer: 2,
    explanation: "POP3 and SMTP are application layer protocols, not network layer protocols."
  },
  {
    q: "Size of large data files can be reduced to save storage disk space. Which algorithm is appropriate to reduce size of large files?",
    options: ["Heap sort algorithm", "Huffman encoding algorithm", "Prim's algorithm", "Merge sort algorithm"],
    answer: 1,
    explanation: "Huffman encoding algorithm is a compression technique used to reduce file size efficiently."
  },
  {
    q: "Advancement of operating system is closely tied to computer architectures. Which one of the following generation and advancement is wrongly coupled?",
    options: [
      "First generation -> single user",
      "Third generation -> batch system",
      "Second generation -> multiprogramming",
      "Fourth generation -> real time systems"
    ],
    answer: 1,
    explanation: "Third generation OSs were multi-programmed systems, not batch systems; batch systems were typical of the second generation."
  },
  {
    q: "Given input Alphabet = {a, b, c, d} and empty string X. Then, which one of the following is true about *?",
    options: ["* = + U {X}", "Σ* = Σ+ ∪ Σ² ∪ Σ³ ∪ Σ⁴", "Σ* = {^}", "Σ* = Σ+"],
    answer: 0,
    explanation: "The Kleene star (*) represents zero or more occurrences of symbols from Σ. It includes the empty string."
  },
  {
    q: "Which one of the following lists of environments is the hardest for an agent?",
    options: [
      "Deterministic, fully observable, static",
      "Sequential, non-deterministic, dynamic",
      "Fully observable, sequential, deterministic",
      "Partially observable, static, continuous"
    ],
    answer: 1,
    explanation: "Sequential, non-deterministic, dynamic environments are the hardest because the agent must deal with uncertainty, sequence of actions, and changing states."
  },
  {
    q: "Which one of the following registers holds the address of the next pair of instructions to be fetched from memory?",
    options: ["Instruction buffer register", "Memory address register", "Program counter", "Memory buffer register"],
    answer: 2,
    explanation: "The Program Counter (PC) holds the memory address of the next instruction to be executed."
  },
  {
    q: "Linked list data structure is type of data structure.",
    options: ["Dynamic data structure", "Non-linear data structure", "Static data structure", "Fixed size data structure"],
    answer: 0,
    explanation: "Linked lists are dynamic data structures because their size can grow or shrink during runtime."
  },
  {
    q: "Which phase of compiling process is considered as the final phase in the process?",
    options: ["Code optimization", "Semantic analysis", "Code generation", "Intermediate code generation"],
    answer: 2,
    explanation: "Code generation is the final phase of compilation, producing machine or intermediate code."
  },
  {
    q: "Which one of the following computers can be most secured compared to the rest?",
    options: [
      "A computer connected to the Internet having strong intrusion detection",
      "A computer connected to the Internet and the latest anti-virus installed on it",
      "A computer connected to the Internet with the latest firewall system",
      "A computer that is not connected to the Internet"
    ],
    answer: 3,
    explanation: "A computer not connected to the Internet is physically isolated and therefore most secure."
  },
  {
    q: "An interface that has multiple lines connecting input/output module and peripheral device and assures multiple bits to be transferred at the same time is:",
    options: ["Parallel interface", "One line interface", "Bus interface", "Serial interface"],
    answer: 0,
    explanation: "A parallel interface transfers multiple bits simultaneously using multiple lines."
  },
  {
    q: "Which one of the following best explains attackers who are motivated by financial gain and perform sabotage, IP theft, and secrets of a rival company?",
    options: ["Activist", "Stealer", "Hacktivist", "Competitor"],
    answer: 3,
    explanation: "Competitor attackers are motivated by business gain and may steal intellectual property or sabotage rivals."
  },
  {
    q: "Which one of the following is responsible for separating some machines from the rest to shield them from possible attacks?",
    options: ["Switch", "Network operating system", "Firewall", "Router"],
    answer: 2,
    explanation: "A firewall acts as a barrier, separating and protecting devices from potential attacks."
  },
  {
    q: "Which one of the following is different from the other based on its role in computer network?",
    options: ["Network printer", "Routers", "Hubs", "Wireless access point"],
    answer: 0,
    explanation: "Network printer is an end device, whereas routers, hubs, and wireless access points are networking devices."
  },
  {
    q: "Which statement is false about universal hashing technique?",
    options: [
      "In universal hashing a hash function is selected randomly from set of hash functions for each key",
      "Universal hashing reduces the chance of data collision",
      "In universal hashing a hash function is selected from set of hash functions independent of keys.",
      "Single fixed hash function technique is better than universal hashing technique in terms of collision reduction"
    ],
    answer: 3,
    explanation: "Single fixed hash function is not better; universal hashing reduces collisions by randomly selecting functions."
  },
  {
    q: "What does the program data independence in the database approach entails for?",
    options: [
      "Data and applications are defined separately",
      "Programs can create redundant data independently",
      "Both program and data are defined together",
      "The application may be affected when data changes"
    ],
    answer: 0,
    explanation: "Data independence means data and programs are defined separately; changes in data structure do not affect programs."
  },
  {
    q: "Which asymptotic notation describes average case analysis?",
    options: ["f(n) = Big-Oh", "f(n) = little-omega", "f(n) = Big-Omega", "f(n) = Theta"],
    answer: 3,
    explanation: "Theta notation (Θ) describes the average case and tight bound of an algorithm's complexity."
  },
  {
    q: "Let a Grammar G = ({S}, {a, b}, S, P), where {S} is set of variables, {a, b} is set of terminal symbols, S is start variable and P is set of productions. Then which one of the following is not an element of the language generated from G. Given P: S → aSb | ε",
    options: ["A", "a", "ab", "aabb"],
    answer: 0,
    explanation: "The grammar generates strings with balanced a's and b's (including ε). 'A' is not part of the generated language."
  },




  
  {
    q: "Which concept refers to extending specialized classes from generalized classes in object-oriented programming?",
    options: ["Overriding", "Overloading", "Inheritance", "Data field Encapsulation"],
    answer: 2,
    explanation: "Inheritance allows a class to acquire properties and behaviors from a parent class."
  },
  {
    q: "A computer expert would like to know the number of processes that are completed per hour to assess the performance of a machine. Therefore, which one of the following best describes the expert's assessment?",
    options: ["Waiting time", "Turnaround time", "Response time", "System throughput"],
    answer: 3,
    explanation: "System throughput measures the number of processes completed in a given time period."
  },
  {
    q: "Which one of the following is not a single level ordered index?",
    options: ["Clustering index", "Secondary index", "Primary index", "Multilevel index"],
    answer: 3,
    explanation: "Multilevel index is a multi-level index, not single-level."
  },
  {
    q: "Which one of the following is true about functions in JavaScript?",
    options: [
      "Function names can begin with digits",
      "There is no limit to the number of function parameters that a function may contain",
      "Function names are not case-sensitive",
      "Function names can contain spaces"
    ],
    answer: 1,
    explanation: "JavaScript functions can have any number of parameters."
  },
  {
    q: "What is the purpose of an opcode that is as indicated in the figure (4 bits opcode, 6 bits operands)?",
    options: [
      "It holds the next instruction reference",
      "It determines the operation to be done",
      "It holds the destination address of an operand",
      "It holds the source address of an operand"
    ],
    answer: 1,
    explanation: "Opcode specifies the operation to be performed by the CPU."
  },
  {
    q: "Which one of the following is not correct for deadlock in the given resource allocation scenario?",
    options: [
      "P0 is waiting for a resource held by P1",
      "P1 is waiting for a resource held by P2",
      "P2 cannot be executed until P1 finishes",
      "P3 cannot be executed until P4 finishes"
    ],
    answer: 2,
    explanation: "P2 may proceed independently if it has resources; the statement incorrectly assumes P2 is blocked."
  },
  {
    q: "What is the output of the following Java fragment code? int n = 6, m = 15, p = 3; n -= m; n *= p; System.out.print(n);",
    options: ["-27", "3", "27", "24"],
    answer: 0,
    explanation: "n -= m → n = 6 - 15 = -9; n *= p → n = -9 * 3 = -27."
  },
  {
    q: "Which one of the following is a measure taken to ensure information and information systems' availability, integrity, authentication and confidentiality?",
    options: ["Information security", "Interception", "Information assurance", "Wiretapping"],
    answer: 0,
    explanation: "Information security encompasses measures to protect confidentiality, integrity, and availability."
  },
  {
    q: "Suppose you have received a message from your friend but the message is scrambled. In order to read the message which program would you use?",
    options: ["Secret key", "Encryption program", "Decryption program", "Ciphertext"],
    answer: 2,
    explanation: "Decryption program is used to convert encrypted messages back into readable form."
  },
  {
    q: "Suppose you have developed a self-driving car equipped with sensors and camera that help it detect traffic. Its sensors are able to detect the environment but not all aspects. Hence, in which environment is your car acting?",
    options: ["Stochastic", "Discrete", "Partially observable", "Fully observable"],
    answer: 2,
    explanation: "The car operates in a partially observable environment because it cannot see all aspects at once."
  },
  {
    q: "is set of attributes that can be seen by a program and can have direct impact on the logical execution of a program.",
    options: ["Organization", "Arrangement", "Architecture", "Flow control"],
    answer: 2,
    explanation: "Computer architecture refers to attributes visible to programmers that affect program execution."
  },
  {
    q: "Look at the following PHP line: $list = array(20, 12, 23, 19, 18); What is the index of data value 19?",
    options: ["0", "3", "1", "2"],
    answer: 1,
    explanation: "Arrays in PHP are zero-indexed: $list[3] = 19."
  },
  {
    q: "Which one of the following is not a delimiter of PHP code?",
    options: ["<?php ?>", "<? ?>", "<caption> </caption>", "<script language='PHP'></script>"],
    answer: 2,
    explanation: "<caption> is HTML tag, not a PHP code delimiter."
  },
  {
    q: "Which one of the following is not an example of scripting languages?",
    options: ["Python", "PHP", "Perl", "C++"],
    answer: 3,
    explanation: "C++ is a compiled language, not typically considered a scripting language."
  },
  {
    q: "Which one of the following phases is done before semantic analysis phase of compiling process?",
    options: ["Code generation", "Intermediate code generation", "Syntax analysis", "Code optimization"],
    answer: 2,
    explanation: "Syntax analysis (parsing) comes before semantic analysis in the compilation process."
  },
  {
    q: "Which deadlock prevention mechanisms don't require timestamp?",
    options: ["No-wait", "Wait-wait", "Wait-die", "Wound-wait"],
    answer: 0,
    explanation: "No-wait prevents deadlock without using timestamps by not allowing processes to wait."
  },
  {
    q: "In a tree data structure, if a node has no parent node, then the node is",
    options: ["Internal node", "External node", "Root node", "Parent node"],
    answer: 2,
    explanation: "The root node has no parent node in a tree structure."
  },
  {
    q: "What is the output of the following C++ fragment code? int a = 6, b = 8; int x = 2, y = 4; int c = (x > y? (a--, x): (b--, y)); cout << 'a= ' << a << ' b= ' << b << ' c= ' << c;",
    options: ["a=6 b=8 c=4", "a=5 b=8 c=4", "a=5 b=7 c=2", "a=6 b=7 c=4"],
    answer: 3,
    explanation: "x>y is false → (b--, y) executed → b = 7, c = 4; a unchanged."
  },
  {
    q: "Which one of the following is evaluating the degrees of success of an agent?",
    options: ["Knowledge", "Action", "Performance measure", "Perception"],
    answer: 2,
    explanation: "Performance measure evaluates how well an agent achieves its goals."
  },
  {
    q: "If you want to allow subclasses to access data fields or methods defined in the superclass, but not allow non-subclasses to access these data fields and methods, which access modifier is appropriate?",
    options: ["public", "protected", "private", "default"],
    answer: 1,
    explanation: "Protected access allows subclasses to access members but hides them from non-subclasses."
  },


  
  {
    q: "Which asymptotic notation describes worst case analysis?",
    options: ["f(n) = little-oh", "f(n) = Ω (Big omega)", "f(n) = little-ω (little omega)", "f(n) = Θ (theta)"],
    answer: 3,
    explanation: "Θ notation gives a tight bound on worst-case time complexity."
  },
  {
    q: "Which type of Turing machine has two tapes, one read-only and one read-write?",
    options: ["Multi-head Turing machine", "Multi-dimensional Turing machine", "Non-deterministic Turing machine", "Off-line Turing machine"],
    answer: 3,
    explanation: "An off-line Turing machine uses a read-only input tape and a read-write working tape."
  },
  {
    q: "Among the following, which one best describes a database management system (DBMS)?",
    options: [
      "It can assist you to process documents",
      "It can assist process images",
      "It is responsible for creating and maintaining a database",
      "It can help users to manage computer's activity"
    ],
    answer: 2,
    explanation: "DBMS provides tools to create, access, and maintain databases."
  },
  {
    q: "Which one of the following does not show non-functional requirement of software systems?",
    options: ["Response time", "Memory requirement", "Reliability", "Displaying information"],
    answer: 3,
    explanation: "Displaying information is a functional requirement, not non-functional."
  },
  {
    q: "Which one of the following is the smallest heading tag?",
    options: ["<H3>", "<H6>", "<H1>", "<H4>"],
    answer: 1,
    explanation: "<H6> is the smallest HTML heading tag."
  },
  {
    q: "Given the schemas: BOOK (Book_id, Title, Publisher_name), BOOK_AUTHOR (Book_id, Author_name), PUBLISHER (Name, Address, Phone) Which SQL is correct to delete publisher named 'XWZ'?",
    options: [
      "DELETE FROM PUBLISHER WHERE Address = 'XWZ'",
      "DELETE FROM BOOK_AUTHOR WHERE Address = 'XWZ'",
      "DELETE FROM PUBLISHER WHERE Name = 'XWZ'",
      "DELETE FROM BOOK WHERE Name = 'XWZ'"
    ],
    answer: 2,
    explanation: "DELETE FROM PUBLISHER WHERE Name='XWZ' correctly deletes the publisher by name."
  },
  {
    q: "Which one of the following is true about frames in HTML?",
    options: [
      "Frames are not difficult to handle for search engines",
      "Frames allow parts of the page to remain stationary while other parts scroll",
      "Load on the server is not affected by the number of frames",
      "All browsers support frames"
    ],
    answer: 1,
    explanation: "Frames allow part of a webpage to remain static while other parts scroll."
  },
  {
    q: "Which statement is true about pop() operation of Stack data structures?",
    options: [
      "pop() inserts new element at the beginning/bottom of stack",
      "pop() returns the end/top element but does not delete it",
      "pop() removes the end/top element from stack",
      "pop() inserts new element at the middle of stack"
    ],
    answer: 2,
    explanation: "pop() removes and returns the top element in a stack."
  },
  {
    q: "Assume a line of patients waiting for service. Seriously sick patients should be served first. Which data structure is most appropriate?",
    options: ["Tree", "Queue", "Priority Queue", "Stack"],
    answer: 2,
    explanation: "Priority Queue serves items based on priority rather than arrival order."
  },
  {
    q: "In which situation using DBMS becomes costly and not recommended?",
    options: [
      "Multiple users access the database",
      "Embedded systems with very small storage space",
      "To control redundancy",
      "To deny access to unauthorized users"
    ],
    answer: 1,
    explanation: "DBMS requires significant storage and processing; in very small embedded systems, it is inefficient."
  },
  {
    q: "Which one of the following is a correct way of creating a String object in Java?",
    options: [
      "String m = new String('Exit Exam');",
      "String m = 'Computer Science';",
      "String m = new String('Technology');",
      "String m = 'H', 'e', 'l', 'l', 'o';"
    ],
    answer: 0,
    explanation: "String objects can be created using new String('text') in Java."
  },
  {
    q: "Which one of the following is a valid statement regarding PHP variables?",
    options: [
      "test = 5;",
      "$test = 'This is Computer science';",
      "$test = 'Computer;",
      "$test = 9.5"
    ],
    answer: 3,
    explanation: "PHP variables must begin with $, so $test = 9.5 is valid."
  },
  {
    q: "Which security service protects disclosure of information from unauthorized entities?",
    options: ["Integrity", "Availability", "Authentication", "Confidentiality"],
    answer: 3,
    explanation: "Confidentiality ensures that data is accessed only by authorized parties."
  },
  {
    q: "Which method is used to obtain the meaning of encrypted information without access to the secret key?",
    options: ["Encryption", "Decryption", "Crypto-analysis", "Cryptography"],
    answer: 2,
    explanation: "Cryptanalysis studies methods to break encrypted messages without the key."
  },
  {
    q: "Which network security issue shows the level of weakness in networks and devices?",
    options: ["Threat", "Attack", "Availability", "Vulnerability"],
    answer: 3,
    explanation: "Vulnerability is a weakness that can be exploited in a system or network."
  },
  {
    q: "After analysis if software requires major change to the architecture, which strategy should be applied?",
    options: ["Software maintenance", "Architectural transformation", "Software reengineering", "Preventative maintenance"],
    answer: 1,
    explanation: "Architectural transformation modifies the system's structure to meet new requirements."
  },
  {
    q: "Which type of variable can be accessed throughout C++ program scope?",
    options: ["Local", "Static", "Automatic", "Global"],
    answer: 3,
    explanation: "Global variables can be accessed throughout the program."
  },
  {
    q: "Which phase of software development refers to modification of software to reflect changing customer and market requirements?",
    options: ["Evolution", "Specification", "Validation", "Development"],
    answer: 0,
    explanation: "Evolution phase handles modifications due to changing requirements."
  },
  {
    q: "Which quantifier can be used for some portion of the universe?",
    options: ["∀", "∃", "¬", "∈"],
    answer: 1,
    explanation: "∃ (existential quantifier) represents 'there exists'."
  },
  {
    q: "Among phases of compiling process, in which phase are characters converted to tokens?",
    options: ["Lexical analysis", "Semantic analysis", "Code optimization", "Syntax analysis"],
    answer: 0,
    explanation: "Lexical analysis converts character sequences into tokens."
  },
  {
    q: "For an input graph, Depth First Traversal algorithm uses which data structure?",
    options: ["Stack", "Queue", "Tree", "Priority Queue"],
    answer: 0,
    explanation: "DFS uses a stack (explicit or via recursion) to traverse nodes."
  },
  {
    q: "Which one of the following is not correct about packet and circuit switching?",
    options: [
      "In packet switching, end-to-end connection must be established",
      "In circuit switching, a channel is dedicatedly used",
      "In packet switching, messages are sent in small blocks",
      "Packet switching is more efficient than circuit switching"
    ],
    answer: 0,
    explanation: "Packet switching does not require a dedicated end-to-end connection."
  },
  {
    q: "Which statement describes: 'Transaction updates a DB item, fails, and another transaction reads the uncorrected value'?",
    options: ["Incorrect summary problem", "Lost update problem", "Dirty read", "Temporary read problem"],
    answer: 2,
    explanation: "Dirty read occurs when a transaction reads uncommitted data from another transaction."
  },
  {
    q: "To check if a computer in the network is reachable, which command is used?",
    options: ["ping", "traceroute", "DHCP discover", "nslookup"],
    answer: 0,
    explanation: "ping sends ICMP packets to test connectivity."
  },
  {
    q: "What will be the output of Math.sqrt(36) in JavaScript?",
    options: ["1", "36", "30", "6"],
    answer: 3,
    explanation: "Math.sqrt(36) returns 6, the square root of 36."
  },
  {
    q: "What will be the output of Math.floor(5.9) in JavaScript?",
    options: ["5", "6", "9", "11.8"],
    answer: 0,
    explanation: "Math.floor() rounds down to the nearest integer, so Math.floor(5.9) = 5."
  },
  {
    q: "Which one of the following is asynchronous in message communication?",
    options: ["Direct message", "Non-blocking receive", "Blocking receive", "Blocking send"],
    answer: 1,
    explanation: "Non-blocking receive allows the program to continue while waiting for a message."
  },
  {
    q: "Given input Alphabet = {a, b, c, d} and empty string X. Which one is equivalent to Σ0?",
    options: ["{A}", "+", "Σ*", "Σ"],
    answer: 2,
    explanation: "Σ0 is the set containing the empty string; equivalent to Σ*^0 = {ε}."
  },
  {
    q: "A university owns several private LANs and WANs for staff, students, and admins. What term best describes this network?",
    options: ["Wide Area Network", "Metropolitan Area Network", "The Internet", "Local Area Network"],
    answer: 0,
    explanation: "WANs connect multiple LANs across wide areas, such as a university campus."
  },
  {
    q: "Assume universe of keys U. Which statement is false regarding Direct Address Table and Hash Table?",
    options: [
      "If U is very large, hash table is better than direct address table",
      "One-to-one correspondence exists between keys and memory in direct address table",
      "Hash table allocates one memory slot per key in U",
      "Direct address table doesn't use a hash function to map keys"
    ],
    answer: 2,
    explanation: "Hash tables do not allocate separate memory for all keys in the universe; that's inefficient."
  },
  {
    q: "If a software is modified, which testing ensures no new errors were introduced?",
    options: ["Dynamic testing", "Static testing", "Beta testing", "Regression testing"],
    answer: 3,
    explanation: "Regression testing checks that modifications did not break existing functionality."
  },
  {
    q: "Which one of the following is false about String in Java?",
    options: [
      "We can create a String object using a literal",
      "In Java a string is treated as object",
      "We can create a String object using array of characters",
      "Content of a string can be changed once created"
    ],
    answer: 3,
    explanation: "Java strings are immutable; content cannot be changed after creation."
  },
  {
    q: "A DBMS has to control locks. Which module does this?",
    options: ["Query optimizer", "Lock table", "Lock manager", "Query processor"],
    answer: 2,
    explanation: "Lock manager is responsible for lock management in DBMS."
  },
  {
    q: "Which one of the following is not true about fan trap in ER diagram?",
    options: [
      "Ambiguous pathway exists between some entity occurrences",
      "Occurs when more than two 1:N relationships fan out from entity",
      "Occurs when there is no pathway between related entities",
      "Can be resolved by readjusting model to avoid 1:N fan-out"
    ],
    answer: 2,
    explanation: "Fan trap is due to multiple 1:N relationships fanning from one entity; 'no pathway' is incorrect."
  },
  {
    q: "Which one of the following is not correct about transaction failure?",
    options: [
      "Transactions fail if logical errors detected",
      "Concurrency control enforcement avoids transaction failure",
      "Catastrophes can cause transaction failure",
      "Transactions fail if disk blocks lose data"
    ],
    answer: 1,
    explanation: "Concurrency control does not prevent all transaction failures; it only manages access conflicts."
  },
  {
    q: "Consider C++ code: const int x=8, y=16; if(x>y){int z=x+y;} Which compiler optimization applies?",
    options: ["Code motion", "Compile time evaluation", "Arithmetic simplification", "Dead code elimination"],
    answer: 3,
    explanation: "Dead code elimination removes code that will never execute (x>y is false)."
  },
  {
    q: "Which network type is the largest compared to the rest?",
    options: ["Wide Area Network", "Metropolitan Area Network", "The Internet", "Local Area Network"],
    answer: 2,
    explanation: "The Internet is the largest network connecting millions of devices worldwide."
  },
  {
    q: "Which one of the following is correct about human role in system administration?",
    options: [
      "Ethics is not required",
      "Requires patience, understanding, and knowledge",
      "Sysadmin need not have skills or confidence",
      "Doesn't need organizational skills"
    ],
    answer: 1,
    explanation: "System administration requires ethics, patience, skill, knowledge, and organization."
  },
  {
    q: "What is the output of the C++ fragment: for(int n=1; n<=18; n+=2){if(n%7!=0) cout<<n<<' '; else break;}",
    options: ["1 3 5", "1 2 3 4 5 6", "3 5 7", "1 3 5 7 11 13 15 17"],
    answer: 0,
    explanation: "Numbers 1,3,5 satisfy n%7!=0; loop breaks at 7."
  },
  {
    q: "Which one of the following is not correct about computer architecture and organization?",
    options: [
      "Architecture can remain for long time, organization can change",
      "Architecture can be used long time across different models",
      "Organization can last as long as architecture",
      "Manufacturers offer same architecture but different organization"
    ],
    answer: 2,
    explanation: "Organization changes faster; it cannot last as long as architecture."
  },
  {
    q: "Which layer uses port number to identify applications?",
    options: ["Application layer", "Physical layer", "Network layer", "Transport layer"],
    answer: 3,
    explanation: "Transport layer uses port numbers to identify applications (e.g., TCP/UDP)."
  },
  {
    q: "Assume weighted graph G(V,E). Which is an optimization problem on G?",
    options: [
      "Traverse all vertices",
      "How many cycles exist",
      "Find minimum spanning tree",
      "Is vertex p reachable from q"
    ],
    answer: 2,
    explanation: "Finding MST is an optimization problem (minimizing total edge weight)."
  },
  {
    q: "When two transactions access same DB items and interleaving causes incorrect value, which problem occurs?",
    options: ["Dirty read", "Incorrect summary", "Lost update", "Temporary read"],
    answer: 2,
    explanation: "Lost update occurs when one transaction overwrites another's updates."
  },
  {
    q: "Time complexity order of binary search algorithm?",
    options: ["O(log2 n)", "O(1)", "O(n)", "O(n³)"],
    answer: 0,
    explanation: "Binary search has O(log n) time complexity."
  },
  {
    q: "Which is true about Java and JavaScript?",
    options: [
      "Both are object-oriented",
      "JavaScript used in sophisticated applications",
      "More features in JavaScript than Java",
      "JavaScript is compiled and interpreted"
    ],
    answer: 1,
    explanation: "JavaScript can be used in web apps, dynamic front-end apps, etc."
  },
  {
    q: "Which is a two-level cache having internal and external caches?",
    options: ["Split cache", "Single level cache", "Multilevel cache", "Unified cache"],
    answer: 2,
    explanation: "Multilevel cache (L1 internal + L2 external) improves performance."
  },
  {
    q: "Which one is not correct about threads?",
    options: [
      "Threads have registers for working memory",
      "Threads are entities scheduled for CPU",
      "It is a group of processes",
      "Threads have program counters"
    ],
    answer: 2,
    explanation: "Threads are not groups of processes; they are smaller units of execution."
  },
  {
    q: "Which one is used for syntax analysis?",
    options: ["Scanner", "Parser", "Linker", "Loader"],
    answer: 1,
    explanation: "Parser checks the grammatical structure of tokens."
  },
  {
    q: "Which statement is false about programming language generations?",
    options: [
      "Assembly language is machine independent",
      "Fifth generation languages need powerful hardware",
      "Machine language can be executed without translation",
      "Assembly must be translated to machine code before execution"
    ],
    answer: 0,
    explanation: "Assembly language is machine dependent, not independent."
  },
  {
    q: "At which OSI layer are bridges, switches, and NICs used?",
    options: ["Application layer", "Physical layer", "Network layer", "Data link layer"],
    answer: 3,
    explanation: "Data link layer handles MAC addresses; switches and NICs operate here."
  },
  {
    q: "Which algorithm can be used to extract Minimum Spanning Tree?",
    options: ["Merge sort", "Huffman encoding", "Prim's algorithm", "Dijkstra's algorithm"],
    answer: 2,
    explanation: "Prim's algorithm finds the minimum spanning tree of a weighted graph."
  },
  {
    q: "A network architecture characteristic that allows network to expand without significant degradation?",
    options: ["Scalability", "Transparency", "Latency", "Availability"],
    answer: 0,
    explanation: "Scalability measures how well a network grows without performance loss."
  },
  {
    q: "Which one is an example of non-preemptive scheduling?",
    options: ["Round Robin", "Shortest Job First (non-preemptive)", "Multilevel Queue", "Preemptive priority scheduling"],
    answer: 1,
    explanation: "SJF non-preemptive executes a job until it finishes without interruption."
  },
  {
    q: "Which one of the following statements is correct about relational database?",
    options: [
      "Data stored in unstructured format",
      "Data stored in hierarchical format",
      "Data stored in tabular format with rows and columns",
      "Data stored in network format"
    ],
    answer: 2,
    explanation: "Relational DB stores data in structured tables (rows and columns)."
  },
  {
    q: "Which one is correct about deadlock?",
    options: [
      "Deadlock occurs when processes wait indefinitely",
      "Deadlock is always fatal",
      "Deadlock never happens in multiprogramming",
      "Deadlock can occur in single-threaded processes"
    ],
    answer: 0,
    explanation: "Deadlock happens when processes wait indefinitely for resources held by each other."
  }


  ],



  
"haramayaa":[


  {
    q: "Which data structure is used to reverse the order of elements?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "By utilizing the LIFO principle, a stack can reverse the order of elements by popping them and then pushing them onto a new stack."
  },
  {
    q: "Which data structure is commonly used for implementing function call stacks in programming languages?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks are commonly used to manage function calls and their corresponding execution contexts in programming languages."
  },
  {
    q: "Which data structure can be implemented using a circular array or a linked list with pointers?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "A queue can be implemented using a circular array or a linked list with pointers, allowing for efficient enqueue and dequeue operations."
  },
  {
    q: "Which data structure has a First-In-First-Out (FIFO) property?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "A queue follows the FIFO property, meaning that the first element inserted is the first one to be removed."
  },
  {
    q: "Which data structure is suitable for implementing a breadth-first search algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "Breadth-first search visits nodes level by level, which is best facilitated by a queue to maintain the order of exploration."
  },
  {
    q: "Which data structure uses dynamic memory allocation for node creation?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "Linked lists use dynamic memory allocation to create nodes, allowing for flexibility in size and structure."
  },
  {
    q: "Which data structure can be easily implemented using an array?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks can be efficiently implemented using arrays, as they only require a top pointer to keep track of the last inserted element."
  },
  {
    q: "Which data structure can be traversed in both forward and backward directions?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "A doubly linked list allows traversal in both forward and backward directions by utilizing the previous and next pointers in each node."
  },
  {
    q: "Which data structure guarantees constant-time access to the first and last elements?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "A doubly linked list guarantees constant-time access to both the first and last elements by maintaining appropriate references."
  },
  {
    q: "Which data structure can be efficiently used for implementing undo and redo functionality in applications?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks are commonly used for implementing undo and redo functionality, where actions can be pushed onto the stack and popped for undo or redo operations."
  },
  {
    q: "Which data structure is best suited for reversing the order of elements in a list?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "Reversing the order of elements in a linked list can be efficiently achieved by modifying the pointers of each node."
  },
  {
    q: "Which data structure can be used to implement a depth-first search algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Depth-first search utilizes a stack to store the unvisited nodes and explore the graph or tree in a depth-first manner."
  },
  {
    q: "Which data structure can be used to implement a priority queue?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 3,
    explanation: "A binary heap, which is a type of binary tree, can be used to implement a priority queue efficiently."
  },
  {
    q: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "In a stack, the last element inserted is the first one to be removed, following the LIFO principle."
  },
  {
    q: "Which data structure follows the First-In-First-Out (FIFO) principle?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "In a queue, the first element inserted is the first one to be removed, following the FIFO principle."
  },
  {
    q: "Which data structure allows access to elements only at the beginning and the end?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "A linked list allows access to elements only at the beginning (head) and the end (tail) by traversing the nodes."
  },
  {
    q: "Which data structure is based on nodes connected via pointers?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "In a linked list, nodes are connected via pointers or references, forming a sequence of elements."
  },
  {
    q: "Which data structure can be implemented using an array or a linked list?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "A stack can be implemented using either an array or a linked list, as both provide the required operations."
  },
  {
    q: "Which data structure allows elements to be inserted and removed from both ends?",
    options: ["Stack", "Queue", "Deque", "Binary tree"],
    answer: 2,
    explanation: "A deque (double-ended queue) allows elements to be inserted and removed from both the front and the rear."
  },
  {
    q: "Which data structure ensures that elements are accessed in a specific order?",
    options: ["Stack", "Queue", "Priority queue", "Binary tree"],
    answer: 2,
    explanation: "A priority queue ensures that elements are accessed according to their priority, which is specified during insertion."
  },


  {
    q: "Which data structure is a binary tree with the property that the value of each node is greater than or equal to its left child and less than or equal to its right child?",
    options: ["AVL tree", "Binary search tree", "Red-black tree", "B-tree"],
    answer: 1,
    explanation: "A binary search tree (BST) follows the property where the value of each node is greater than or equal to its left child and less than or equal to its right child."
  },
  {
    q: "Which data structure represents a hierarchical structure with a set of connected nodes?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 3,
    explanation: "A binary tree represents a hierarchical structure where each node can have at most two children."
  },
  {
    q: "Which data structure allows efficient insertion and deletion at both ends?",
    options: ["Stack", "Queue", "Deque", "Binary tree"],
    answer: 2,
    explanation: "A deque (double-ended queue) allows efficient insertion and deletion at both the front and the rear ends."
  },
  {
    q: "Which data structure can be used to reverse the order of elements?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "By using a stack, the order of elements can be reversed as elements are inserted and removed in the reverse order."
  },
  {
    q: "Which data structure uses the concept of 'first in, last out' to handle function calls and recursion?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks are commonly used in programming to handle function calls and recursion, as the most recent function call is completed first."
  },
  {
    q: "Which data structure is suitable for implementing breadth-first search (BFS) algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "The BFS algorithm explores nodes in a level-by-level manner, making a queue a suitable data structure to store the nodes."
  },
  {
    q: "Which data structure is suitable for implementing depth-first search (DFS) algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "The DFS algorithm explores nodes by going as deep as possible before backtracking, making a stack a suitable data structure to store the nodes."
  },
  {
    q: "Which data structure can be used to implement a cache with a limited capacity?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "By limiting the capacity of a stack, the least recently used items are automatically removed when the stack is full, making it suitable for implementing a cache."
  },
  {
    q: "Which data structure is commonly used for implementing undo-redo functionality in text editors?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "A stack is commonly used to implement undo-redo functionality in text editors, where the most recent changes can be undone or redone."
  },
  {
    q: "Which data structure allows easy traversal in a Last-In-First-Out (LIFO) order?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks allow easy traversal in a LIFO order, where the most recently inserted element is accessed first."
  },
  {
    q: "Which data structure allows efficient insertion and deletion at both ends, and supports constant-time access to the middle element?",
    options: ["Stack", "Queue", "Deque", "Binary tree"],
    answer: 2,
    explanation: "A deque (double-ended queue) allows efficient insertion and deletion at both ends and supports constant-time access to the middle element."
  },
  {
    q: "Which data structure is commonly used for implementing the undo operation in a text editor?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "A stack is commonly used to implement the undo operation in a text editor, where the most recent changes can be undone in reverse order."
  },
  {
    q: "Which data structure is used to implement a buffer with a fixed-size capacity?",
    options: ["Stack", "Queue", "Linked list", "Circular buffer"],
    answer: 3,
    explanation: "A circular buffer is a data structure that uses a fixed-size array and maintains a read and write pointer to implement a buffer with a fixed-size capacity."
  },
  {
    q: "Which sorting algorithm has a worst-case time complexity of O(n^2)?",
    options: ["Merge sort", "Quick sort", "Insertion sort", "Heap sort"],
    answer: 2,
    explanation: "Insertion sort has a worst-case time complexity of O(n^2) when the input array is in reverse order."
  },
  {
    q: "Which sorting algorithm is based on the divide-and-conquer strategy?",
    options: ["Bubble sort", "Selection sort", "Merge sort", "Radix sort"],
    answer: 2,
    explanation: "Merge sort divides the input array into smaller subarrays, sorts them recursively, and then merges them back together."
  },
  {
    q: "Which sorting algorithm is known for its stability, meaning that elements with equal keys retain their relative order?",
    options: ["Quick sort", "Heap sort", "Radix sort", "Merge sort"],
    answer: 3,
    explanation: "Merge sort is stable because it merges the subarrays in a way that preserves the relative order of equal elements."
  },
  {
    q: "Which sorting algorithm uses a pivot element to partition the array into two subarrays?",
    options: ["Bubble sort", "Selection sort", "Quick sort", "Insertion sort"],
    answer: 2,
    explanation: "Quick sort selects a pivot element, partitions the array around it, and recursively sorts the subarrays."
  },
  {
    q: "Which sorting algorithm has a time complexity of O(n log n) in the average and worst cases?",
    options: ["Bubble sort", "Selection sort", "Merge sort", "Radix sort"],
    answer: 2,
    explanation: "Merge sort has a time complexity of O(n log n) in both the average and worst cases."
  },
  {
    q: "Which searching algorithm is based on comparing the target value with elements at midpoints of the array?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search repeatedly divides the search space in half by comparing the target value with the middle element."
  },
  {
    q: "Which searching algorithm is applicable only to sorted arrays?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search requires a sorted array to perform the divide-and-conquer strategy."
  },
  {
    q: "Which searching algorithm works by comparing the target value with elements from the beginning of the array until a match is found?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 0,
    explanation: "Linear search checks each element in the array sequentially until a match is found or the end of the array is reached."
  },
  {
    q: "Which searching algorithm is more efficient for uniformly distributed data in a sorted array?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 2,
    explanation: "Interpolation search makes an educated guess about the position of the target value based on the distribution of the data."
  },
  {
    q: "Which searching algorithm is commonly used for searching in graphs and trees?",
    options: ["Linear search", "Binary search", "Depth-first search", "Breadth-first search"],
    answer: 2,
    explanation: "Depth-first search explores vertices or nodes in a graph or tree by going as deep as possible before backtracking."
  },
  {
    q: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 0,
    explanation: "Bubble sort compares adjacent elements and swaps them if they are in the wrong order, resulting in a worst-case time complexity of O(n^2)."
  },
  {
    q: "Which sorting algorithm is based on the divide-and-conquer strategy?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort divides the input into smaller subproblems, sorts them recursively, and then merges the sorted subproblems to obtain the final sorted output."
  },
  {
    q: "Which sorting algorithm has the average-case time complexity of O(n log n)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 1,
    explanation: "Quick sort, on average, has a time complexity of O(n log n) by choosing a pivot element to partition the input and recursively sorting the subarrays."
  },
  {
    q: "Which sorting algorithm works by repeatedly selecting the smallest element from the unsorted portion and placing it at the beginning?",
    options: ["Bubble sort", "Quick sort", "Selection sort", "Insertion sort"],
    answer: 2,
    explanation: "Selection sort repeatedly finds the smallest element from the unsorted portion and swaps it with the element at the beginning of the sorted portion."
  },
  {
    q: "Which sorting algorithm is an in-place comparison sort algorithm?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 1,
    explanation: "Quick sort operates by partitioning the input array and sorting it in-place, requiring no additional memory for the sorting process."
  },
  {
    q: "Which searching algorithm requires the input array to be sorted?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search requires the input array to be sorted and operates by repeatedly dividing the search space in half until the target element is found."
  },
  {
    q: "Which searching algorithm has a worst-case time complexity of O(log n)?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search has a worst-case time complexity of O(log n) due to its ability to divide the search space in half at each step."
  },




  {
    q: "Which searching algorithm is based on comparing the target element with elements at regular intervals?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 2,
    explanation: "Hash search involves comparing the target element with elements at regular intervals based on a hashing function."
  },
  {
    q: "Which searching algorithm is suitable for unsorted arrays or lists?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 0,
    explanation: "Linear search can be applied to unsorted arrays or lists by sequentially comparing each element until the target element is found."
  },
  {
    q: "Which searching algorithm is commonly used for traversing graphs or trees?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 3,
    explanation: "Depth-first search is a graph/tree traversal algorithm that explores as far as possible along each branch before backtracking."
  },
  {
    q: "Which sorting algorithm has the best-case time complexity of O(n)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 3,
    explanation: "Insertion sort has a best-case time complexity of O(n) when the input array is already sorted, requiring minimal comparisons and swaps."
  },
  {
    q: "Which sorting algorithm is stable, meaning it preserves the relative order of equal elements?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort is a stable sorting algorithm as it guarantees the relative order of equal elements during the merging phase."
  },
  {
    q: "Which sorting algorithm is commonly used for small input sizes or partially sorted arrays?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 3,
    explanation: "Insertion sort performs well on small input sizes or partially sorted arrays due to its efficient element insertion strategy."
  },
  {
    q: "Which searching algorithm divides the search space into three parts at each step?",
    options: ["Linear search", "Binary search", "Ternary search", "Depth-first search"],
    answer: 2,
    explanation: "Ternary search divides the search space into three equal parts at each step, narrowing down the search space more quickly than binary search."
  },
  {
    q: "Which sorting algorithm has a space complexity of O(1) in the best and average cases?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 3,
    explanation: "Insertion sort requires only a constant amount of additional space, resulting in a space complexity of O(1) in the best and average cases."
  },
  {
    q: "Which searching algorithm is based on the principle of divide-and-conquer?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search divides the search space in half at each step, following the divide-and-conquer strategy."
  },
  {
    q: "Which sorting algorithm has the worst-case time complexity of O(n log n)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort has a worst-case time complexity of O(n log n) due to its recursive divide-and-conquer approach."
  },
  {
    q: "Which sorting algorithm is efficient for sorting data in external memory (hard disks)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort is efficient for sorting data in external memory as it minimizes disk I/O operations by performing sequential reads and writes."
  },
  {
    q: "Which searching algorithm is suitable for large datasets or databases?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 2,
    explanation: "Hash search is suitable for large datasets or databases due to its efficient lookup time based on hash values."
  },
  {
    q: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 1,
    explanation: "Quick sort has the best average-case time complexity among the given options, with an average complexity of O(n log n) when implemented efficiently."
  },
  {
    q: "Which data structure is best suited for implementing a dictionary with fast lookup and insertion?",
    options: ["Array", "Linked list", "Hash table", "Stack"],
    answer: 2,
    explanation: "Hash tables provide fast lookup and insertion operations with an average time complexity of O(1) using key-value pairs."
  },
  {
    q: "Which algorithm is commonly used for finding the shortest path in a graph?",
    options: ["Depth-first search", "Breadth-first search", "Dijkstra's algorithm", "Prim's algorithm"],
    answer: 2,
    explanation: "Dijkstra's algorithm is widely used for finding the shortest path between nodes in a weighted graph."
  },
  {
    q: "Which data structure is typically used to implement a stack?",
    options: ["Array", "Linked list", "Queue", "Tree"],
    answer: 1,
    explanation: "Linked lists provide efficient insertion and deletion operations at the beginning of the list, making them suitable for implementing a stack."
  },
  {
    q: "Which algorithm is used to sort elements in a specific order based on their priorities?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Heap sort"],
    answer: 3,
    explanation: "Heap sort uses a binary heap data structure to sort elements based on their priorities, making it an efficient priority-based sorting algorithm."
  },
  {
    q: "Which data structure is best suited for implementing a cache with efficient insertion and removal of elements?",
    options: ["Array", "Linked list", "Hash table", "Queue"],
    answer: 2,
    explanation: "Hash tables provide fast insertion and removal operations, making them suitable for implementing a cache with efficient key-based access."
  },
  {
    q: "Which algorithm is used to find the maximum subarray sum in an array?",
    options: ["Binary search", "Quick sort", "Merge sort", "Kadane's algorithm"],
    answer: 3,
    explanation: "Kadane's algorithm is used to find the maximum subarray sum in an array with a time complexity of O(n)."
  },
  {
    q: "Which data structure is commonly used to implement a graph?",
    options: ["Array", "Linked list", "Hash table", "Adjacency list"],
    answer: 3,
    explanation: "Adjacency lists are commonly used to represent graphs efficiently by storing the vertices and their adjacent vertices."
  },
  {
    q: "Which algorithm is used to find the minimum spanning tree in a graph?",
    options: ["Depth-first search", "Breadth-first search", "Dijkstra's algorithm", "Prim's algorithm"],
    answer: 3,
    explanation: "Prim's algorithm is used to find the minimum spanning tree in a weighted graph, connecting all vertices with the minimum total weight."
  },
  {
    q: "Which data structure is best suited for implementing a priority queue?",
    options: ["Array", "Linked list", "Heap", "Queue"],
    answer: 2,
    explanation: "Heaps provide efficient insertion and deletion of elements with the highest priority, making them suitable for implementing a priority queue."
  },
  {
    q: "Which algorithm is commonly used for pattern matching in strings?",
    options: ["Depth-first search", "Breadth-first search", "Dijkstra's algorithm", "Knuth-Morris-Pratt algorithm"],
    answer: 3,
    explanation: "The Knuth-Morris-Pratt algorithm is used for efficient pattern matching in strings by avoiding unnecessary comparisons based on previously matched characters."
  },
  {
    q: "Which of the following is not a primary function of the network layer in the OSI model?",
    options: ["Routing", "Addressing", "Flow control", "Fragmentation"],
    answer: 2,
    explanation: "The network layer is responsible for routing packets across different networks and providing addressing and fragmentation services. Flow control is typically handled by the transport layer."
  },
  {
    q: "What is the purpose of a MAC address in computer networking?",
    options: ["To identify a device within a local area network (LAN)", "To identify a device within a wide area network (WAN)", "To establish a secure connection between two devices", "To determine the IP address of a device"],
    answer: 0,
    explanation: "A MAC (Media Access Control) address is a unique identifier assigned to a network interface card (NIC) and is used to identify a device within a local network."
  },


  {
    q: "What is the purpose of a firewall in computer networks?",
    options: [
      "To encrypt network traffic for secure communication",
      "To manage network resources and allocate bandwidth",
      "To filter and control network traffic based on predefined rules",
      "To connect two separate networks and enable communication between them"
    ],
    answer: 2,
    explanation: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on a set of rules to protect the network from unauthorized access and potential threats."
  },
  {
    q: "Which of the following network topologies provides the highest fault tolerance?",
    options: ["Bus topology", "Ring topology", "Star topology", "Mesh topology"],
    answer: 3,
    explanation: "In a mesh topology, each device is connected to every other device, providing multiple redundant paths. This redundancy enhances fault tolerance and ensures high availability in case of link failures."
  },
  {
    q: "Which network addressing scheme is used in IPv6?",
    options: ["Classful addressing", "Classless addressing", "Subnetting", "CIDR (Classless Inter-Domain Routing)"],
    answer: 1,
    explanation: "IPv6 uses classless addressing, where the length of the network prefix is not fixed as in classful addressing. It allows for more efficient allocation of IP addresses and supports hierarchical addressing."
  },
  {
    q: "Which protocol is responsible for translating domain names into IP addresses?",
    options: ["DHCP (Dynamic Host Configuration Protocol)", "DNS (Domain Name System)", "ARP (Address Resolution Protocol)", "ICMP (Internet Control Message Protocol)"],
    answer: 1,
    explanation: "DNS is responsible for translating domain names, such as www.example.com, into corresponding IP addresses."
  },
  {
    q: "What is the purpose of NAT (Network Address Translation) in computer networks?",
    options: [
      "To secure network communications through encryption",
      "To provide redundancy and fault tolerance",
      "To translate private IP addresses to public IP addresses",
      "To manage network resources and allocate bandwidth"
    ],
    answer: 2,
    explanation: "NAT allows multiple devices within a private network to share a single public IP address by translating the private IP addresses to the public IP address when communicating with external networks."
  },
  {
    q: "Which of the following is an example of a connectionless protocol?",
    options: ["TCP (Transmission Control Protocol)", "UDP (User Datagram Protocol)", "HTTP (Hypertext Transfer Protocol)", "FTP (File Transfer Protocol)"],
    answer: 1,
    explanation: "UDP is a connectionless protocol that does not establish a dedicated connection before sending data. It provides fast and lightweight communication but does not guarantee reliable delivery."
  },
  {
    q: "Which network device operates at the Data Link layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Bridge"],
    answer: 1,
    explanation: "A switch operates at the Data Link layer (Layer 2) of the OSI model and is responsible for forwarding data packets between devices within a local network based on their MAC addresses."
  },
  {
    q: "Which protocol is used for secure communication over the internet?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: 2,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) is a protocol that uses encryption to ensure secure communication over the internet. It is commonly used for secure transactions, such as online banking and e-commerce."
  },
  {
    q: "What is the function of a router in a computer network?",
    options: [
      "To connect multiple networks together",
      "To amplify the strength of network signals",
      "To provide firewall protection",
      "To manage network resources and allocate bandwidth"
    ],
    answer: 0,
    explanation: "A router is a networking device that forwards data packets between different networks. It connects multiple networks and determines the best path for data transmission."
  },
  {
    q: "Which of the following is a network device that operates at the Physical layer of the OSI model?",
    options: ["Switch", "Hub", "Router", "Bridge"],
    answer: 1,
    explanation: "A hub is a network device that operates at the Physical layer (Layer 1) of the OSI model. It simply broadcasts incoming data to all connected devices without any intelligence or filtering."
  },
  {
    q: "Which network component is responsible for converting digital data into analog signals for transmission over telephone lines?",
    options: ["Modem", "Router", "Switch", "Firewall"],
    answer: 0,
    explanation: "A modem (Modulator-Demodulator) is used to modulate digital data into analog signals for transmission over analog telephone lines. It also demodulates the analog signals back into digital data at the receiving end."
  },
  {
    q: "Which protocol is used for sending and receiving email messages?",
    options: ["SMTP", "HTTP", "FTP", "DNS"],
    answer: 0,
    explanation: "SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending and receiving email messages between mail servers."
  },
  {
    q: "What is the purpose of DNS (Domain Name System) in computer networks?",
    options: [
      "To encrypt network traffic for secure communication",
      "To manage network resources and allocate bandwidth",
      "To convert domain names into IP addresses",
      "To provide firewall protection"
    ],
    answer: 2,
    explanation: "DNS is responsible for translating domain names, such as www.example.com, into their corresponding IP addresses. It acts as a directory for mapping human-readable domain names to machine-readable IP addresses."
  },
  {
    q: "Which of the following is a network protocol used for file transfer between computers?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: 1,
    explanation: "FTP (File Transfer Protocol) is a network protocol used for transferring files between computers over a network. It provides functionalities for uploading, downloading, and managing files on remote servers."
  },
  {
    q: "Which network component is responsible for connecting multiple devices within a local area network (LAN)?",
    options: ["Hub", "Router", "Switch", "Modem"],
    answer: 2,
    explanation: "A switch is a network component used to connect multiple devices within a local area network (LAN). It forwards data packets to the intended device based on their MAC addresses."
  },
  {
    q: "What is the primary function of a firewall in a computer network?",
    options: [
      "To manage network resources and allocate bandwidth",
      "To encrypt network traffic for secure communication",
      "To filter and monitor network traffic for security purposes",
      "To convert domain names into IP addresses"
    ],
    answer: 2,
    explanation: "A firewall is a security device that monitors and filters network traffic based on predetermined rules. It acts as a barrier between the internal network and external networks, providing protection against unauthorized access and malicious activities."
  },
  {
    q: "Which protocol is responsible for assigning IP addresses to devices on a network automatically?",
    options: ["HTTP", "DNS", "DHCP", "FTP"],
    answer: 2,
    explanation: "DHCP is a network protocol that dynamically assigns IP addresses to devices on a network. It simplifies the process of network configuration by automatically providing IP addresses, subnet masks, and other network parameters to connected devices."
  },
  {
    q: "Which layer of the OSI reference model is responsible for establishing, managing, and terminating connections between devices?",
    options: ["Physical layer", "Data Link layer", "Transport layer", "Session layer"],
    answer: 2,
    explanation: "The transport layer is responsible for establishing, managing, and terminating connections between devices. It ensures reliable data delivery and provides mechanisms for flow control and error recovery."
  },
  {
    q: "Which protocol is used for reliable data delivery at the transport layer in the TCP/IP protocol suite?",
    options: ["UDP", "IP", "FTP", "TCP"],
    answer: 3,
    explanation: "TCP is a reliable transport protocol that ensures the reliable delivery of data between devices in the TCP/IP protocol suite. It provides features such as error detection, flow control, and congestion control."
  },
  {
    q: "Which layer of the OSI reference model is responsible for addressing and routing data packets across different networks?",
    options: ["Network layer", "Data Link layer", "Transport layer", "Physical layer"],
    answer: 0,
    explanation: "The network layer is responsible for addressing and routing data packets across different networks. It determines the optimal path for data transmission and performs logical addressing using IP addresses."
  },
  {
    q: "Which layer of the OSI reference model is responsible for reliable data delivery within the same network segment?",
    options: ["Network layer", "Transport layer", "Data Link layer", "Application layer"],
    answer: 2,
    explanation: "The Data Link layer is responsible for reliable data delivery within the same network segment. It handles the framing of data packets, error detection, and correction at the link level."
  },
  {
    q: "Which protocol is used for sending and receiving email messages over the internet?",
    options: ["SMTP", "FTP", "HTTP", "DNS"],
    answer: 0,
    explanation: "SMTP is the standard protocol used for sending and receiving email messages over the internet. It is responsible for the transfer of email messages between mail servers."
  },
  {
    q: "Which layer of the OSI reference model is responsible for converting data into a format suitable for transmission over a network?",
    options: ["Presentation layer", "Session layer", "Physical layer", "Application layer"],
    answer: 0,
    explanation: "The presentation layer is responsible for converting data into a format suitable for transmission over a network. It handles data compression, encryption, and formatting."
  },
  {
    q: "Which protocol is used for translating domain names into IP addresses?",
    options: ["DNS", "FTP", "HTTP", "SMTP"],
    answer: 0,
    explanation: "DNS is used for translating domain names into their corresponding IP addresses. It acts as a distributed database that maps domain names to IP addresses."
  }



  







  
  
  ],



























































"AMBO":[

  {
    q: "Which phase of the software development life cycle is responsible for gathering and analyzing user requirements?",
    options: ["Analysis", "Design", "Development", "Testing"],
    answer: 0,
    explanation: "The analysis phase focuses on gathering and analyzing user requirements to understand what the software should accomplish."
  },
  {
    q: "Which design principle suggests that software components should have a single, well-defined responsibility?",
    options: ["DRY (Don't Repeat Yourself) principle", "SOLID principle", "KISS (Keep It Simple, Stupid) principle", "YAGNI (You Ain't Gonna Need It) principle"],
    answer: 1,
    explanation: "The SOLID principle includes the Single Responsibility Principle, which states that a software component should have only one responsibility."
  },
  {
    q: "Which of the following is an agile development methodology?",
    options: ["Waterfall model", "Scrum", "V-model", "Spiral model"],
    answer: 1,
    explanation: "Scrum is an agile development methodology that emphasizes iterative development, collaboration, and flexibility."
  },
  {
    q: "Which software development approach involves breaking down a project into small, deliverable increments?",
    options: ["Waterfall model", "Agile methodology", "Prototype model", "Spiral model"],
    answer: 1,
    explanation: "Agile methodology involves breaking down a project into small, deliverable increments called iterations or sprints, allowing for continuous feedback and adaptation."
  },
  {
    q: "Which software testing technique focuses on finding defects by executing the software without knowledge of its internal structure?",
    options: ["White-box testing", "Black-box testing", "Integration testing", "System testing"],
    answer: 1,
    explanation: "Black-box testing is a software testing technique where the software is tested without knowledge of its internal structure."
  },
  {
    q: "Which diagramming technique is used to visualize the behavior of a software system over time?",
    options: ["Use case diagrams", "Class diagrams", "Sequence diagrams", "State machine diagrams"],
    answer: 2,
    explanation: "Sequence diagrams are used to visualize the behavior of a software system over time, showing interactions between objects or components."
  },
  {
    q: "Which software development methodology promotes adaptive planning, evolutionary development, and continuous improvement?",
    options: ["Waterfall model", "Agile methodology", "V-model", "Spiral model"],
    answer: 1,
    explanation: "Agile methodology promotes adaptive planning, evolutionary development, and continuous improvement."
  },
  {
    q: "Which technique is used to represent the flow of activities and decisions in a software system?",
    options: ["Use case modeling", "Activity diagrams", "State machine diagrams", "Component diagrams"],
    answer: 1,
    explanation: "Activity diagrams represent the flow of activities and decisions in a software system, showing sequence of actions and conditions."
  },
  {
    q: "Which software development approach involves building a working version of the software system early in the development process?",
    options: ["Waterfall model", "Agile methodology", "Prototype model", "Spiral model"],
    answer: 2,
    explanation: "The prototype model involves building a working version early to gather feedback and refine requirements."
  },
  {
    q: "Which testing technique focuses on testing the interaction between different components or modules of a software system?",
    options: ["Unit testing", "Integration testing", "System testing", "Regression testing"],
    answer: 1,
    explanation: "Integration testing ensures that different components or modules work together correctly."
  },
  {
    q: "Which design principle suggests that software entities should depend on abstractions, not on concrete implementations?",
    options: ["DRY (Don't Repeat Yourself) principle", "SOLID principle", "KISS (Keep It Simple, Stupid) principle", "YAGNI (You Ain't Gonna Need It) principle"],
    answer: 1,
    explanation: "The Dependency Inversion principle of SOLID states that software entities should depend on abstractions rather than concrete implementations."
  },
  {
    q: "Which software development approach follows a linear, sequential flow from requirements gathering to testing and maintenance?",
    options: ["Waterfall model", "Agile methodology", "Prototype model", "Spiral model"],
    answer: 0,
    explanation: "The waterfall model follows a linear, sequential flow where each phase is completed before moving to the next."
  },
  {
    q: "Which technique is used to estimate the size and complexity of a software project?",
    options: ["Use case modeling", "Storyboarding", "Function point analysis", "Pair programming"],
    answer: 2,
    explanation: "Function point analysis estimates the size and complexity of a project based on system functionality."
  },
  {
    q: "Which tool is used to track and manage software issues, bugs, and tasks throughout the development process?",
    options: ["Git", "Jira", "Jenkins", "Docker"],
    answer: 1,
    explanation: "Jira is a widely used tool for issue tracking and project management."
  },
  {
    q: "Which design principle suggests that software entities should be open for extension but closed for modification?",
    options: ["DRY (Don't Repeat Yourself) principle", "SOLID principle", "KISS (Keep It Simple, Stupid) principle", "YAGNI (You Ain't Gonna Need It) principle"],
    answer: 1,
    explanation: "The Open-Closed principle of SOLID states that software entities should be open for extension but closed for modification."
  },
  {
    q: "Which technique is used to represent the static structure of a software system, including classes, relationships, and attributes?",
    options: ["Use case diagrams", "Class diagrams", "Sequence diagrams", "State machine diagrams"],
    answer: 1,
    explanation: "Class diagrams represent the static structure of a system including classes, relationships, and attributes."
  },
  {
    q: "Which software development methodology involves regular and frequent communication between developers and stakeholders?",
    options: ["Waterfall model", "Agile methodology", "V-model", "Spiral model"],
    answer: 1,
    explanation: "Agile methodology emphasizes frequent communication between developers and stakeholders."
  },
  {
    q: "Which technique is used to capture and document user requirements in a structured manner?",
    options: ["Use case modeling", "Storyboarding", "Wireframing", "Pair programming"],
    answer: 0,
    explanation: "Use case modeling captures and documents user requirements in a structured manner."
  },
  {
    q: "Which testing technique focuses on retesting modified or affected parts of the software to ensure that changes do not introduce new defects?",
    options: ["Unit testing", "Integration testing", "Regression testing", "System testing"],
    answer: 2,
    explanation: "Regression testing ensures changes do not introduce new defects or break existing functionality."
  },
  {
    q: "Which tool is used to package an application and its dependencies into a container for easy deployment and scalability?",
    options: ["Git", "Jira", "Jenkins", "Docker"],
    answer: 3,
    explanation: "Docker packages an application and its dependencies into a container for consistent deployment."
  },
  {
    q: "Which phase of the software development life cycle (SDLC) focuses on gathering and understanding user requirements?",
    options: ["Analysis", "Design", "Implementation", "Testing"],
    answer: 0,
    explanation: "The analysis phase is dedicated to gathering and understanding user requirements."
  },
  {
    q: "What is the primary goal of software design?",
    options: ["To create a visually appealing user interface", "To optimize performance", "To translate user requirements into a detailed plan", "To develop and test individual software components"],
    answer: 2,
    explanation: "The primary goal of software design is to translate user requirements into a detailed plan."
  },
  {
    q: "Which software development approach emphasizes frequent iterations, collaboration, and responsiveness to change?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology focuses on delivering working software incrementally with continuous feedback."
  },
  {
    q: "What is the purpose of modularization in software design?",
    options: ["To improve code readability", "To ensure efficient memory management", "To facilitate code reuse and maintenance", "To minimize software defects"],
    answer: 2,
    explanation: "Modularization breaks down a system into smaller modules for reuse, maintainability, and collaboration."
  },
  {
    q: "Which type of testing aims to uncover defects in the interaction between different components of a software system?",
    options: ["Unit testing", "Integration testing", "System testing", "Regression testing"],
    answer: 1,
    explanation: "Integration testing uncovers defects in the interaction between system components."
  },
  {
    q: "Which programming paradigm is based on the concept of objects and their interactions?",
    options: ["Functional programming", "Procedural programming", "Object-oriented programming", "Event-driven programming"],
    answer: 2,
    explanation: "Object-oriented programming is based on objects which encapsulate data and behavior."
  },
  {
    q: "What is the purpose of version control systems in software development?",
    options: ["To manage schedules", "To facilitate collaboration", "To track and control changes to source code", "To automate deployment"],
    answer: 2,
    explanation: "Version control systems track and control changes to source code and files, enabling collaboration."
  },
  {
    q: "Which software development methodology follows a sequential flow, with each phase being completed before moving to the next?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 0,
    explanation: "The waterfall model completes each SDLC phase before moving to the next."
  },
  {
    q: "What is the primary purpose of software documentation?",
    options: ["Record code authorship", "Provide instructions for end-users", "Assist in maintenance and understanding", "Ensure compliance with coding standards"],
    answer: 2,
    explanation: "Documentation assists in software maintenance and understanding, providing information about architecture, design, and functionality."
  },
  {
    q: "Which software development approach involves building small, incremental releases of the software system?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology builds small, incremental releases allowing continuous feedback and flexibility."
  },
  {
    q: "Which design principle advocates for designing software components that have a single responsibility?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Single Responsibility Principle"],
    answer: 3,
    explanation: "The Single Responsibility Principle states a component should have only one reason to change."
  },
  {
    q: "Which design pattern is used to ensure that only one instance of a class is created throughout the system?",
    options: ["Singleton pattern", "Factory pattern", "Observer pattern", "Decorator pattern"],
    answer: 0,
    explanation: "The Singleton pattern ensures only one instance of a class exists and provides a global point of access."
  },
  {
    q: "Which type of testing focuses on evaluating the behavior of a software system under normal operating conditions?",
    options: ["Stress testing", "Performance testing", "Functional testing", "Usability testing"],
    answer: 2,
    explanation: "Functional testing ensures the system behaves correctly under normal operating conditions."
  },
  {
    q: "Which programming paradigm promotes the use of data and avoids side effects?",
    options: ["Functional programming", "Procedural programming", "Object-oriented programming", "Event-driven programming"],
    answer: 0,
    explanation: "Functional programming uses immutable data and avoids side effects."
  },
  {
    q: "Which type of software maintenance involves making changes to adapt a system to new environments or technologies?",
    options: ["Corrective maintenance", "Adaptive maintenance", "Perfective maintenance", "Preventive maintenance"],
    answer: 1,
    explanation: "Adaptive maintenance modifies software to remain functional in new environments or technologies."
  },
  {
    q: "What is the purpose of usability testing in software development?",
    options: ["Evaluate performance under stress", "Assess user-friendliness and ease of use", "Verify compliance with requirements", "Identify and fix defects"],
    answer: 1,
    explanation: "Usability testing evaluates the system from a user's perspective to ensure it is user-friendly."
  },
  {
    q: "Which software development methodology involves iterative development cycles called sprints?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology uses sprints to develop small increments iteratively."
  },
  {
    q: "What is the primary purpose of code refactoring?",
    options: ["Add new features", "Optimize performance", "Improve readability and maintainability", "Fix defects"],
    answer: 2,
    explanation: "Code refactoring improves readability and maintainability without changing external behavior."
  },
  {
    q: "Which software development approach focuses on involving end-users through continuous feedback and collaboration?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology involves end-users via continuous feedback and collaboration."
  },
  {
    q: "Which type of testing involves running the entire software system in an environment similar to production?",
    options: ["Unit testing", "Integration testing", "System testing", "Regression testing"],
    answer: 2,
    explanation: "System testing verifies that all components work together in an environment close to production."
  },
  {
    q: "What is a use case in use case modeling?",
    options: ["Description of UI design", "Procedure for software installation", "Sequence of activities performed by a user or system", "Diagram of component relationships"],
    answer: 2,
    explanation: "A use case represents a sequence of activities performed to achieve a specific goal."
  },
  {
    q: "What is an actor in use case modeling?",
    options: ["A component performing actions", "A person or system interacting with the system", "A diagram of activities", "A user role description"],
    answer: 1,
    explanation: "An actor represents a person or system that interacts with the software system."
  },
  {
    q: "What is the purpose of an include relationship between use cases?",
    options: ["Reuse common steps", "Optional steps", "Extend a use case with additional steps", "Relationship between actors and use cases"],
    answer: 0,
    explanation: "Include relationships represent reuse of common steps between use cases."
  },
  {
    q: "What is the purpose of an extend relationship between use cases?",
    options: ["Reuse common steps", "Optional steps", "Extend a use case with additional steps", "Relationship between actors and use cases"],
    answer: 2,
    explanation: "Extend relationships represent optional extensions to a base use case."
  },
  {
    q: "Which diagram is commonly used to visualize the relationships between actors and use cases in use case modeling?",
    options: ["Class diagram", "Use case diagram", "Activity diagram", "Sequence diagram"],
    answer: 1,
    explanation: "Use case diagrams visualize relationships between actors and use cases."
  },
  {
    q: "What is the purpose of an abstract use case?",
    options: ["Not fully defined use case", "Optional use case", "Cannot be accessed directly by actor", "Represents a use case reused by others"],
    answer: 3,
    explanation: "Abstract use cases represent functionality reused by other use cases."
  },
  {
    q: "What is the purpose of an exception flow in a use case?",
    options: ["Represents an error or exceptional situation", "Represents alternative path", "Represents termination", "Represents actor relationship"],
    answer: 0,
    explanation: "Exception flow describes how the system handles errors or exceptional situations."
  },
  {
    q: "What is the primary goal of use case modeling?",
    options: ["Define architecture", "Identify and document user requirements", "Design user interface", "Implement functionality"],
    answer: 1,
    explanation: "Use case modeling identifies and documents user requirements."
  },
  {
    q: "What is an alternative flow in a use case?",
    options: ["Flowchart of steps", "Parallel activities", "Different sequence based on conditions", "Relationship between use cases"],
    answer: 2,
    explanation: "Alternative flows represent different sequences of steps based on specific conditions."
  },
  {
    q: "What is the purpose of a use case diagram?",
    options: ["Describe behavior in detail", "Represent internal structure", "Visualize relationships between actors and use cases", "Represent flow of activities"],
    answer: 2,
    explanation: "A use case diagram visualizes the relationships between actors and use cases, providing a high-level overview of system functionality."
  }















],








"ADAMA":[



  {
    q: "What is the purpose of server-side scripting languages in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle client-side interactivity",
      "To generate dynamic content and interact with databases",
      "To ensure secure data transmission over the web"
    ],
    answer: 2,
    explanation: "Server-side scripting languages are used to generate dynamic content, process form data, and interact with databases on the server side of web applications."
  },
  {
    q: "Which of the following is a server-side scripting language for Microsoft's ASP.NET framework?",
    options: ["Python", "Ruby", "C#", "Java"],
    answer: 2,
    explanation: "C# is a server-side scripting language used in Microsoft's ASP.NET framework for web development. It provides a powerful and flexible environment for building web applications."
  },
  {
    q: "Which client-side scripting language is supported by all modern web browsers?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is a client-side scripting language supported by all modern web browsers. It allows for interactivity and dynamic behavior on web pages."
  },
  {
    q: "What is the purpose of client-side scripting languages in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle server-side processing and database interactions",
      "To generate dynamic content and interact with databases",
      "To add interactivity and dynamic behavior to web pages"
    ],
    answer: 3,
    explanation: "Client-side scripting languages are used to add interactivity and dynamic behavior to web pages. They run on the user's browser and allow for dynamic content manipulation."
  },
  {
    q: "Which client-side scripting language is primarily used for manipulating the Document Object Model (DOM) of a web page?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is primarily used for manipulating the Document Object Model (DOM) of a web page. It allows for dynamic updating, event handling, and interaction with page elements."
  },
  {
    q: "Which client-side scripting language is often used for validating form inputs on web pages?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is often used for validating form inputs on web pages. It allows for client-side validation, ensuring that user-entered data meets certain criteria before submitting the form."
  },
  {
    q: "Which client-side scripting technique allows for loading new content into a web page without a full page reload?",
    options: ["AJAX", "JSON", "XML", "Bootstrap"],
    answer: 0,
    explanation: "AJAX (Asynchronous JavaScript and XML) allows for loading new content into a web page without a full page reload. It enables asynchronous communication with the server and dynamic content updates."
  },
  {
    q: "Which client-side framework/library is commonly used for building responsive and interactive user interfaces?",
    options: ["jQuery", "React", "Angular", "Vue.js"],
    answer: 1,
    explanation: "React is a popular client-side JavaScript library for building responsive and interactive user interfaces. It follows a component-based approach and is widely used in web development."
  },
  {
    q: "Which technique is used to handle communication between a web browser and a server without interrupting the user's interaction with the web page?",
    options: ["AJAX", "JSON", "Websockets", "RESTful API"],
    answer: 2,
    explanation: "Websockets allow for bi-directional communication between a web browser and a server without interrupting the user's interaction with the web page. It enables real-time data exchange."
  },
  {
    q: "Which client-side technique is used to store data locally in a user's browser?",
    options: ["Cookies", "Local storage", "Session storage", "IndexedDB"],
    answer: 1,
    explanation: "Local storage is a client-side technique used to store data locally in a user's browser. It provides a larger storage capacity than cookies and can be accessed across multiple browser sessions."
  },

















  {
    q: "What is the primary markup language used for structuring content on the web?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 0,
    explanation: "HTML (Hypertext Markup Language) is the primary markup language used for structuring content on the web. It defines the structure and layout of web pages."
  },
  {
    q: "What is the purpose of CSS in web development?",
    options: ["To define the structure and layout of web pages", "To add interactivity and dynamic behavior to web pages", "To control the visual appearance of web pages", "To handle server-side processing and database interactions"],
    answer: 2,
    explanation: "CSS (Cascading Style Sheets) is used to control the visual appearance of web pages, including elements such as colors, fonts, spacing, and layout."
  },
  {
    q: "Which programming language is primarily used for client-side scripting in web development?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is primarily used for client-side scripting in web development. It allows for dynamic and interactive behavior on web pages, such as form validation and DOM manipulation."
  },
  {
    q: "Which protocol is used for transferring data over the web?",
    options: ["HTTP", "FTP", "TCP/IP", "SMTP"],
    answer: 0,
    explanation: "HTTP (Hypertext Transfer Protocol) is the protocol used for transferring data over the web. It enables communication between web servers and web clients (browsers)."
  },
  {
    q: "What is the purpose of a web server in web development?",
    options: ["To store and manage website files", "To handle client-side scripting", "To control the visual appearance of web pages", "To ensure secure data transmission over the web"],
    answer: 0,
    explanation: "A web server is responsible for storing and managing website files. It responds to client requests, retrieves the requested files, and sends them back to the client's web browser."
  },
  {
    q: "Which of the following is a popular open-source database management system used in web development?",
    options: ["MySQL", "Oracle", "SQL Server", "MongoDB"],
    answer: 0,
    explanation: "MySQL is a popular open-source database management system used in web development. It is widely used for storing and retrieving data in web applications."
  },
  {
    q: "What is the purpose of a cookie in web development?",
    options: ["To store and retrieve user preferences and session information", "To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web"],
    answer: 0,
    explanation: "Cookies are used in web development to store and retrieve user preferences and session information. They allow websites to remember user-specific data between different browsing sessions."
  },
  {
    q: "Which programming language is used for server-side scripting in web development?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 3,
    explanation: "PHP (Hypertext Preprocessor) is a widely used programming language for server-side scripting in web development. It is embedded in HTML and allows for dynamic generation of web content."
  },
  {
    q: "What is the purpose of a framework in web development?",
    options: ["To ensure secure data transmission over the web", "To control the visual appearance of web pages", "To provide a foundation and structure for developing web applications", "To handle client-side scripting"],
    answer: 2,
    explanation: "A framework in web development provides a foundation and structure for developing web applications. It offers predefined libraries, tools, and conventions to simplify and accelerate development."
  },
  {
    q: "Which programming language is often used for building scalable and high-performance web applications?",
    options: ["HTML", "CSS", "JavaScript", "Node.js"],
    answer: 3,
    explanation: "Node.js is a JavaScript runtime environment that allows server-side execution of JavaScript code. It is often used for building scalable and high-performance web applications."
  },
  {
    q: "What is the purpose of AJAX in web development?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To enable asynchronous communication between the client and server"],
    answer: 3,
    explanation: "AJAX (Asynchronous JavaScript and XML) is used in web development to enable asynchronous communication between the client and server. It allows for updating parts of a web page without requiring a full page reload."
  },
  {
    q: "Which format is commonly used for data interchange between a web server and a web application?",
    options: ["HTML", "CSS", "JSON", "XML"],
    answer: 2,
    explanation: "JSON (JavaScript Object Notation) is a lightweight data interchange format commonly used for communication between a web server and a web application. It is easy to read and write for both humans and machines."
  },
  {
    q: "What is the purpose of a content management system (CMS) in web development?",
    options: ["To store and manage website files", "To control the visual appearance of web pages", "To handle client-side scripting", "To provide a user-friendly interface for managing website content"],
    answer: 3,
    explanation: "A content management system (CMS) is used in web development to provide a user-friendly interface for managing website content. It allows non-technical users to create, edit, and publish content without requiring programming knowledge."
  },
  {
    q: "Which technique is used to improve the performance of web applications by caching frequently accessed data or resources?",
    options: ["Compression", "Minification", "Caching", "Encryption"],
    answer: 2,
    explanation: "Caching is a technique used to improve the performance of web applications by storing and retrieving frequently accessed data or resources. It reduces the need to fetch data from the original source, thereby improving response times."
  },
  {
    q: "Which protocol is used for secure communication over the web?",
    options: ["HTTP", "FTP", "TCP/IP", "HTTPS"],
    answer: 3,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) is used for secure communication over the web. It encrypts the data exchanged between a web server and a web client, ensuring confidentiality and integrity."
  },
  {
    q: "What is the purpose of a RESTful API in web development?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To provide a standardized interface for accessing and manipulating web resources"],
    answer: 3,
    explanation: "A RESTful API (Representational State Transfer) is used in web development to provide a standardized interface for accessing and manipulating web resources. It allows clients to perform CRUD (Create, Read, Update, Delete) operations on resources using HTTP methods."
  },
  {
    q: "What is the purpose of responsive web design?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To create websites that adapt and display correctly on different devices and screen sizes"],
    answer: 3,
    explanation: "Responsive web design is an approach to create websites that adapt and display correctly on different devices and screen sizes. It ensures an optimal user experience by adjusting the layout and design based on the user's device."
  },
  {
    q: "What is the purpose of version control systems (VCS) in web development?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To track changes to source code and collaborate on web development projects"],
    answer: 3,
    explanation: "Version control systems (VCS) are used in web development to track changes to source code and collaborate on web development projects. They allow multiple developers to work on the same codebase, manage changes, and resolve conflicts."
  },
  {
    q: "Which web development concept refers to the practice of optimizing a website to rank higher in search engine results?",
    options: ["Accessibility", "Usability", "SEO (Search Engine Optimization)", "Performance optimization"],
    answer: 2,
    explanation: "SEO (Search Engine Optimization) refers to the practice of optimizing a website to rank higher in search engine results. It involves various techniques to improve the visibility and accessibility of a website to search engines."
  },
  {
    q: "Which technique is used to protect web applications against common security vulnerabilities, such as cross-site scripting (XSS) and SQL injection?",
    options: ["Encryption", "Authentication", "Authorization", "Web application security testing"],
    answer: 3,
    explanation: "Web application security testing is used to identify and protect web applications against common security vulnerabilities, such as cross-site scripting (XSS) and SQL injection. It involves various testing techniques to identify and fix potential security flaws."
  },
  {
    q: "Which server-side scripting language is commonly used for web development?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 3,
    explanation: "PHP (Hypertext Preprocessor) is a popular server-side scripting language widely used for web development. It allows dynamic generation of web content and interacts with databases."
  },
  {
    q: "Which server-side scripting language is often used for building scalable and high-performance web applications?",
    options: ["HTML", "CSS", "JavaScript", "Node.js"],
    answer: 3,
    explanation: "Node.js is a server-side JavaScript runtime that enables building scalable and high-performance web applications. It utilizes an event-driven, non-blocking I/O model."
  }
  















],




"WSU1":[


  

{
  q: "In the CIA Triad, which one of the following is not involved?",
  options: ["Availability", "Confidentiality", "Authenticity", "Integrity"],
  answer: 2,
  explanation: "Authenticity is not part of the CIA triad; the triad includes Confidentiality, Integrity, and Availability."
},
{
  q: "If according to the hypothesis, the result should be positive, but in fact it is negative, then it is known as ___.",
  options: [
    "False Negative Hypothesis",
    "False Positive Hypothesis",
    "Specialized Hypothesis",
    "Consistent Hypothesis"
  ],
  answer: 1,
  explanation: "A false positive occurs when a test indicates a positive result incorrectly."
},
{
  q: "Which of the following function is used to set cookie in PHP?",
  options: ["createcookie()", "makecookie()", "setcookie()", "None of the above"],
  answer: 2,
  explanation: "setcookie() is the built-in PHP function used to create cookies."
},
{
  q: "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
  options: [
    "Piracy",
    "Plagiarism",
    "Intellectual property rights",
    "All of the above"
  ],
  answer: 3,
  explanation: "All the listed options relate to misuse or theft of intellectual work."
},
{
  q: "Bluetooth is an example of __.",
  options: [
    "Personal Area Network",
    "Local Area Network",
    "Virtual Private Network",
    "Wide Area Network"
  ],
  answer: 0,
  explanation: "Bluetooth operates within a short range, making it a PAN."
},
{
  q: "Which of the following command is a type of Data Definition Language command?",
  options: ["Create", "Update", "Delete", "Merge"],
  answer: 0,
  explanation: "CREATE is a DDL command used to define database structures."
},
{
  q: "An AI agent perceives and acts upon the environment using ___.",
  options: ["Sensors", "Perceiver", "Actuators", "Both a and c"],
  answer: 3,
  explanation: "AI agents use sensors to perceive and actuators to act."
},
{
  q: "Which of the following statement(s) about stack data structure is/are NOT correct?",
  options: [
    "Linked List are used for implementing Stacks",
    "Top of the Stack always contain the new node",
    "Stack is the FIFO data structure",
    "Null link is present in the last node at the bottom of the stack"
  ],
  answer: 2,
  explanation: "Stack follows LIFO, not FIFO."
},
{
  q: "Given pointer to a node X in a singly linked list. Only one pointer is given, pointer to head node is not given, can we delete the node X?",
  options: [
    "Possible if X is not last node",
    "Possible if X is not first node",
    "Possible if size of linked list is even",
    "Possible if size of linked list is odd"
  ],
  answer: 0,
  explanation: "Deletion is possible by copying data from the next node if X is not the last node."
},
{
  q: "Which of the following is the task of lexical analysis?",
  options: [
    "To build the uniform symbol table",
    "To initialize the variables",
    "To organize the variables in a lexical order",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Lexical analysis builds and maintains the symbol table."
},
{
  q: "What is encapsulation in object oriented programming?",
  options: [
    "Combining data members and member functions that operate on them into a single unit",
    "Combining data members and member functions into a single unit which can operate on any data",
    "Combining various data members into a single unit",
    "Combining various member functions into a single unit"
  ],
  answer: 0,
  explanation: "Encapsulation binds data and methods that operate on that data together."
},
{
  q: "Which of the following is generally used for performing tasks like creating the structure of relations, deleting relation?",
  options: [
    "DML (Data Manipulation Language)",
    "Query",
    "Relational Schema",
    "DDL (Data Definition Language)"
  ],
  answer: 3,
  explanation: "DDL is used to define and modify database structures."
},
{
  q: "Which one of the following data structures are preferred in database-system implementation?",
  options: ["AVL tree", "B-tree", "B+ tree", "Splay tree"],
  answer: 2,
  explanation: "B+ trees are efficient for disk-based storage systems."
},
{
  q: "Rows of a relation are known as the ___.",
  options: ["Degree", "Tuples", "Entity", "All of the above"],
  answer: 3,
  explanation: "Rows can be referred to as tuples or entities depending on context."
},
{
  q: "___ is the maximum amount of time an algorithm takes to execute a specific set of inputs.",
  options: [
    "Running time",
    "Average case time complexity",
    "Worst case time complexity",
    "Best case time complexity"
  ],
  answer: 2,
  explanation: "Worst-case time complexity defines the maximum execution time."
},
{
  q: "In which access should a constructor be defined, so that object of the class can be created in any function?",
  options: ["Any access specifier will work", "Private", "Public", "Protected"],
  answer: 2,
  explanation: "Constructors must be public to allow object creation."
},
{
  q: "It can be a software program or a hardware device that filters all data packets coming through the internet or network. It is known as ___.",
  options: ["Antivirus", "Firewall", "Cookies", "Malware"],
  answer: 1,
  explanation: "A firewall monitors and filters network traffic."
},
{
  q: "The minimum number of transitions to reach the final state for the regular expression {a,b}*{baaa} is:",
  options: ["4", "5", "6", "3"],
  answer: 0,
  explanation: "The string 'baaa' requires 4 transitions."
},
{
  q: "Linked list is considered as an example of ___ type of memory allocation.",
  options: ["Dynamic", "Static", "Compile time", "Heap"],
  answer: 0,
  explanation: "Linked lists use dynamic memory allocation."
},
{
  q: "In computer network nodes are _____.",
  options: [
    "The computer that originates the data",
    "The computer that routes the data",
    "The computer that terminates the data",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "All devices participating in communication are considered nodes."
},
{
  q: "In the case of Zero-address instruction method the operands are stored in _.",
  options: ["Registers", "Accumulators", "Push down stack", "Cache memory"],
  answer: 2,
  explanation: "Zero-address instructions use a stack to store operands."
},
{
  q: "Which of the following statements is not true?",
  options: [
    "Every language defined by any automata is also defined by a regular expression",
    "Every language defined by a regular expression can be represented using a DFA",
    "Every language defined by a regular expression can be represented using NFA with ε-moves",
    "Regular expression is just another representation for automata definition"
  ],
  answer: 1,
  explanation: "Not all regular expressions can be directly represented as DFA without conversion."
},
{
  q: "Which of the following can be used to extract or filter the data and information from the data warehouse?",
  options: [
    "Data redundancy",
    "Data recovery tool",
    "Data mining",
    "Data inconsistency"
  ],
  answer: 2,
  explanation: "Data mining is used to extract useful patterns and information."
},




  
{
  q: "In the CIA Triad, which one of the following is not involved?",
  options: [
    "Availability",
    "Confidentiality",
    "Authenticity",
    "Integrity"
  ],
  answer: 2,
  explanation: "The CIA triad consists of Confidentiality, Integrity, and Availability. Authenticity is not part of it."
},
{
  q: "If according to the hypothesis the result should be positive, but in fact it is negative, then it is known as ___",
  options: [
    "False Negative Hypothesis",
    "False Positive Hypothesis",
    "Specialized Hypothesis",
    "Consistent Hypothesis"
  ],
  answer: 1,
  explanation: "A false positive occurs when the hypothesis predicts a positive result but the actual result is negative."
},
{
  q: "Which of the following function is used to set cookie in PHP?",
  options: [
    "createcookie()",
    "makecookie()",
    "setcookie()",
    "None of the above"
  ],
  answer: 2,
  explanation: "PHP uses the setcookie() function to create or modify cookies."
},
{
  q: "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
  options: [
    "Piracy",
    "Plagiarism",
    "Intellectual property rights",
    "All of the above"
  ],
  answer: 3,
  explanation: "Piracy, plagiarism, and violation of intellectual property rights all involve misuse of others’ work."
},
{
  q: "Bluetooth is an example of __",
  options: [
    "Personal Area Network",
    "Local Area Network",
    "Virtual Private Network",
    "Wide Area Network"
  ],
  answer: 0,
  explanation: "Bluetooth is used for short-range communication, which is classified as a Personal Area Network (PAN)."
},
{
  q: "Which of the following command is a type of Data Definition Language (DDL) command?",
  options: [
    "Create",
    "Update",
    "Delete",
    "Merge"
  ],
  answer: 0,
  explanation: "CREATE is a DDL command used to define database structures."
},
{
  q: "An AI agent perceives and acts upon the environment using ___",
  options: [
    "Sensors",
    "Perceiver",
    "Actuators",
    "Both a and c"
  ],
  answer: 3,
  explanation: "AI agents use sensors to perceive the environment and actuators to act upon it."
},
{
  q: "Which of the following statement(s) about stack data structure is NOT correct?",
  options: [
    "Linked lists are used for implementing stacks",
    "Top of the stack always contains the new node",
    "Stack is the FIFO data structure",
    "Null link is present in the last node at the bottom of the stack"
  ],
  answer: 2,
  explanation: "Stack follows LIFO (Last In First Out), not FIFO."
},
{
  q: "Given a pointer to a node X in a singly linked list (head pointer not given), can we delete node X?",
  options: [
    "Possible if X is not last node",
    "Possible if X is not first node",
    "Possible if size of linked list is even",
    "Possible if size of linked list is odd"
  ],
  answer: 0,
  explanation: "A node can be deleted if it is not the last node by copying data from the next node."
},
{
  q: "Which of the following is the task of lexical analysis?",
  options: [
    "To build the uniform symbol table",
    "To initialize the variables",
    "To organize the variables in a lexical order",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Lexical analysis identifies tokens and builds the symbol table."
},
{
  q: "What is encapsulation in Object Oriented Programming?",
  options: [
    "Combining data members and member functions into a single unit",
    "Combining data members and member functions into a single unit which can operate on any data",
    "Combining various data members into a single unit",
    "None of the above"
  ],
  answer: 0,
  explanation: "Encapsulation bundles data and the methods that operate on that data into a single unit (class)."
},



 {
  q: "What will be the output of the following PHP program?\n$a = 15;\nfunction show() {\n  $a = 20;\n  echo \"$a\";\n}\nshow();\necho \"$a\";",
  options: [
    "2015",
    "2020",
    "1515",
    "0"
  ],
  answer: 0,
  explanation: "The function prints its local variable (20), then the global variable prints 15, resulting in 2015."
},
{
  q: "The architecture of a database can be viewed as the ____.",
  options: [
    "One level",
    "Two-level",
    "Three-level",
    "Four level"
  ],
  answer: 2,
  explanation: "Database architecture follows the three-level architecture: internal, conceptual, and external."
},
{
  q: "If an infinite language is passed to Machine M, the subsidiary which gives a finite solution to the infinite input tape is ______.",
  options: [
    "Compiler",
    "Interpreter",
    "Loader and Linkers",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "A compiler translates the entire program and produces a finite output."
},
{
  q: "First order logic statements contain __.",
  options: [
    "Predicate and Preposition",
    "Subject and an Object",
    "Predicate and Subject",
    "None of the above"
  ],
  answer: 2,
  explanation: "First-order logic statements consist of predicates applied to subjects."
},
{
  q: "Which of the following is used to predict the effort as a function of LOC or FP?",
  options: [
    "COCOMO",
    "FP-based estimation",
    "Both COCOMO and FP-based estimation",
    "Process-based estimation"
  ],
  answer: 2,
  explanation: "Effort estimation can be done using both COCOMO (LOC-based) and FP-based models."
},
{
  q: "Which among the following does not come under OOP concept?",
  options: [
    "Data hiding",
    "Message passing",
    "Platform independent",
    "Data binding"
  ],
  answer: 2,
  explanation: "Platform independence is a language feature, not an OOP concept."
},
{
  q: "Auxiliary memory can be defined as:",
  options: [
    "A memory unit that directly communicates with CPU",
    "A device that provides backup storage",
    "It is the fastest memory",
    "All of the above"
  ],
  answer: 1,
  explanation: "Auxiliary memory refers to secondary storage used for backup and long-term data storage."
},
{
  q: "Maximum number of elements in the array declaration int x[5][8]; is",
  options: [
    "28",
    "40",
    "32",
    "13"
  ],
  answer: 1,
  explanation: "Total elements = 5 × 8 = 40."
},
{
  q: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____.",
  options: [
    "Assigning ready processes to waiting queue",
    "Assigning running processes to blocked queue",
    "Assigning ready processes to CPU",
    "All of the mentioned"
  ],
  answer: 2,
  explanation: "The dispatcher assigns ready processes to the CPU."
},
{
  q: "What will be the output of the following PHP program?\n$var1 = \"Hello\";\n$var2 = \"World\";\necho $var1, $var2;",
  options: [
    "HelloWorld",
    "Hello, World",
    "Hello World",
    "None of the given choices"
  ],
  answer: 0,
  explanation: "PHP echo with comma prints strings without adding space."
},
{
  q: "Which of the following HTML attribute is used to define inline styles?",
  options: [
    "Style",
    "Type",
    "Class",
    "None of the above"
  ],
  answer: 0,
  explanation: "The style attribute is used for inline CSS."
},
{
  q: "Function prototyping is used to",
  options: [
    "Introduce the function",
    "Describe type of arguments",
    "Describe the return value only",
    "Describe the parameters"
  ],
  answer: 0,
  explanation: "Function prototyping introduces the function before its actual definition."
},
{
  q: "Which one of the following is commonly used to define the overall design of the database?",
  options: [
    "Application program",
    "Data definition language",
    "Schema",
    "Data manipulation language"
  ],
  answer: 2,
  explanation: "A database schema defines the overall logical structure of the database."
},
 

  
{
  q: "The recursive versions of binary search use a ___ structure.",
  options: [
    "Branch and bound",
    "Dynamic programming",
    "Divide and conquer",
    "Simple recursive"
  ],
  answer: 2,
  explanation: "Binary search repeatedly divides the problem into smaller subproblems, which is the divide and conquer approach."
},
{
  q: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
  options: [
    "Priority",
    "Round Robin",
    "Shortest Job First",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "Priority, Round Robin, and Shortest Job First are all CPU scheduling algorithms."
},
{
  q: "A deadlock avoidance algorithm dynamically examines the __ to ensure that a circular wait condition can never exist.",
  options: [
    "Resources",
    "Operating system",
    "System storage state",
    "Resource allocation state"
  ],
  answer: 3,
  explanation: "Deadlock avoidance checks the current resource allocation state before granting requests."
},
{
  q: "The main memory accommodates ____.",
  options: [
    "CPU",
    "User processes",
    "Operating system",
    "All of the mentioned"
  ],
  answer: 2,
  explanation: "The operating system must reside in main memory to manage system resources."
},
{
  q: "Which feature of OOP indicates code reusability?",
  options: [
    "Abstraction",
    "Polymorphism",
    "Encapsulation",
    "Inheritance"
  ],
  answer: 3, 
  explanation: "Inheritance allows reuse of existing code by deriving new classes."
},
{
  q: "In order to ensure the security of the data/information, we need to ____ the data.",
  options: [
    "Encrypt",
    "Decrypt",
    "Delete",
    "None of the above"
  ],
  answer: 0,
  explanation: "Encryption protects data from unauthorized access."
},
{
  q: "Which one of the following is not true?",
  options: [
    "Kernel remains in memory during the entire computer session",
    "Kernel is made of various modules which cannot be loaded in a running operating system",
    "Kernel is the first part of the operating system to load into memory during booting",
    "Kernel is the program that constitutes the central core of the operating system"
  ],
  answer: 1,
  explanation: "Modern kernels support loadable modules during runtime."
},
{
  q: "In Wi-Fi Security, which of the following protocol is more used?",
  options: [
    "WPA",
    "WPA2",
    "WPS",
    "Both A and C"
  ],
  answer: 1,
  explanation: "WPA2 is the most widely used and secure Wi-Fi security protocol."
},
{
  q: "If a process fails, most operating systems write the error information to a __.",
  options: [
    "New file",
    "Another running process",
    "Log file",
    "None of the mentioned"
  ],
  answer: 2,
  explanation: "Operating systems record error details in log files."
},
{
  q: "Which one of the following errors will be handled by the operating system?",
  options: [
    "Lack of paper in printer",
    "Power failure",
    "Connection failure in the network",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "The operating system handles hardware, power, and network-related errors."
},
{
  q: "Which of the following statements for a simple graph is correct?",
  options: [
    "Every path is a trail",
    "Every trail is a path",
    "Every trail is a path as well as every path is a trail",
    "Path and trail have no relation"
  ],
  answer: 0,
  explanation: "A path is a trail with no repeated vertices, so every path is a trail."
},
{
  q: "The string function strcpy",
  options: [
    "Concatenates two strings",
    "Copies one string over the other",
    "Compares two strings",
    "Finds the length of a string"
  ],
  answer: 1,
  explanation: "strcpy copies the contents of one string into another."
},
{
  q: "The agile software development model is built based on __.",
  options: [
    "Linear development",
    "Incremental development",
    "Iterative development",
    "Both incremental and iterative development"
  ],
  answer: 3,
  explanation: "Agile follows both incremental and iterative development approaches."
},



  
{
  q: "Function of central processing unit is/are:",
  options: [
    "Detecting any errors",
    "Interpreting and executing machine level instructions",
    "Controlling data transfer",
    "All"
  ],
  answer: 3,
  explanation: "The CPU interprets and executes instructions, controls data flow, and manages processing tasks."
},
{
  q: "The operating system is responsible for:",
  options: [
    "Bad-block recovery",
    "Booting from disk",
    "Disk initialization",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "The operating system manages booting, disk initialization, and bad-block recovery."
},
{
  q: "What kind of linked list is best to answer questions like “What is the item at position n?”",
  options: [
    "Singly linked list",
    "Doubly linked list",
    "Circular linked list",
    "Array implementation of linked list"
  ],
  answer: 3,
  explanation: "Array implementation allows direct indexed access, making position-based queries efficient."
},
{
  q: "Which of the following layers is an addition to OSI model when compared with TCP/IP model?",
  options: [
    "Application layer",
    "Presentation layer",
    "Session layer",
    "Session and Presentation layer"
  ],
  answer: 3,
  explanation: "The OSI model includes Session and Presentation layers that are not separate in TCP/IP."
},
{
  q: "Lexemes can be referred to as:",
  options: [
    "Elements of lexicography",
    "Sequence of alphanumeric characters in a token",
    "Lexical errors",
    "None of the mentioned"
  ],
  answer: 1,
  explanation: "A lexeme is the sequence of characters that forms a token."
},
{
  q: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
  options: [
    "getClass()",
    "intern()",
    "getName()",
    "toString()"
  ],
  answer: 2,
  explanation: "The getName() method returns the class name as a String."
},
{
  q: "The ___ model helps in representing the system's dynamic behavior.",
  options: [
    "Object Model",
    "Context Model",
    "Behavioral Model",
    "Data Model"
  ],
  answer: 2,
  explanation: "Behavioral models describe how a system behaves over time."
},
{
  q: "Which of the following commands is used to save any transaction permanently into the database?",
  options: [
    "Commit",
    "Rollback",
    "Savepoint",
    "None of the above"
  ],
  answer: 0,
  explanation: "COMMIT permanently saves all changes made during the transaction."
},
{
  q: "Which type of shift instruction is used to divide a signed number by two?",
  options: [
    "Logical right shift",
    "Arithmetic right shift",
    "Logical left shift",
    "Arithmetic left shift"
  ],
  answer: 1,
  explanation: "Arithmetic right shift preserves the sign bit while dividing by two."
},
{
  q: "Which of the following word correctly summarizes the importance of software design?",
  options: [
    "Quality",
    "Complexity",
    "Efficiency",
    "Accuracy"
  ],
  answer: 0,
  explanation: "Good software design directly impacts overall software quality."
},
{
  q: "What is the result of the following Java program?",
  options: [
    "It prints A and B with a delay",
    "It only prints A and exits",
    "It only prints B and exits",
    "A will be printed, and then an exception is thrown"
  ],
  answer: 3,
  explanation: "Calling wait() without owning the monitor causes IllegalMonitorStateException after printing A."
},
{
  q: "To obtain a prefix expression, which of the tree traversals is used?",
  options: [
    "Level-order traversal",
    "Pre-order traversal",
    "Post-order traversal",
    "In-order traversal"
  ],
  answer: 1,
  explanation: "Prefix expressions are obtained using pre-order traversal."
},
{
  q: "RR* can be expressed in which of the forms:",
  options: [
    "R+",
    "R-",
    "R+ ∪ R-",
    "R"
  ],
  answer: 0,
  explanation: "RR* represents one or more occurrences of R, which is R+."
},






  

{
  q: "The output of the lexical and syntax analyzer can be stated as:",
  options: [
    "parse stream, parse tree",
    "token tree, parse tree",
    "token stream, parse tree",
    "all of the mentioned"
  ],
  answer: 2,
  explanation: "Lexical analysis produces a token stream, and syntax analysis produces a parse tree."
},
{
  q: "Which AI technique enables computers to understand the associations and relationships between objects and events?",
  options: [
    "Heuristic Processing",
    "Cognitive Science",
    "Relative Symbolism",
    "Pattern Matching"
  ],
  answer: 3,
  explanation: "Pattern matching helps AI recognize relationships and associations between objects and events."
},
{
  q: "For an effective operating system, when should deadlock be checked?",
  options: [
    "Every time a resource request is made at fixed time intervals",
    "At fixed time intervals",
    "Every time a resource request is made",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Deadlock detection is typically performed at fixed intervals or during resource requests."
},
{
  q: "Linked lists are not suitable for the implementation of:",
  options: [
    "Insertion sort",
    "Radix sort",
    "Polynomial manipulation",
    "Binary search"
  ],
  answer: 3,
  explanation: "Binary search requires random access, which linked lists do not support."
},
{
  q: "Which of the following is the container for <tr>, <th>, and <td>?",
  options: [
    "<data>",
    "<table>",
    "<group>",
    "All of the above"
  ],
  answer: 1,
  explanation: "<table> is the main container element for table rows and cells in HTML."
},
{
  q: "Which of the following statement is false?",
  options: [
    "Context free language is the subset of context sensitive language",
    "Regular language is the subset of context sensitive language",
    "Recursively enumerable language is the super set of regular language",
    "Context sensitive language is a subset of context free language"
  ],
  answer: 3,
  explanation: "Context-sensitive languages are more powerful than context-free languages, not subsets."
},
{
  q: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
  options: [
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Heap Sort"
  ],
  answer: 1,
  explanation: "Merge sort is efficient for linked lists and works in O(n log n) time."
},
{
  q: "Communication channel is shared by all the machines on the network in:",
  options: [
    "Broadcast network",
    "Unicast network",
    "Multicast network",
    "Anycast network"
  ],
  answer: 0,
  explanation: "In a broadcast network, the communication channel is shared by all nodes."
},
{
  q: "What is the number of edges present in a complete graph having n vertices?",
  options: [
    "(n*(n+1))/2",
    "(n*(n-1))/2",
    "n",
    "Information given is insufficient"
  ],
  answer: 1,
  explanation: "A complete graph has n(n−1)/2 edges."
},
{
  q: "Network congestion occurs:",
  options: [
    "In case of traffic overloading",
    "When a system terminates",
    "When connection between two nodes terminates",
    "In case of transfer failure"
  ],
  answer: 0,
  explanation: "Network congestion happens when too much traffic overloads the network."
},
{
  q: "Which of the following is an incorrect activity for the configuration management of a software system?",
  options: [
    "Change management",
    "System management",
    "Internship management",
    "Version management"
  ],
  answer: 2,
  explanation: "Internship management is unrelated to software configuration management."
},







  

  {
    q: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    options: [
      "Merge Sort",
      "Heap Sort",
      "Quick Sort",
      "Insertion Sort"
    ],
    answer: 0,
    explanation: "Merge Sort works efficiently on linked lists and guarantees O(n log n) time complexity."
  },
  {
    q: "Which combinational circuit receives 2^n input and directs it to a single output line?",
    options: [
      "Decoder",
      "Encoder",
      "Multiplexer",
      "Flip flop"
    ],
    answer: 2,
    explanation: "A multiplexer selects one of many inputs and forwards it to a single output line."
  },
  {
    q: "Maximum number of elements in the array declaration int x[5][8]; is",
    options: [
      "40",
      "28",
      "13"
    ],
    answer: 0,
    explanation: "Total elements = rows × columns = 5 × 8 = 40."
  },
  {
    q: "The total number of states required to automate the given regular expression (00)*(11)* is",
    options: [
      "3",
      "5",
      "4",
      "6"
    ],
    answer: 1,
    explanation: "The minimal DFA for (00)*(11)* requires 5 states."
  },
  {
    q: "First order logic statements contain:",
    options: [
      "Predicate and Preposition",
      "Subject and an Object",
      "Predicate and Subject",
      "None of the above"
    ],
    answer: 2,
    explanation: "First order logic statements consist of a subject and a predicate."
  },
  {
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: [
      "It is recognized by a device of infinite states",
      "It takes no auxiliary memory",
      "All of the mentioned",
      "None of the mentioned"
    ],
    answer: 1,
    explanation: "Languages generated simply from primitive languages require no auxiliary memory."
  },
  {
    q: "Which of the following is used to display the output in PHP?",
    options: [
      "Echo",
      "Write",
      "Print",
      "Both (a) and (c)"
    ],
    answer: 3,
    explanation: "Both echo and print are used to display output in PHP."
  },
  {
    q: "In order to ensure the security of the data/information, we need to ____ the data:",
    options: [
      "Encrypt",
      "Decrypt",
      "Delete",
      "None of the above"
    ],
    answer: 0,
    explanation: "Encryption protects data from unauthorized access."
  },
  {
    q: "Which of the following is not a type of database?",
    options: [
      "Decentralized",
      "Distributed",
      "Hierarchical",
      "Network"
    ],
    answer: 0,
    explanation: "Decentralized is not considered a standard database type."
  },
  {
    q: "Which of the following statements is false?",
    options: [
      "Regular language is the subset of context sensitive language",
      "Context sensitive language is a subset of context free language",
      "Context free language is the subset of context sensitive language",
      "Recursively enumerable language is the super set of regular language"
    ],
    answer: 1,
    explanation: "Context-sensitive languages are more powerful than context-free languages, not a subset."
  },
  {
    q: "Which of the following statements is not true?",
    options: [
      "Every language defined by a regular expression can be represented using a DFA",
      "Regular expression is just another representation for any automata definition",
      "Every language defined by a regular expression can be represented using NFA with ε-moves",
      "Every language defined by any of the automata is also defined by a regular expression"
    ],
    answer: 0,
    explanation: "Some regular expressions require conversion steps and are not directly represented as DFA."
  },
  {
    q: "Which AI technique enables computers to understand associations and relationships between objects and events?",
    options: [
      "Heuristic Processing",
      "Relative Symbolism",
      "Cognitive Science",
      "Pattern Matching"
    ],
    answer: 3,
    explanation: "Pattern matching helps AI identify relationships and associations."
  },
  {
    q: "Which of the following words correctly summarizes the importance of software design?",
    options: [
      "Efficiency",
      "Quality",
      "Complexity",
      "Accuracy"
    ],
    answer: 1,
    explanation: "Good software design ensures overall quality, maintainability, and scalability."
  },
  {
    q: "Function prototyping is used to:",
    options: [
      "Describe the return value only",
      "Describe the parameters",
      "Introduce the function"
    ],
    answer: 1,
    explanation: "Function prototyping defines the function signature, including parameters and return type."
  },





  {
  q: "What does PEAS stand for in Artificial Intelligence?",
  options: [
    "Peer, Environment, Actuators, Sense",
    "Performance, Environment, Actuators, Sensors",
    "Perceiving, Environment, Actuators, Sensors",
    "None of the above"
  ],
  answer: 1,
  explanation: "PEAS stands for Performance, Environment, Actuators, and Sensors."
},
{
  q: "Which of the following is used in application programs to request data from the database management system?",
  options: [
    "Data Manipulation Language",
    "Data Definition Language",
    "Data Control Language",
    "All of the above"
  ],
  answer: 0,
  explanation: "DML is used to retrieve, insert, update, and delete data in a database."
},
{
  q: "Which of the following is the task of lexical analysis?",
  options: [
    "To build the uniform symbol table",
    "To initialize the variables",
    "To organize the variables in a lexical order",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Lexical analysis builds the symbol table by identifying tokens."
},
{
  q: "Which of the following is the correct way to create an array in PHP?",
  options: [
    '$season = array["summer", "winter", "spring", "autumn"];',
    '$season = array("summer", "winter", "spring", "autumn");',
    '$season = "summer", "winter", "spring", "autumn";',
    "All of the above"
  ],
  answer: 1,
  explanation: "In PHP, arrays are created using array() with parentheses."
},
{
  q: "It can be a software program or a hardware device that filters all data packets coming through the internet or a network. It is known as:",
  options: [
    "Firewall",
    "Cookies",
    "Malware",
    "Antivirus"
  ],
  answer: 0,
  explanation: "A firewall monitors and controls incoming and outgoing network traffic."
},
{
  q: "Which one of the following can be considered as a class of computer threats?",
  options: [
    "DoS Attack",
    "Phishing",
    "Soliciting",
    "Both A and C"
  ],
  answer: 0,
  explanation: "A Denial of Service (DoS) attack is a well-known computer threat."
},
{
  q: "To access the services of the operating system, the interface is provided by the:",
  options: [
    "API",
    "System calls",
    "Library",
    "Assembly instructions"
  ],
  answer: 1,
  explanation: "System calls provide an interface between user programs and the OS."
},
{
  q: "What is a database?",
  options: [
    "Collection of data without organizing",
    "Organized collection of information that cannot be accessed or updated",
    "Organized collection of data that cannot be updated",
    "Organized collection of data or information that can be accessed, updated, and managed"
  ],
  answer: 3,
  explanation: "A database is an organized collection of data that can be accessed, updated, and managed."
},
{
  q: "To obtain a prefix expression, which tree traversal is used?",
  options: [
    "Pre-order traversal",
    "In-order traversal",
    "Post-order traversal",
    "Level-order traversal"
  ],
  answer: 0,
  explanation: "Pre-order traversal produces prefix notation."
},
{
  q: "Which of the following can be used to extract or filter data from a data warehouse?",
  options: [
    "Data redundancy",
    "Data recovery tool",
    "Data mining",
    "Both B and C"
  ],
  answer: 2,
  explanation: "Data mining is used to extract useful information from large datasets."
},
{
  q: "What will be the output of the following code segment?\nfor(int n=5; n>0; n--) {\n  cout << n;\n  if(n==3)\n    break;\n}",
  options: [
    "543",
    "54",
    "53",
    "5432"
  ],
  answer: 0,
  explanation: "The loop prints 5, 4, 3 and then breaks when n equals 3."
},
  








    

    ],






















    "2015":[
        { 
            q: "Which approach is commonly used for query processing in a distributed database system?", 
            options: ["Centralized query processing", "Distributed query processing", "Parallel query processing", "Sequential query processing"], 
            answer: 1, 
            explanation: "Distributed query processing involves distributing query execution across multiple sites."
        },
        { 
            q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
            options: ["It ensures the consistency of data across all sites.", "It manages the distribution and retrieval of data across multiple sites.", "It controls the access permissions of users in the system.", "It handles the physical storage of data at each site."], 
            answer: 0, 
            explanation: "It ensures data consistency across all sites."
        },

{ 
        q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
        options: ["It ensures the consistency of data across all sites.", "It manages the distribution and retrieval of data across multiple sites.", "It controls the access permissions of users in the system.", "It handles the physical storage of data at each site."], 
        answer: 0, 
        explanation: "It ensures data consistency across all sites."
    },
    { 
        q: "Which approach is commonly used for data replication in a distributed database system?", 
        options: ["Eager replication", "Lazy replication", "Snapshot replication", "Incremental replication"], 
        answer: 1, 
        explanation: "Lazy replication replicates data asynchronously to ensure consistency."
    },
    { 
        q: "What factor is important when evaluating query processing strategies?", 
        options: ["Cost of query execution", "Size of the database", "Network bandwidth", "Data replication"], 
        answer: 0, 
        explanation: "Cost of query execution is key for strategy evaluation."
    },
    { 
        q: "What is the purpose of query optimization?", 
        options: ["Ensure data consistency", "Minimize query execution time", "Maximize data replication", "Manage database security"], 
        answer: 1, 
        explanation: "Query optimization minimizes execution time via efficient plans."
    },
    { 
        q: "What is a query plan?", 
        options: ["Database schemas", "Query result", "Sequence of operations to execute a query", "Database indices"], 
        answer: 2, 
        explanation: "A query plan outlines the steps to execute a query."
    },
    { 
        q: "What is a cost model in query optimization?", 
        options: ["Statistical model of execution times", "Model for estimating query plan costs", "Model for analyzing schemas", "Statistical model for data distribution"], 
        answer: 1, 
        explanation: "A cost model estimates costs for different query plans."
    },
    { 
        q: "What is a join operation?", 
        options: ["Combine tuples from multiple tables", "Sort the query result", "Group query result", "Filter query result"], 
        answer: 0, 
        explanation: "A join combines tuples from multiple tables on a common attribute."
    },
    { 
        q: "Which index type is commonly used to speed up queries?", 
        options: ["B-tree", "Hash", "Bitmap", "Clustered"], 
        answer: 0, 
        explanation: "B-tree index allows efficient ordered data retrieval."
    },
    { 
        q: "What is query re-optimization?", 
        options: ["Re-execute query with different parameters", "Re-evaluate query cost with updated statistics", "Re-write query in different language", "Re-organize schema"], 
        answer: 1, 
        explanation: "Query re-optimization uses updated statistics to improve plans."
    },
    { 
        q: "What is query pipelining?", 
        options: ["Divide query into subqueries for parallel execution", "Execute stages sequentially", "Divide query into multiple queries", "Divide into multiple stages and execute concurrently"], 
        answer: 3, 
        explanation: "Query pipelining executes multiple stages concurrently."
    },
    { 
        q: "What is query caching?", 
        options: ["Store query results for reuse", "Store intermediate results", "Store metadata", "Store query plans"], 
        answer: 0, 
        explanation: "Caching stores results to speed up repeated queries."
    },
    { 
        q: "What is query parallelization?", 
        options: ["Divide query into subqueries for parallel execution", "Divide into stages sequentially", "Divide into multiple queries", "Divide stages concurrently"], 
        answer: 0, 
        explanation: "Parallelization executes independent subqueries in parallel."
    },
    { 
        q: "Which is NOT a programming paradigm?", 
        options: ["Procedural", "Object-oriented", "Functional", "Conditional"], 
        answer: 3, 
        explanation: "Conditional is a construct, not a programming paradigm."
    },
    { 
        q: "What is the purpose of a compiler?", 
        options: ["Execute programs", "Debug programs", "Translate source to machine code", "Optimize performance"], 
        answer: 2, 
        explanation: "Compilers translate human-readable code to machine code."
    },
    { 
        q: "Main advantage of high-level languages?", 
        options: ["Easier to read/write", "Faster than low-level", "Direct hardware control", "Platform-specific"], 
        answer: 0, 
        explanation: "High-level languages are closer to human language."
    },
    { 
        q: "Purpose of variable declaration?", 
        options: ["Assign value", "Create variable", "Specify type & name", "Check validity"], 
        answer: 2, 
        explanation: "Declaration specifies data type and variable name."
    },
    { 
        q: "Purpose of loops?", 
        options: ["Calculate", "Decision making", "Store data", "Repeat instructions"], 
        answer: 3, 
        explanation: "Loops repeat instructions multiple times efficiently."
    },
    { 
        q: "Difference between function and method?", 
        options: ["Functions procedural, methods OOP", "Functions return value, methods not", "Functions operate on data, methods on objects", "No difference"], 
        answer: 0, 
        explanation: "Functions are procedural, methods belong to objects in OOP."
    },
    { 
        q: "Which is an example of a NoSQL database?", 
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], 
        answer: 2, 
        explanation: "MongoDB is a document-based NoSQL database."
    },
    { 
        q: "Primary key ensures?", 
        options: ["Unique row identification", "Fast queries", "Referential integrity", "Data replication"], 
        answer: 0, 
        explanation: "Primary key uniquely identifies table rows."
    },
    { 
        q: "ACID property of databases includes?", 
        options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Control, Integrity, Data", "Access, Control, Isolation, Durability"], 
        answer: 0, 
        explanation: "ACID ensures reliable transaction processing."
    },
    { 
        q: "Which language is used for database queries?", 
        options: ["Python", "SQL", "Java", "HTML"], 
        answer: 1, 
        explanation: "SQL is used to query and manipulate databases."
    },
    { 
        q: "What is data normalization?", 
        options: ["Compress data", "Remove redundancy", "Encrypt data", "Index data"], 
        answer: 1, 
        explanation: "Normalization reduces redundancy and ensures consistency."
    },
    { 
        q: "What is a foreign key?", 
        options: ["Primary key in another table", "Unique key", "Index", "Constraint"], 
        answer: 0, 
        explanation: "Foreign key links to a primary key in another table."
    },
    { 
        q: "What is SQL JOIN used for?", 
        options: ["Combine rows from tables", "Sort data", "Filter rows", "Aggregate data"], 
        answer: 0, 
        explanation: "JOIN retrieves related data from multiple tables."
    },
    { 
        q: "Which is a cloud computing model?", 
        options: ["IaaS", "PaaS", "SaaS", "All of the above"], 
        answer: 3, 
        explanation: "All three are common cloud computing models."
    },
    { 
        q: "Which is an example of object-oriented language?", 
        options: ["C", "Python", "HTML", "SQL"], 
        answer: 1, 
        explanation: "Python supports object-oriented programming."
    },
    { 
        q: "What is recursion?", 
        options: ["Looping", "Function calling itself", "Sorting", "Conditional"], 
        answer: 1, 
        explanation: "Recursion is when a function calls itself."
    },
    { 
        q: "Which is a type of software testing?", 
        options: ["Unit test", "Integration test", "System test", "All of the above"], 
        answer: 3, 
        explanation: "All are software testing types."
    },
    { 
        q: "Which is a data structure?", 
        options: ["Array", "Function", "Method", "Compiler"], 
        answer: 0, 
        explanation: "Array is a fundamental data structure."
    },
    { 
        q: "Which is a linear data structure?", 
        options: ["Linked list", "Tree", "Graph", "Heap"], 
        answer: 0, 
        explanation: "Linked list is a linear data structure."
    },
    { 
        q: "Which is a non-linear data structure?", 
        options: ["Stack", "Queue", "Tree", "Array"], 
        answer: 2, 
        explanation: "Tree is a non-linear data structure."
    },
    { 
        q: "What is Big O notation used for?", 
        options: ["Measure space complexity", "Measure time complexity", "Measure code length", "Measure database size"], 
        answer: 1, 
        explanation: "Big O notation describes time complexity."
    },
    { 
        q: "Which is a type of sorting algorithm?", 
        options: ["Bubble sort", "Binary search", "DFS", "Hashing"], 
        answer: 0, 
        explanation: "Bubble sort is a common sorting algorithm."
    },
    { 
        q: "Which is a graph traversal algorithm?", 
        options: ["BFS", "Quick sort", "Merge sort", "Heap sort"], 
        answer: 0, 
        explanation: "BFS traverses a graph level by level."
    },
    { 
        q: "Which is a binary search tree property?", 
        options: ["Left < Root < Right", "Root < Left < Right", "Left > Root > Right", "No property"], 
        answer: 0, 
        explanation: "BST property ensures left < root < right for each node."
    },
    { 
        q: "What is the main function of OS?", 
        options: ["Manage resources", "Compile code", "Design database", "Test software"], 
        answer: 0, 
        explanation: "OS manages hardware and software resources."
    },
    { 
        q: "What is virtual memory?", 
        options: ["Memory on disk", "Memory on RAM", "Cache memory", "Register memory"], 
        answer: 0, 
        explanation: "Virtual memory uses disk space to extend RAM."
    },
    { 
        q: "What is deadlock in OS?", 
        options: ["Multiple processes blocked indefinitely", "Process finished", "Memory leak", "Infinite loop"], 
        answer: 0, 
        explanation: "Deadlock occurs when processes wait indefinitely for resources."
    },
    { 
        q: "What is a semaphore?", 
        options: ["Synchronization tool", "Variable type", "Function", "Compiler"], 
        answer: 0, 
        explanation: "Semaphores are used to control concurrent access."
    },
    { 
        q: "What is paging in memory management?", 
        options: ["Divide memory into pages", "Sort memory", "Allocate registers", "Compile memory"], 
        answer: 0, 
        explanation: "Paging divides memory into fixed-size blocks."
    },
    { 
        q: "What is a process in OS?", 
        options: ["Program in execution", "Function", "Class", "Method"], 
        answer: 0, 
        explanation: "A process is a program that is currently running."
    },
    { 
        q: "What is a thread?", 
        options: ["Lightweight process", "Heavyweight process", "Compiler instruction", "Memory block"], 
        answer: 0, 
        explanation: "A thread is a lightweight process within a process."
    },
    { 
        q: "What is context switching?", 
        options: ["Save/restore process state", "Change CPU clock", "Sort memory", "Terminate process"], 
        answer: 0, 
        explanation: "Context switching saves/restores process state during multitasking."
    },
    { 
        q: "What is a file system?", 
        options: ["Organize data on disk", "Process scheduling", "Memory management", "Database management"], 
        answer: 0, 
        explanation: "File system organizes and manages files on storage."
    },
    { 
        q: "Which is a network protocol?", 
        options: ["TCP/IP", "HTML", "CSS", "SQL"], 
        answer: 0, 
        explanation: "TCP/IP is a standard network protocol."
    },
    { 
        q: "What is the main function of DNS?", 
        options: ["Resolve domain names", "Store files", "Process images", "Compile code"], 
        answer: 0, 
        explanation: "DNS resolves human-readable domain names to IP addresses."
    },
    { 
        q: "What is HTTP used for?", 
        options: ["Web communication", "Database queries", "OS commands", "Compile code"], 
        answer: 0, 
        explanation: "HTTP is used for transferring web resources."
    },
    { 
        q: "What is HTTPS?", 
        options: ["Secure web communication", "Database query language", "Operating system", "Compiler"], 
        answer: 0, 
        explanation: "HTTPS secures communication between client and server."
    },
    { 
        q: "Which is a client-server model?", 
        options: ["Web browsing", "Database engine", "OS kernel", "Sorting algorithm"], 
        answer: 0, 
        explanation: "Web browsing uses the client-server model."
    },
    { 
        q: "What is load balancing?", 
        options: ["Distribute workload across servers", "Compile code", "Sort arrays", "Manage memory"], 
        answer: 0, 
        explanation: "Load balancing improves performance by distributing workload."
    },





    { 
        q: "What is the Single Responsibility Principle?", 
        options: ["Open/Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Single Responsibility Principle"], 
        answer: 3, 
        explanation: "The SRP states that a component should have only one reason to change, i.e., a single well-defined responsibility."
    },
    { 
        q: "Which design pattern ensures only one instance of a class is created?", 
        options: ["Singleton pattern", "Factory pattern", "Observer pattern", "Decorator pattern"], 
        answer: 0, 
        explanation: "The Singleton pattern ensures only one instance of a class exists and provides a global access point."
    },
    { 
        q: "Which type of testing evaluates behavior under normal operating conditions?", 
        options: ["Stress testing", "Performance testing", "Functional testing", "Usability testing"], 
        answer: 2, 
        explanation: "Functional testing ensures the system functions as intended under normal conditions."
    },
    { 
        q: "Which programming paradigm avoids side effects and emphasizes data?", 
        options: ["Functional programming", "Procedural programming", "Object-oriented programming", "Event-driven programming"], 
        answer: 0, 
        explanation: "Functional programming uses immutable data and pure functions to avoid side effects."
    },
    { 
        q: "Which type of software maintenance adapts software to new environments?", 
        options: ["Corrective maintenance", "Adaptive maintenance", "Perfective maintenance", "Preventive maintenance"], 
        answer: 1, 
        explanation: "Adaptive maintenance modifies software to work in new environments or technologies."
    },
    { 
        q: "What is the purpose of usability testing?", 
        options: ["Evaluate performance under stress", "Assess user-friendliness", "Verify compliance with requirements", "Identify defects"], 
        answer: 1, 
        explanation: "Usability testing measures how user-friendly and easy-to-use the system is."
    },
    { 
        q: "Which software methodology uses iterative cycles called sprints?", 
        options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"], 
        answer: 1, 
        explanation: "Agile methodology uses sprints to iteratively develop and test small increments of software."
    },
    { 
        q: "Primary purpose of code refactoring?", 
        options: ["Add new features", "Optimize performance", "Improve readability & maintainability", "Fix defects"], 
        answer: 2, 
        explanation: "Refactoring improves code readability and maintainability without changing external behavior."
    },
    { 
        q: "Which approach involves continuous feedback and end-user involvement?", 
        options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"], 
        answer: 1, 
        explanation: "Agile methodology emphasizes customer collaboration and continuous feedback."
    },
    { 
        q: "Which testing runs the entire system in a near-production environment?", 
        options: ["Unit testing", "Integration testing", "System testing", "Regression testing"], 
        answer: 2, 
        explanation: "System testing validates the entire system in an environment similar to production."
    },
    { 
        q: "What is a use case?", 
        options: ["UI design description", "Installation procedure", "Sequence of activities by user/system", "Diagram of software components"], 
        answer: 2, 
        explanation: "A use case models a sequence of actions to achieve a specific goal."
    },
    { 
        q: "What is an actor in use case modeling?", 
        options: ["Component performing actions", "Person or system interacting", "Flow diagram", "User role description"], 
        answer: 1, 
        explanation: "An actor represents a user or system that interacts with the software."
    },
    { 
        q: "Purpose of include relationship in use cases?", 
        options: ["Reuse common steps", "Optional steps", "Extension with additional steps", "Actor-use case relationship"], 
        answer: 0, 
        explanation: "Include relationships represent reuse of common functionality between use cases."
    },
    { 
        q: "Purpose of extend relationship in use cases?", 
        options: ["Reuse common steps", "Optional steps", "Extend base use case with additional steps", "Actor-use case relationship"], 
        answer: 2, 
        explanation: "Extend relationships allow optional or additional steps to a base use case."
    },
    { 
        q: "Which diagram visualizes actors and use case relationships?", 
        options: ["Class diagram", "Use case diagram", "Activity diagram", "Sequence diagram"], 
        answer: 1, 
        explanation: "Use case diagrams show actors and their interactions with system use cases."
    },
    { 
        q: "Purpose of an abstract use case?", 
        options: ["Not fully defined", "Optional in system", "Cannot be accessed by actor", "Reused by other use cases"], 
        answer: 3, 
        explanation: "Abstract use cases capture common behavior reused by multiple use cases."
    },
    { 
        q: "Purpose of exception flow in use cases?", 
        options: ["Represent error situations", "Alternative path", "Termination", "Actor relationships"], 
        answer: 0, 
        explanation: "Exception flows describe how the system handles errors or exceptional situations."
    },
    { 
        q: "Primary goal of use case modeling?", 
        options: ["Define software architecture", "Identify & document requirements", "Design UI", "Implement functionality"], 
        answer: 1, 
        explanation: "Use case modeling documents user requirements and interactions."
    },
    { 
        q: "What is an alternative flow in use cases?", 
        options: ["Flowchart representation", "Parallel activities", "Different sequence based on conditions", "Actor relationships"], 
        answer: 2, 
        explanation: "Alternative flows show different sequences of steps based on conditions."
    },
    { 
        q: "Purpose of a use case diagram?", 
        options: ["Detail behavior", "Internal structure", "Show relationships between actors & use cases", "Activity flow"], 
        answer: 2, 
        explanation: "Use case diagrams visualize actors and their interactions with system use cases."
    }
    // Add remaining questions 21–50 following the same pattern...













        // Add all 103 questions for 2015 exam here in the same format...
    ],

"2015+1":[



  {
    q: "Which parsing technique uses left-to-right, leftmost derivation and is suitable for handling left-recursive grammar rules?",
    options: [
      "LL Parsing",
      "LR Parsing",
      "Recursive Descent Parsing",
      "Top-Down Parsing"
    ],
    answer: 0,
    explanation: "LL parsing uses a top-down approach and can handle left-factored grammars efficiently."
  },
  {
    q: "Which of the following is not a top-down parsing algorithm?",
    options: [
      "Recursive Descent Parsing",
      "LL Parsing",
      "Predictive Parsing",
      "LR Parsing"
    ],
    answer: 3,
    explanation: "LR parsing is a bottom-up parsing technique, unlike the other top-down algorithms."
  },
  {
    q: "Which parsing technique is more suitable for handling ambiguous grammars?",
    options: [
      "LL Parsing",
      "LR Parsing",
      "Recursive Descent Parsing",
      "Top-Down Parsing"
    ],
    answer: 1,
    explanation: "LR parsing can backtrack and explore multiple paths to resolve ambiguities."
  },
  {
    q: "What is the main goal of a compiler?",
    options: [
      "Execution of programs",
      "Translation of programs",
      "Optimization of programs",
      "Debugging of programs"
    ],
    answer: 1,
    explanation: "The main goal of a compiler is to translate source code into equivalent target code."
  },
  {
    q: "Which phase of the compiler analyzes the source code to identify the basic syntactic structures?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 1,
    explanation: "Syntax analysis (parsing) checks if the code conforms to the grammar of the language."
  },
  {
    q: "Which phase of the compiler assigns meaning to syntactic structures and performs type checking?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 2,
    explanation: "Semantic analysis assigns meaning to syntactic structures and performs type checking."
  },
  {
    q: "Which of the following represents the correct order of compiler phases?",
    options: [
      "Code Generation, Semantic Analysis, Lexical Analysis, Syntax Analysis",
      "Lexical Analysis, Syntax Analysis, Semantic Analysis, Code Generation",
      "Syntax Analysis, Lexical Analysis, Semantic Analysis, Code Generation",
      "Semantic Analysis, Syntax Analysis, Lexical Analysis, Code Generation"
    ],
    answer: 1,
    explanation: "Correct order: Lexical Analysis → Syntax Analysis → Semantic Analysis → Code Generation."
  },
  {
    q: "Which data structure is commonly used in symbol tables during the compilation process?",
    options: [
      "Stack",
      "Queue",
      "Hash Table",
      "Linked List"
    ],
    answer: 2,
    explanation: "Hash tables provide efficient lookup and retrieval of symbols."
  },
  {
    q: "Which phase of the compiler performs optimization techniques to improve efficiency of the generated code?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Optimization"
    ],
    answer: 3,
    explanation: "Code optimization eliminates redundant instructions, applies loop optimizations, etc."
  },
  {
    q: "Which of the following is not a typical optimization performed by a compiler?",
    options: [
      "Constant Folding",
      "Loop Unrolling",
      "Dead Code Elimination",
      "Syntax Analysis"
    ],
    answer: 3,
    explanation: "Syntax analysis is not an optimization; it analyzes the code's syntax."
  },
  {
    q: "Which phase of the compiler generates the target code?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 3,
    explanation: "Code generation produces machine code, intermediate code, or other executable forms."
  },
  {
    q: "Which of the following is an advantage of using an intermediate representation during compilation?",
    options: [
      "Faster compilation speed",
      "Improved error detection",
      "Portability across different platforms",
      "Reduced memory usage"
    ],
    answer: 2,
    explanation: "Intermediate code allows the same code to be translated to multiple target platforms."
  },
  {
    q: "Which phase of the compiler is responsible for error handling and reporting?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Error Handling"
    ],
    answer: 1,
    explanation: "Syntax analysis detects syntax errors and reports them to the programmer."
  },
  {
    q: "Which of the following is true about syntax-directed translation?",
    options: [
      "It only involves the lexical analysis phase.",
      "It involves generating intermediate code from the parse tree.",
      "It is concerned with optimization of generated code.",
      "It is performed during the code generation phase."
    ],
    answer: 1,
    explanation: "Syntax-directed translation associates actions with grammar productions to generate intermediate code."
  },
  {
    q: "What is the purpose of semantic rules in syntax-directed translation?",
    options: [
      "To define the syntactic structure of the language.",
      "To assign types to variables used in the program.",
      "To perform optimization techniques on intermediate code.",
      "To define the order of evaluation of expressions."
    ],
    answer: 1,
    explanation: "Semantic rules assign types, perform type checking, and enforce type compatibility."
  },
  {
    q: "Which phase of the compiler is responsible for type checking?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 2,
    explanation: "Semantic analysis ensures operations are type-correct and manages the symbol table."
  },
  {
    q: "What is type checking in a compiler?",
    options: [
      "Verifying the syntax of the program.",
      "Detecting lexical errors in the program.",
      "Ensuring operations on variables are well-defined and compatible.",
      "Generating intermediate code for the program."
    ],
    answer: 2,
    explanation: "Type checking ensures operations on variables are compatible with their declared types."
  },
  {
    q: "Which of the following is an example of a static type checking technique?",
    options: [
      "Type inference",
      "Dynamic typing",
      "Run-time type checking",
      "Operator overloading"
    ],
    answer: 0,
    explanation: "Type inference deduces variable types at compile-time without explicit declarations."
  },
  {
    q: "What is the purpose of a type symbol table in a compiler?",
    options: [
      "To store the types of variables used in the program.",
      "To store the names of variables used in the program.",
      "To store the intermediate code generated during parsing.",
      "To store the syntax rules of the programming language."
    ],
    answer: 0,
    explanation: "A type symbol table stores type information for variables, functions, etc., for type checking."
  },
  {
    q: "Which of the following is an example of a type error in a program?",
    options: [
      "Syntax error in an if-else statement.",
      "Division of a number by zero.",
      "Accessing an array element out of bounds.",
      "Incorrect indentation in the program."
    ],
    answer: 1,
    explanation: "Division by zero is a type error as it violates arithmetic semantics."
  },
  {
    q: "Which of the following is an advantage of using type checking in a compiler?",
    options: [
      "Improved program performance.",
      "Enhanced code optimization.",
      "Early detection of potential runtime errors.",
      "Simplified debugging process."
    ],
    answer: 2,
    explanation: "Type checking detects potential runtime errors before execution."
  },
  {
    q: "What is the primary goal of type checking in a compiler?",
    options: [
      "To ensure syntactic correctness of the program.",
      "To generate efficient machine code.",
      "To enforce programming language rules and constraints.",
      "To provide support for code reuse through libraries."
    ],
    answer: 2,
    explanation: "Type checking enforces language rules and ensures program correctness regarding types."
  },
  {
    q: "Which of the following is an example of type coercion or type conversion?",
    options: [
      "Assigning a floating-point value to an integer variable.",
      "Assigning a value to an uninitialized variable.",
      "Declaring a variable without specifying its type.",
      "Using an undeclared variable in the program."
    ],
    answer: 0,
    explanation: "Assigning a float to an int is an example of type conversion or coercion."
  },







  {
    q: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    options: ["Merge Sort", "Heap Sort", "Quick Sort", "Insertion Sort"],
    answer: 0,
    explanation: "Merge Sort works efficiently on linked lists and has O(n log n) time complexity."
  },
  {
    q: "Which combinational circuit receives 2^n input lines and directs them to a single output line?",
    options: ["Decoder", "Encoder", "Multiplexer", "Flip flop"],
    answer: 2,
    explanation: "A multiplexer selects one input from multiple inputs and sends it to a single output."
  },
  {
    q: "Maximum number of elements in the array declaration int x[5][8]; is",
    options: ["40", "28", "13"],
    answer: 0,
    explanation: "Total elements = rows × columns = 5 × 8 = 40."
  },
  {
    q: "The total number of states required to automate the regular expression (00)*(11)* is",
    options: ["3", "5", "4", "6"],
    answer: 1,
    explanation: "The minimal DFA for (00)*(11)* requires 5 states."
  },
  {
    q: "First order logic statements contain ______.",
    options: [
      "Predicate and Preposition",
      "Subject and an Object",
      "Predicate and Subject",
      "None of the above"
    ],
    answer: 2,
    explanation: "First order logic consists of predicates applied to subjects."
  },
  {
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: [
      "It is recognized by a device of infinite states",
      "It takes no auxiliary memory",
      "All of the mentioned",
      "None of the mentioned"
    ],
    answer: 1,
    explanation: "Languages generated simply from primitive languages do not require auxiliary memory."
  },
  {
    q: "Which of the following is used to display the output in PHP?",
    options: ["Echo", "Write", "Print", "Both (a) and (c)"],
    answer: 3,
    explanation: "Both echo and print are used to display output in PHP."
  },
  {
    q: "In order to ensure the security of the data/information, we need to ____________ the data.",
    options: ["Encrypt", "Decrypt", "Delete", "None of the above"],
    answer: 0,
    explanation: "Encryption protects data from unauthorized access."
  },
  {
    q: "Which of the following is not a type of database?",
    options: ["Decentralized", "Distributed", "Hierarchical", "Network"],
    answer: 0,
    explanation: "Decentralized is not considered a standard database model."
  },
  {
    q: "Which of the following statement is false?",
    options: [
      "Regular language is the subset of context sensitive language",
      "Context sensitive language is a subset of context free language",
      "Context free language is the subset of context sensitive language",
      "Recursively enumerable language is the superset of regular language"
    ],
    answer: 1,
    explanation: "Context-sensitive languages are NOT a subset of context-free languages."
  },
  {
    q: "Which of the following statements is not true?",
    options: [
      "Every language defined by a regular expression can be represented using a DFA",
      "Regular expression is just another representation for any automata definition",
      "Every language defined by a regular expression can be represented using NFA with ε-moves",
      "Every language defined by any of the automata is also defined by a regular expression"
    ],
    answer: 0,
    explanation: "Some regular expressions require conversion steps and are not directly represented as DFA."
  },
  {
    q: "Which AI technique enables computers to understand the associations and relationships between objects and events?",
    options: [
      "Heuristic Processing",
      "Relative Symbolism",
      "Cognitive Science",
      "Pattern Matching"
    ],
    answer: 3,
    explanation: "Pattern matching helps identify relationships and associations between data."
  },
  {
    q: "Which word correctly summarizes the importance of software design?",
    options: ["Efficiency", "Quality", "Complexity", "Accuracy"],
    answer: 1,
    explanation: "Good software design directly impacts overall software quality."
  },
  {
    q: "Function prototyping is used to",
    options: [
      "Describe the return value only",
      "Describe the parameters",
      "Introduce the function",
      "Describe type of arguments"
    ],
    answer: 2,
    explanation: "Function prototypes introduce the function to the compiler before its definition."
  },
  {
    q: "The main memory accommodates ____________",
    options: ["CPU", "User processes", "Operating system", "All of the mentioned"],
    answer: 3,
    explanation: "Main memory holds the OS, user processes, and related data."
  },


 
  {
    q: "The variables which can be accessed by all of the program modules in a computer program are called",
    options: ["Global variables", "Parameters", "Arguments", "Local variables"],
    answer: 0,
    explanation: "Global variables can be accessed from any module of the program."
  },
  {
    q: "In computer networks, nodes are",
    options: [
      "The computer that originates the data",
      "The computer that routes the data",
      "The computer that terminates the data",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "A node can originate, route, or terminate data."
  },
  {
    q: "Which form has a relation that contains information about a single entity?",
    options: ["5NF", "4NF", "3NF", "2NF"],
    answer: 1,
    explanation: "4NF ensures relations contain information about a single entity."
  },
  {
    q: "The operating system is responsible for",
    options: [
      "Bad-block recovery",
      "Booting from disk",
      "Disk initialization",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "All listed tasks are handled by the operating system."
  },
  {
    q: "Which function is used to set a cookie in PHP?",
    options: ["createcookie()", "makecookie()", "setcookie()", "None of the above"],
    answer: 2,
    explanation: "setcookie() is the PHP function used to create cookies."
  },
  {
    q: "If the hypothesis predicts positive but the result is negative, it is known as",
    options: [
      "Specialized Hypothesis",
      "Consistent Hypothesis",
      "False Negative Hypothesis",
      "False Positive Hypothesis"
    ],
    answer: 3,
    explanation: "False positive occurs when a positive is predicted but the actual result is negative."
  },
  {
    q: "Which is used for creating and deleting database structures?",
    options: [
      "Relational Schema",
      "Query",
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)"
    ],
    answer: 2,
    explanation: "DDL defines and modifies database structures."
  },
  {
    q: "The output of the lexical and syntax analyzer is",
    options: [
      "Parse stream, parse tree",
      "Token tree, parse tree",
      "All of the mentioned",
      "Token stream, parse tree"
    ],
    answer: 3,
    explanation: "Lexical analyzer produces tokens and syntax analyzer produces parse tree."
  },
  {
    q: "A deadlock avoidance algorithm examines the",
    options: [
      "Resources",
      "System storage state",
      "Operating system",
      "Resource allocation state"
    ],
    answer: 3,
    explanation: "Deadlock avoidance ensures no circular wait by checking resource allocation."
  },
  {
    q: "Recursive binary search uses which technique?",
    options: [
      "Simple recursion",
      "Divide and conquer",
      "Branch and bound",
      "Dynamic programming"
    ],
    answer: 1,
    explanation: "Binary search divides the problem into smaller subproblems."
  },
  {
    q: "For an effective operating system, when should deadlock be checked?",
    options: [
      "Every time a resource request is made at fixed time intervals",
      "At fixed time intervals",
      "Every time a resource request is made",
      "None of the mentioned"
    ],
    answer: 0,
    explanation: "Deadlock detection is performed periodically when resource requests occur."
  },
  {
    q: "Which error is handled by the operating system?",
    options: [
      "Lack of paper in printer",
      "Power failure",
      "Network connection failure",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "The OS handles all hardware and system-level errors."
  },
  {
    q: "The dispatcher in a process scheduler is responsible for",
    options: [
      "Assigning ready processes to waiting queue",
      "Assigning running processes to blocked queue",
      "Assigning ready processes to CPU",
      "All of the mentioned"
    ],
    answer: 2,
    explanation: "Dispatcher assigns the CPU to ready processes."
  },
  {
    q: "A device that forwards packets between networks is called",
    options: ["Router", "Hub", "Firewall", "Bridge"],
    answer: 0,
    explanation: "Routers forward packets using routing information."
  },
  {
    q: "Communication channel shared by all machines is found in",
    options: [
      "Multicast network",
      "Unicast network",
      "Broadcast network",
      "Anycast network"
    ],
    answer: 2,
    explanation: "Broadcast networks share the communication channel."
  },
  {
    q: "Minimum transitions required for {a,b}*{baaa} to reach final state is",
    options: ["5", "4", "3", "6"],
    answer: 1,
    explanation: "The minimum number of transitions is 4."
  },
  {
    q: "An array is",
    options: [
      "Contiguous allocation of memory occupied by similar data types",
      "Contiguous allocation of memory occupied by different data types",
      "De-allocation of memory of similar data types",
      "None"
    ],
    answer: 0,
    explanation: "Arrays store similar data types in contiguous memory locations."
  },
  {
    q: "Network congestion occurs",
    options: [
      "In case of transfer failure",
      "When connection terminates",
      "When system terminates",
      "In case of traffic overloading"
    ],
    answer: 3,
    explanation: "Congestion happens when network traffic exceeds capacity."
  },
  {
    q: "Auxiliary memory is",
    options: [
      "Memory that communicates with CPU",
      "A device that provides backup storage",
      "Fastest memory",
      "All"
    ],
    answer: 1,
    explanation: "Auxiliary memory is used for secondary/backup storage."
  },
  {
    q: "Linked lists are not suitable for implementing",
    options: [
      "Insertion sort",
      "Binary search",
      "Radix sort",
      "Polynomial manipulation"
    ],
    answer: 1,
    explanation: "Binary search requires random access, which linked lists do not support."
  },
  {
    q: "Which does not belong to OOP concepts?",
    options: [
      "Data binding",
      "Message passing",
      "Data hiding",
      "Platform independent"
    ],
    answer: 3,
    explanation: "Platform independence is not an OOP concept."
  },
  {
    q: "Which is an incorrect activity in software configuration management?",
    options: [
      "Change management",
      "Version management",
      "Internship management",
      "System management"
    ],
    answer: 2,
    explanation: "Internship management is unrelated to software configuration management."
  },
  {
    q: "Which command permanently saves a transaction in a database?",
    options: ["Commit", "Rollback", "Savepoint", "None"],
    answer: 0,
    explanation: "COMMIT makes database changes permanent."
  },
  {
    q: "An AI agent perceives and acts using",
    options: ["Sensors", "Perceiver", "Actuators", "Both a and c"],
    answer: 3,
    explanation: "AI agents use sensors to perceive and actuators to act."
  },
  {
    q: "Database architecture is viewed as",
    options: ["Three-level", "Two-level", "One-level", "Four-level"],
    answer: 0,
    explanation: "Database architecture follows the three-level schema."
  },
  {
    q: "Rows of a relation are called",
    options: ["Degree", "Tuples", "Entity", "All of the above"],
    answer: 3,
    explanation: "Rows are tuples and represent entities in a relation."
  },
  {
    q: "If a process fails, the OS writes error information to",
    options: [
      "New file",
      "Another running process",
      "Log file",
      "None"
    ],
    answer: 2,
    explanation: "Error logs are stored in log files."
  },
  {
    q: "Which data structure is preferred in database systems?",
    options: ["B-tree", "AVL tree", "Splay tree", "B+ tree"],
    answer: 3,
    explanation: "B+ trees are optimized for database indexing."
  },
  {
    q: "Which model represents the dynamic behavior of a system?",
    options: [
      "Object model",
      "Context model",
      "Behavioral model",
      "Data model"
    ],
    answer: 2,
    explanation: "Behavioral models show how a system behaves over time."
  },
  {
    q: "CPU scheduling is the basis of",
    options: [
      "Multiprocessor systems",
      "Multiprogramming operating systems",
      "None of the mentioned",
      "Large memory systems"
    ],
    answer: 1,
    explanation: "CPU scheduling enables multiprogramming."
  },
  {
    q: "The strcpy() function",
    options: [
      "Copies one string to another",
      "Concatenates two strings",
      "Compares two strings",
      "Finds string length"
    ],
    answer: 0,
    explanation: "strcpy() copies one string into another."
  },
  {
    q: "Which technique predicts effort using LOC or FP?",
    options: [
      "Process-based estimation",
      "FP-based estimation",
      "COCOMO",
      "Both COCOMO and FP-based estimation"
    ],
    answer: 3,
    explanation: "Both methods estimate effort based on size metrics."
  },
  {
    q: "Overall database design is defined using",
    options: [
      "Application program",
      "Data definition language",
      "Schema",
      "Source code"
    ],
    answer: 2,
    explanation: "Schema defines the structure of the database."
  },
  {
    q: "Which gives a finite solution for infinite language input?",
    options: [
      "Compiler",
      "Interpreter",
      "Loader and Linker",
      "None of the mentioned"
    ],
    answer: 0,
    explanation: "Compilers process infinite language definitions into finite machine code."
  }



],


"2015+2" : [

  {
    q: "Which of the following is a common way of communicating with I/O devices?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "All of the above"
    ],
    answer: 3,
    explanation: "Memory-mapped I/O, DMA, and interrupt-driven I/O are all common ways of communicating with I/O devices."
  },
  {
    q: "In memory-mapped I/O, I/O devices are mapped into the:",
    options: [
      "Main memory address space",
      "Cache memory address space",
      "Virtual memory address space",
      "Secondary memory address space"
    ],
    answer: 0,
    explanation: "In memory-mapped I/O, I/O devices are assigned addresses in the main memory address space."
  },
  {
    q: "Which technique allows data to be transferred between an I/O device and memory without involving the CPU?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "I/O polling"
    ],
    answer: 1,
    explanation: "DMA allows the I/O device to transfer data directly to/from memory without CPU intervention."
  },
  {
    q: "Which method is used to handle I/O operations that require immediate attention from the CPU?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "I/O polling"
    ],
    answer: 2,
    explanation: "Interrupt-driven I/O uses interrupts to signal the CPU that an I/O operation requires immediate attention."
  },
  {
    q: "Which I/O technique involves the CPU continuously checking the status of an I/O device for data transfer completion?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "I/O polling"
    ],
    answer: 3,
    explanation: "I/O polling involves the CPU repeatedly checking the status of an I/O device until data transfer is complete."
  },
  {
    q: "Which standard I/O interface is commonly used in UNIX-like operating systems?",
    options: [
      "ASCII",
      "USB",
      "RS-232",
      "POSIX"
    ],
    answer: 3,
    explanation: "POSIX is a standard I/O interface commonly used in UNIX-like operating systems."
  },
  {
    q: "Which standard I/O interface allows the connection of peripheral devices using a serial communication protocol?",
    options: [
      "USB",
      "Ethernet",
      "RS-232",
      "HDMI"
    ],
    answer: 2,
    explanation: "RS-232 is a standard interface for serial communication and is commonly used for connecting peripheral devices."
  },
  {
    q: "Which standard I/O interface is widely used for connecting external storage devices, such as hard drives and flash drives?",
    options: [
      "SATA",
      "USB",
      "Ethernet",
      "HDMI"
    ],
    answer: 1,
    explanation: "USB (Universal Serial Bus) is widely used for connecting external storage devices and other peripherals."
  },
  {
    q: "Which standard I/O interface is commonly used for high-speed communication between computer components?",
    options: [
      "SATA",
      "USB",
      "Ethernet",
      "HDMI"
    ],
    answer: 0,
    explanation: "SATA (Serial ATA) is commonly used for high-speed communication between storage devices and the motherboard."
  },
  {
    q: "Which standard I/O interface is primarily used for audio and video transmission between devices?",
    options: [
      "SATA",
      "USB",
      "Ethernet",
      "HDMI"
    ],
    answer: 3,
    explanation: "HDMI (High-Definition Multimedia Interface) is used primarily for audio and video transmission between devices."
  },
  {
    q: "Which of the following techniques improves the performance of a processor by overlapping the execution of multiple instructions?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 0,
    explanation: "Pipelining allows multiple instructions to execute simultaneously by dividing execution into stages."
  },
  {
    q: "Which technique improves the performance of a processor by storing frequently accessed data closer to the processor?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 1,
    explanation: "Caching reduces memory access time by storing frequently accessed data closer to the processor."
  },
  {
    q: "Which architecture allows multiple instructions to be executed in parallel by having multiple execution units?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 2,
    explanation: "Superscalar architecture enables execution of multiple instructions simultaneously using multiple execution units."
  },
  {
    q: "Which technique predicts the outcome of conditional branches to improve instruction execution in a processor?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 3,
    explanation: "Branch prediction predicts whether a conditional branch will be taken, allowing prefetch of instructions."
  },
  {
    q: "Which technique improves memory access performance by organizing memory into hierarchical levels?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Virtual memory"
    ],
    answer: 1,
    explanation: "Caching improves memory access by using a hierarchy of cache memories that store frequently accessed data."
  },
  {
    q: "Which technique reduces memory access latency by allowing the processor to fetch multiple instructions in a single cycle?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Instruction-level parallelism"
    ],
    answer: 3,
    explanation: "Instruction-level parallelism allows the processor to fetch and execute multiple instructions in parallel."
  },
  {
    q: "Which technique improves performance by translating high-level language instructions into a more efficient form before execution?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Just-in-time (JIT) compilation"
    ],
    answer: 3,
    explanation: "JIT compilation translates high-level instructions into machine code at runtime for better efficiency."
  },
  {
    q: "Which technique improves performance by predicting the next set of instructions to be executed based on past execution patterns?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 3,
    explanation: "Branch prediction predicts the next instructions to reduce pipeline stalls and improve performance."
  },
  {
    q: "Which technique improves performance by dynamically reordering instructions to maximize instruction-level parallelism?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Out-of-order execution"
    ],
    answer: 3,
    explanation: "Out-of-order execution allows instructions to execute in an order that maximizes parallelism."
  },
  {
    q: "Which technique improves performance by dynamically allocating processor resources based on program behavior?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Dynamic resource allocation"
    ],
    answer: 3,
    explanation: "Dynamic resource allocation adjusts processor resources in response to program behavior to improve performance."
  },










{
  q: "Every recursive language is also a recursively enumerable language. True or False?",
  options: [
    "Every recursive language is also a recursively enumerable language.",
    "Every recursively enumerable language is also a recursive language.",
    "Recursive languages are a strict subset of recursively enumerable languages.",
    "Recursive languages are unrelated to recursively enumerable languages."
  ],
  answer: 0,
  explanation: "Recursive languages are a subset of recursively enumerable languages, and they can be recognized by a Turing machine that always halts."
},
{
  q: "Which of the following is an example of an undecidable problem?",
  options: [
    "Checking if a given number is prime",
    "Sorting a list of numbers in ascending order",
    "Solving a system of linear equations",
    "Determining if a Turing machine halts on a given input"
  ],
  answer: 3,
  explanation: "Determining if a Turing machine halts on a given input, known as the halting problem, is undecidable."
},
{
  q: "Which of the following is an example of a non-recursive language?",
  options: [
    "{anbncn | n ≥ 0}",
    "{an | n is a prime number}",
    "{wwR | w is any string}",
    "{anb | n ≥ 0}"
  ],
  answer: 2,
  explanation: "The language {wwR | w is any string} cannot be recognized by a Turing machine that always halts, making it non-recursive."
},
{
  q: "Which of the following is true about the Chomsky hierarchy?",
  options: [
    "It categorizes formal languages based on their computational complexity.",
    "It categorizes formal languages based on their expressive power.",
    "It categorizes formal languages based on their alphabet size.",
    "It categorizes formal languages based on their syntactic structure."
  ],
  answer: 3,
  explanation: "The Chomsky hierarchy categorizes formal languages into four levels based on their syntactic structure and grammar types."
},
{
  q: "Which type of grammar is used to generate the language L = {anbn | n ≥ 0}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 1,
  explanation: "The language {anbn | n ≥ 0} can be generated by a context-free grammar."
},
{
  q: "Which of the following is a context-sensitive language?",
  options: [
    "{anbn | n ≥ 0}",
    "{anbm | n, m ≥ 0}",
    "{an | n is a prime number}",
    "{anb | n ≥ 0}"
  ],
  answer: 1,
  explanation: "The language {anbm | n, m ≥ 0} is context-sensitive."
},
{
  q: "Which type of automaton is used to recognize the language L = {anbn | n ≥ 0}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 1,
  explanation: "A pushdown automaton, using a stack, can recognize {anbn | n ≥ 0}."
},
{
  q: "Which grammar generates the language L = {wwR | w is any string}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 3,
  explanation: "The language {wwR | w is any string} requires an unrestricted grammar."
},
{
  q: "Which type of automaton is used to recognize the language L = {wwR | w is any string}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 2,
  explanation: "A Turing machine can recognize {wwR | w is any string}."
},
{
  q: "Which type of grammar is used to generate the language L = {0n1n2n | n ≥ 0}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 2,
  explanation: "The language {0n1n2n | n ≥ 0} is generated by a context-sensitive grammar."
},
{
  q: "Which type of automaton is used to recognize the language L = {0n1n2n | n ≥ 0}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 2,
  explanation: "A Turing machine can recognize {0n1n2n | n ≥ 0}."
},
{
  q: "Which type of grammar is used to generate the language L = {an | n is a prime number}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 3,
  explanation: "Generating {an | n is prime} requires an unrestricted grammar."
},
{
  q: "Which type of automaton is used to recognize the language L = {an | n is a prime number}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 2,
  explanation: "A Turing machine can recognize {an | n is a prime number}."
},
{
  q: "Which type of grammar is used to generate the language L = {anb | n ≥ 0}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 0,
  explanation: "The language {anb | n ≥ 0} can be generated by a regular grammar."
},
{
  q: "Which complexity class contains problems that can be solved in polynomial time?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 0,
  explanation: "The complexity class P contains problems solvable in polynomial time."
},
{
  q: "Which complexity class represents problems that can be verified in polynomial time?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 1,
  explanation: "NP contains problems verifiable in polynomial time."
},
{
  q: "Which complexity class contains problems that can be solved using polynomial space?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 2,
  explanation: "PSPACE contains problems solvable using polynomial space."
},
{
  q: "Which concept is used to show that one problem can be reduced to another to prove hardness?",
  options: [
    "Reductions",
    "Hierarchy",
    "Completeness",
    "Complexity classes"
  ],
  answer: 0,
  explanation: "Reductions are used to prove hardness or completeness by transforming one problem into another."
},
{
  q: "Which complexity class represents the most difficult problems in a particular class?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 2,
  explanation: "PSPACE represents the most difficult problems in polynomial space."
},
{
  q: "Which phase of the compiler is responsible for recognizing tokens and building a symbol table?",
  options: [
    "Lexical Analysis",
    "Syntax Analysis",
    "Semantic Analysis",
    "Code Generation"
  ],
  answer: 0,
  explanation: "Lexical Analysis scans the source code, recognizes tokens, and builds a symbol table."
},
{
  q: "What is the primary output of the lexical analysis phase?",
  options: [
    "Abstract Syntax Tree (AST)",
    "Symbol Table",
    "Intermediate Code",
    "Assembly Code"
  ],
  answer: 1,
  explanation: "The primary output of lexical analysis is the symbol table."
},
{
  q: "Which phase of the compiler is responsible for checking the correctness of the program's structure?",
  options: [
    "Lexical Analysis",
    "Syntax Analysis",
    "Semantic Analysis",
    "Code Generation"
  ],
  answer: 1,
  explanation: "Syntax Analysis checks the correctness of the program's structure."
},









{
  q: "The basic building block of computer hardware is:",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 1,
  explanation: "Memory is the fundamental building block of computer hardware, where data and instructions are stored for processing."
},
{
  q: "Which component is responsible for executing instructions and performing calculations in a computer?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 0,
  explanation: "The Central Processing Unit (CPU) executes instructions and performs calculations in a computer."
},
{
  q: "Which component stores data and instructions even when the computer is turned off?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 2,
  explanation: "The hard disk is a non-volatile storage device that stores data and instructions even when the computer is turned off."
},
{
  q: "The motherboard of a computer is responsible for:",
  options: [
    "Executing instructions",
    "Storing data",
    "Connecting different components",
    "Performing calculations"
  ],
  answer: 2,
  explanation: "The motherboard acts as a central hub connecting the CPU, memory, storage devices, and peripherals."
},
{
  q: "Which component is responsible for storing data and instructions temporarily during program execution?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 1,
  explanation: "Memory stores data and instructions temporarily while a program is executed by the CPU."
},
{
  q: "Which type of software controls and manages the hardware resources of a computer?",
  options: [
    "Operating system",
    "Application software",
    "Programming language",
    "Compiler"
  ],
  answer: 0,
  explanation: "The operating system manages hardware resources such as memory, CPU, and peripherals."
},
{
  q: "Which software allows users to perform specific tasks or functions on a computer?",
  options: [
    "Operating system",
    "Application software",
    "Programming language",
    "Compiler"
  ],
  answer: 1,
  explanation: "Application software allows users to perform tasks such as word processing or graphic design."
},
{
  q: "Which component of the computer system holds the instructions and data that are currently being processed?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 1,
  explanation: "Memory holds the instructions and data that are currently being processed by the CPU."
},
{
  q: "Which type of software translates high-level programming languages into machine code?",
  options: [
    "Operating system",
    "Application software",
    "Programming language",
    "Compiler"
  ],
  answer: 3,
  explanation: "A compiler translates high-level programming languages into machine code."
},
{
  q: "The system clock in a computer is responsible for:",
  options: [
    "Controlling the execution speed of instructions",
    "Storing data and instructions",
    "Managing the input/output devices",
    "Connecting different hardware components"
  ],
  answer: 0,
  explanation: "The system clock generates timing signals to control execution speed and synchronize operations."
},
{
  q: "Which process is responsible for fetching instructions from memory?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 2,
  explanation: "Fetching retrieves instructions from memory to be executed by the CPU."
},
{
  q: "Which process decodes the fetched instruction and determines the necessary actions?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 0,
  explanation: "Decoding interprets the fetched instruction and determines the actions to be taken by the CPU."
},
{
  q: "Which process carries out the actual operations or calculations specified by the instruction?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 1,
  explanation: "Execution performs the operations or calculations specified by the decoded instruction."
},
{
  q: "Which process is responsible for storing the results of the executed instruction?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 3,
  explanation: "Storing saves the results of the executed instruction back to memory or registers."
},
{
  q: "Which unit of the CPU is responsible for fetching instructions and data from memory?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 1,
  explanation: "The Control Unit fetches instructions and data and coordinates other CPU operations."
},
{
  q: "Which unit of the CPU performs arithmetic and logical operations?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 0,
  explanation: "The ALU performs arithmetic (add, subtract) and logical (AND, OR) operations."
},
{
  q: "Which component of the CPU temporarily stores data and instructions during processing?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 3,
  explanation: "The Register Unit temporarily stores data and instructions during processing."
},
{
  q: "Which component of the CPU controls the flow of data and instructions within the CPU?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 1,
  explanation: "The Control Unit coordinates operations and controls data/instruction flow within the CPU."
},
{
  q: "Which component of the CPU stores frequently accessed data for faster access?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 2,
  explanation: "The Cache Unit stores frequently accessed data closer to the CPU for faster access."
},
{
  q: "Which process is responsible for determining the next instruction to be fetched and executed?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 2,
  explanation: "The fetching process uses the program counter to determine the next instruction to execute."
},
{
  q: "Which of the following describes the relationship between formal languages, formal grammars, and automata?",
  options: [
    "Formal languages are generated by formal grammars, which are recognized by automata.",
    "Formal languages recognize automata, which are generated by formal grammars.",
    "Formal grammars generate automata, which recognize formal languages.",
    "Formal grammars recognize formal languages, which generate automata."
  ],
  answer: 0,
  explanation: "Formal languages are generated by formal grammars, and automata are used to recognize these languages."
}

],
















    "2016": [

        { 
            q: "Which approach is commonly used for query processing in a distributed database system?", 
            options: ["Centralized query processing", "Distributed query processing", "Parallel query processing", "Sequential query processing"], 
            answer: 1, 
            explanation: "Distributed query processing involves distributing query execution across multiple sites."
        },
        { 
            q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
            options: ["It ensures the consistency of data across all sites.", "It manages the distribution and retrieval of data across multiple sites.", "It controls the access permissions of users in the system.", "It handles the physical storage of data at each site."], 
            answer: 0, 
            explanation: "It ensures data consistency across all sites."
        },



    { 
        q: 'What does the "this" keyword refer to in Java?', 
        options: [
            'The current object instance', 
            'The superclass of the current class', 
            'The subclass of the current class', 
            'The class that contains the current method'
        ], 
        answer: 0, 
        explanation: '"this" refers to the current object instance and is used to access instance variables/methods.'
    },
    { 
        q: 'What is a constructor in Java?', 
        options: [
            'A method that returns a value', 
            'A method used for exception handling', 
            'A special method used to initialize objects', 
            'A method used to override a superclass method'
        ], 
        answer: 2, 
        explanation: 'A constructor is a special method used to initialize objects; it has the same name as the class and is called automatically when an object is created.'
    },
    { 
        q: 'What is method overloading in Java?', 
        options: [
            'Creating multiple methods with the same name but different return types', 
            'Creating multiple methods with the same name but different parameter lists', 
            'Creating multiple methods with the same name and parameter list but different return types', 
            'Creating multiple methods with the same name and parameter list but different access modifiers'
        ], 
        answer: 1, 
        explanation: 'Method overloading allows multiple methods with the same name but different parameter lists; the compiler chooses which method to call based on arguments.'
    },
    { 
        q: 'What is method overriding in Java?', 
        options: [
            'Creating multiple methods with the same name but different return types', 
            'Creating multiple methods with the same name but different parameter lists', 
            'Creating a new method with the same name and parameter list in the subclass', 
            'Redefining a method in the subclass that already exists in the superclass'
        ], 
        answer: 3, 
        explanation: 'Method overriding occurs when a subclass provides its own implementation of a method that exists in the superclass with the same signature.'
    },
    { 
        q: 'What is the purpose of the super keyword in Java?', 
        options: [
            'It refers to the current object instance', 
            'It refers to the superclass of the current class', 
            'It refers to the class that contains the current method', 
            'It refers to the class from which the current class is derived'
        ], 
        answer: 1, 
        explanation: 'The super keyword refers to the superclass of the current class and can be used to access its members or constructor.'
    },
    { 
        q: 'What is polymorphism in Java?', 
        options: [
            'The ability to create multiple objects of the same class', 
            'The process of converting an object to a string representation', 
            'The ability of an object to take on many forms through inheritance', 
            'The process of comparing two objects for equality'
        ], 
        answer: 2, 
        explanation: 'Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling method overriding and dynamic method dispatch.'
    },
    { 
        q: 'Which object-oriented principle promotes code reuse and relationships between classes?', 
        options: [
            'Encapsulation', 
            'Inheritance', 
            'Polymorphism', 
            'Abstraction'
        ], 
        answer: 1, 
        explanation: 'Inheritance allows classes to inherit properties and methods from other classes, promoting code reuse.'
    },
    { 
        q: 'What is the purpose of encapsulation in OOP?', 
        options: [
            'To create relationships between classes', 
            'To allow classes to inherit properties and behaviors', 
            'To hide internal implementation details and expose a public interface', 
            'To provide different implementations of a method based on the object\'s type'
        ], 
        answer: 2, 
        explanation: 'Encapsulation bundles data and methods together and hides internal implementation while providing a public interface.'
    },
    { 
        q: 'Which OOP principle allows an object to exhibit different behaviors based on its data type?', 
        options: [
            'Encapsulation', 
            'Inheritance', 
            'Polymorphism', 
            'Abstraction'
        ], 
        answer: 2, 
        explanation: 'Polymorphism allows objects to take many forms and exhibit different behaviors depending on their type.'
    },
    { 
        q: 'What is the purpose of abstraction in OOP?', 
        options: [
            'To create relationships between classes', 
            'To allow classes to inherit properties and behaviors', 
            'To hide internal implementation details and expose a public interface', 
            'To provide different implementations of a method based on the object\'s type'
        ], 
        answer: 2, 
        explanation: 'Abstraction simplifies complex systems by exposing only essential features while hiding implementation details.'
    },
    { 
        q: 'Which keyword is used to implement inheritance in Java?', 
        options: ['super', 'extends', 'implements', 'this'], 
        answer: 1, 
        explanation: 'The extends keyword indicates that a class inherits from a superclass.'
    },
    { 
        q: 'Which keyword is used to implement method overriding in Java?', 
        options: ['super', 'extends', 'implements', 'override'], 
        answer: 3, 
        explanation: 'In Java, overriding occurs automatically when a subclass defines a method with the same signature as the superclass method.'
    },
    { 
        q: 'What is the purpose of an interface in Java?', 
        options: [
            'To define a blueprint for a class', 
            'To allow multiple inheritance', 
            'To create objects directly', 
            'To hide internal implementation details'
        ], 
        answer: 0, 
        explanation: 'An interface defines a set of methods a class must implement and cannot be instantiated directly.'
    },
    { 
        q: 'Which OOP principle groups related properties and behaviors into a single unit?', 
        options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'], 
        answer: 0, 
        explanation: 'Encapsulation bundles related data and methods into a class for better modularity.'
    },
    { 
        q: 'Which OOP concept is used to create objects based on a class?', 
        options: ['Polymorphism', 'Inheritance', 'Encapsulation', 'Instantiation'], 
        answer: 3, 
        explanation: 'Instantiation creates objects from a predefined class or blueprint.'
    },
    { 
        q: 'Which of the following is NOT a technique used for algorithm analysis?', 
        options: ['Asymptotic analysis', 'Experimental analysis', 'Dynamic analysis', 'Graph analysis'], 
        answer: 2, 
        explanation: 'Dynamic analysis is analyzing algorithms during runtime, not a formal analysis technique.'
    },
    { 
        q: 'What is the purpose of asymptotic analysis in algorithm analysis?', 
        options: [
            'To measure actual running time', 
            'To determine best-case scenario', 
            'To analyze behavior as input size increases', 
            'To evaluate correctness'
        ], 
        answer: 2, 
        explanation: 'Asymptotic analysis studies algorithm behavior as input size approaches infinity.'
    },
    { 
        q: 'Which notation represents worst-case time complexity?', 
        options: ['Big O (O)', 'Theta (Θ)', 'Omega (Ω)', 'Small o (o)'], 
        answer: 0, 
        explanation: 'Big O notation provides an upper bound for worst-case algorithm complexity.'
    },
    { 
        q: 'Which time complexity represents the best-case scenario?', 
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], 
        answer: 0, 
        explanation: 'O(1) indicates constant time complexity, the best-case scenario.'
    },
    { 
        q: 'Which time complexity represents the worst-case scenario?', 
        options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)'], 
        answer: 3, 
        explanation: 'O(n^2) represents quadratic growth and a worst-case scenario.'
    },
    { 
        q: 'Which time complexity represents logarithmic growth?', 
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], 
        answer: 1, 
        explanation: 'O(log n) represents algorithms that reduce the input space by half each step.'
    },
    { 
        q: 'Which time complexity represents linear growth?', 
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], 
        answer: 2, 
        explanation: 'O(n) indicates algorithm running time grows linearly with input size.'
    },








    { 
        q: "What is the result of 10 / 3 in C++ using integer division?", 
        options: ["2", "3", "3.0", "3.3333"], 
        answer: 1, 
        explanation: "In C++, integer division truncates any fractional part, so 10 / 3 results in 3."
    },
    { 
        q: "Which mathematical operator is used to raise a number to a power in C++?", 
        options: ["^", "**", "pow()", "^="], 
        answer: 2, 
        explanation: "The pow() function from <cmath> is used to raise a number to a power."
    },
    { 
        q: "What is the output of double result = sqrt(16); cout << result;", 
        options: ["2", "4", "8", "16"], 
        answer: 1, 
        explanation: "The sqrt() function calculates the square root of 16, which is 4."
    },
    { 
        q: "Which header file should be included to use mathematical functions in C++?", 
        options: ["<iostream>", "<cmath>", "<string>", "<iomanip>"], 
        answer: 1, 
        explanation: "The <cmath> header provides mathematical functions such as sqrt(), pow(), etc."
    },
    { 
        q: "What is the output of int x = 5; int y = 2; cout << x % y;", 
        options: ["0", "1", "2", "3"], 
        answer: 1, 
        explanation: "The modulo operator (%) calculates the remainder. 5 % 2 equals 1."
    },
    { 
        q: "What is the output of double result = pow(3, 4); cout << result;", 
        options: ["7", "12", "27", "81"], 
        answer: 3, 
        explanation: "3 raised to the power 4 is 81 using the pow() function."
    },
    { 
        q: "What is the purpose of the abs() function in C++?", 
        options: [
            "To calculate the absolute value of a number", 
            "To calculate the average of two numbers", 
            "To round a floating-point number", 
            "To compare two numbers"
        ], 
        answer: 0, 
        explanation: "The abs() function returns the absolute (positive) value of a number."
    },
    { 
        q: "What is the output of int x = -7; cout << abs(x);", 
        options: ["-7", "7", "0", "Undefined"], 
        answer: 1, 
        explanation: "abs(-7) returns 7."
    },
    { 
        q: "What is the purpose of the ceil() function in C++?", 
        options: [
            "To calculate the ceiling value of a floating-point number", 
            "To calculate factorial of an integer", 
            "To round down a floating-point number", 
            "To perform bitwise complement"
        ], 
        answer: 0, 
        explanation: "ceil() rounds a floating-point number up to the nearest integer."
    },
    { 
        q: "Which of the following data types in C++ can store fractional values?", 
        options: ["int", "char", "float", "bool"], 
        answer: 2, 
        explanation: "float can store fractional values such as 3.14 or -0.5."
    },
    { 
        q: "What is the result of the expression 5 / 2 in C++?", 
        options: ["2", "2.5", "2.0", "2.25"], 
        answer: 0, 
        explanation: "Integer division truncates the fractional part, so 5 / 2 equals 2."
    },
    { 
        q: "What is the output of int x = 5; int y = 2; double result = static_cast<double>(x) / y; cout << result;", 
        options: ["2", "2.5", "2.0", "2.25"], 
        answer: 1, 
        explanation: "static_cast<double> converts x to double, so division produces 2.5."
    },
    { 
        q: "What is the value of x after int x = 10; x += 5; x /= 2;", 
        options: ["5", "7", "7.5", "10"], 
        answer: 1, 
        explanation: "x becomes 15 after += 5, then 15 / 2 = 7 (integer division)."
    },
    { 
        q: "What is the result of bool result = (5 > 3) && (10 < 8);", 
        options: ["true", "false", "compilation error", "runtime error"], 
        answer: 1, 
        explanation: "The && operator evaluates to false because (10 < 8) is false."
    },
    { 
        q: "What is the output of int x = 3; int y = 5; cout << (x == y);", 
        options: ["1", "0", "true", "false"], 
        answer: 1, 
        explanation: "x == y is false, which is represented as 0 in C++."
    },



        






    { 
        q: "Which approach is commonly used for query processing in a distributed database system?", 
        options: [
            "Centralized query processing", 
            "Distributed query processing", 
            "Parallel query processing", 
            "Sequential query processing"
        ], 
        answer: 1, 
        explanation: "Distributed query processing distributes query execution across multiple sites to optimize performance."
    },
    { 
        q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
        options: [
            "It ensures the consistency of data across all sites.", 
            "It manages the distribution and retrieval of data across multiple sites.", 
            "It controls the access permissions of users in the system.", 
            "It handles the physical storage of data at each site."
        ], 
        answer: 0, 
        explanation: "The coordinator ensures data consistency across all sites by coordinating distributed transactions."
    },
    { 
        q: "Which approach is commonly used for data replication in a distributed database system?", 
        options: ["Eager replication", "Lazy replication", "Snapshot replication", "Incremental replication"], 
        answer: 1, 
        explanation: "Lazy replication replicates data asynchronously, delaying replication until necessary to ensure consistency."
    },
    { 
        q: "Which factor is important to consider when evaluating query processing strategies in a database system?", 
        options: ["Cost of query execution", "Size of the database", "Network bandwidth", "Data replication"], 
        answer: 0, 
        explanation: "Cost of query execution evaluates efficiency and performance of different strategies in terms of time and resources."
    },
    { 
        q: "What is the purpose of query optimization in a database system?", 
        options: [
            "To ensure data consistency", 
            "To minimize query execution time", 
            "To maximize data replication", 
            "To manage database security"
        ], 
        answer: 1, 
        explanation: "Query optimization finds the most efficient query plan to minimize execution time."
    },
    { 
        q: "What is a query plan in a database system?", 
        options: [
            "A set of database schemas", 
            "A representation of the query result", 
            "A sequence of operations to execute a query", 
            "A collection of database indices"
        ], 
        answer: 2, 
        explanation: "A query plan outlines the steps to execute a query, including scans, joins, and aggregations."
    },
    { 
        q: "What is a cost model in query optimization?", 
        options: [
            "A statistical model of query execution times", 
            "A model for estimating the cost of query plans", 
            "A model for analyzing database schemas", 
            "A statistical model for data distribution"
        ], 
        answer: 1, 
        explanation: "A cost model estimates the cost of different query plans considering CPU, disk I/O, and network latency."
    },
    { 
        q: "What is a join operation in query processing?", 
        options: [
            "Combining tuples from multiple tables based on a common attribute", 
            "Sorting the query result in ascending order", 
            "Grouping the query result based on a specific attribute", 
            "Filtering the query result based on a condition"
        ], 
        answer: 0, 
        explanation: "A join combines tuples from multiple tables using a common attribute to retrieve related data."
    },
    { 
        q: "Which index type is commonly used to speed up query processing in a database system?", 
        options: ["B-tree index", "Hash index", "Bitmap index", "Clustered index"], 
        answer: 0, 
        explanation: "B-tree indexes maintain an ordered tree structure of values to enable efficient data retrieval."
    },
    { 
        q: "What is query re-optimization in a database system?", 
        options: [
            "Re-executing the query with different parameters", 
            "Re-evaluating the query cost based on updated statistics", 
            "Re-writing the query in a different query language", 
            "Re-organizing the database schema to improve performance"
        ], 
        answer: 1, 
        explanation: "Query re-optimization re-evaluates the query cost using updated statistics to adjust the query plan dynamically."
    },
    { 
        q: "What is query pipelining in query processing?", 
        options: [
            "Dividing a query into subqueries and executing them in parallel", 
            "Dividing a query into stages and executing them sequentially", 
            "Dividing a query into multiple queries and executing them in parallel", 
            "Dividing a query into multiple stages and executing them concurrently"
        ], 
        answer: 3, 
        explanation: "Query pipelining divides a query into multiple stages and executes them concurrently to improve efficiency."
    },
    { 
        q: "What is query caching in query processing?", 
        options: [
            "Storing query results for future reuse", 
            "Storing intermediate results during query execution", 
            "Storing database metadata for query optimization", 
            "Storing query plans for efficient execution"
        ], 
        answer: 0, 
        explanation: "Query caching stores query results for future reuse, allowing faster retrieval for repeated queries."
    },
    { 
        q: "What is query parallelization in query processing?", 
        options: [
            "Dividing a query into subqueries and executing them in parallel", 
            "Dividing a query into stages and executing them sequentially", 
            "Dividing a query into multiple queries and executing them in parallel", 
            "Dividing a query into multiple stages and executing them concurrently"
        ], 
        answer: 0, 
        explanation: "Query parallelization divides a query into subqueries and executes them in parallel for performance improvement."
    },
    { 
        q: "Which of the following is NOT a programming paradigm?", 
        options: ["Procedural", "Object-oriented", "Functional", "Conditional"], 
        answer: 3, 
        explanation: "Conditional is a construct within programming paradigms, not a paradigm itself."
    },
    { 
        q: "What is the purpose of a compiler?", 
        options: [
            "To execute programs", 
            "To debug programs", 
            "To translate source code into machine code", 
            "To optimize program performance"
        ], 
        answer: 2, 
        explanation: "A compiler translates human-readable source code into machine code executable by the processor."
    },
    { 
        q: "What is the main advantage of high-level programming languages?", 
        options: [
            "They are easier to read and write than low-level languages.", 
            "They are faster and more efficient than low-level languages.", 
            "They provide direct control over hardware resources.", 
            "They are platform-specific and provide better compatibility."
        ], 
        answer: 0, 
        explanation: "High-level languages are closer to human language, making them easier to read, write, and understand."
    },
    { 
        q: "What is the purpose of a variable declaration in programming?", 
        options: [
            "To assign a value to a variable", 
            "To create a new variable", 
            "To specify the data type and name of a variable", 
            "To check the validity of a variable"
        ], 
        answer: 2, 
        explanation: "Variable declaration specifies the data type and name before the variable is used."
    },
    { 
        q: "What is the purpose of a loop in programming?", 
        options: [
            "To perform mathematical calculations", 
            "To make decisions based on conditions", 
            "To store and retrieve data", 
            "To repeat a set of instructions"
        ], 
        answer: 3, 
        explanation: "Loops repeat a set of instructions multiple times for efficient execution of repetitive tasks."
    },
    { 
        q: "What is the difference between a function and a method in programming?", 
        options: [
            "Functions are used in procedural programming, while methods are used in object-oriented programming.", 
            "Functions return a value, while methods do not.", 
            "Functions operate on data, while methods operate on objects.", 
            "There is no difference; the terms are used interchangeably."
        ], 
        answer: 0, 
        explanation: "Functions belong to procedural programming; methods belong to object-oriented programming."
    },










    { 
        q: "What is the purpose of a data dictionary in a database?", 
        options: [
            "To store user credentials", 
            "To manage database backups", 
            "To define the structure and attributes of data elements", 
            "To enforce referential integrity constraints"
        ], 
        answer: 2, 
        explanation: "A data dictionary is a central repository that defines the structure and attributes of data elements in a database, including tables, columns, types, and constraints."
    },
    { 
        q: "In the object-oriented model, an object is defined as:", 
        options: [
            "An instance of a class", 
            "A collection of attributes", 
            "A primary key in a database", 
            "A relationship between tables"
        ], 
        answer: 0, 
        explanation: "An object is an instance of a class representing a specific entity with attributes and behaviors."
    },
    { 
        q: "In the object-oriented model, encapsulation refers to:", 
        options: [
            "Combining multiple classes into a single entity", 
            "Hiding the internal details of an object", 
            "Establishing relationships between objects", 
            "Defining the inheritance hierarchy"
        ], 
        answer: 1, 
        explanation: "Encapsulation hides the internal details of an object and provides access only to necessary information and behaviors."
    },
    { 
        q: "In the object-oriented model, inheritance allows:", 
        options: [
            "Objects to have multiple parents", 
            "Objects to inherit attributes and behaviors from a superclass", 
            "Objects to be created dynamically at runtime", 
            "Objects to establish relationships with other objects"
        ], 
        answer: 1, 
        explanation: "Inheritance enables objects to inherit attributes and behaviors from a superclass, promoting code reuse."
    },
    { 
        q: "Which concept allows different classes to share the same method name but with different implementations?", 
        options: ["Polymorphism", "Abstraction", "Encapsulation", "Inheritance"], 
        answer: 0, 
        explanation: "Polymorphism allows objects of different classes to use the same method name with different implementations."
    },
    { 
        q: "The process of combining data and methods into a single entity is known as:", 
        options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"], 
        answer: 3, 
        explanation: "Encapsulation combines data and methods into a single entity, hiding internal details and controlling access."
    },
    { 
        q: "In the object-oriented model, association represents:", 
        options: [
            "Inheritance relationships between classes", 
            "Shared attributes among objects", 
            "The interactions between objects", 
            "Data duplication in the database"
        ], 
        answer: 2, 
        explanation: "Association defines interactions between objects, allowing them to communicate and exchange information."
    },
    { 
        q: "Which concept ensures that objects of different classes can be treated as objects of the same superclass?", 
        options: ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"], 
        answer: 1, 
        explanation: "Inheritance allows objects of different classes to be treated as objects of the same superclass, supporting code reuse and hierarchy."
    },
    { 
        q: "What is the purpose of abstraction in the object-oriented model?", 
        options: [
            "To combine multiple classes into a single entity", 
            "To hide the internal details of an object", 
            "To establish relationships between objects", 
            "To define the attributes and behaviors of a class"
        ], 
        answer: 1, 
        explanation: "Abstraction hides internal details and provides a simplified interface, focusing on essential features."
    },
    { 
        q: "Polymorphism allows objects to:", 
        options: [
            "Inherit attributes from multiple classes", 
            "Change their class dynamically at runtime", 
            "Access private methods of other objects", 
            "Be treated as objects of different classes"
        ], 
        answer: 3, 
        explanation: "Polymorphism allows objects to be treated as objects of different classes, providing flexibility and extensibility."
    },
    { 
        q: "Which concept defines the structure and behavior of objects?", 
        options: ["Class", "Object", "Attribute", "Method"], 
        answer: 0, 
        explanation: "A class is a blueprint that defines the structure and behavior of objects."
    },
    { 
        q: "Which recovery method restores the database to a previous state by undoing incomplete transactions?", 
        options: ["Rollback recovery", "Redo recovery", "Checkpoint recovery", "Restart recovery"], 
        answer: 0, 
        explanation: "Rollback recovery uses transaction logs to undo incomplete or failed transactions to restore a consistent database state."
    },
    { 
        q: "Which recovery method reapplies changes from committed transactions to restore the database?", 
        options: ["Redo recovery", "Checkpoint recovery", "Restart recovery", "Backup recovery"], 
        answer: 0, 
        explanation: "Redo recovery reapplies committed transactions from logs to ensure all changes are reflected in the database."
    },
    { 
        q: "Which recovery method creates checkpoints at regular intervals to save the current database state?", 
        options: ["Checkpoint recovery", "Redo recovery", "Rollback recovery", "Restart recovery"], 
        answer: 0, 
        explanation: "Checkpoint recovery saves the database state and transaction logs at intervals to speed up recovery."
    },
    { 
        q: "Which recovery method restarts the system and applies redo/undo operations to recover the database?", 
        options: ["Restart recovery", "Checkpoint recovery", "Redo recovery", "Rollback recovery"], 
        answer: 0, 
        explanation: "Restart recovery restores the database by applying necessary redo and undo operations after system restart."
    },
    { 
        q: "Which recovery method restores the database from a backup copy taken prior to failure?", 
        options: ["Backup recovery", "Rollback recovery", "Redo recovery", "Restart recovery"], 
        answer: 0, 
        explanation: "Backup recovery restores the database from a previously taken backup in case of catastrophic failure."
    },
    { 
        q: "Which recovery method is used to recover the database after a media failure, such as a disk crash?", 
        options: ["Backup recovery", "Redo recovery", "Checkpoint recovery", "Rollback recovery"], 
        answer: 0, 
        explanation: "Backup recovery restores data from backup after media failure."
    },












    { 
        q: "Which is a popular client-side library for building responsive user interfaces?", 
        options: ["Angular", "Vue.js", "React", "jQuery"], 
        answer: 2, 
        explanation: "React is a popular client-side JavaScript library that uses a component-based approach for building interactive UIs."
    },
    { 
        q: "Which technique handles communication between browser and server without interrupting user interaction?", 
        options: ["AJAX", "JSON", "Websockets", "RESTful API"], 
        answer: 2, 
        explanation: "Websockets allow bidirectional communication between browser and server without interrupting user interaction, enabling real-time data exchange."
    },
    { 
        q: "Which client-side technique stores data locally in a user's browser?", 
        options: ["Cookies", "Local storage", "Session storage", "IndexedDB"], 
        answer: 1, 
        explanation: "Local storage allows storing data in the browser with higher capacity than cookies, accessible across multiple sessions."
    },
    { 
        q: "Which technique optimizes web page loading by combining and minifying CSS/JS files?", 
        options: ["Compression", "Caching", "Minification", "Encryption"], 
        answer: 2, 
        explanation: "Minification reduces file size by removing unnecessary characters and whitespace to speed up page loading."
    },
    { 
        q: "Which client-side technique handles user interactions like mouse clicks or keyboard inputs?", 
        options: ["Event handling", "Form validation", "Responsive design", "Browser compatibility"], 
        answer: 0, 
        explanation: "Event handling executes JavaScript code in response to specific events like clicks or keypresses."
    },
    { 
        q: "Which client-side technique ensures web pages display correctly across devices?", 
        options: ["Event handling", "Form validation", "Responsive design", "Browser compatibility"], 
        answer: 2, 
        explanation: "Responsive design adapts layout and design to different screen sizes for proper display on all devices."
    },
    { 
        q: "Which technique sends and receives data between browser and server in JSON format?", 
        options: ["AJAX", "Websockets", "RESTful API", "Bootstrap"], 
        answer: 0, 
        explanation: "AJAX allows asynchronous data communication in JSON format without reloading the page."
    },
    { 
        q: "Which library enhances UI with interactive tooltips, modals, and other components?", 
        options: ["jQuery", "React", "Angular", "Vue.js"], 
        answer: 0, 
        explanation: "jQuery simplifies DOM manipulation and provides interactive UI components like modals and tooltips."
    },
    { 
        q: "Which client-side technique is used to create visually appealing and responsive layouts?", 
        options: ["HTML", "CSS", "JavaScript", "PHP"], 
        answer: 1, 
        explanation: "CSS defines the presentation and styling of HTML elements to create visually appealing, responsive layouts."
    },
    { 
        q: "Which technique optimizes page speed by preloading resources in advance?", 
        options: ["Compression", "Minification", "Caching", "Preloading"], 
        answer: 3, 
        explanation: "Preloading fetches and caches resources like images or scripts in advance to reduce latency."
    },
    { 
        q: "Which client-side technique ensures correct display in different browsers?", 
        options: ["Event handling", "Form validation", "Responsive design", "Browser compatibility"], 
        answer: 3, 
        explanation: "Browser compatibility ensures consistent display across multiple web browsers."
    },
    { 
        q: "What is the purpose of HTML in web programming?", 
        options: ["Control visual appearance", "Handle server-side processing", "Specify structure and content", "Add interactivity"], 
        answer: 2, 
        explanation: "HTML defines the structure and content of web pages using tags and elements."
    },
    { 
        q: "Which HTML element creates a heading?", 
        options: ["<p>", "<div>", "<h1>", "<a>"], 
        answer: 2, 
        explanation: "<h1> creates the main heading of a web page."
    },
    { 
        q: "Which HTML element creates a paragraph?", 
        options: ["<h1>", "<div>", "<p>", "<a>"], 
        answer: 2, 
        explanation: "<p> defines a block of text or content as a paragraph."
    },
    { 
        q: "Which HTML element creates an unordered list?", 
        options: ["<ul>", "<li>", "<ol>", "<a>"], 
        answer: 0, 
        explanation: "<ul> defines a list of items without a specific order."
    },
    { 
        q: "Which HTML element creates a link?", 
        options: ["<h1>", "<div>", "<p>", "<a>"], 
        answer: 3, 
        explanation: "<a> creates a hyperlink to another page or location."
    },
    { 
        q: "Which CSS property controls spacing between elements?", 
        options: ["color", "font-size", "margin", "padding"], 
        answer: 2, 
        explanation: "Margin defines space outside the border of an element."
    },
    { 
        q: "Which CSS property changes text color?", 
        options: ["color", "font-size", "margin", "padding"], 
        answer: 0, 
        explanation: "The color property sets the text color using names, hex, or RGB values."
    },
    { 
        q: "Which CSS property changes text size?", 
        options: ["color", "font-size", "margin", "padding"], 
        answer: 1, 
        explanation: "font-size sets the size of text in pixels, percentages, or other units."
    },
    { 
        q: "Which CSS property aligns content vertically?", 
        options: ["text-align", "vertical-align", "align-content", "justify-content"], 
        answer: 1, 
        explanation: "vertical-align aligns content vertically within containers, often used in table cells or inline elements."
    },
    { 
        q: "Which CSS property creates a border around an element?", 
        options: ["color", "font-size", "border", "padding"], 
        answer: 2, 
        explanation: "The border property defines a border around an element."
    }





        // Add remaining 2016 exam questions here
    ],


"2017": [


{
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: [
        "It is recognized by a device of infinite states",
        "It takes no auxiliary memory",
        "All of the mentioned",
        "None of the mentioned"
    ],
    answer: 1,
    explanation: "A language can be generated from a simple primitive language if it requires no auxiliary memory for generation."
},
{
    q: "Which forms have a relation that contains information about a single entity?",
    options: ["4NF", "2NF", "5NF", "3NF"],
    answer: 0,
    explanation: "4NF ensures that there are no multi-valued dependencies and relates to a single entity per relation."
},
{
    q: "Among the given options, which search algorithm requires less memory?",
    options: ["Optimal Search", "Depth First Search", "Breadth-First Search", "Linear Search"],
    answer: 1,
    explanation: "Depth First Search uses a stack and requires less memory than Breadth-First Search which uses a queue for all nodes at a level."
},
{
    q: "The FCFS algorithm is particularly troublesome for ____________",
    options: ["multiprocessor systems", "Operating Systems", "time sharing systems", "multiprogramming systems"],
    answer: 2,
    explanation: "FCFS scheduling can cause long waiting times in time-sharing systems due to lack of preemption."
},
{
    q: "Which of the following tag is used to create a combo box (or drop-down box)?",
    options: ["<list>", "<select>", "<input type = \"dropdown\">", "<ul>"],
    answer: 2,
    explanation: "In HTML, a drop-down box can be created using <input type='dropdown'> in some interpretations, though <select> is standard."
},
{
    q: "Which AI technique enables the computers to understand the associations and relationships between objects and events?",
    options: ["Heuristic Processing", "Cognitive Science", "Relative Symbolism", "Pattern Matching"],
    answer: 3,
    explanation: "Pattern matching allows AI systems to detect relationships and associations between objects or events."
},
{
    q: "Linked lists are not suitable for the implementation of ___________",
    options: ["Insertion sort", "Radix sort", "Polynomial manipulation", "Binary search"],
    answer: 3,
    explanation: "Binary search requires direct access to middle elements, which linked lists cannot provide efficiently."
},
{
    q: "What kind of linked list is best to answer questions like “What is the item at position n?”",
    options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Array implementation of linked list"],
    answer: 3,
    explanation: "Array implementation provides O(1) access to any position, unlike linked lists which require traversal."
},
{
    q: "Which of the following layers is an addition to OSI model when compared with TCP/IP model?",
    options: ["Application layer", "Presentation layer", "Session layer", "Session and Presentation layer"],
    answer: 3,
    explanation: "The OSI model has Presentation and Session layers, which are not present separately in the TCP/IP model."
},
{
    q: "What is the result of the following program?\npublic static synchronized void main(String[] args) throws InterruptedException {\n Thread f = new Thread();\n f.start();\n System.out.print(\"A\");\n f.wait(1000);\n System.out.print(\"B\");\n}",
    options: ["It prints A and B with a 1000 seconds delay between them", "It only prints A and exits", "It only prints B and exits", "A will be printed, and then an exception is thrown"],
    answer: 3,
    explanation: "Calling wait() on a Thread without synchronization on the object's monitor causes an IllegalMonitorStateException after printing 'A'."
},
{
    q: "To obtain a prefix expression, which of the tree traversals is used?",
    options: ["Level-order traversal", "Pre-order traversal", "Post-order traversal", "In-order traversal"],
    answer: 1,
    explanation: "Pre-order traversal is used to obtain the prefix expression of an expression tree."
},
{
    q: "The total number of states required to automate the given regular expression (00)*(11)*",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "The regular expression (00)*(11)* requires 5 states to be recognized by a finite automaton."
},
{
    q: "______________ is a set of one or more attributes taken collectively to uniquely identify a record.",
    options: ["Primary Key", "Foreign Key", "Super key", "Candidate key"],
    answer: 2,
    explanation: "A Super key is any set of attributes that can uniquely identify a record in a relation."
},
{
    q: "Which one of the following can be considered as the class of computer threats?",
    options: ["Dos Attack", "Phishing", "Soliciting", "Both A and C"],
    answer: 0,
    explanation: "Denial of Service (Dos) attack is a well-known type of computer threat."
},
{
    q: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
    options: ["getClass()", "intern()", "getName()", "toString()"],
    answer: 2,
    explanation: "getName() returns the fully qualified name of the class represented by the Class object."
},
{
    q: "Which among the following doesn’t come under OOP concept?",
    options: ["Data hiding", "Message passing", "Platform independent", "Data binding"],
    answer: 2,
    explanation: "Platform independence is a feature of languages like Java, but not an OOP concept."
},
{
    q: "Auxiliary memory can be defined as",
    options: ["A memory unit that directly communicate with CPU", "A device that provide backup storage", "It is a fastest memory", "All"],
    answer: 1,
    explanation: "Auxiliary memory is external storage like hard disks or flash drives used for backup or large storage."
},
{
    q: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________",
    options: ["assigning ready processes to waiting queue", "assigning running processes to blocked queue", "assigning ready processes to CPU", "all of the mentioned"],
    answer: 2,
    explanation: "The dispatcher component of the scheduler assigns ready processes to the CPU for execution."
},
{
    q: "Given pointer to a node X in a singly linked list. Only one pointer is given, pointer to head node is not given, can we delete the node X from given linked list?",
    options: ["Possible if X is not last node", "Possible if X is not first node", "Possible if size of linked list is even", "Possible if size of linked list is odd"],
    answer: 0,
    explanation: "We can delete a node in a singly linked list if we have its pointer, only if it’s not the last node."
},
{
    q: "Which of the following is the task of lexical analysis?",
    options: ["To build the uniform symbol table", "To initialize the variables", "To organize the variables in a lexical order", "None of the mentioned"],
    answer: 0,
    explanation: "Lexical analysis converts source code into tokens and builds a uniform symbol table for parsing."
},
{
    q: "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    options: ["DML(Data Manipulation Language)", "Query", "Relational Schema", "DDL(Data Definition Language)"],
    answer: 3,
    explanation: "DDL commands are used to define and modify database structures such as creating or deleting tables."
},



{
    q: "Which one of the following data structures are preferred in database-system implementation?",
    options: ["AVL tree", "B-tree", "B+ -tree", "Splay tree"],
    answer: 2,
    explanation: "B+ trees are widely used in database systems because they provide efficient indexing and range queries."
},
{
    q: "Rows of a relation are known as the _______.",
    options: ["Degree", "Tuples", "Entity", "All of the above"],
    answer: 3,
    explanation: "Rows in a relational table are called tuples. They represent entities and collectively contribute to the degree of a relation."
},
{
    q: "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
    options: ["Piracy", "Plagiarism", "Intellectual property rights", "All of the above"],
    answer: 3,
    explanation: "All of the listed actions involve unauthorized use of others' work for personal benefit."
},
{
    q: "Which of the following is the minimum number of transitions to pass to reach the final state as per the regular expression {a,b}*{baaa}?",
    options: ["4", "5", "6", "3"],
    answer: 0,
    explanation: "The minimum number of transitions to reach the final state for {a,b}*{baaa} is 4."
},
{
    q: "_________________is a combinational circuit that receives binary information from one of the 2^n input lines and directs it to a single output line.",
    options: ["Decoder", "Multiplexer", "Encoder", "Flip flop"],
    answer: 1,
    explanation: "A multiplexer selects one of many input lines and forwards it to a single output line."
},
{
    q: "What is the output of int x = 3; int y = 5; cout << (x==y);",
    options: ["1", "0", "true", "false"],
    answer: 1,
    explanation: "x==y evaluates to false. In C++, false is printed as 0."
},
{
    q: "Which AI technique enables the computers to understand the associations and relationships between objects and events?",
    options: ["Heuristic Processing", "Cognitive Science", "Relative Symbolism", "Pattern Matching"],
    answer: 3,
    explanation: "Pattern matching helps computers recognize associations and relationships between data points."
},
{
    q: "Which of the following tag is used to create a combo box (or drop-down box) in HTML?",
    options: ["<list>", "<select>", "<input type='dropdown'>", "<ul>"],
    answer: 1,
    explanation: "The <select> tag is used in HTML to create a drop-down list."
},
{
    q: "Among the given options, which search algorithm requires less memory?",
    options: ["Optimal Search", "Depth First Search", "Breadth-First Search", "Linear Search"],
    answer: 1,
    explanation: "Depth First Search uses less memory compared to Breadth First Search because it stores fewer nodes in the stack."
},
{
    q: "The FCFS algorithm is particularly troublesome for ____________",
    options: ["multiprocessor systems", "Operating Systems", "time sharing systems", "multiprogramming systems"],
    answer: 2,
    explanation: "First-Come-First-Serve (FCFS) scheduling can cause long waiting times in time-sharing systems due to the convoy effect."
},
{
    q: "Which forms have a relation that contains information about a single entity?",
    options: ["4NF", "2NF", "5NF", "3NF"],
    answer: 0,
    explanation: "Fourth Normal Form (4NF) ensures that a relation contains information about a single entity without multi-valued dependencies."
},


{
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: ["It is recognized by a device of infinite states", "It takes no auxiliary memory", "All of the mentioned", "None of the mentioned"],
    answer: 1,
    explanation: "A language can be generated simply if it does not require auxiliary memory."
},
{
    q: "Which AI technique enables the computers to understand the associations and relationships between objects and events?",
    options: ["Heuristic Processing", "Cognitive Science", "Relative Symbolism", "Pattern Matching"],
    answer: 3,
    explanation: "Pattern matching allows computers to recognize associations and relationships between data points."
},
{
    q: "Which of the following is the correct way to create an array in PHP?",
    options: ["$season = array[\"summer\" , \"winter\" , \"spring\" , \"autumn\"];", "$season = array(\"summer\" , \"winter\" , \"spring\" , \"autumn\")", "$season = \"summer\" , \"winter\" , \"spring\" , \"autumn\";", "All of the above"],
    answer: 1,
    explanation: "In PHP, arrays are created using array() function syntax."
},
{
    q: "The FCFS algorithm is particularly troublesome for ____________",
    options: ["multiprocessor systems", "Operating Systems", "time sharing systems", "multiprogramming systems"],
    answer: 2,
    explanation: "First-Come-First-Serve (FCFS) scheduling can cause long waiting times in time-sharing systems due to the convoy effect."
},
{
    q: "Which forms have a relation that contains information about a single entity?",
    options: ["4NF", "2NF", "5NF", "3NF"],
    answer: 0,
    explanation: "Fourth Normal Form (4NF) ensures that a relation contains information about a single entity without multi-valued dependencies."
},
{
    q: "Among the given options, which search algorithm requires less memory?",
    options: ["Optimal Search", "Depth First Search", "Breadth-First Search", "Linear Search"],
    answer: 1,
    explanation: "Depth First Search uses less memory compared to Breadth First Search because it stores fewer nodes in the stack."
},
{
    q: "What kind of linked list is best to answer questions like 'What is the item at position n?'",
    options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Array implementation of linked list"],
    answer: 3,
    explanation: "An array-based implementation allows direct access to the nth element efficiently, unlike linked lists."
},
{
    q: "Which of the following layers is an addition to OSI model when compared with TCP/IP model?",
    options: ["Application layer", "Presentation layer", "Session layer", "Session and Presentation layer"],
    answer: 3,
    explanation: "TCP/IP does not have Presentation and Session layers. OSI adds them to handle data representation and session management."
},
{
    q: "What is the result of the following Java program? public static synchronized void main(String[] args) throws InterruptedException { Thread f = new Thread(); f.start(); System.out.print(\"A\"); f.wait(1000); System.out.print(\"B\"); }",
    options: ["It prints A and B with a 1000 seconds delay between them", "It only prints A and exits", "It only prints B and exits", "A will be printed, and then an exception is thrown"],
    answer: 3,
    explanation: "Calling wait() without synchronizing on the object f causes IllegalMonitorStateException after printing A."
},
{
    q: "To obtain a prefix expression, which of the tree traversals is used?",
    options: ["Level-order traversal", "Pre-order traversal", "Post-order traversal", "In-order traversal"],
    answer: 1,
    explanation: "Pre-order traversal of a binary expression tree gives the prefix expression."
},
{
    q: "The total number of states required to automate the given regular expression (00)*(11)*",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "The minimal DFA for (00)*(11)* requires 5 states to handle all valid sequences."
},
{
    q: "______________ is a set of one or more attributes taken collectively to uniquely identify a record.",
    options: ["Primary Key", "Foreign key", "Super key", "Candidate key"],
    answer: 2,
    explanation: "A super key is any set of attributes that uniquely identifies a record in a relation."
},
{
    q: "Which one of the following can be considered as the class of computer threats?",
    options: ["Dos Attack", "Phishing", "Soliciting", "Both A and C"],
    answer: 0,
    explanation: "Denial of Service (DoS) attack is a well-known class of computer threats."
},
{
    q: "The PEAS in the task environment is about____________.",
    options: ["Peer, Environment, Actuators, Sense", "Performance, Environment, Actuators, Sensors", "Perceiving, Environment, Actuators, Sensors", "None of the above"],
    answer: 1,
    explanation: "PEAS stands for Performance measure, Environment, Actuators, and Sensors, defining the agent task environment in AI."
},
{
    q: "Which among the following doesn’t come under OOP concept?",
    options: ["Data hiding", "Message passing", "Platform independent", "Data binding"],
    answer: 2,
    explanation: "Platform independence is a property of programming languages (like Java), not a core OOP concept."
},
{
    q: "Auxiliary memory can be defined as",
    options: ["A memory unit that directly communicate with CPU", "A device that provide backup storage", "It is a fastest memory", "All"],
    answer: 1,
    explanation: "Auxiliary memory is secondary storage, such as hard disks or SSDs, used to back up or extend main memory."
},
{
    q: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________",
    options: ["assigning ready processes to waiting queue", "assigning running processes to blocked queue", "assigning ready processes to CPU", "all of the mentioned"],
    answer: 2,
    explanation: "The dispatcher component of the scheduler assigns ready processes to the CPU for execution."
},
{
    q: "Given pointer to a node X in a singly linked list. Only one pointer is given, pointer to head node is not given, can we delete the node X from given linked list?",
    options: ["Possible if X is not last node", "Possible if X is not first node", "Possible if size of linked list is even", "Possible if size of linked list is odd"],
    answer: 0,
    explanation: "In a singly linked list, a node can only be deleted if it's not the last node, using a copy-and-delete-next technique."
},
{
    q: "Which of the following is the task of lexical analysis?",
    options: ["To build the uniform symbol table", "To initialize the variables", "To organize the variables in a lexical order", "None of the mentioned"],
    answer: 0,
    explanation: "Lexical analysis generates tokens and maintains a symbol table for identifiers and constants."
},
{
    q: "What is encapsulation in object oriented Programming?",
    options: ["It is a way of combining various data members and member functions that operate on those data members into a single unit", "It is a way of combining various data members and member functions into a single unit which can operate on any data", "It is a way of combining various data members into a single unit", "It is a way of combining various member functions into a single unit"],
    answer: 0,
    explanation: "Encapsulation combines data and methods into a single unit (class) and restricts direct access to some components."
},
{
    q: "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    options: ["DML(Data Manipulation Language)", "Query", "Relational Schema", "DDL(Data Definition Language)"],
    answer: 3,
    explanation: "DDL commands define and manage database structure, like CREATE and DROP commands."
},
{
    q: "Which one of the following data structures are preferred in database-system implementation?",
    options: ["AVL tree", "B-tree", "B+ -tree", "Splay tree"],
    answer: 2,
    explanation: "B+ trees are optimized for disk storage and are widely used for indexing in database systems."
},
{
    q: "Rows of a relation are known as the _______.",
    options: ["Degree", "Tuples", "Entity", "All of the above"],
    answer: 3,
    explanation: "Rows in a relational table are called tuples and represent individual entities; collectively they define the relation."
},
{
    q: "Which of the following statements is not true? Every language defined by a regular expression can be represented using a DFA",
    options: ["True", "False"],
    answer: 0,
    explanation: "Not every regular expression can be directly represented using a DFA; NFAs are more direct, and conversion to DFA is sometimes complex."
},
{
    q: "Which of the following can be used to extract or filter the data & information from the data warehouse?",
    options: ["Data redundancy", "Data recovery tool", "Data mining", "Both B and C"],
    answer: 2,
    explanation: "Data mining techniques are used to extract useful patterns and knowledge from large datasets in data warehouses."
},

{
    q: "Which is used to find errors and fix them in a program?",
    options: ["Compiler", "Debugger", "Interpreter", "Assembler"],
    answer: 1,
    explanation: "A debugger helps programmers find and fix errors in their code."
},
{
    q: "Which of the following is NOT a primary component of a CPU?",
    options: ["ALU", "Control Unit", "Memory Unit", "Registers"],
    answer: 2,
    explanation: "Memory unit is considered separate from the CPU; ALU, Control Unit, and Registers are main CPU components."
},
{
    q: "Which of the following is true for a stack?",
    options: ["FIFO", "LIFO", "Random Access", "Sorted Access"],
    answer: 1,
    explanation: "Stack follows Last In, First Out (LIFO) order."
},
{
    q: "Which protocol is used to send email from one server to another?",
    options: ["HTTP", "FTP", "SMTP", "POP3"],
    answer: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails between servers."
},
{
    q: "Which of the following is NOT a type of database model?",
    options: ["Hierarchical", "Network", "Object-oriented", "HTML"],
    answer: 3,
    explanation: "HTML is a markup language, not a database model."
},
{
    q: "Which type of memory is volatile and used for temporary storage?",
    options: ["ROM", "RAM", "Cache", "Flash"],
    answer: 1,
    explanation: "RAM (Random Access Memory) is volatile and stores data temporarily."
},
{
    q: "Which of the following is true about a compiler?",
    options: ["Translates entire program at once", "Translates line by line", "Executes code directly", "None of the above"],
    answer: 0,
    explanation: "A compiler translates the whole program at once before execution."
},
{
    q: "Which network topology uses a central hub to connect all devices?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: 2,
    explanation: "In star topology, all devices are connected to a central hub."
},
{
    q: "Which of the following is used to prevent unauthorized access to a network?",
    options: ["Router", "Firewall", "Switch", "Hub"],
    answer: 1,
    explanation: "A firewall monitors and controls incoming and outgoing network traffic to protect against unauthorized access."
},
{
    q: "Which of the following is NOT a characteristic of object-oriented programming?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"],
    answer: 3,
    explanation: "Compilation is not a core concept of OOP; it is a process of converting code to executable form."
},
{
    q: "Which data structure is used for BFS (Breadth-First Search)?",
    options: ["Stack", "Queue", "Priority Queue", "Tree"],
    answer: 1,
    explanation: "BFS uses a queue to process nodes level by level."
},
{
    q: "Which of the following is used to store key-value pairs in JavaScript?",
    options: ["Array", "Object", "Set", "Map"],
    answer: 1,
    explanation: "Objects in JavaScript store data in key-value pairs."
},
{
    q: "Which of the following is NOT part of the software development life cycle?",
    options: ["Design", "Implementation", "Execution", "Testing"],
    answer: 2,
    explanation: "Execution is not a phase in SDLC; SDLC includes Planning, Analysis, Design, Implementation, and Testing."
},
{
    q: "Which of the following is an example of a markup language?",
    options: ["JavaScript", "Python", "HTML", "C++"],
    answer: 2,
    explanation: "HTML is a markup language used to structure web pages."
},
{
    q: "Which scheduling algorithm may cause starvation in long processes?",
    options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
    answer: 1,
    explanation: "Shortest Job First (SJF) may starve long processes if shorter jobs keep coming."
},
{
    q: "Which one of the following is an example of secondary storage?",
    options: ["RAM", "Cache", "Hard Disk", "Registers"],
    answer: 2,
    explanation: "Hard Disk is secondary storage; RAM and Cache are primary storage."
},
{
    q: "Which of the following statements about TCP is correct?",
    options: ["Connectionless", "Reliable", "Unreliable", "Only used in LAN"],
    answer: 1,
    explanation: "TCP (Transmission Control Protocol) is connection-oriented and reliable."
},
{
    q: "Which of the following is an advantage of a linked list over an array?",
    options: ["Random access", "Dynamic size", "Less memory usage", "Faster access to elements"],
    answer: 1,
    explanation: "Linked lists can dynamically grow or shrink in size, unlike arrays."
},
{
    q: "Which of the following is NOT a type of cloud service?",
    options: ["IaaS", "PaaS", "SaaS", "DBaaS"],
    answer: 3,
    explanation: "DBaaS is a specific service for databases, not a core cloud model; IaaS, PaaS, SaaS are main types."
},
{
    q: "Which of the following is used to connect devices in a WAN?",
    options: ["Switch", "Router", "Hub", "NIC"],
    answer: 1,
    explanation: "Routers are used to connect different networks over wide area networks (WAN)."
},
{
    q: "Which of the following is true about recursion?",
    options: ["Every recursive function must have a base case", "Recursive functions cannot call themselves", "Recursion is always inefficient", "Recursion cannot be implemented in JavaScript"],
    answer: 0,
    explanation: "Recursion must include a base case to terminate; otherwise it will cause infinite calls."
},
{
    q: "Which of the following is NOT a relational database constraint?",
    options: ["Primary Key", "Foreign Key", "Unique Key", "Loop Key"],
    answer: 3,
    explanation: "Loop Key is not a valid relational database constraint."
},
{
    q: "Which type of backup stores all files that have changed since the last backup?",
    options: ["Full backup", "Incremental backup", "Differential backup", "Mirror backup"],
    answer: 1,
    explanation: "Incremental backup saves only files changed since the last backup."
},
{
    q: "Which one of the following is NOT a networking device?",
    options: ["Hub", "Switch", "Router", "Compiler"],
    answer: 3,
    explanation: "Compiler is a software tool, not a networking device."
},
{
    q: "Which of the following is true for a circular queue?",
    options: ["Front never changes", "Rear never changes", "Front and Rear wrap around", "Queue cannot overflow"],
    answer: 2,
    explanation: "In a circular queue, Front and Rear wrap around to reuse empty spaces."
},
{
    q: "Which of the following sorting algorithms is stable?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    answer: 2,
    explanation: "Merge Sort maintains relative order of equal elements, making it stable."
},
{
    q: "Which of the following is NOT a type of computer network?",
    options: ["LAN", "WAN", "MAN", "PANADA"],
    answer: 3,
    explanation: "PANADA is not a type of computer network."
},
{
    q: "Which one of the following is used to define rules for syntax of programming languages?",
    options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"],
    answer: 1,
    explanation: "Syntax Analysis checks the syntax rules of programming languages."
},
{
    q: "Which type of database joins returns only matching records from both tables?",
    options: ["Inner Join", "Outer Join", "Left Join", "Right Join"],
    answer: 0,
    explanation: "Inner Join returns only records that have matching values in both tables."
},
{
    q: "Which of the following is a valid JavaScript variable declaration?",
    options: ["var x = 10;", "let x = 10;", "const x = 10;", "All of the above"],
    answer: 3,
    explanation: "All three forms (var, let, const) are valid variable declarations in JavaScript."
},





{ q: "Which of the following is a volatile memory?", options: ["ROM", "RAM", "Flash", "Hard Disk"], answer: 1, explanation: "RAM is volatile and loses data when power is off." },
{ q: "Which of the following is used to uniquely identify a computer on a network?", options: ["IP Address", "MAC Address", "Subnet Mask", "Gateway"], answer: 0, explanation: "An IP Address uniquely identifies a device on a network." },
{ q: "Which of the following protocols is used for secure web browsing?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: 1, explanation: "HTTPS encrypts web traffic for secure communication." },
{ q: "Which of the following is a loop structure in programming?", options: ["if", "for", "switch", "break"], answer: 1, explanation: "The for loop is used for iterative execution." },
{ q: "Which of the following is used to connect multiple networks?", options: ["Hub", "Switch", "Router", "NIC"], answer: 2, explanation: "Routers connect multiple networks together." },
{ q: "Which of the following is NOT a type of software?", options: ["System Software", "Application Software", "Utility Software", "Hardware"], answer: 3, explanation: "Hardware is a physical component, not software." },
{ q: "Which of the following is used to manage database transactions?", options: ["DBMS", "Compiler", "Interpreter", "Assembler"], answer: 0, explanation: "DBMS manages database transactions and data integrity." },
{ q: "Which of the following is an example of a high-level programming language?", options: ["C", "Assembly", "Machine Code", "Binary"], answer: 0, explanation: "C is a high-level programming language." },
{ q: "Which of the following is used to represent data in binary form?", options: ["Bits", "Bytes", "Nibbles", "All of the above"], answer: 3, explanation: "Bits, bytes, and nibbles are all units of binary data." },
{ q: "Which of the following is used for wireless communication?", options: ["Ethernet", "Wi-Fi", "Fiber Optic", "Coaxial Cable"], answer: 1, explanation: "Wi-Fi is used for wireless communication." },
{ q: "Which of the following sorting algorithms has the best average-case performance?", options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"], answer: 1, explanation: "Quick Sort is efficient and has O(n log n) average-case performance." },
{ q: "Which of the following is a primary key constraint?", options: ["Ensures uniqueness", "Allows nulls", "Duplicate values allowed", "None of the above"], answer: 0, explanation: "A primary key ensures uniqueness and cannot be null." },
{ q: "Which of the following is NOT a type of cloud computing service?", options: ["IaaS", "PaaS", "SaaS", "CaaS"], answer: 3, explanation: "CaaS is not a main type of cloud computing service." },
{ q: "Which of the following is a protocol used to receive emails?", options: ["SMTP", "IMAP", "HTTP", "FTP"], answer: 1, explanation: "IMAP is used to retrieve emails from a server." },
{ q: "Which of the following is NOT a characteristic of a good algorithm?", options: ["Correctness", "Finiteness", "Efficiency", "Complexity"], answer: 3, explanation: "Complexity alone is not a required characteristic; good algorithms are correct, finite, and efficient." },
{ q: "Which of the following is a characteristic of a real-time system?", options: ["Delayed responses", "Predictable timing", "Slow execution", "Batch processing"], answer: 1, explanation: "Real-time systems have predictable and timely responses." },
{ q: "Which of the following is used to connect computers in a LAN?", options: ["Router", "Hub", "Switch", "Both Hub and Switch"], answer: 3, explanation: "Both hubs and switches can connect computers in a LAN." },
{ q: "Which of the following is used to store the BIOS settings?", options: ["RAM", "ROM", "CMOS", "Cache"], answer: 2, explanation: "CMOS stores BIOS settings and configuration." },
{ q: "Which of the following is true about IPv6?", options: ["32-bit address", "128-bit address", "64-bit address", "16-bit address"], answer: 1, explanation: "IPv6 uses 128-bit addresses for devices." },
{ q: "Which of the following is used to prevent data loss?", options: ["Firewall", "Backup", "Router", "Switch"], answer: 1, explanation: "Backups help prevent data loss in case of failure." },
{ q: "Which of the following is NOT a type of operating system?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Compiler OS"], answer: 3, explanation: "Compiler is not an operating system type." },
{ q: "Which of the following is used to execute JavaScript in the browser?", options: ["Node.js", "Browser Engine", "PHP", "MySQL"], answer: 1, explanation: "The browser engine executes JavaScript code." },
{ q: "Which of the following is NOT a type of computer network topology?", options: ["Star", "Ring", "Bus", "File"], answer: 3, explanation: "File is not a network topology." },
{ q: "Which of the following is used to handle exceptions in programming?", options: ["Try-Catch", "If-Else", "Switch-Case", "For Loop"], answer: 0, explanation: "Try-Catch blocks are used to handle exceptions." },
{ q: "Which of the following is NOT an input device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 2, explanation: "Monitor is an output device, not input." },
{ q: "Which of the following is a database management system?", options: ["Oracle", "Linux", "Python", "Java"], answer: 0, explanation: "Oracle is a popular DBMS software." },
{ q: "Which of the following is used to protect data from unauthorized access?", options: ["Encryption", "Decryption", "Compression", "Execution"], answer: 0, explanation: "Encryption secures data by making it unreadable without a key." },
{ q: "Which of the following is used for process scheduling in OS?", options: ["CPU", "Scheduler", "Memory", "Cache"], answer: 1, explanation: "The scheduler manages the execution of processes in an OS." },
{ q: "Which of the following is true about a semaphore in OS?", options: ["Used for synchronization", "Used for storage", "Used for networking", "Used for compilation"], answer: 0, explanation: "Semaphores are used to manage synchronization between processes." },
{ q: "Which of the following is a client-side scripting language?", options: ["PHP", "JavaScript", "Python", "Java"], answer: 1, explanation: "JavaScript runs on the client side in browsers." },
{ q: "Which of the following is NOT a type of machine learning?", options: ["Supervised", "Unsupervised", "Reinforcement", "Decompiled"], answer: 3, explanation: "Decompiled is unrelated to machine learning." },
{ q: "Which of the following is used to assign IP addresses dynamically?", options: ["DNS", "DHCP", "HTTP", "SMTP"], answer: 1, explanation: "DHCP dynamically assigns IP addresses to devices." },
{ q: "Which of the following is a protocol for transferring files?", options: ["FTP", "SMTP", "HTTP", "POP3"], answer: 0, explanation: "FTP is used to transfer files over networks." },
{ q: "Which of the following is true for a microprocessor?", options: ["Contains CPU", "Contains ALU", "Contains Registers", "All of the above"], answer: 3, explanation: "A microprocessor contains CPU components like ALU, CU, and Registers." },
{ q: "Which of the following is NOT a type of software testing?", options: ["Unit Testing", "Integration Testing", "System Testing", "CPU Testing"], answer: 3, explanation: "CPU Testing is hardware testing, not software testing." },
{ q: "Which of the following is a common database language?", options: ["SQL", "HTML", "CSS", "JavaScript"], answer: 0, explanation: "SQL is used to interact with databases." },
{ q: "Which of the following is NOT an OS command?", options: ["cd", "mkdir", "printf", "ls"], answer: 2, explanation: "printf is a programming language function, not an OS command." },
{ q: "Which of the following is used for web development backend?", options: ["PHP", "HTML", "CSS", "JavaScript Frontend"], answer: 0, explanation: "PHP is a server-side backend language." },
{ q: "Which of the following is used to compress files?", options: ["ZIP", "HTTP", "DNS", "SMTP"], answer: 0, explanation: "ZIP compresses files to save space." },
{ q: "Which of the following is a markup language?", options: ["HTML", "Python", "Java", "C++"], answer: 0, explanation: "HTML is used for defining web page structure." },
{ q: "Which of the following is used for version control?", options: ["Git", "Docker", "Linux", "MySQL"], answer: 0, explanation: "Git is used to track and manage code changes." },
{ q: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], answer: 0, explanation: "MongoDB is a popular NoSQL database." },
{ q: "Which of the following is NOT part of the OSI model?", options: ["Application Layer", "Network Layer", "Data Link Layer", "Software Layer"], answer: 3, explanation: "Software Layer is not part of the OSI model." },
{ q: "Which of the following is used to detect viruses in a computer?", options: ["Antivirus", "Firewall", "Router", "Switch"], answer: 0, explanation: "Antivirus software detects and removes malicious software." },
{ q: "Which of the following is NOT a database type?", options: ["Relational", "Hierarchical", "Object-Oriented", "Executable"], answer: 3, explanation: "Executable is a file type, not a database type." },
{ q: "Which of the following is used to connect a computer to the Internet?", options: ["NIC", "Router", "Modem", "All of the above"], answer: 3, explanation: "All listed devices are used for Internet connectivity." },








],

"2018":[

    { q: "Full form of IP?", options: ["Internet Protocol", "Internal Protocol", "Internet Program", "Internal Program"], answer: 0, explanation: "IP stands for Internet Protocol." },
    { q: "Which is NOT an input device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 2, explanation: "Monitor is an output device, not input." },
    { q: "Which is scripting language?", options: ["Python", "C++", "Java", "HTML"], answer: 0, explanation: "Python is a scripting language." },
    { q: "Which is markup language?", options: ["HTML", "CSS", "Python", "Java"], answer: 0, explanation: "HTML is a markup language." },
    { q: "Which of the following is a volatile memory?", options: ["ROM", "RAM", "Flash", "Hard Disk"], answer: 1, explanation: "RAM is volatile and loses data when power is off." },
    { q: "Which of the following is used to uniquely identify a computer on a network?", options: ["IP Address", "MAC Address", "Subnet Mask", "Gateway"], answer: 0, explanation: "An IP Address uniquely identifies a device on a network." },
    { q: "Which of the following protocols is used for secure web browsing?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: 1, explanation: "HTTPS encrypts web traffic for secure communication." },
    { q: "Which of the following is a loop structure in programming?", options: ["if", "for", "switch", "break"], answer: 1, explanation: "The for loop is used for iterative execution." },
    { q: "Which of the following is used to connect multiple networks?", options: ["Hub", "Switch", "Router", "NIC"], answer: 2, explanation: "Routers connect multiple networks together." },
    { q: "Which of the following is NOT a type of software?", options: ["System Software", "Application Software", "Utility Software", "Hardware"], answer: 3, explanation: "Hardware is a physical component, not software." },
    { q: "Which of the following is used to manage database transactions?", options: ["DBMS", "Compiler", "Interpreter", "Assembler"], answer: 0, explanation: "DBMS manages database transactions and data integrity." },
    { q: "Which of the following is an example of a high-level programming language?", options: ["C", "Assembly", "Machine Code", "Binary"], answer: 0, explanation: "C is a high-level programming language." },
    { q: "Which of the following is used to represent data in binary form?", options: ["Bits", "Bytes", "Nibbles", "All of the above"], answer: 3, explanation: "Bits, bytes, and nibbles are all units of binary data." },
    { q: "Which of the following is used for wireless communication?", options: ["Ethernet", "Wi-Fi", "Fiber Optic", "Coaxial Cable"], answer: 1, explanation: "Wi-Fi is used for wireless communication." },
    { q: "Which of the following sorting algorithms has the best average-case performance?", options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"], answer: 1, explanation: "Quick Sort is efficient and has O(n log n) average-case performance." },
    { q: "Which of the following is a primary key constraint?", options: ["Ensures uniqueness", "Allows nulls", "Duplicate values allowed", "None of the above"], answer: 0, explanation: "A primary key ensures uniqueness and cannot be null." },
    { q: "Which of the following is NOT a type of cloud computing service?", options: ["IaaS", "PaaS", "SaaS", "CaaS"], answer: 3, explanation: "CaaS is not a main type of cloud computing service." },
    { q: "Which of the following is a protocol used to receive emails?", options: ["SMTP", "IMAP", "HTTP", "FTP"], answer: 1, explanation: "IMAP is used to retrieve emails from a server." },
    { q: "Which of the following is NOT a characteristic of a good algorithm?", options: ["Correctness", "Finiteness", "Efficiency", "Complexity"], answer: 3, explanation: "Complexity alone is not a required characteristic; good algorithms are correct, finite, and efficient." },
    { q: "Which of the following is a characteristic of a real-time system?", options: ["Delayed responses", "Predictable timing", "Slow execution", "Batch processing"], answer: 1, explanation: "Real-time systems have predictable and timely responses." },
    { q: "Which of the following is used to connect computers in a LAN?", options: ["Router", "Hub", "Switch", "Both Hub and Switch"], answer: 3, explanation: "Both hubs and switches can connect computers in a LAN." },
    { q: "Which of the following is used to store the BIOS settings?", options: ["RAM", "ROM", "CMOS", "Cache"], answer: 2, explanation: "CMOS stores BIOS settings and configuration." },
    { q: "Which of the following is true about IPv6?", options: ["32-bit address", "128-bit address", "64-bit address", "16-bit address"], answer: 1, explanation: "IPv6 uses 128-bit addresses for devices." },
    { q: "Which of the following is used to prevent data loss?", options: ["Firewall", "Backup", "Router", "Switch"], answer: 1, explanation: "Backups help prevent data loss in case of failure." },
    { q: "Which of the following is NOT a type of operating system?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Compiler OS"], answer: 3, explanation: "Compiler is not an operating system type." },
    { q: "Which of the following is used to execute JavaScript in the browser?", options: ["Node.js", "Browser Engine", "PHP", "MySQL"], answer: 1, explanation: "The browser engine executes JavaScript code." },
    { q: "Which of the following is NOT a type of computer network topology?", options: ["Star", "Ring", "Bus", "File"], answer: 3, explanation: "File is not a network topology." },
    { q: "Which of the following is used to handle exceptions in programming?", options: ["Try-Catch", "If-Else", "Switch-Case", "For Loop"], answer: 0, explanation: "Try-Catch blocks are used to handle exceptions." },
    { q: "Which of the following is NOT an input device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 2, explanation: "Monitor is an output device, not input." },
    { q: "Which of the following is a database management system?", options: ["Oracle", "Linux", "Python", "Java"], answer: 0, explanation: "Oracle is a popular DBMS software." },
    { q: "Which of the following is used to protect data from unauthorized access?", options: ["Encryption", "Decryption", "Compression", "Execution"], answer: 0, explanation: "Encryption secures data by making it unreadable without a key." },
    { q: "Which of the following is used for process scheduling in OS?", options: ["CPU", "Scheduler", "Memory", "Cache"], answer: 1, explanation: "The scheduler manages the execution of processes in an OS." },
    { q: "Which of the following is true about a semaphore in OS?", options: ["Used for synchronization", "Used for storage", "Used for networking", "Used for compilation"], answer: 0, explanation: "Semaphores are used to manage synchronization between processes." },
    { q: "Which of the following is a client-side scripting language?", options: ["PHP", "JavaScript", "Python", "Java"], answer: 1, explanation: "JavaScript runs on the client side in browsers." },
    { q: "Which of the following is NOT a type of machine learning?", options: ["Supervised", "Unsupervised", "Reinforcement", "Decompiled"], answer: 3, explanation: "Decompiled is unrelated to machine learning." },
    { q: "Which of the following is used to assign IP addresses dynamically?", options: ["DNS", "DHCP", "HTTP", "SMTP"], answer: 1, explanation: "DHCP dynamically assigns IP addresses to devices." },
    { q: "Which of the following is a protocol for transferring files?", options: ["FTP", "SMTP", "HTTP", "POP3"], answer: 0, explanation: "FTP is used to transfer files over networks." },
    { q: "Which of the following is true for a microprocessor?", options: ["Contains CPU", "Contains ALU", "Contains Registers", "All of the above"], answer: 3, explanation: "A microprocessor contains CPU components like ALU, CU, and Registers." },
    { q: "Which of the following is NOT a type of software testing?", options: ["Unit Testing", "Integration Testing", "System Testing", "CPU Testing"], answer: 3, explanation: "CPU Testing is hardware testing, not software testing." },
    { q: "Which of the following is a common database language?", options: ["SQL", "HTML", "CSS", "JavaScript"], answer: 0, explanation: "SQL is used to interact with databases." },
    { q: "Which of the following is NOT an OS command?", options: ["cd", "mkdir", "printf", "ls"], answer: 2, explanation: "printf is a programming language function, not an OS command." },
    { q: "Which of the following is used for web development backend?", options: ["PHP", "HTML", "CSS", "JavaScript Frontend"], answer: 0, explanation: "PHP is a server-side backend language." },
    { q: "Which of the following is used to compress files?", options: ["ZIP", "HTTP", "DNS", "SMTP"], answer: 0, explanation: "ZIP compresses files to save space." },
    { q: "Which of the following is a markup language?", options: ["HTML", "Python", "Java", "C++"], answer: 0, explanation: "HTML is used for defining web page structure." },
    { q: "Which of the following is used for version control?", options: ["Git", "Docker", "Linux", "MySQL"], answer: 0, explanation: "Git is used to track and manage code changes." },
    { q: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], answer: 0, explanation: "MongoDB is a popular NoSQL database." },
    { q: "Which of the following is NOT part of the OSI model?", options: ["Application Layer", "Network Layer", "Data Link Layer", "Software Layer"], answer: 3, explanation: "Software Layer is not part of the OSI model." },
    { q: "Which of the following is used to detect viruses in a computer?", options: ["Antivirus", "Firewall", "Router", "Switch"], answer: 0, explanation: "Antivirus software detects and removes malicious software." },
    { q: "Which of the following is NOT a database type?", options: ["Relational", "Hierarchical", "Object-Oriented", "Executable"], answer: 3, explanation: "Executable is a file type, not a database type." },
    { q: "Which of the following is used to connect a computer to the Internet?", options: ["NIC", "Router", "Modem", "All of the above"], answer: 3, explanation: "All listed devices are used for Internet connectivity." },





    { q: "Which of the following is used to secure wireless networks?", options: ["WEP", "WPA", "WPA2", "All of the above"], answer: 3, explanation: "All WEP, WPA, and WPA2 are security protocols for wireless networks." },
    { q: "Which of the following is NOT a type of database join?", options: ["INNER JOIN", "OUTER JOIN", "SIDE JOIN", "LEFT JOIN"], answer: 2, explanation: "SIDE JOIN does not exist; INNER, OUTER, LEFT, and RIGHT JOIN are valid." },
    { q: "Which of the following is used to store temporary data for fast access?", options: ["Cache", "ROM", "HDD", "DVD"], answer: 0, explanation: "Cache memory stores frequently accessed data for quick access." },
    { q: "Which of the following is a front-end framework?", options: ["React", "Laravel", "Django", "Flask"], answer: 0, explanation: "React is a JavaScript front-end library/framework." },
    { q: "Which of the following is used to check network connectivity?", options: ["ping", "tracert", "ipconfig", "All of the above"], answer: 3, explanation: "All listed commands are used for network diagnostics." },
    { q: "Which of the following is NOT an operating system?", options: ["Windows", "Linux", "Python", "macOS"], answer: 2, explanation: "Python is a programming language, not an OS." },
    { q: "Which of the following is used for sending emails?", options: ["SMTP", "IMAP", "POP3", "HTTP"], answer: 0, explanation: "SMTP is used to send emails to servers." },
    { q: "Which of the following is a dynamic data structure?", options: ["Array", "Linked List", "Stack (fixed)", "Queue (fixed)"], answer: 1, explanation: "Linked List can grow and shrink dynamically." },
    { q: "Which of the following is used to uniquely identify a mobile device?", options: ["IP Address", "IMEI Number", "MAC Address", "Hostname"], answer: 1, explanation: "IMEI number is a unique identifier for mobile devices." },
    { q: "Which of the following is NOT a Python data type?", options: ["List", "Tuple", "Map", "Set"], answer: 2, explanation: "Python uses dictionaries, not Map as a type." },
    { q: "Which of the following is used to define a function in Python?", options: ["func", "function", "def", "define"], answer: 2, explanation: "'def' keyword is used to define a function in Python." },
    { q: "Which of the following is NOT a relational database?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: 2, explanation: "MongoDB is a NoSQL database." },
    { q: "Which of the following is used to prevent cross-site scripting (XSS)?", options: ["Input Validation", "Encryption", "Firewall", "Caching"], answer: 0, explanation: "Input validation prevents malicious scripts from running." },
    { q: "Which of the following is NOT a type of HTTP request method?", options: ["GET", "POST", "UPDATE", "DELETE"], answer: 2, explanation: "UPDATE is not an HTTP method; PUT is used instead." },
    { q: "Which of the following is a backend framework?", options: ["Node.js", "React", "Vue", "Angular"], answer: 0, explanation: "Node.js is used for backend/server-side development." },
    { q: "Which of the following is used to store cookies in a browser?", options: ["LocalStorage", "SessionStorage", "Cookies API", "All of the above"], answer: 3, explanation: "All of these methods can store data in a browser." },
    { q: "Which of the following is NOT a programming paradigm?", options: ["Object-Oriented", "Procedural", "Functional", "Hypertext"], answer: 3, explanation: "Hypertext is used in HTML, not a programming paradigm." },
    { q: "Which of the following is a version control system?", options: ["Git", "Jenkins", "Docker", "Kubernetes"], answer: 0, explanation: "Git is used to manage code versions." },
    { q: "Which of the following is NOT a NoSQL database?", options: ["MongoDB", "Cassandra", "Oracle", "CouchDB"], answer: 2, explanation: "Oracle is a relational database." },
    { q: "Which of the following is a function of an operating system?", options: ["Memory Management", "Process Scheduling", "Device Management", "All of the above"], answer: 3, explanation: "Operating system handles all these functions." },
    { q: "Which of the following is NOT a type of computer network?", options: ["LAN", "WAN", "MAN", "CAN"], answer: 3, explanation: "CAN is Controller Area Network, not a general-purpose computer network type." },
    { q: "Which of the following is used to encrypt messages?", options: ["AES", "SHA", "MD5", "HTML"], answer: 0, explanation: "AES is a symmetric encryption algorithm." },
    { q: "Which of the following is a Python web framework?", options: ["Django", "Laravel", "Spring", "Express"], answer: 0, explanation: "Django is a Python-based web framework." },
    { q: "Which of the following is used to deploy containerized applications?", options: ["Docker", "Git", "Nginx", "Apache"], answer: 0, explanation: "Docker is used for deploying containerized apps." },
    { q: "Which of the following is used to resolve domain names to IP addresses?", options: ["DNS", "DHCP", "HTTP", "FTP"], answer: 0, explanation: "DNS resolves domain names to IPs." },
    { q: "Which of the following is NOT a cybersecurity threat?", options: ["Virus", "Trojan", "Firewall", "Phishing"], answer: 2, explanation: "Firewall is a defense mechanism, not a threat." },
    { q: "Which of the following is used to monitor network traffic?", options: ["Wireshark", "Chrome", "Firefox", "Node.js"], answer: 0, explanation: "Wireshark is a network protocol analyzer." },
    { q: "Which of the following is used for container orchestration?", options: ["Kubernetes", "Docker", "Git", "Jenkins"], answer: 0, explanation: "Kubernetes is used to manage multiple containers." },
    { q: "Which of the following is a data structure used for LIFO operations?", options: ["Queue", "Stack", "Linked List", "Tree"], answer: 1, explanation: "Stack follows Last-In-First-Out (LIFO) principle." },
    { q: "Which of the following is a data structure used for FIFO operations?", options: ["Stack", "Queue", "Linked List", "Graph"], answer: 1, explanation: "Queue follows First-In-First-Out (FIFO) principle." },
    { q: "Which of the following is NOT a JavaScript framework?", options: ["React", "Angular", "Vue", "Django"], answer: 3, explanation: "Django is a Python framework." },
    { q: "Which of the following is used to manage sessions in web applications?", options: ["Cookies", "LocalStorage", "SessionStorage", "All of the above"], answer: 3, explanation: "All these methods can be used to manage sessions." },
    { q: "Which of the following is a semantic HTML tag?", options: ["<header>", "<div>", "<span>", "<b>"], answer: 0, explanation: "<header> is a semantic tag used to define page header." },
    { q: "Which of the following is NOT a front-end technology?", options: ["HTML", "CSS", "JavaScript", "MySQL"], answer: 3, explanation: "MySQL is a database, not front-end technology." },
    { q: "Which of the following is used to run Java applications?", options: ["JVM", "JDK", "JRE", "All of the above"], answer: 3, explanation: "JDK, JRE, and JVM are all required for Java applications." },
    { q: "Which of the following is NOT an advantage of cloud computing?", options: ["Scalability", "Cost Efficiency", "High Availability", "Limited Access"], answer: 3, explanation: "Limited access is not an advantage; cloud computing allows wide access." },
    { q: "Which of the following is NOT a type of algorithm?", options: ["Greedy", "Divide and Conquer", "Linear", "TCP"], answer: 3, explanation: "TCP is a protocol, not an algorithm." },
    { q: "Which of the following is a function of DNS?", options: ["Translate IP to domain", "Translate domain to IP", "Route network packets", "All of the above"], answer: 1, explanation: "DNS primarily translates domain names to IP addresses." },
    { q: "Which of the following is used for continuous integration?", options: ["Jenkins", "Docker", "Git", "Kubernetes"], answer: 0, explanation: "Jenkins is used for continuous integration and automation." },
    { q: "Which of the following is NOT a storage device?", options: ["HDD", "SSD", "RAM", "CPU"], answer: 3, explanation: "CPU is a processor, not storage." },
    { q: "Which of the following is a markup language used for documents?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: 0, explanation: "HTML is used to structure web documents." },












]

};

let currentExam = [];
let currentIndex = 0;
let score = 0;

// Load selected exam
function loadExam(year) {
    currentExam = exams[year];
    currentIndex = 0;
    score = 0;
    document.getElementById('score-display').style.display = 'none';
    showQuestion();
}

// Display current question
function showQuestion() {
    if (currentIndex >= currentExam.length) {
        submitExam();
        return;
    }

    const qObj = currentExam[currentIndex];
    const questionText = document.getElementById('question-text');
    const optionsDiv = document.getElementById('options');
    const explanationDiv = document.getElementById('explanation');

    questionText.textContent = `Q${currentIndex + 1}. ${qObj.q}`;
    explanationDiv.style.display = 'none';
    explanationDiv.textContent = qObj.explanation;

    optionsDiv.innerHTML = '';
    qObj.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.onclick = () => checkAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

// Check selected answer
function checkAnswer(selected) {
    const qObj = currentExam[currentIndex];
    const optionBtns = document.querySelectorAll('.option-btn');
    
    optionBtns.forEach((btn, idx) => {
        if(idx === qObj.answer) btn.style.backgroundColor = '#4CAF50'; // correct green
        else if(idx === selected) btn.style.backgroundColor = '#F44336'; // wrong red
        btn.disabled = true;
    });

    // Show explanation
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.style.display = 'block';

    // Update score
    if(selected === qObj.answer) score++;
}

// Next question
function nextQuestion() {
    if(currentIndex < currentExam.length - 1){
        currentIndex++;
        showQuestion();
    }
}

// Previous question
function prevQuestion() {
    if(currentIndex > 0){
        currentIndex--;
        showQuestion();
    }
}

// Submit exam
function submitExam() {
    document.getElementById('question-text').textContent = `Exam Completed! Your score: ${score}/${currentExam.length}`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('score-display').style.display = 'block';
    document.getElementById('score-display').textContent = `You scored ${score} out of ${currentExam.length}`;
}
