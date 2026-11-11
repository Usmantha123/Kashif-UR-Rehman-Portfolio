const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function generateResume() {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 36, bottom: 36, left: 40, right: 40 },
    info: {
      Title: 'Kashif Ur Rehman - Resume',
      Author: 'Kashif Ur Rehman',
      Subject: 'Full Stack Developer Resume',
      Keywords: 'Node.js, NestJS, React, Express, MongoDB, MySQL, Backend Developer',
    },
  });

  const outDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, 'resume.pdf');
  const writeStream = fs.createWriteStream(outPath);
  doc.pipe(writeStream);

  const colors = {
    primary: '#0f172a',    // Deep slate
    accent: '#059669',     // Emerald
    body: '#334155',       // Slate body
    muted: '#64748b',      // Cool slate
    border: '#cbd5e1',     // Light slate border
  };

  // Helper for Section Titles
  function drawSectionTitle(title) {
    doc.moveDown(0.6);
    const y = doc.y;
    // Left accent pill
    doc.rect(40, y + 2, 3, 11).fill(colors.accent);
    doc.fillColor(colors.primary)
       .font('Helvetica-Bold')
       .fontSize(10.5)
       .text(title.toUpperCase(), 48, y, { characterSpacing: 0.8 });
    
    // Bottom separator line
    const lineY = doc.y + 2;
    doc.strokeColor(colors.border)
       .lineWidth(0.5)
       .moveTo(40, lineY)
       .lineTo(555, lineY)
       .stroke();
    
    doc.moveDown(0.35);
  }

  // --- HEADER ---
  doc.fillColor(colors.primary)
     .font('Helvetica-Bold')
     .fontSize(22)
     .text('KASHIF UR REHMAN', { characterSpacing: 0.5 });

  doc.fillColor(colors.accent)
     .font('Helvetica-Bold')
     .fontSize(11)
     .text('Full Stack Developer');

  doc.moveDown(0.2);
  doc.fillColor(colors.muted)
     .font('Helvetica')
     .fontSize(8.8)
     .text('+92 302 9119254   |   kashifkhankk799872@gmail.com   |   Peshawar, Pakistan   |   ', { continued: true });
  
  doc.fillColor(colors.accent)
     .font('Helvetica-Bold')
     .text('LinkedIn Profile', {
       link: 'https://www.linkedin.com/in/kashif-rehman-39238b244/',
       underline: true,
     });

  doc.moveDown(0.2);
  doc.strokeColor(colors.accent)
     .lineWidth(1.5)
     .moveTo(40, doc.y)
     .lineTo(555, doc.y)
     .stroke();

  // --- PROFESSIONAL SUMMARY ---
  drawSectionTitle('Professional Summary');
  doc.fillColor(colors.body)
     .font('Helvetica')
     .fontSize(8.8)
     .text(
       'Full Stack Developer with 2.5+ years of professional experience building scalable, secure, and production-ready web applications across React, Node.js, Express.js, and NestJS. Skilled in designing both microservices and monolithic architectures, relational and NoSQL database design (MongoDB, MySQL), and cloud infrastructure (AWS, Azure, Google Cloud). Hands-on experience integrating payment gateways (Stripe, TESS Payment, CyberSource), AI-powered backend features, and third-party APIs. Delivered 10+ production projects spanning AI automation platforms, multi-role enterprise systems, and blockchain-enabled applications, with a strong focus on code quality, application security, and performance. Experienced with version control and CI/CD workflows across GitHub and Azure DevOps (ADO), and proactive in resolving vulnerabilities flagged by SonarQube and Mend Bolt to maintain secure, maintainable codebases.',
       { align: 'justify', lineGap: 2 }
     );

  // --- TECHNICAL SKILLS ---
  drawSectionTitle('Technical Skills');
  const skills = [
    { cat: 'Frontend:', val: 'React, JavaScript, TypeScript, HTML5, CSS3' },
    { cat: 'Backend:', val: 'Node.js, Express.js, NestJS, RESTful API Design' },
    { cat: 'Databases:', val: 'MongoDB (Mongoose), MySQL (Sequelize) — Schema Design, Query Optimization, Indexing' },
    { cat: 'Architecture:', val: 'Microservices, Monolithic Architecture, API Design Patterns' },
    { cat: 'Cloud & Storage:', val: 'AWS (S3, SES), Azure Blob Storage, Google Cloud Storage' },
    { cat: 'Payments:', val: 'Stripe, TESS Payment, CyberSource — Subscriptions, Transactions, Webhook Handling' },
    { cat: 'Security:', val: 'JWT Authentication, Authorization, RBAC, Password Hashing, API Security Best Practices' },
    { cat: 'Code Quality & DevOps:', val: 'Git, GitHub, Azure DevOps (ADO), SonarQube, Mend Bolt (Vulnerability Remediation), CI/CD' },
    { cat: 'Other Proficiencies:', val: 'AI Backend Integration, Email Services (SES/SMTP), Third-Party API Integration, Clean Code Practices, Performance Optimization, API Documentation' },
  ];

  skills.forEach(s => {
    const startY = doc.y;
    doc.fillColor(colors.primary)
       .font('Helvetica-Bold')
       .fontSize(8.6)
       .text(s.cat, 40, startY, { width: 130 });
    
    doc.fillColor(colors.body)
       .font('Helvetica')
       .fontSize(8.6)
       .text(s.val, 172, startY, { width: 383, lineGap: 1.5 });
    
    doc.moveDown(0.15);
  });

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionTitle('Professional Experience');
  
  // Job Header
  const expY = doc.y;
  doc.fillColor(colors.primary)
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text('Backend Developer', 40, expY, { continued: true });
  doc.fillColor(colors.accent)
     .text('   |   Veroke Pvt Ltd');

  doc.fillColor(colors.muted)
     .font('Helvetica-Bold')
     .fontSize(8.5)
     .text('October 2024 – Present', 400, expY, { align: 'right' });

  doc.moveDown(0.25);

  const expBullets = [
    'Design and develop scalable backend systems using Node.js, Express.js, and NestJS for production applications',
    'Architect complete backend solutions across microservices and monolithic architectures, ensuring high performance, reliability, and security',
    'Optimize RESTful APIs and database schemas using MongoDB and MySQL for scalability and efficiency',
    'Implement secure authentication, authorization, and role-based access control (RBAC)',
    'Integrate payment gateways including Stripe, TESS Payment, and CyberSource',
    'Work with cloud and storage services such as AWS S3, Azure Blob Storage, and Google Cloud Storage, as well as email delivery services (AWS SES)',
    'Develop AI-related backend features, including API integrations and data processing for AI services',
    'Manage source control and CI/CD workflows using GitHub and Azure DevOps (ADO)',
    'Identify and remediate code quality and security vulnerabilities flagged by SonarQube and Mend Bolt',
    'Collaborate with cross-functional teams to deliver maintainable, production-ready solutions',
  ];

  expBullets.forEach(b => {
    doc.fillColor(colors.accent).fontSize(7).text('•', 45, doc.y + 1, { width: 10, continued: true });
    doc.fillColor(colors.body).font('Helvetica').fontSize(8.5).text(`  ${b}`, 55, doc.y, { width: 500, lineGap: 1.2 });
    doc.moveDown(0.12);
  });

  // --- KEY PROJECTS ---
  drawSectionTitle('Key Projects');

  const projects = [
    {
      title: 'ViralFlicks',
      tagline: 'AI-Based Short Video Generation & Auto-Posting Platform',
      bullets: [
        'Designed and developed the complete backend system using Node.js with AI integrations',
        'Implemented automated short-video generation workflows and auto-posting to TikTok, YouTube, and email platforms',
        'Integrated Stripe subscription billing, including webhook handling for renewals and payment lifecycle management',
        'Built an Admin Panel using AdminJS for monitoring, analytics, and platform management',
        'Designed scalable MongoDB schemas to support high-volume content generation and user activity',
      ],
    },
    {
      title: 'Q Mobility',
      tagline: 'Rent-A-Car Platform (Qatar-Based Client)',
      bullets: [
        'Developed end-to-end backend architecture using Node.js and Express.js',
        'Implemented multi-role system (Admin, Fleet Manager, Driver, Customer)',
        'Built a complete vehicle booking and driver assignment system with availability management',
        'Integrated dual payment gateways (TESS Payment & CyberSource) for the Qatar market',
        'Designed optimized database structures for vehicles, drivers, customers, bookings, and fleet operations',
      ],
    },
    {
      title: 'Barzah',
      tagline: 'Property Investment & Purchase Platform (Qatar-Based Client)',
      bullets: [
        'Built the complete backend system using NestJS, MySQL, and Sequelize ORM',
        'Implemented blockchain integration for secure property transaction verification',
        'Developed property investment and purchase workflows with secure authentication and RBAC',
        'Designed RESTful APIs with strong validation, error handling, and performance optimization',
        'Followed enterprise-level architecture patterns for scalability and maintainability',
      ],
    },
    {
      title: 'Wareed Labs',
      tagline: 'Medical Lab Management System (3 Months)',
      bullets: [
        'Developed a complete promo code management system, including generation, validation, and email distribution',
        'Implemented notification systems for appointments, lab results, and user communications',
        'Built RESTful APIs using Node.js and Express.js with clean, maintainable backend code',
      ],
    },
  ];

  projects.forEach((p, idx) => {
    // Avoid awkward page breaks inside a project
    if (doc.y > 680 && idx > 0) {
      doc.addPage();
    }

    doc.fillColor(colors.primary)
       .font('Helvetica-Bold')
       .fontSize(9.2)
       .text(p.title, 40, doc.y, { continued: true });
    
    doc.fillColor(colors.accent)
       .font('Helvetica-Bold')
       .text(`  —  ${p.tagline}`);

    doc.moveDown(0.15);

    p.bullets.forEach(b => {
      doc.fillColor(colors.accent).fontSize(7).text('•', 45, doc.y + 1, { width: 10, continued: true });
      doc.fillColor(colors.body).font('Helvetica').fontSize(8.3).text(`  ${b}`, 55, doc.y, { width: 500, lineGap: 1 });
      doc.moveDown(0.1);
    });

    doc.moveDown(0.2);
  });

  // --- EDUCATION ---
  if (doc.y > 720) doc.addPage();
  drawSectionTitle('Education');
  const eduY = doc.y;
  doc.fillColor(colors.primary)
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text('Bachelor of Software Engineering', 40, eduY);
  
  doc.fillColor(colors.body)
     .font('Helvetica')
     .fontSize(8.8)
     .text('Islamia College and University, Peshawar, Pakistan', 40, doc.y + 1);

  doc.fillColor(colors.accent)
     .font('Helvetica-Bold')
     .fontSize(8.8)
     .text('2020 – 2024   |   CGPA: 3.40', 380, eduY, { align: 'right' });

  // End document
  doc.end();

  writeStream.on('finish', () => {
    console.log(`Successfully generated resume at: ${outPath} (${fs.statSync(outPath).size} bytes)`);
    // Also copy to dist/resume.pdf if dist exists
    const distPath = path.resolve(__dirname, '../dist/resume.pdf');
    if (fs.existsSync(path.dirname(distPath))) {
      fs.copyFileSync(outPath, distPath);
      console.log(`Copied to: ${distPath}`);
    }
  });
}

generateResume();
