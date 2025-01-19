const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Complete the report",
        description: "Prepare and submit the monthly progress report.",
        date: "2024-11-16",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix the login issue",
        description: "Resolve the bug causing login errors.",
        date: "2024-11-17",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare budget analysis",
        description: "Analyze and summarize department expenses.",
        date: "2024-11-18",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design a new feature",
        description: "Create wireframes for the upcoming feature release.",
        date: "2024-11-16",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test payment integration",
        description: "Ensure that the payment gateway works seamlessly.",
        date: "2024-11-17",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update user guide",
        description: "Revise the user manual with the latest feature details.",
        date: "2024-11-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize database queries",
        description: "Improve the efficiency of existing SQL queries.",
        date: "2024-11-16",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Conduct code review",
        description: "Review pull requests submitted by team members.",
        date: "2024-11-17",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare quarterly roadmap",
        description: "Plan projects and deliverables for the next quarter.",
        date: "2024-11-18",
        category: "Planning",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Draft policy updates",
        description: "Propose updates to company policies.",
        date: "2024-11-16",
        category: "Policy",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Organize a team meeting",
        description: "Schedule and plan agenda for the team meeting.",
        date: "2024-11-17",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Deploy new app version",
        description: "Roll out the latest app version to production.",
        date: "2024-11-18",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare training materials",
        description:
          "Create presentations and documents for training sessions.",
        date: "2024-11-16",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Analyze system performance",
        description: "Run tests and analyze server performance data.",
        date: "2024-11-17",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Improve website SEO",
        description: "Optimize website for better search engine ranking.",
        date: "2024-11-18",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

export default employees;

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
