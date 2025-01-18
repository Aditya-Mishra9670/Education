const courses = [
    {
      title: "Introduction to Web Development",
      thumbnail: "https://via.placeholder.com/150",
      description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
      language: "English",
      category: "Web Development",
      syllabus: [
        "HTML Basics",
        "CSS Styling",
        "Introduction to JavaScript",
        "Building a Responsive Webpage"
      ],
      level: "Beginner",
      rating: 4.8,
      teacherName: "Jane Doe"
    },
    {
      title: "Mastering Python for Data Science",
      thumbnail: "https://via.placeholder.com/150",
      description: "A comprehensive guide to using Python for data analysis and visualization.",
      language: "English",
      category: "Data Science",
      syllabus: [
        "Python Fundamentals",
        "Data Manipulation with Pandas",
        "Data Visualization with Matplotlib",
        "Machine Learning Basics"
      ],
      level: "Intermediate",
      rating: 4.7,
      teacherName: "John Smith"
    },
    {
      title: "Digital Marketing Strategies",
      thumbnail: "https://via.placeholder.com/150",
      description: "Learn effective digital marketing strategies to grow your business.",
      language: "English",
      category: "Marketing",
      syllabus: [
        "SEO Basics",
        "Content Marketing",
        "Social Media Advertising",
        "Google Ads Optimization"
      ],
      level: "Advanced",
      rating: 4.5,
      teacherName: "Sarah Johnson"
    },
    {
      title: "Graphic Design Essentials",
      thumbnail: "https://via.placeholder.com/150",
      description: "An introduction to graphic design principles and tools for creating stunning visuals.",
      language: "English",
      category: "Design",
      syllabus: [
        "Design Principles",
        "Introduction to Adobe Photoshop",
        "Typography Basics",
        "Creating Social Media Graphics"
      ],
      level: "Beginner",
      rating: 4.9,
      teacherName: "Emily Davis"
    },
    {
      title: "Mobile App Development with Flutter",
      thumbnail: "https://via.placeholder.com/150",
      description: "Build cross-platform mobile applications using Flutter and Dart.",
      language: "English",
      category: "App Development",
      syllabus: [
        "Flutter Setup and Basics",
        "Dart Programming",
        "Building UI Components",
        "Connecting to APIs"
      ],
      level: "Intermediate",
      rating: 4.6,
      teacherName: "Michael Brown"
    },
    {
      title: "Introduction to Machine Learning",
      thumbnail: "data:image/png;base64,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",
      description: "Explore the fundamentals of machine learning and build your first models.",
      language: "English",
      category: "Artificial Intelligence",
      syllabus: [
        "Understanding Machine Learning",
        "Supervised Learning Algorithms",
        "Unsupervised Learning Algorithms",
        "Model Evaluation"
      ],
      level: "Advanced",
      rating: 4.8,
      teacherName: "Laura Wilson"
    }
  ];

  
  export default courses