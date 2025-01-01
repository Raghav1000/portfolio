export const careerData = {
  bitontree: {
    companyName: "Bitontree Solutions",
    duration: "1 year",
    timePeriod: "20th Aug 2022 - 15th Sept 2023",
    companyWebsite: "https://bitontree.com",
    projects: [
      {
        role: "Frontend Developer",
        techStack: ["Next JS", "Nest JS", "MUI", "Prisma ORM", "MySQL"],
        product: "ERP - Entriprise software development",
        description:
          "The project revolved around the business model centered on aluminumrods and sections, covering various stages from raw materials to product creation and inventory management. Managed both raw aluminum rods/sections and finished products.Supported different coatings, each associated with specific colors. Applied coatings and colors to raw products and calculated pricing based on combinations.Enabled job work processes to transform raw products into orderedproducts. Facilitated job work for creating finished products for direct salesor purchase orders. Tracked the status of products within the job.Monitored purchase orders from initiation to transit.Generated invoices after the purchase order had been dispatched.Managed inventories of various products, ensuring accurate stock levels.Handled the disposal of leftover lengths from specific raw products.",
      },
      {
        role: "Fullstack Developer",
        techStack: ["Next JS", "Nest JS", "Tailwind", "Firebase", "MongoDB"],
        product: "CitizenU - Social Media Application",
        description:
          "Utilized Firebase for real-time one-on-one chat functionality. Cloud Firestore stored messages, last sent message, read/unread status, and unread message counters. Created, sent, scheduled, saved as drafts, and highlighted posts. Stored posts in a MongoDB database with all associated data. Integrated image posting (images saved in AWS S3, accessible through cloudFront CDN, with links stored in MongoDB). Implemented a cron job feature for post scheduling. Utilized Nest.js to develop CRUD functionality for posts, likes, comments, saved posts, and shared posts. Sent notifications for activities such as likes, shares, comments, or follows. Integrated Firebase Cloud Store for real-time notifications.",
      },
      {
        role: "Frontend Developer",
        techStack: ["Next JS", "Tailwind", "Prismic"],
        product: "Bitontree technologies",
        description:
          "Complex UI elements and integration of Prismic CMS with Next JS. UI extensive project. SEO optimisation. Performance optimisation.",
      },
      {
        role: "Fullstack Developer",
        techStack: ["React JS", "Node JS", "MySQL"],
        product: "World Sports Action - Sports Tournaments",
        description:
          "Australian sports tournament management organisation application - The project was based on organising tournaments of three major games (netball, football, basketball )across Australia. The application consisted of registration forms for tournaments , in game statistics, league rankings. Payment integration for registering in events. Different registration process for teams, coaches, players.They were also shifting their business model to USA, So we integrated form addresses ,api filters to segregate the application for two different regions Australia and USA. The application was already completely build, Our task was to solve bugs and to integrate minor functionalities that they were introducing on the fly",
      },
      {
        role: "Frontend Developer",
        techStack: ["Three JS", "React Three Fiber"],
        product: "Interior Design Interface",
        description:
          "We created a demo project called Tile Viewerin which the business modelrequired a website showcasing 3D models of various rooms in a house, such as the living room, bedroom, kitchen, and bathroom. Our task was to replace the 3D model tiles with the provided tile images The demo was well capable enough to change the tiles, add pattern using two tiles, add grouting to tiles, changing the sizes of the tile. To achieve this, we substituted the 3D model tiles and floor meshes with the tile image by creating a texture of the image and evenly repeating it across the mesh. For tasks like adding grout, scaling, and implementing patterns, we had to write OpenGL code.",
      },
    ],
  },
  protocolzone: {
    companyName: "ProtocolZone Private Limited",
    duration: "1 year 6 months",
    timePeriod: "27th Oct 2024 - 10 April 2025",
    companyWebsite: "https://www.protocolzone.com/",
    projects: [
      {
        role: "Full stack Developer",
        techStack: [
          "Vite",
          "Nest JS",
          "Firebase",
          "GCP",
          "Docker",
          "Kubernetes",
          "Cassandra",
        ],
        product: "Ashva CRM",
        description:
          "The project is a Customer Relationship Management (CRM) system that utilizes Firebase and Google Cloud Platform (GCP) to manage multiple tenants. Each tenant represents a different product or service offering with configuration changes. The system allows for extensive customisation of tenant settings, including: Language preferences, Currency options, Live video configurations ,Payment settings, Country-specific details. The CRM manages customer data for each tenant, including: Statistical information, Analytics on user behavior, Betting history (specifically for horse racing), Race observation patterns, Preferred betting tracks. The application provides a high-level management interface that allows administrators to oversee and control all aspects of the multi-tenant system, including tenant configurations and customer data. It also manages Theme config, Layout Config and UI config. Consisting all the information related to that particular tenant.",
      },
      {
        role: "Frontend Developer",
        techStack: ["Vite", "Antd", "SASS", "Firebase"],
        product: "Insight reconciliation",
        description:
          "Dashboard and reporting of betting results for guests. Management of hierarchical mapping between Host Management, Guest Management, and Settling Entities. Integrated race day calendar for proper mapping of these associations, rectifying errors if any, recalculating relationships and betting results (considering taxes and charges). Ability to generate daily reports from the race day calendar. If reports contain errors, users can identify and edit mistakes, then recalculate the process to obtain accurate reports. Management of fee profiles for settling entities and host management, which are factored into the final calculation of reports.",
      },
      {
        role: "Frontend Developer",
        techStack: ["Vite", "Antd", "SASS", "Firebase"],
        product: "Flux Reporting",
        description:
          "Customizable UI for PDF generation and printing, allowing admins to tailor report layouts. Advanced column features including multi-column math evaluation, text alignment, draggable sorting, and show/hide options. Flexible formatting with multi-date formats and value-based CSS changes. 10+ static PDF layouts utilizing heavy JavaScript for data aggregation and manipulation. Future aspects were to add security, watermarking and multi language support",
      },
    ],
  },
};
