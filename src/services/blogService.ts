import { BlogPost, BlogCategory } from '../types/blog';

// Mock data for demonstration
const mockBlogPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    slug: 'future-web-development-trends-2025',
    excerpt: 'Explore the cutting-edge technologies and methodologies that will shape web development in the coming year.',
    content: `
      <h2>Introduction</h2>
      <p>As we step into 2025, the web development landscape continues to evolve at an unprecedented pace. From AI-powered development tools to revolutionary frameworks, developers need to stay ahead of the curve to remain competitive.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how we write code. Tools like GitHub Copilot and ChatGPT are becoming integral parts of the development workflow, helping developers write better code faster.</p>
      
      <h2>2. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly is gaining traction as a way to run high-performance applications in the browser. Languages like Rust and C++ can now be compiled to run natively in web browsers.</p>
      
      <h2>3. Edge Computing Integration</h2>
      <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. Frameworks like Next.js and Nuxt.js are leading the charge in edge-first development.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends, developers can build better, faster, and more efficient applications.</p>
    `,
    author: {
      name: 'Alex Morgan',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    category: 'Web Development',
    tags: ['JavaScript', 'AI', 'WebAssembly', 'Edge Computing'],
    featuredImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    publishedAt: '2024-12-15T10:00:00Z',
    readTime: 8,
    isPublished: true,
    seo: {
      metaTitle: 'Future of Web Development: 2025 Trends | Codenix Labs',
      metaDescription: 'Discover the latest web development trends for 2025 including AI tools, WebAssembly, and edge computing.',
      keywords: ['web development', 'AI', 'WebAssembly', 'edge computing', '2025 trends']
    }
  },
  {
    _id: '2',
    title: 'Building Scalable Mobile Apps with React Native',
    slug: 'building-scalable-mobile-apps-react-native',
    excerpt: 'Learn best practices for creating maintainable and scalable mobile applications using React Native.',
    content: `
      <h2>Why React Native?</h2>
      <p>React Native has become the go-to framework for cross-platform mobile development. It allows developers to write once and deploy to both iOS and Android platforms.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Implementing proper architecture patterns is crucial for scalability. We'll explore Redux, Context API, and state management solutions.</p>
      
      <h2>Performance Optimization</h2>
      <p>Learn how to optimize your React Native apps for better performance, including lazy loading, image optimization, and memory management.</p>
      
      <h2>Testing Strategies</h2>
      <p>Comprehensive testing is essential for scalable apps. We'll cover unit testing, integration testing, and end-to-end testing approaches.</p>
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    category: 'Mobile Development',
    tags: ['React Native', 'Mobile', 'Scalability', 'Performance'],
    featuredImage: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    publishedAt: '2024-12-10T14:30:00Z',
    readTime: 12,
    isPublished: true,
    seo: {
      metaTitle: 'Scalable React Native Apps Guide | Codenix Labs',
      metaDescription: 'Complete guide to building scalable mobile apps with React Native. Best practices and optimization tips.',
      keywords: ['React Native', 'mobile development', 'scalability', 'performance optimization']
    }
  },
  {
    _id: '3',
    title: 'UI/UX Design Principles for Modern Web Applications',
    slug: 'ui-ux-design-principles-modern-web-apps',
    excerpt: 'Master the fundamental design principles that create exceptional user experiences in modern web applications.',
    content: `
      <h2>Understanding User-Centered Design</h2>
      <p>User-centered design puts the user at the heart of the design process. Every decision should be made with the user's needs and goals in mind.</p>
      
      <h2>Visual Hierarchy and Typography</h2>
      <p>Learn how to guide users through your interface using proper visual hierarchy, typography choices, and spacing.</p>
      
      <h2>Color Theory and Accessibility</h2>
      <p>Understanding color psychology and ensuring accessibility compliance are crucial for inclusive design.</p>
      
      <h2>Responsive Design Patterns</h2>
      <p>Explore modern responsive design patterns that work across all devices and screen sizes.</p>
    `,
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    category: 'Design',
    tags: ['UI/UX', 'Design', 'Accessibility', 'Responsive'],
    featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    publishedAt: '2024-12-05T09:15:00Z',
    readTime: 10,
    isPublished: true,
    seo: {
      metaTitle: 'UI/UX Design Principles Guide | Codenix Labs',
      metaDescription: 'Learn essential UI/UX design principles for creating exceptional user experiences in web applications.',
      keywords: ['UI/UX design', 'user experience', 'web design', 'accessibility']
    }
  },
  {
    _id: '4',
    title: 'Cloud Architecture Best Practices for Startups',
    slug: 'cloud-architecture-best-practices-startups',
    excerpt: 'Essential cloud architecture patterns and practices that help startups scale efficiently while managing costs.',
    content: `
      <h2>Starting with the Right Foundation</h2>
      <p>Choosing the right cloud architecture from the beginning can save startups significant time and money as they scale.</p>
      
      <h2>Microservices vs Monolith</h2>
      <p>Understanding when to use microservices architecture and when a monolithic approach might be better for your startup.</p>
      
      <h2>Cost Optimization Strategies</h2>
      <p>Learn how to optimize cloud costs without sacrificing performance or reliability.</p>
      
      <h2>Security and Compliance</h2>
      <p>Implementing security best practices from day one to protect your application and user data.</p>
    `,
    author: {
      name: 'Emma Johnson',
      avatar: 'https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    category: 'Cloud Computing',
    tags: ['Cloud', 'Architecture', 'Startups', 'AWS', 'Scalability'],
    featuredImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    publishedAt: '2024-11-28T16:45:00Z',
    readTime: 15,
    isPublished: true,
    seo: {
      metaTitle: 'Cloud Architecture for Startups | Codenix Labs',
      metaDescription: 'Best practices for cloud architecture that help startups scale efficiently while managing costs.',
      keywords: ['cloud architecture', 'startups', 'scalability', 'AWS', 'microservices']
    }
  },
  {
    _id: '5',
    title: 'The Rise of AI in Software Development',
    slug: 'rise-of-ai-software-development',
    excerpt: 'How artificial intelligence is transforming the software development lifecycle and what it means for developers.',
    content: `
      <h2>AI-Powered Code Generation</h2>
      <p>Tools like GitHub Copilot and ChatGPT are changing how developers write code, making them more productive and efficient.</p>
      
      <h2>Automated Testing and QA</h2>
      <p>AI is revolutionizing software testing by automatically generating test cases and identifying potential bugs.</p>
      
      <h2>Code Review and Optimization</h2>
      <p>Machine learning algorithms can now review code for best practices, security vulnerabilities, and performance issues.</p>
      
      <h2>The Future of Development</h2>
      <p>What does the future hold for developers in an AI-driven world? Exploring new roles and opportunities.</p>
    `,
    author: {
      name: 'Alex Morgan',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    category: 'Artificial Intelligence',
    tags: ['AI', 'Machine Learning', 'Development Tools', 'Automation'],
    featuredImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    publishedAt: '2024-11-20T11:20:00Z',
    readTime: 7,
    isPublished: true,
    seo: {
      metaTitle: 'AI in Software Development | Codenix Labs',
      metaDescription: 'Discover how AI is transforming software development and what it means for the future of coding.',
      keywords: ['AI', 'software development', 'machine learning', 'automation', 'coding tools']
    }
  },
  {
    _id: '6',
    title: 'Cybersecurity Essentials for Web Applications',
    slug: 'cybersecurity-essentials-web-applications',
    excerpt: 'Protect your web applications from common security threats with these essential cybersecurity practices.',
    content: `
      <h2>Common Web Vulnerabilities</h2>
      <p>Understanding the OWASP Top 10 vulnerabilities and how to prevent them in your applications.</p>
      
      <h2>Authentication and Authorization</h2>
      <p>Implementing secure authentication systems and proper authorization controls.</p>
      
      <h2>Data Protection and Privacy</h2>
      <p>Best practices for protecting user data and ensuring compliance with privacy regulations.</p>
      
      <h2>Security Testing and Monitoring</h2>
      <p>Tools and techniques for continuous security testing and monitoring of your applications.</p>
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    category: 'Security',
    tags: ['Cybersecurity', 'Web Security', 'OWASP', 'Data Protection'],
    featuredImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    publishedAt: '2024-11-15T13:10:00Z',
    readTime: 11,
    isPublished: true,
    seo: {
      metaTitle: 'Web Application Security Guide | Codenix Labs',
      metaDescription: 'Essential cybersecurity practices to protect your web applications from common threats.',
      keywords: ['cybersecurity', 'web security', 'OWASP', 'data protection', 'authentication']
    }
  }
];

const mockCategories: BlogCategory[] = [
  { _id: '1', name: 'Web Development', slug: 'web-development', description: 'Latest trends and tutorials in web development', color: '#8948FF' },
  { _id: '2', name: 'Mobile Development', slug: 'mobile-development', description: 'Mobile app development guides and best practices', color: '#48A9FF' },
  { _id: '3', name: 'Design', slug: 'design', description: 'UI/UX design principles and inspiration', color: '#00F5D4' },
  { _id: '4', name: 'Cloud Computing', slug: 'cloud-computing', description: 'Cloud architecture and deployment strategies', color: '#00E676' },
  { _id: '5', name: 'Artificial Intelligence', slug: 'artificial-intelligence', description: 'AI and machine learning in software development', color: '#FFD600' },
  { _id: '6', name: 'Security', slug: 'security', description: 'Cybersecurity best practices and guides', color: '#FF5252' }
];

export class BlogService {
  static async getAllPosts(filters?: {
    category?: string;
    search?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ posts: BlogPost[]; total: number }> {
    let filteredPosts = [...mockBlogPosts];

    if (filters?.category && filters.category !== 'all') {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === filters.category?.toLowerCase()
      );
    }

    if (filters?.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    const total = filteredPosts.length;
    const offset = filters?.offset || 0;
    const limit = filters?.limit || 10;
    
    const posts = filteredPosts
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(offset, offset + limit);

    return { posts, total };
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return mockBlogPosts.find(post => post.slug === slug) || null;
  }

  static async getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
    return mockBlogPosts
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit);
  }

  static async getRelatedPosts(postId: string, limit: number = 3): Promise<BlogPost[]> {
    const currentPost = mockBlogPosts.find(post => post._id === postId);
    if (!currentPost) return [];

    return mockBlogPosts
      .filter(post => 
        post._id !== postId && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .slice(0, limit);
  }

  static async getAllCategories(): Promise<BlogCategory[]> {
    return mockCategories;
  }

  static async createPost(postData: Omit<BlogPost, '_id'>): Promise<BlogPost> {
    const newPost: BlogPost = {
      ...postData,
      _id: Date.now().toString(),
    };
    mockBlogPosts.unshift(newPost);
    return newPost;
  }

  static async updatePost(id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
    const index = mockBlogPosts.findIndex(post => post._id === id);
    if (index === -1) return null;

    mockBlogPosts[index] = { ...mockBlogPosts[index], ...postData };
    return mockBlogPosts[index];
  }

  static async deletePost(id: string): Promise<boolean> {
    const index = mockBlogPosts.findIndex(post => post._id === id);
    if (index === -1) return false;

    mockBlogPosts.splice(index, 1);
    return true;
  }
}